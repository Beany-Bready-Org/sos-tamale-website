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
		success: null,
	});
	const [loading, setLoading] = useState(false);

	// Set up navigator
	const navigate = useNavigate();

	// Token
	let tokenObject = {
		accessToken,
	};

	// Helper function
	const showResponse = (message = "", success = false, interval = 0) => {
		if (message && success) {
			return setResponseStatus({ message: "", success: null });
		}
		return setInterval(() => {
			setResponseStatus((prev) => {
				return { ...prev, message: message, success: success };
			});
		}, interval);
	};

	const handleAccessTokenValidation = async (event) => {
		event.preventDefault();
		setLoading(false);
		showResponse("", false, 0);

		// Guard clause
		if (!accessToken) {
			showResponse("Provide an access token", false, 1500);
			return;
		}

		// Options for API request
		const postOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tokenObject),
		};
		try {
			setLoading(true);
			let response = await fetch(
				"http://localhost:5001/api/admin/validate-token",
				postOptions
			);

			if (!response.ok) {
				return showResponse(response.message, response.success, 1500);
			}

			// Show success message on UI
			accessBoxRef.current.close()
			showResponse(response.message, response.success, 1500);
			// Navigate to register page on success
			navigate("/register");
		} catch (error) {
			console.log(error);
			showResponse(error.message, error.success, 1500);
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
			event.clientX < modalDimensions.left ||
			event.clientX > modalDimensions.right ||
			event.clientX > modalDimensions.bottom ||
			event.clientX < modalDimensions.top
		) {
			modal?.close();
		}
	}

	return (
		<dialog
			ref={accessBoxRef}
			className="access-box"
			onClick={(e) => {
				closeModal(e.target, e);
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
			<form className="access-token-box" onSubmit={handleAccessTokenValidation}>
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
