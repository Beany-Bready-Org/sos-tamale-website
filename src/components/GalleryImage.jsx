import "../stylesheets/GalleryImage.scss"

export default function GalleryImage({imgSrc}) {


  return (
    <div className="gallery__images__image">
        <img src={imgSrc} alt="" />
    </div>
  );
}
