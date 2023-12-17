import React from "react";
import GalleryImage from "./GalleryImage";

const GallerySection = () => {
	return (
		<>
        <h1 className="--header" style={{marginTop: "2em"}}>Our Memories</h1>
			<div className="gallery__scroller">
				<ul className="gallery__scroller-inner" id="forwards">
					<GalleryImage />
				</ul>
				<ul className="gallery__scroller-inner" id="backwards">
					<GalleryImage/>
				</ul>
			</div>
            
		</>
	);
};

export default GallerySection;
