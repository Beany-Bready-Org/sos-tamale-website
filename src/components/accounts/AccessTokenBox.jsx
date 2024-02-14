import React, { useRef, useState } from "react";
import AccessBoxProvider, {
	useAccessBox,
} from "../../contexts/AccessBoxContext";
import "../../stylesheets/AccessTokenBox.scss";
import { useNavigate } from "react-router-dom";

// Access Box for admin access
const AccessTokenBox = () => {
	const { showAccessBox, setShowAccessBox } = useAccessBox();
	const accessBoxRef = useRef();
	const [accessToken, setAccessToken] = useState("");
	const [responseStatus, setResponseStatus] = useState({
		message: "",
		success: false,
	});
	const [loading, setLoading] = useState(false);
	// const [fieldActive, setFieldActive] = useState(false)

	// Set up navigator
	const navigate = useNavigate();

	// Token
	let tokenObject = {
		accessToken,
	};

	// Helper function
	const showResponse = (message = "", success = Boolean(), interval = 1500) => {
		if (message) {
			setResponseStatus((prev) => {
				return { ...prev, message, success };
			});
		}

		const timeout = setTimeout(() => {
			setResponseStatus({ message: "", success: false });
		}, interval);
		return () => clearTimeout(timeout);
	};

	// Actual API call implementation
	const handleAccessTokenValidation = async (event) => {
		event.preventDefault();
		setLoading(false);
		// showResponse("", false, 0);

		// Guard clause
		if (accessToken === "") {
			return showResponse("Token missing, provide token.", false, 1500);
		}

		console.log(responseStatus.message);

		// Options for API request
		const postOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tokenObject),
		};

		// Try API call
		try {
			setLoading(true);
			let response = await fetch(
				"http://localhost:5001/api/admin/validate-token",
				postOptions
			);

			if (!response.ok) {
				throw new Error(`An error occured: ${response.statusText}`);
			}

			// Show success message on UI
			showResponse("Token verified", true, 1500);
			// Close access box if token verified
			accessBoxRef.current.close();
			// Navigate to register page on success
			navigate("/register");
		} catch (error) {
			console.log(error);
			showResponse(error.message + ", try again.", false, 1500);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	if (showAccessBox) {
		accessBoxRef.current.showModal();
	}

	// Close access box when outside clicked
	function closeModal(modal, event) {
		const modalDimensions = modal.getBoundingClientRect();
		if (
			event.clientY < modalDimensions.top ||
			event.clientY > modalDimensions.bottom ||
			event.clientX < modalDimensions.left ||
			event.clientX > modalDimensions.right
		) {
			modal.close();
		}
	}

	return (
		<dialog
			ref={accessBoxRef}
			className="access-box"
			onClick={(event) => {
				closeModal(event.target, event);
				setShowAccessBox(false);
			}}
		>
			{/* Show response status */}
			{responseStatus.message && (
				<p
					className={
						responseStatus.success
							? "status-message success"
							: "status-message error"
					}
				>
					{responseStatus.message}
				</p>
			)}
			{/* JSX */}
			<h2 className="--header-small">Enter Access Token</h2>
			<p>You need to provide an access token to register as admin</p>
			<form
				className="access-token-box"
				onSubmit={(event) => handleAccessTokenValidation(event)}
			>
				<input
					type="text"
					name="accessToken"
					id="accessToken"
					placeholder="Enter valid access token..."
					onChange={(e) => setAccessToken(e.target.value)}
				/>
				<button className={`--cta ${loading && "disabled"}`} disabled={loading}>
					{loading ? "Verifying..." : "Verify"}
				</button>
			</form>
		</dialog>
	);
};

export default AccessTokenBox;
