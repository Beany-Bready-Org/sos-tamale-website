import ContactForm from "../components/contact/ContactForm";
import emailjs from "@emailjs/browser";
import { fireEvent, waitFor } from "@testing-library/react";
import { vi, afterEach, expect, describe, test } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom/matchers";

// Mock emailjs module setup
vi.mock("@emailjs/browser", () => ({
  __esModule: true, // Marks this as an ES module
  default: {
    sendForm: vi.fn(),
  },
  sendForm: vi.fn(), // Named export
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
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
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
    emailjs.sendForm.mockResolvedValueOnce();
    // const sendFormSpy = vi.spyOn(emailjs, "sendForm").mockResolvedValue();

    // Simulate button clicked
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    // Simulate sending request
    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
      expect(
        screen.getByText("Thank You For Reaching Out!")
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
    emailjs.sendForm.mockRejectedValueOnce(new Error("Submission failed!"));

    // Simulate button clicked
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Submission failed!")).toBeInTheDocument();
    });
  });
});
