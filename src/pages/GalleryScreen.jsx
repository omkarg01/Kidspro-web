import PageTitle from "../components/PageTitle";

const Gallery = () => {
  return (
    <>
      {/* <!-- Section: page title --> */}
      <PageTitle title={"Gallery"} />

      {/* <!-- Our Gallery --> */}
      <section>
        <div className="container pb-70">
          <div class="section-title">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-9">
                <div class="tm-sc-section-title section-title text-center">
                  <div class="title-wrapper">
                    <h2 class="title">
                      Our <span class="text-theme-colored3">Gallery</span>
                    </h2>
                    <p>
                      Step into the heartwarming moments and vibrant experiences
                      captured in the CandiBrain Preschool gallery. Our gallery
                      is a visual journey showcasing the joy, curiosity, and
                      growth of our little learners. It's a testament to the
                      lively community we've built, where every snapshot tells a
                      story of exploration, creativity, and the bonds formed in
                      our nurturing environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-sm-12">
                <div className="tm-sc-gallery tm-sc-gallery-grid gallery-style1-basic">
                  {/* <!-- Isotope Filter --> */}
                  <div
                    className="isotope-layout-filter filter-style-3 text-center cat-filter-theme-colored1"
                    data-link-with="gallery-holder-743344"
                  >
                    <a href="#" className="active" data-filter="*">
                      All
                    </a>
                    <a
                      href="#laboratory"
                      className=""
                      data-filter=".laboratory"
                    >
                      Infra
                    </a>
                    <a href="#surgery" className="" data-filter=".surgery">
                      Activities
                    </a>
                    <a
                      href="#orthopaedics"
                      className=""
                      data-filter=".orthopaedics"
                    >
                      Outdoor
                    </a>
                    <a
                      href="#orthopaedics"
                      className=""
                      data-filter=".orthopaedics"
                    >
                      Celebrations
                    </a>
                  </div>
                  {/* <!-- End Isotope Filter --> */}
                  {/* <!-- Isotope Gallery Grid --> */}
                  <div
                    id="gallery-holder-743344"
                    className="isotope-layout grid-3 gutter-10 clearfix lightgallery-lightbox"
                  >
                    <div className="isotope-layout-inner">
                      {/* <!-- the loop --> */}
                      {/* <!-- Isotope Item Start --> */}
                      <div className="isotope-item laboratory surgery">
                        <div className="isotope-item-inner">
                          <div className="tm-gallery">
                            <div className="tm-gallery-inner">
                              <div className="thumb">
                                <a href="#">
                                  <img
                                    src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/1.jpg"
                                    className=""
                                    alt="images"
                                  />
                                </a>
                              </div>
                              <div className="tm-gallery-content-wrapper">
                                <div className="tm-gallery-content">
                                  <div className="tm-gallery-content-inner">
                                    <div className="icons-holder-inner">
                                      <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                        <a
                                          className="lightgallery-trigger styled-icons-item"
                                          data-exthumbimage="images/shop/portfolio-sq2.jpg"
                                          title="photo"
                                          href="images/shop/portfolio-sq2.jpg"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Isotope Item End --> */}

                      {/* <!-- Isotope Item Start --> */}
                      <div className="isotope-item surgery orthopaedics">
                        <div className="isotope-item-inner">
                          <div className="tm-gallery">
                            <div className="tm-gallery-inner">
                              <div className="thumb">
                                <a href="#">
                                  <img
                                    src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/2.jpg"
                                    className=""
                                    alt="images"
                                  />
                                </a>
                              </div>
                              <div className="tm-gallery-content-wrapper">
                                <div className="tm-gallery-content">
                                  <div className="tm-gallery-content-inner">
                                    <div className="icons-holder-inner">
                                      <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                        <a
                                          className="lightgallery-trigger styled-icons-item"
                                          data-exthumbimage="images/shop/portfolio-sq1.jpg"
                                          title="photo"
                                          href="images/shop/portfolio-sq1.jpg"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Isotope Item End --> */}

                      {/* <!-- Isotope Item Start --> */}
                      <div className="isotope-item laboratory surgery">
                        <div className="isotope-item-inner">
                          <div className="tm-gallery">
                            <div className="tm-gallery-inner">
                              <div className="thumb">
                                <a href="#">
                                  <img
                                    src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/3.jpg"
                                    className=""
                                    alt="images"
                                  />
                                </a>
                              </div>
                              <div className="tm-gallery-content-wrapper">
                                <div className="tm-gallery-content">
                                  <div className="tm-gallery-content-inner">
                                    <div className="icons-holder-inner">
                                      <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                        <a
                                          className="lightgallery-trigger styled-icons-item"
                                          data-exthumbimage="images/shop/portfolio-sq3.jpg"
                                          title="photo"
                                          href="images/shop/portfolio-sq3.jpg"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Isotope Item End --> */}

                      {/* <!-- Isotope Item Start --> */}
                      <div className="isotope-item laboratory surgery">
                        <div className="isotope-item-inner">
                          <div className="tm-gallery">
                            <div className="tm-gallery-inner">
                              <div className="thumb">
                                <a href="#">
                                  <img
                                    src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/4.jpg"
                                    className=""
                                    alt="images"
                                  />
                                </a>
                              </div>
                              <div className="tm-gallery-content-wrapper">
                                <div className="tm-gallery-content">
                                  <div className="tm-gallery-content-inner">
                                    <div className="icons-holder-inner">
                                      <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                        <a
                                          className="lightgallery-trigger styled-icons-item"
                                          data-exthumbimage="images/shop/portfolio-sq1.jpg"
                                          title="photo"
                                          href="images/shop/portfolio-sq1.jpg"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Isotope Item End --> */}

                      {/* <!-- Isotope Item Start --> */}
                      <div className="isotope-item laboratory surgery">
                        <div className="isotope-item-inner">
                          <div className="tm-gallery">
                            <div className="tm-gallery-inner">
                              <div className="thumb">
                                <a href="#">
                                  <img
                                    src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/5.jpg"
                                    className=""
                                    alt="images"
                                  />
                                </a>
                              </div>
                              <div className="tm-gallery-content-wrapper">
                                <div className="tm-gallery-content">
                                  <div className="tm-gallery-content-inner">
                                    <div className="icons-holder-inner">
                                      <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                        <a
                                          className="lightgallery-trigger styled-icons-item"
                                          data-exthumbimage="images/shop/portfolio-sq3.jpg"
                                          title="photo"
                                          href="images/shop/portfolio-sq3.jpg"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Isotope Item End --> */}

                      {/* <!-- Isotope Item Start --> */}
                      <div className="isotope-item laboratory surgery">
                        <div className="isotope-item-inner">
                          <div className="tm-gallery">
                            <div className="tm-gallery-inner">
                              <div className="thumb">
                                <a href="#">
                                  <img
                                    src="https://html.kodesolution.com/2017/kidspro-html-b5/images/gallery/6.jpg"
                                    className=""
                                    alt="images"
                                  />
                                </a>
                              </div>
                              <div className="tm-gallery-content-wrapper">
                                <div className="tm-gallery-content">
                                  <div className="tm-gallery-content-inner">
                                    <div className="icons-holder-inner">
                                      <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                        <a
                                          className="lightgallery-trigger styled-icons-item"
                                          data-exthumbimage="images/shop/portfolio-sq1.jpg"
                                          title="photo"
                                          href="images/shop/portfolio-sq1.jpg"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Isotope Item End --> */}
                      {/* <!-- end of the loop --> */}
                    </div>
                  </div>
                  {/* <!-- End Isotope Gallery Grid --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
