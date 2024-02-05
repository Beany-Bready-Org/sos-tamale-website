import React, { useRef, useState } from "react";
import NavContextProvider, { useAccessBox } from "../../contexts/NavContext";

const AccessTokenBox = () => {
	const { showAccessBox } = useAccessBox();
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
		<NavContextProvider>
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
		</NavContextProvider>
	);
};

export default AccessTokenBox;
