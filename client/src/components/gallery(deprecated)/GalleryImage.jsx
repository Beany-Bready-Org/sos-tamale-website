import React from "react";
import galleryImages from "./galleryImages";

const GalleryImage = () => {
	galleryImages.imageArray.forEach((img, arr) => {

	})

	function randomize(arr) {
		for (let i = 0; i < arr.length; i++) {
			
		}
	}

    return galleryImages.imageArray.map((image) => {
      return (
        <li key={image} className="gallery__scroller-inner-item">
          <img src={image} alt="" />
        </li>
      );
    });

};

export default GalleryImage;
