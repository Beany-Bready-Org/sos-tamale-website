import "../stylesheets/GallerySectionImage.scss";

export default function GallerySectionImage({ imgSrc, alt }) {
  return (
    <div className="gallery-section__images__image" key={alt}>
      <img src={imgSrc} alt={alt} />
    </div>
  );
}
