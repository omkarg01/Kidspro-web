import React from "react";

const GalleryCard = ({data}) => {
  return (
    <div className={`isotope-item ${data?.type}`}>
      <div className="isotope-item-inner">
        <div className="tm-gallery">
          <div className="tm-gallery-inner">
            <div className="thumb">
              <a>
                <img src={data.image} className="" alt="images" />
              </a>
            </div>
            {/* <div className="tm-gallery-content-wrapper">
              <div className="tm-gallery-content">
                <div className="tm-gallery-content-inner">
                  <div className="icons-holder-inner">
                    <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                      <a
                        className="lightgallery-trigger styled-icons-item"
                        data-exthumbimage={data.image}
                        title="photo"
                        href={data.image}
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="title-holder">
                    <h5 className="title">
                      <a href="#">Demo Gallery 1</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
