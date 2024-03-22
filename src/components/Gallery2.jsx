import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Gallery2({ images }) {
  const [show, setShow] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = (e, src, title) => {
    console.log("src", src);
    console.log("type", title);
    e.preventDefault();
    setUrlImage(src);
    setImageTitle(title);
    //console.log(src);
    setShow(true);
  };

  const handleFilter = (e, filter) => {
    e.preventDefault();
    console.log("hello...");

    if (filter == "*") {
      setFilteredImages(images);
    } else {
      // Filter images based on the type
      const filteredImages = images.filter((img) => img.type === filter);
      console.log("filter", filteredImages);
      // Update state with filtered images
      setFilteredImages(filteredImages);
    }
  };

  useEffect(() => {
    setFilteredImages(images);
  }, [images]);

  return (
    <>
      <div
        className="isotope-layout-filter filter-style-3 text-center cat-filter-theme-colored1 mt-50"
        data-link-with="gallery-holder-743344"
      >
        <Link
          className="active"
          //   data-filter="*"
          onClick={(e) => handleFilter(e, "*")}
        >
          All
        </Link>
        <Link
          onClick={(e) => handleFilter(e, "infra")}
          // href="#laboratory"
          className=""
          data-filter=".others"
        >
          Infra
        </Link>
        <Link
          onClick={(e) => handleFilter(e, "fun-activity")}
          // href="#surgery"
          className=""
          data-filter=".fun-activity"
        >
          Activities
        </Link>
        <Link
          onClick={(e) => handleFilter(e, "sports")}
          // href="#orthopaedics"
          className=""
          data-filter=".sports"
        >
          Outdoor
        </Link>
        <Link
          onClick={(e) => handleFilter(e, "dance")}
          // href="#orthopaedics"
          className=""
          data-filter=".dance"
        >
          Dance
        </Link>
        <Link
          // href="#orthopaedics"
          onClick={(e) => handleFilter(e, "music")}
          className=""
          data-filter=".music"
        >
          Music
        </Link>
      </div>
      <div className="content mb-100">
        {filteredImages.length == 0 ? (
          <div style={{ textAlign: "center", marginInline: "auto" }}>
            <h1>No Images to show! </h1>
          </div>
        ) : (
          filteredImages.map((img, i) => (
            <div key={i} className="img-box">
              <a
                href={img.image}
                onClick={(e) => handleShow(e, img.image, img.type)}
              >
                {/* <img alt="sample text" {...img} /> */}
                <img alt="sample text" src={img.image} />
              </a>
            </div>
          ))
        )}
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {imgTitle
              ? imgTitle[0].toUpperCase() + imgTitle.substring(1)
              : imgTitle}
          </Modal.Title>
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
