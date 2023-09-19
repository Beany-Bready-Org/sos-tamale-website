// import { useRef } from "react";
// import "../stylesheets/GallerySectionImage.scss";

// export default function GallerySectionImage({ imgSrc, alt }) {
//   let imgContainerRef = useRef()
//   let imgRef = useRef()

//   function loaded() {
//     imgContainerRef.current.classList.add("loaded");
//   }

//   if (imgRef.current.complete) {
//     loaded();
//   } else {
//     imgRef.current.addEventListener("load", loaded);
//   }

//   return (
//     <div className="gallery-section__images__image" key={alt} ref={imgContainerRef}>
//       <img src={imgSrc} alt={alt} loading="lazy" ref={imgRef}/>
//     </div>
//   );
// }

import { useRef, useEffect } from "react";
import "../stylesheets/GallerySectionImage.scss";

export default function GallerySectionImage({ imgSrc, alt }) {
  const imgContainerRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const loadImage = () => {
      imgContainerRef.current.classList.add("loaded");
    };

    if (imgRef.current && imgRef.current.complete) {
      loadImage();
    } else if (imgRef.current) {
      imgRef.current.addEventListener("load", loadImage);
    }

    return () => {
      if (imgRef.current) {
        imgRef.current.removeEventListener("load", loadImage);
      }
    };
  }, [imgSrc]);

  return (
    <div className="gallery-section__images__image" key={alt} ref={imgContainerRef}>
      <img src={imgSrc} alt={alt} loading="lazy" ref={imgRef} />
    </div>
  );
}
