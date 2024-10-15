import GallerySection from "../GallerySection";
import Footer from "../Footer";

import "../../stylesheets/Gallery.scss";

export default function Gallery() {
  return (
    <>
      <main className="gallery">
        <GallerySection size={8} />
      </main>
      {/* <Footer /> */}
    </>
  );
}
