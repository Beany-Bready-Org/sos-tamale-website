import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import GallerySectionImage from "./GallerySectionImage";
import "../stylesheets/GallerySection.scss";

// Dynamically import all gallery images
const galleryImagesPaths = import.meta.glob('../assets/images/gallery-images/*.png');

export default function GallerySection({ size }) {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    async function loadGalleryImages(size) {
      const images = await Promise.all(
        Object.keys(galleryImagesPaths)
          .slice(0, 32 - size)
          .map(async (path, index) => {
            const imgSrc = (await galleryImagesPaths[path]()).default;
            return (
              <GallerySectionImage
                key={index}
                imgSrc={imgSrc}
                alt={`Image ${index + 1}`}
                onError={(e) => (e.target.src = "fallback-image-path.png")}
              />
            );
          })
      );
      setGalleryImages(images);
    }

    loadGalleryImages(size);
  }, [size]);

  return (
    <section className="gallery-section">
      <h2 className="gallery-section__header">SOS Tamale Gallery</h2>
      <div className="gallery-section__images">{galleryImages}</div>
      <NavLink to="/gallery" className="--cta" id="see-more-btn">
        See more
      </NavLink>
    </section>
  );
}
