import GalleryImage from "./GalleryImage";

import "../stylesheets/Gallery.scss";

import Img1 from "../assets/images/gallery-images/gallery-img1.jpeg";
import Img2 from "../assets/images/gallery-images/gallery-img2.jpeg";
import Img3 from "../assets/images/gallery-images/gallery-img3.jpeg";
import Img4 from "../assets/images/gallery-images/gallery-img4.jpeg";
import Img5 from "../assets/images/gallery-images/gallery-img5.jpeg";
import Img6 from "../assets/images/gallery-images/gallery-img6.jpeg";
import Img7 from "../assets/images/gallery-images/gallery-img7.jpeg";
import Img8 from "../assets/images/gallery-images/gallery-img8.jpeg";
import Img9 from "../assets/images/gallery-images/gallery-img9.jpeg";
import Img10 from "../assets/images/gallery-images/gallery-img10.jpeg";
import Img11 from "../assets/images/gallery-images/gallery-img11.jpeg";
import Img12 from "../assets/images/gallery-images/gallery-img12.jpeg";

let images = [
  <GalleryImage imgSrc={Img1} />,
  <GalleryImage imgSrc={Img2} />,
  <GalleryImage imgSrc={Img3} />,
  <GalleryImage imgSrc={Img4} />,
  <GalleryImage imgSrc={Img5} />,
  <GalleryImage imgSrc={Img6} />,
  <GalleryImage imgSrc={Img7} />,
  <GalleryImage imgSrc={Img8} />,
  <GalleryImage imgSrc={Img9} />,
  <GalleryImage imgSrc={Img10} />,
  <GalleryImage imgSrc={Img11} />,
  <GalleryImage imgSrc={Img12} />,
];

export default function Gallery() {
  return (
    <section className="gallery">
    <h2 className="--header" style={{marginBottom: "0.75em", color: 'black'}}>SOS HGS Moments</h2>
      <div className="gallery__images">{images}</div>
    </section>
  );
}
