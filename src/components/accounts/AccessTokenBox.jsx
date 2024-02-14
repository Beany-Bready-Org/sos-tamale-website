import React, { useRef, useState } from "react";
import AccessBoxProvider, {
	useAccessBox,
} from "../../contexts/AccessBoxContext";
import "../../stylesheets/AccessTokenBox.scss";

// Access Box for admin access
const AccessTokenBox = () => {
	const { showAccessBox, setShowAccessBox } = useAccessBox();
	const accessBoxRef = useRef();
	const [accessToken, setAccessToken] = useState("");

	// Token
	let tokenObject = {
		accessToken,
	};

	const handleAccessTokenValidation = async () => {
		const postOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tokenObject),
		};
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
			modal.close();
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
			<h2 className="--header-small">Enter Access Token</h2>
			<p>You need to provide an access token to register as admin</p>
			<form className="access-token-box" onSubmit={handleAccessTokenValidation}>
				<input
					type="text"
					name="accessToken"
					id="accessToken"
					className="--input"
					placeholder="Enter valid access token..."
					onChange={(e) => setAccessToken(e.target.value)}
				/>
				<button className="--cta">Verify</button>
			</form>
		</dialog>
	);
};

export default AccessTokenBox;
