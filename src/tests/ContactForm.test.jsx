import ContactForm from "../components/contact/ContactForm";
import emailjs from "@emailjs/browser";
import { fireEvent, waitFor, screen, render } from "@testing-library/react";
import { vi, afterEach, expect, describe, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom/matchers";

// Mock emailjs module setup
vi.mock("@emailjs/browser", () => ({
  __esModule: true, // Marks this as an ES module
  default: {
    send: vi.fn(),
  },
  send: vi.fn(), // Named export
}));

describe("ContactForm", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  //   Component rendering test
  test("should render the contact form correctly", () => {
    render(<ContactForm />);

    // Header should be present
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    // Name input box should be present
    expect(
      screen.getByPlaceholderText("Type your full name here")
    ).toBeInTheDocument();
    // Email input box should be in the document
    expect(
      screen.getByPlaceholderText("Type your email here")
    ).toBeInTheDocument();
    // subject input box should be present
    expect(
      screen.getByPlaceholderText("Type your subject here")
    ).toBeInTheDocument();
    // Expect textarea to be in the document
    expect(
      screen.getByPlaceholderText("Type your message here...")
    ).toBeInTheDocument();
    // Expect the button to be in the document
    expect(screen.getByTestId("limiter"));
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  // Message test
  test("should prevent user from typing anymore message in textarea when max exceeded", () => {
    render(<ContactForm />);
    let textLength = 0;
    const maxMessageLength = 249;
    let text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, eum fugiat amet iusto libero molestias explicabo? Suscipit voluptatibus similique rem numquam reiciendis, et atque dolore placeat illo quas nihil, possimus dignissimos mollitia, ullam itaque alias hic! Temporibus modi debitis incidunt velit at aliquam deleniti dolores! Odio sunt voluptate minima vero laboriosam doloribus voluptatem, pariatur quae omnis nisi. Ut molestiae ex minus esse beatae vel quaerat animi eveniet culpa excepturi officia dicta ullam exercitationem aliquid veniam eos, perferendis quibusdam odio assumenda odit cupiditate obcaecati. Repellat repudiandae molestiae vel laudantium error ipsam expedita recusandae nesciunt commodi. Veritatis voluptate officia autem et sequi mollitia, neque libero rem impedit maxime quam velit temporibus perferendis ullam sapiente corrupti quasi laudantium inventore voluptatibus, fuga, ipsum error earum! Vitae necessitatibus est soluta consectetur autem nam facere sapiente deserunt quisquam et dicta, voluptatibus, iure nihil! Eum quae nisi harum quo aspernatur voluptas autem? Libero sint enim iste deserunt sed delectus inventore suscipit iure porro accusantium debitis voluptate aliquam quae sunt veniam non illum esse, facilis eos totam repudiandae voluptatum voluptatibus vero quo. Vero autem sed illo rerum, quaerat maxime? Sed et illo, itaque sunt reprehenderit enim adipisci voluptates incidunt autem ex accusantium, consequuntur quae quasi laudantium aliquid voluptatum tenetur architecto officiis nisi, rem maiores! Neque officia sit unde id hic harum blanditiis quis repudiandae deleniti quam! Odio nemo culpa, veniam nulla dolore consequuntur eveniet aspernatur tempore molestias tenetur veritatis alias natus voluptatem incidunt magni rerum voluptate ratione quos maxime iure quam nesciunt temporibus quaerat. Facilis voluptas cupiditate maiores doloribus corporis temporibus nihil beatae corrupti officiis. Eaque debitis possimus voluptatem. Distinctio dignissimos deleniti ab tenetur ad? Fugiat sint ut labore vitae, est ex. Doloribus nemo totam dolor nihil! Dicta adipisci minus, consectetur incidunt animi vero ab quisquam exercitationem at maiores quod nihil obcaecati necessitatibus atque repellat qui! Aperiam, exercitationem minima? Quod quo tenetur eaque neque earum aut quae debitis distinctio? Rem minima magnam, maiores, a esse reprehenderit itaque ratione nemo et cupiditate, molestias perspiciatis quam ad placeat ullam laudantium! Eligendi culpa a consequatur! Alias harum amet, esse repellendus explicabo ea vitae aliquam. Vel unde molestias inventore, nisi ea ipsum quos facere suscipit non odit! Ipsam deleniti ut commodi, laboriosam, distinctio quas pariatur maxime odit in dicta dolorem delectus labore sapiente assumenda aut quia corporis vitae beatae ea explicabo repellendus! Quaerat hic quis harum voluptates cum ea, quos tempore corporis. Aperiam aliquid exercitationem dolore nam unde ipsam fugit quam corporis.`;

    let messageTextLengthDisplay = screen.getByTestId("limiter");
    let textareaElement = screen.getByPlaceholderText(
      "Type your message here..."
    );

    expect(messageTextLengthDisplay).toBeInTheDocument();

    fireEvent.change(textareaElement, {
      target: { value: text },
    });
    textLength = textareaElement.value.length;

    expect(textLength).not.toEqual(maxMessageLength);

    fireEvent.change(textareaElement, {
      target: { value: text.slice(0, 250) },
    });
    textLength = textareaElement.value.length;

    expect(textLength).toEqual(maxMessageLength);
  });

  //   Error message test
  test("should show an error message when user submits an empty form", async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(
        screen.getByText(
          "All fields are mandatory, please fill out all fields and try again."
        )
      ).toBeInTheDocument();
    });
  });

  //   Successful form submission test
  test("should submit form successfully when all fields are filled", async () => {
    render(<ContactForm />);

    // Name input must be filled
    fireEvent.change(screen.getByPlaceholderText("Type your full name here"), {
      target: { value: "John Doe" },
    });

    // Email input must be filled
    fireEvent.change(screen.getByPlaceholderText("Type your email here"), {
      target: { value: "ameyaw@test.com" },
    });

    // Subject input must be filled
    fireEvent.change(screen.getByPlaceholderText("Type your subject here"), {
      target: { value: "Some random subject" },
    });

    // Message input must be filled
    fireEvent.change(screen.getByPlaceholderText("Type your message here..."), {
      target: { value: "This is a test message" },
    });

    // Mock the sendForm to resolve (must be called in order to actually mock the sending)
    emailjs.send.mockResolvedValueOnce();
    // const sendFormSpy = vi.spyOn(emailjs, "sendForm").mockResolvedValue();

    // Simulate button clicked
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    // Simulate sending request
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1);
      expect(
        screen.getByText((content, element) =>
          content.includes("Thank You For Reaching Out!")
        )
      ).toBeInTheDocument();
    });
  });

  // Unsuccessful form submission test
  test("should show an error message when form not submitted successfully", async () => {
    render(<ContactForm />);

    // Name input must be filled
    fireEvent.change(screen.getByPlaceholderText("Type your full name here"), {
      target: { value: "John Doe" },
    });

    // Email input must be filled
    fireEvent.change(screen.getByPlaceholderText("Type your email here"), {
      target: { value: "ameyaw@test.com" },
    });

    // Subject input must be filled
    fireEvent.change(screen.getByPlaceholderText("Type your subject here"), {
      target: { value: "Some random subject" },
    });
    // Message input must be filled
    fireEvent.change(screen.getByPlaceholderText("Type your message here..."), {
      target: { value: "Some very nice message" },
    });

    // Mock error from sending of email
    emailjs.send.mockRejectedValueOnce(new Error("Submission failed!"));

    // Simulate button click
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Submission failed!")).toBeInTheDocument();
    });
  });
});
