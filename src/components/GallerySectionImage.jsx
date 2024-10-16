import { useRef, useEffect, useState } from "react";
import "../stylesheets/GallerySectionImage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faClose } from "@fortawesome/free-solid-svg-icons";

export default function GallerySectionImage({ imgSrc, alt }) {
  const imgContainerRef = useRef();
  const [currentImageSrc, setCurrentImageSrc] = useState("");
  const [error, setError] = useState("");
  const imgRef = useRef();
  const modalRef = useRef();
  const closeButtonRef = useRef();

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

  // function grabImageURL() {
  //   const imageElemet = document.querySelector("[data-gallery-image]");
  //   console.log(imageElemet);
  // }

  function openModal() {
    modalRef.current.showModal();
  }

  function closeModal(modal, event) {
    const modalDimensions = modal.getBoundingClientRect();
    if (
      event.clientX < modalDimensions.left ||
      event.clientX > modalDimensions.right ||
      event.clientX > modalDimensions.bottom ||
      event.clientX < modalDimensions.top
    ) {
      modal?.close();
    }
  }

  function closeModalBtnCall() {
    if (modalRef.current.open) {
      modalRef.current?.close();
    }
  }

  return (
    <div
      className="gallery-section__images__image"
      key={alt}
      ref={imgContainerRef}
    >
      {/* <dialog ref={modalRef} onClick={(e) => closeModal()}> */}
      <dialog ref={modalRef} onClick={(e) => closeModal(e.target, e)}>
        <button
          className="close-btn"
          onClick={closeModalBtnCall}
          title="Close Image modal"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div>
          <img src={imgSrc} alt={alt} />
        </div>
      </dialog>
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        data-gallery-image
        ref={imgRef}
        title={alt}
      />
      <div className="gallery-section__images__imagge-action">
        <button className="image-button --cta" onClick={openModal}>
          <FontAwesomeIcon icon={faEye} /> View
        </button>
      </div>
    </div>
  );
}
