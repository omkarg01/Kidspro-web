import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Gallery2({ images }) {
  const [show, setShow] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (e, src, title) => {
    console.log("src", src);
    e.preventDefault();
    setUrlImage(src);
    setImageTitle(title);
    //console.log(src);
    setShow(true);
  };

  return (
    <>
      <div className="content">
        {images.map((img, i) => (
          <div key={i} className="img-box">
            <a href={img.image} onClick={e => handleShow(e, img.image, img.type)}>
              {/* <img alt="sample text" {...img} /> */}
              <img alt="sample text" src={img.image} />
            </a>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{imgTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={urlImage} alt={imgTitle} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Gallery2;
