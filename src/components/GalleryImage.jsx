import "../stylesheets/GalleryImage.scss";

export default function GalleryImage({ imgSrc, alt }) {
  return (
    <div className="gallery__images__image" key={alt}>
      <img src={imgSrc} alt={alt} />
    </div>
  );
}
