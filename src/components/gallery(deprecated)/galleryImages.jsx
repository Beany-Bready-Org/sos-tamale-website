const galleryImages = import.meta.glob(
  "../../assets/images/gallery-images/*.png"
);

const imageArray = [...galleryImages];

export default { imageArray };
