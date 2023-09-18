import GalleryImage from "./GalleryImage";

import "../stylesheets/Gallery.scss";

let galleryImages = [];

for (let i = 1; i <= 20; i++) {
  import(`../assets/images/gallery-images/gallery-img${i}.png`)
  /* @vite-ignore */
    .then((image) => {
      galleryImages.push(
        <GalleryImage
          imgSrc={image.default}
          alt={`Gallery Image ${i + 1}`}
        />
      );
    })
    .catch((error) => console.error(error));
}

export default function Gallery() {
  return (
    <section className="gallery">
      <h2
        className="--header"
        style={{ marginBottom: "0.75em", color: "black" }}
      >
        SOS HGS Moments
      </h2>
      <div className="gallery__images">{galleryImages}</div>
    </section>
  );
}
