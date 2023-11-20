import React from "react";
import galleryImages from "./galleryImages";


const GalleryImage = () => {
   
	return galleryImages.imageArray.map((image) => {
		return (
			<li key={image} className="gallery__scroller-inner-item">
				<img src={image} alt="" />
			</li>
		);
	});
};

export default GalleryImage;
