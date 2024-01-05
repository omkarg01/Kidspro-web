import React from "react";

const GalleryCard = ({data}) => {
  return (
    <div class={`isotope-item others sports dance`}>
      <div class="isotope-item-inner">
        <div class="tm-gallery">
          <div class="tm-gallery-inner">
            <div class="thumb">
              <a>
                <img src={data.image} class="" alt="images" />
              </a>
            </div>
            <div class="tm-gallery-content-wrapper">
              <div class="tm-gallery-content">
                <div class="tm-gallery-content-inner">
                  <div class="icons-holder-inner">
                    <div class="styled-icons icon-dark icon-circled icon-theme-colored1">
                      <a
                        class="lightgallery-trigger styled-icons-item"
                        data-exthumbimage={data.image}
                        title="photo"
                        href={data.image}
                      >
                        <i class="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div class="title-holder">
                    <h5 class="title">
                      <a href="#">Demo Gallery 1</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
