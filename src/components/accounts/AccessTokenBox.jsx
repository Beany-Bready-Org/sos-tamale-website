import React, { useRef, useState } from "react";
import AccessBoxProvider, {
	useAccessBox,
} from "../../contexts/AccessBoxContext";

// Access Box for admin access
const AccessTokenBox = () => {
	const { showAccessBox, setShowAccessBox } = useAccessBox();
	const accessBoxRef = useRef();
	const [accessToken, setAccessToken] = useState("");
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

	return (
		<AccessBoxProvider>
			<dialog ref={accessBoxRef}>
				{
					!showAccessBox ? alert("yeah") : "" // accessBoxRef.current.showModal();
				}
				<h2>Enter Access Token</h2>
				<p>You need to provide an access token to register as admin</p>
				<form
					className="access-token-box"
					onSubmit={handleAccessTokenValidation}
				>
					<input
						type="text"
						name="accessToken"
						id="accessToken"
						onChange={(e) => setAccessToken(e.target.value)}
					/>
					<button className="--cta">Verify</button>
				</form>
			</dialog>
		</AccessBoxProvider>
	);
};

export default AccessTokenBox;
