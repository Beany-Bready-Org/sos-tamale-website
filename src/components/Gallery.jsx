import GalleryImage from "./GalleryImage";

import "../stylesheets/Gallery.scss";

import Img1 from "../assets/images/bg-img1.jpg";
import Img2 from "../assets/images/bg-img2.jpg";
import Img3 from "../assets/images/bg-img3.jpg";
import Img4 from "../assets/images/bg-img4.jpg";

let images = [
  <GalleryImage imgSrc={Img1}/>,
  <GalleryImage imgSrc={Img3}/>,
  <GalleryImage imgSrc={Img2}/>,
  <GalleryImage imgSrc={Img4}/>,
  <GalleryImage imgSrc={Img3}/>,
  <GalleryImage imgSrc={Img2}/>,
  <GalleryImage imgSrc={Img4}/>,
  <GalleryImage imgSrc={Img1}/>,
  <GalleryImage imgSrc={Img2}/>,
  <GalleryImage imgSrc={Img1}/>,
  <GalleryImage imgSrc={Img3}/>,
  <GalleryImage imgSrc={Img4}/>,
];

export default function Gallery() {
  return (
    <section className="gallery">
      <h2 className="section-header">
        SOS HGS Moments
      </h2>
      <div className="gallery__images">
        {/* <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img4} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img1} alt="" /> */}
        {images}
      </div>
    </section>
  );
}
