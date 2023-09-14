import "../stylesheets/GalleryImage.scss";

export default function GalleryImage({ imgSrc }) {
  return (
    <div className="gallery__images__image" key={imgSrc}>
      <img src={imgSrc} alt="" />
    </div>
  );
}
