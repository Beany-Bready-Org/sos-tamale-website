import { useRef, useState } from "react";
import "../../stylesheets/ContactForm.scss";
import ContactInput from "./ContactInput";
import emailjs from "@emailjs/browser";
// import { Alert } from "react-bootstrap";

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	// Input Refs
	const fullNameRef = useRef();
	const emailRef = useRef();
	const subjectRef = useRef();
	const messageRef = useRef();

	// Form Ref
	const formRef = useRef();

	// Custom messages
	const showMessageForSomeTime = (errorMessage, successMessage, duration) => {
		setErrorMessage(errorMessage);
		setSuccessMessage(successMessage);

		setTimeout(() => {
			setErrorMessage("");
			setSuccessMessage("");
		}, duration);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const templateId = "template_zlkgrnn";
		const serviceId = "HxfJG_ab_z5fbm2qm";
		const publicKey = "service_k9t86zv";

		const formData = {
			from_name: fullNameRef.current.value,
			from_email: emailRef.current.value,
			from_subject: subjectRef.current.value,
			message: messageRef.current.value,
		};

		if (
			!formData.from_name ||
			!formData.from_email ||
			!formData.from_subject ||
			!formData.message
		) {
			showMessageForSomeTime("Cannot submit an empty form", "", 2000);
			setLoading(false);
			return;
		}

		try {
			setLoading(true);
			await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
			showMessageForSomeTime("", "Thank You For Reaching Out!", 2000);
			formRef.current.reset();
		} catch (error) {
			showMessageForSomeTime(error, "", 2000);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
			{errorMessage || successMessage ? (
				<p className={errorMessage ? "error" : "success"}>
					{errorMessage ? errorMessage : successMessage}
				</p>
			) : null}
			<h1 className="--header" style={{ color: "black" }}>
				Contact Us
			</h1>
			<ContactInput
				type={"text"}
				placeholder={"Type your full name here"}
				id={"name"}
				name="from_name"
				inputRef={fullNameRef}
			/>
			<ContactInput
				type={"email"}
				placeholder={"Type your email here"}
				id={"email"}
				name="from_email"
				inputRef={emailRef}
			/>
			<ContactInput
				type={"text"}
				placeholder={"Type your subject here"}
				id={"subject"}
				name="from_subject"
				inputRef={subjectRef}
			/>
			<ContactInput
				type={"textarea"}
				placeholder={"Type your message here..."}
				id={"message"}
				name="message"
				inputRef={messageRef}
			/>
			<ContactInput
				type={"submit"}
				placeholder={loading ? "Submitting..." : "Submit"}
				id={"button"}
				loading={loading}
			/>
		</form>
	);
}
