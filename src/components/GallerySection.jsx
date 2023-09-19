import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import GallerySectionImage from "./GallerySectionImage";

import "../stylesheets/GallerySection.scss";

// for (let i = 1; i <= 20; i++) {
//   import(`../assets/images/gallery-images/gallery-img${i}.png`)
//   /* @vite-ignore */
//     .then((image) => {
//       galleryImages.push(
//         <GalleryImage
//           imgSrc={image.default}
//           alt={`Gallery Image ${i + 1}`}
//         />
//       );
//     })
//     .catch((error) => console.error(error));
// }

export default function GallerySection({ number }) {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    async function importImages(number) {
      const images = [];
      for (let i = 1; i <= number; i++) {
        try {
          const image = await import(
            `../assets/images/gallery-images/gallery-img${i}.png`
          );
          images.push(
            <GallerySectionImage
              key={`gallery-img${i}`}
              imgSrc={image.default}
              alt={`Gallery Image ${i}`}
            />
          );
        } catch (error) {
          console.error(error);
        }
      }
      setGalleryImages(images);
    }
    importImages(number);
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="--header" style={{ color: "black" }}>
        SOS HGS Moments
      </h2>
      <div className="gallery-section__images">{galleryImages}</div>
      <NavLink to="/gallery" className="--cta">
        See more
      </NavLink>
    </section>
  );
}
