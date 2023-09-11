import "../stylesheets/Gallery.scss";

import Img1 from "../assets/images/bg-img1.jpg";
import Img2 from "../assets/images/bg-img2.jpg";
import Img3 from "../assets/images/bg-img3.jpg";
import Img4 from "../assets/images/bg-img4.jpg";

export default function Gallery() {
  // let images = [];
  // for (let i = 0; i < 10; i++) {
  //   images.push(<GalleryImage />);
  // }
  const imageNames = [];
  for (let i = 0; i < 4; i++) {
    imageNames.push(`bg-img${i + 1}`);
  }

  console.log(imageNames);
  return (
    <section className="gallery">
      <div className="gallery__images">
        <img src={Img1} alt="" />
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
        <img src={Img1} alt="" />
      </div>
    </section>
  );
}
