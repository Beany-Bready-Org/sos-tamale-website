import { useRef, useEffect } from "react";
import "../stylesheets/GallerySectionImage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function GallerySectionImage({ imgSrc, alt }) {
	const imgContainerRef = useRef();
	const imgRef = useRef();

	useEffect(() => {
		const loadImage = () => {
			imgContainerRef.current.classList.add("loaded");
		};

		if (imgRef.current && imgRef.current.complete) {
			loadImage();
		} else if (imgRef.current) {
			imgRef.current.addEventListener("load", loadImage);
		}

		return () => {
			if (imgRef.current) {
				imgRef.current.removeEventListener("load", loadImage);
			}
		};
	}, [imgSrc]);

	return (
		<div
			className="gallery-section__images__image"
			key={alt}
			ref={imgContainerRef}
		>
			<img src={imgSrc} alt={alt} loading="lazy" ref={imgRef} title={alt} />
			<div className="gallery-section__images__imagge-action">
				<button className="image-button --cta">
					<FontAwesomeIcon icon={faEye} /> View
				</button>
			</div>
		</div>
	);
}
