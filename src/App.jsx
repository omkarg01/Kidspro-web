import "./App.css";

function App() {
  return (
    <>
      <div id="wrapper" className="clearfix">
        {/* <!-- Header --> */}
        <header id="header" className="header header-layout-type-header-2rows">
          <div className="header-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-auto header-top-left align-self-center text-center text-xl-start">
                  <ul className="element contact-info">
                    <li className="contact-phone">
                      <i className="fa fa-phone font-icon sm-display-block"></i>{" "}
                      Tel: +440-98-5298
                    </li>
                    <li className="contact-email">
                      <i className="fa fa-envelope font-icon sm-display-block"></i>{" "}
                      info@example.com
                    </li>
                    <li className="contact-address">
                      <i className="fa fa-map font-icon sm-display-block"></i>{" "}
                      121 King Street, Melbourne
                    </li>
                  </ul>
                </div>
                <div className="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-end">
                  <div className="element pt-0 pb-0">
                    <ul className="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix">
                      <li>
                        <a className="social-link" href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="social-link" href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="social-link" href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="element pt-0 pt-lg-10 pb-0">
                    <a
                      href="ajax-load/form-appointment.html"
                      className="btn btn-theme-colored2 btn-sm ajaxload-popup"
                    >
                      Make an Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-nav tm-enable-navbar-hide-on-scroll">
            <div className="header-nav-wrapper navbar-scrolltofixed">
              <div className="menuzord-container header-nav-container">
                <div className="container position-relative">
                  <div className="row header-nav-col-row">
                    <div className="col-sm-auto align-self-center">
                      <a
                        className="menuzord-brand site-brand"
                        href="index-mp-layout1.html"
                      >
                        <img
                          className="logo-default logo-1x"
                          src="images/logo-wide.png"
                          alt="Logo"
                        />
                        <img
                          className="logo-default logo-2x retina"
                          src="images/logo-wide@2x.png"
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <div className="col-sm-auto ms-auto pr-0 align-self-center">
                      <nav
                        id="top-primary-nav"
                        className="menuzord theme-color1"
                        data-effect="fade"
                        data-animation="none"
                        data-align="right"
                      >
                        <ul id="main-nav" className="menuzord-menu">
                          <li className="active menu-item">
                            <a href="#">Home</a>
                            <div className="megamenu megamenu-fullwidth megamenu-position-left">
                              <div className="megamenu-row">
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>All Main Layouts</span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-mp-layout1.html">
                                            index Multipage Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-mp-layout2.html">
                                            index Multipage Layout2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-mp-layout3.html">
                                            index Multipage Layout3
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-mp-layout4.html">
                                            index Multipage Layout4
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Single Layouts</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-sp-layout1.html">
                                            index Single Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-sp-layout2.html">
                                            index Single Layout2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-sp-layout3.html">
                                            index Single Layout3
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Boxed Layouts</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-boxed-mp-layout1.html">
                                            Boxed Multipage
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-boxed-mp-layout2.html">
                                            Boxed Multipage2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-boxed-mp-layout3.html">
                                            Boxed Multipage3
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-boxed-sp-layout1.html">
                                            Boxed Single
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-boxed-sp-layout2.html">
                                            Boxed Single2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-boxed-sp-layout3.html">
                                            Boxed Single3
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Dark Layouts</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-dark-mp-layout1.html">
                                            Dark Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-dark-mp-layout2.html">
                                            Dark Layout2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-dark-mp-layout3.html">
                                            Dark Layout3
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Vertical Nav</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-vertical-nav-mp-layout1.html">
                                            Vertical Nav Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-vertical-nav-sp-layout1.html">
                                            Vertical Nav Layout1
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>RTL Layouts</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-rtl-layout1.html">
                                            RTL Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-rtl-layout2.html">
                                            RTL Layout2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-rtl-layout3.html">
                                            RTL Layout3
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Menu Full Page</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-menu-full-page-mp.html">
                                            Menu Full Page Multi
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-menu-full-page-sp.html">
                                            Menu Full Page Single
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-item">
                            <a href="#">Hot</a>
                            <div className="megamenu megamenu-fullwidth megamenu-position-left">
                              <div className="megamenu-row">
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <ul className="list-unstyled">
                                        <li className="">
                                          <a
                                            className=" tm-submenu-title"
                                            href="#"
                                          >
                                            <span>Split Slider</span>{" "}
                                            <span className="badge bg-danger">
                                              New
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-slider-split-home-layout1.html">
                                            Slider Split Home Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-slider-split-home-layout2.html">
                                            Slider Split Home Layout2
                                          </a>
                                        </li>
                                        <li className="">
                                          <a
                                            className=" tm-submenu-title"
                                            href="#"
                                          >
                                            <span>Fullpage Slider</span>{" "}
                                            <span className="badge bg-danger">
                                              New
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-slider-fullpage-home.html">
                                            Slider Fullpage Home Layout
                                          </a>
                                        </li>
                                        <li className="">
                                          <a
                                            className=" tm-submenu-title"
                                            href="#"
                                          >
                                            <span>PagePiling Slider</span>{" "}
                                            <span className="badge bg-danger">
                                              New
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-slider-pagepiling-home.html">
                                            Slider PagePiling Home Layout
                                          </a>
                                        </li>
                                        <li className="">
                                          <a
                                            className=" tm-submenu-title"
                                            href="#"
                                          >
                                            <span>Magazine Layouts</span>{" "}
                                            <span className="badge bg-danger">
                                              New
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-magazine-home.html">
                                            Magazine Home Layout
                                          </a>
                                        </li>
                                        <li className="">
                                          <a
                                            className=" tm-submenu-title"
                                            href="#"
                                          >
                                            <span>Personal Home</span>{" "}
                                            <span className="badge bg-danger">
                                              New
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-personal-home-layout1.html">
                                            Personal Home Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-personal-home-layout2.html">
                                            Personal Home Layout2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-personal-home-layout3.html">
                                            Personal Home Layout3
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-personal-home-layout4.html">
                                            Personal Home Layout4
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Parallax Home</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-hot-parallax-home-layout1.html">
                                            Parallax Home Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-parallax-home-layout2.html">
                                            Parallax Home Layout2
                                          </a>
                                        </li>
                                        <li className="">
                                          <a
                                            className=" tm-submenu-title"
                                            href="#"
                                          >
                                            <span>Portfolio Layouts</span>{" "}
                                            <span className="badge bg-danger">
                                              New
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout1.html">
                                            Portfolio Presentation Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout2.html">
                                            Portfolio Presentation Layout2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout3.html">
                                            Portfolio Presentation Layout3
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout4.html">
                                            Portfolio Presentation Layout4
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout5.html">
                                            Portfolio Presentation Layout5
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout6.html">
                                            Portfolio Presentation Layout6
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout7.html">
                                            Portfolio Presentation Layout7
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout8.html">
                                            Portfolio Presentation Layout8
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout9.html">
                                            Portfolio Presentation Layout9
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-hot-portfolio-presentation-layout10.html">
                                            Portfolio Presentation Layout10
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Home Variations</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-home-variation-bg-static.html">
                                            Home Bg Static Layout
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-bg-image-parallax.html">
                                            Home Image Parallax Layout
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-owl-animated-slider.html">
                                            Home Owl Animated Slider
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-owl-animated-slider-fullscreen.html">
                                            Home Owl Animated Slider Fullscreel
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-html5-video.html">
                                            Home HTML5 Video Layout
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-maximageslider-style1.html">
                                            Home Maximage Slider Layout
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-youtube-video-bg.html">
                                            Home Youtube Video Bg Layout
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-owl-carousel.html">
                                            Home Owl Carousel Layout
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-owl-carousel-fullscreen.html">
                                            Home Owl Carousel Fullscreen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-owl-carousel-text-rotator.html">
                                            Home Owl Carousel Text Rotator
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-typed-text.html">
                                            Home Typed Slider Layout
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Home Variations</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="index-home-variation-appointment-form-style1.html">
                                            Home Appointment Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-appointment-form-style2.html">
                                            Home Appointment Layout2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-appointment-form-style3.html">
                                            Home Appointment Layout3
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-appointment-form-style4.html">
                                            Home Appointment Layout4
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-appointment-form-style5.html">
                                            Home Appointment Layout5
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-appointment-form-style6.html">
                                            Home Appointment Layout6
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-appointment-form-style7.html">
                                            Home Appointment Layout7
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-swiper-slider1.html">
                                            Home Swiper Slider Layout1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-swiper-slider2.html">
                                            Home Swiper Slider Layout2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-swiper-slider3.html">
                                            Home Swiper Slider Layout3
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index-home-variation-swiper-slider4.html">
                                            Home Swiper Slider Layout4
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-item">
                            <a href="#">Features</a>
                            <ul className="dropdown">
                              <li>
                                <a href="page-preloader.html">Preloaders</a>
                              </li>
                              <li>
                                <a href="#">Header</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="#">Header 2 Rows</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-header-style-2rows.html">
                                          Header 2 Rows Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-2rows-style2.html">
                                          Header 2 Rows Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-2rows-style3.html">
                                          Header 2 Rows Style3
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="page-header-style-3rows.html">
                                      Header 3 Rows
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Floating{" "}
                                      <span className="badge bg-danger">
                                        Header
                                      </span>
                                    </a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-header-style-floating-2rows-style1.html">
                                          Floating Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-style2.html">
                                          Floating Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-style3.html">
                                          Floating Style3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-style4.html">
                                          Floating Style4
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-style5.html">
                                          Floating Style5
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-style6.html">
                                          Floating Style6
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-style7.html">
                                          Floating Style7
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-style8.html">
                                          Floating Style8
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-style9.html">
                                          Floating Style9
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">
                                      BG White{" "}
                                      <span className="badge bg-danger">
                                        Header{" "}
                                      </span>
                                    </a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-header-style-floating-2rows-white-style1.html">
                                          BG White Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-white-style2.html">
                                          BG White Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-white-style3.html">
                                          BG White Style3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-white-style4.html">
                                          BG White Style4
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-2rows-white-style5.html">
                                          BG White Style5
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Transparent{" "}
                                      <span className="badge bg-danger">
                                        Header{" "}
                                      </span>
                                    </a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-header-style-floating-1row-transparent-bg-dark.html">
                                          Transparent Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-floating-1row-transparent-bg-white.html">
                                          Transparent Style2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Modern{" "}
                                      <span className="badge bg-danger">
                                        Header{" "}
                                      </span>
                                    </a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-header-style-modern-style1.html">
                                          Modern Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-modern-style2.html">
                                          Modern Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-header-style-modern-style3.html">
                                          Modern Style3
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Form</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-form-request-a-quote.html">
                                      Request a Quote Form
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">Contact</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-contact1.html">
                                          Contact Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact1-recaptcha.html">
                                          Contact Style1 Recaptcha
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact2.html">
                                          Contact Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact2-recaptcha.html">
                                          Contact Style2 Recaptcha
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact3.html">
                                          Contact Style3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact3-recaptcha.html">
                                          Contact Style3 Recaptcha
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact4.html">
                                          Contact Style4
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact4-recaptcha.html">
                                          Contact Style4 Recaptcha
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact5.html">
                                          Contact Style5
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact5-recaptcha.html">
                                          Contact Style5 Recaptcha
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact6.html">
                                          Contact Style6
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact6-recaptcha.html">
                                          Contact Style6 Recaptcha
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact7.html">
                                          Contact Style7
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-contact7-recaptcha.html">
                                          Contact Style7 Recaptcha
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Login/Register Form</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="#">Login/Register</a>
                                        <ul className="dropdown">
                                          <li>
                                            <a href="page-form-login-register-style1.html">
                                              Login/Register style 1
                                            </a>
                                          </li>
                                          <li>
                                            <a href="page-form-login-register-style2.html">
                                              Login/Register style 2
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="#">Login</a>
                                        <ul className="dropdown">
                                          <li>
                                            <a href="page-form-login-style1.html">
                                              Login style 1
                                            </a>
                                          </li>
                                          <li>
                                            <a href="page-form-login-style2.html">
                                              Login style 2
                                            </a>
                                          </li>
                                          <li>
                                            <a href="page-form-login-style3.html">
                                              Login style 3
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="#">Register</a>
                                        <ul className="dropdown">
                                          <li>
                                            <a href="page-form-register-style1.html">
                                              Register style 1
                                            </a>
                                          </li>
                                          <li>
                                            <a href="page-form-register-style2.html">
                                              Register style 2
                                            </a>
                                          </li>
                                          <li>
                                            <a href="page-form-register-style3.html">
                                              Register style 3
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="page-form-subscribe.html">
                                      {" "}
                                      Subscribe Form
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">Appointment Form</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-form-appointment-style1.html">
                                          Appointment style 1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-appointment-style2.html">
                                          Appointment style 2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-appointment-style3.html">
                                          Appointment style 3
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Job Apply Form</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-form-job-apply-style1.html">
                                          Job Apply style 1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-job-apply-style2.html">
                                          Job Apply style 2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-job-apply-style3.html">
                                          Job Apply style 3
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Quick Contact Form</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-form-quick-contact-style1.html">
                                          Quick Contact style 1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-quick-contact-style2.html">
                                          Quick Contact style 2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-quick-contact-style3.html">
                                          Quick Contact style 3
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  Page Title{" "}
                                  <span className="badge bg-danger">New</span>
                                </a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-title-text-left.html">
                                      Text Left
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-text-center.html">
                                      Text Center
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-text-right.html">
                                      Text Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-mini-version.html">
                                      Mini Version
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-big-version.html">
                                      Big Version
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-extra-big-version.html">
                                      Extra Big Version
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-bg-white.html">
                                      Bg White
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-bg-image.html">
                                      Bg Image
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-bg-image-parallax.html">
                                      Bg Image Parallax
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-bg-video-html5.html">
                                      Bg Video HTML5 HTML5
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-bg-video-youtube.html">
                                      Bg Video Youtube
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-full-transparent.html">
                                      Full Transparent
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-overlay-white.html">
                                      Overlay White
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-title-overlay-dark.html">
                                      Overlay Dark
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Side Push Panel</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-side-push-panel-left-overlay.html">
                                      Left Overlay
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-side-push-panel-left-push.html">
                                      Left Push
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-side-push-panel-right-overlay.html">
                                      Right Overlay
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-side-push-panel-right-push.html">
                                      Right Push
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  Paypal Form{" "}
                                  <span className="badge bg-danger">New</span>
                                </a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="#">Donation Onetime</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-form-paypal-donate-onetime-style1.html">
                                          Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-onetime-style2.html">
                                          Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-onetime-style3.html">
                                          Style3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-onetime-style4.html">
                                          Style4
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-onetime-style5.html">
                                          Style5
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-onetime-style6.html">
                                          Style6
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-onetime-style7.html">
                                          Style7
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Donation Recurring</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-form-paypal-donate-recurring-style1.html">
                                          Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-recurring-style2.html">
                                          {" "}
                                          Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-recurring-style3.html">
                                          Style3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-recurring-style4.html">
                                          Style4
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-recurring-style5.html">
                                          Style5
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Both Onetime/Recurring</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-form-paypal-donate-both-onetime-recurring-style1.html">
                                          Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-both-onetime-recurring-style2.html">
                                          Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-both-onetime-recurring-style3.html">
                                          Style3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-donate-both-onetime-recurring-style4.html">
                                          Style4
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Order Payment</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-form-paypal-order-style1.html">
                                          Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-form-paypal-order-style2.html">
                                          Style2
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="page-form-paypal-cart-style1.html">
                                      Cart Payment
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Footer</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="#">Footer Dark</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-footer-dark-style1.html#footer">
                                          Footer Dark One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-footer-dark-style2.html#footer">
                                          Footer Dark Two
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-footer-dark-style3.html#footer">
                                          Footer Dark Three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-footer-dark-style4.html#footer">
                                          Footer Dark Four
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-footer-dark-style5.html#footer">
                                          Footer Dark Five
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-footer-dark-style6.html#footer">
                                          Footer Dark Six
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <a href="#">Pages</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">About</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-about.html">About Us</a>
                                  </li>
                                  <li>
                                    <a href="page-about2.html">About Us2</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Team</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-team-grid.html">Team Grid</a>
                                  </li>
                                  <li>
                                    <a href="page-team-carousel.html">
                                      Team Carousel
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-team-details.html">
                                      Team Details
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Courses</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-courses.html">
                                      Course Style1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-courses2.html">
                                      Course Style2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-courses-details.html">
                                      Course Details
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Portfolio</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="portfolio-grid-4col.html">
                                      Portfolio Grid
                                    </a>
                                  </li>
                                  <li>
                                    <a href="portfolio-tiles-4col.html">
                                      Portfolio Tiles
                                    </a>
                                  </li>
                                  <li>
                                    <a href="portfolio-details-image.html">
                                      Portfolio Details - Image
                                    </a>
                                  </li>
                                  <li>
                                    <a href="portfolio-details-image-gallery.html">
                                      Portfolio Details - Image Gallery
                                    </a>
                                  </li>
                                  <li>
                                    <a href="portfolio-details-video-gallery.html">
                                      Portfolio Details - Video Gallery
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Appointment</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-form-appointment-style1.html">
                                      Appointment Style1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-form-appointment-style2.html">
                                      Appointment Style2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-form-appointment-style3.html">
                                      Appointment Style3
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">FAQ</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-faq-style1.html">
                                      FAQ Style1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-faq-style2.html">
                                      FAQ Style2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-faq-style3.html">
                                      FAQ Style3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-faq-style4.html">
                                      FAQ Style4
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Calender</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-calender1.html">
                                      Calender Style1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-calender2.html">
                                      Calender Style2
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  Gallery{" "}
                                  <span className="badge bg-danger">New</span>
                                </a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-gallery.html">Gallery</a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-3col.html">
                                      3 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-3col-masonry.html">
                                      3 Columns Masonry
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-3col-masonry-tiles.html">
                                      3 Columns Masonry Tiles
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-4col.html">
                                      4 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-4col-masonry.html">
                                      4 Columns Masonry
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-4col-masonry-tiles.html">
                                      4 Columns Masonry Tiles
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-variations-grid.html">
                                      Variations Grid
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-variations-masonry.html">
                                      Variations Grid Masonry
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-gallery-variations-masonry-tiles.html">
                                      Variations Grid Masonry Tiles
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  Job{" "}
                                  <span className="badge bg-danger">New</span>
                                </a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-job-list.html">Job List</a>
                                  </li>
                                  <li>
                                    <a href="page-job-details-style1.html">
                                      Job Details Style1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-job-details-style2.html">
                                      Job Details Style2
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Events</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="#">Events Calendar</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-events-calendar-style1-daygrid-views.html">
                                          Calendar Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-calendar-style2-google-calendar.html">
                                          Calendar Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-calendar-style3-list-views.html">
                                          Calendar Style3
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-calendar-style4-natural-height.html">
                                          Calendar Style4
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Events Grid</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-events-grid-2column.html">
                                          Grid 2column
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-grid-3column.html">
                                          Grid 3column
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-grid-4column.html">
                                          Grid 4column
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-grid-left-sidebar.html">
                                          Grid Left Sidebar
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-grid-right-sidebar.html">
                                          Grid Right Sidebar
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Events List</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-events-list-vertical-slide.html">
                                          List Vertical Slide
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-list-left-sidebar.html">
                                          List Left Sidebar
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-list-right-sidebar.html">
                                          List Right Sidebar
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-list-no-sidebar.html">
                                          List No Sidebar
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Events Details</a>
                                    <ul className="dropdown">
                                      <li>
                                        <a href="page-events-details-style1.html">
                                          Details Style1
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-details-style2.html">
                                          Details Style2
                                        </a>
                                      </li>
                                      <li>
                                        <a href="page-events-details-style3.html">
                                          Details Style3
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Page 404</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-404-style1.html">Style1</a>
                                  </li>
                                  <li>
                                    <a href="page-404-style2.html">Style2</a>
                                  </li>
                                  <li>
                                    <a href="page-404-style3.html">Style3</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Under Construction</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-under-construction-style1.html">
                                      Style1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-under-construction-style2.html">
                                      Style2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-under-construction-style3.html">
                                      Style3
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Coming Soon</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="page-coming-soon-style1.html">
                                      Style1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-coming-soon-style2.html">
                                      Style2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-coming-soon-style3.html">
                                      Style3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-coming-soon-style4.html">
                                      Style4
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <a href="javascript:void(0)">News</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">News Classic</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="news-classic-both-sidebar.html">
                                      Both Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-classic-left-thumbs.html">
                                      Left Thumb
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">News Grid</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="news-grid-2-column.html">
                                      Grid 2 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-grid-3-column.html">
                                      Grid 3 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-grid-4-column.html">
                                      Grid 4 Columns
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">News Isotope</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="news-isotope-2-column.html">
                                      Isotope 2 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-isotope-3-column.html">
                                      Isotope 3 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-isotope-4-column.html">
                                      Isotope 4 Columns
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">News Masonry</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="news-masonry-2-column.html">
                                      Masonry 2 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-masonry-3-column.html">
                                      Masonry 3 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-masonry-4-column.html">
                                      Masonry 4 Columns
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">News Single</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="news-single-left-sidebar.html">
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-single-right-sidebar.html">
                                      Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-single-both-sidebar.html">
                                      Both Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-single-no-sidebar.html">
                                      No Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-single-disqus-comments.html">
                                      Disqus Comment
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-single-facebook-comments.html">
                                      Facebook Comment
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="news-timeline.html">
                                  News Vertical Timeline
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <a href="javascript:void(0)">Shop</a>
                            <div className="megamenu megamenu-fullwidth megamenu-position-left">
                              <div className="megamenu-row">
                                <div className="col4">
                                  <div className="widget">
                                    <h4 className="widget-title">
                                      Latest Products
                                    </h4>
                                    <ul className="product_list_widget">
                                      <li className="mb-20">
                                        <div className="product-left">
                                          <a
                                            className="p-0"
                                            href="shop-product-details.html"
                                          >
                                            <img
                                              width="120"
                                              height="120"
                                              src="images/shop/product.jpg"
                                              className="thumbnail"
                                              alt="images"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-right">
                                          <a
                                            className="product-title p-0"
                                            href="shop-product-details.html"
                                          >
                                            Beanie with Logo
                                          </a>
                                          <span className="amount">
                                            <span className="currencySymbol">
                                              £
                                            </span>
                                            11.05
                                          </span>
                                        </div>
                                      </li>
                                      <li className="mb-20">
                                        <div className="product-left">
                                          <a
                                            className="p-0"
                                            href="shop-product-details.html"
                                          >
                                            <img
                                              width="120"
                                              height="120"
                                              src="images/shop/product2.jpg"
                                              className="thumbnail"
                                              alt="images"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-right">
                                          <a
                                            className="product-title p-0"
                                            href="shop-product-details.html"
                                          >
                                            WordPress Pennant
                                          </a>
                                          <del>
                                            <span className="amount">
                                              <span className="currencySymbol">
                                                £
                                              </span>
                                              20.00
                                            </span>
                                          </del>
                                          <ins>
                                            <span className="amount">
                                              <span className="currencySymbol">
                                                £
                                              </span>
                                              18.00
                                            </span>
                                          </ins>
                                        </div>
                                      </li>
                                      <li className="mb-20">
                                        <div className="product-left">
                                          <a
                                            className="p-0"
                                            href="shop-product-details.html"
                                          >
                                            <img
                                              width="120"
                                              height="120"
                                              src="images/shop/product.jpg"
                                              className="thumbnail"
                                              alt="images"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-right">
                                          <a
                                            className="product-title p-0"
                                            href="shop-product-details.html"
                                          >
                                            Hoodie with Zipper
                                          </a>
                                          <span className="amount">
                                            <span className="currencySymbol">
                                              £
                                            </span>
                                            11.05
                                          </span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col5">
                                  <h4 className="mt-10 text-gray">
                                    Up to 21% off on all products!
                                  </h4>
                                  <img
                                    className="img-fullwidth"
                                    src="images/shop/portfolio-big1.jpg"
                                    alt="images"
                                  />
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li>
                                      <a className="tm-submenu-title" href="#">
                                        <span>Shop Ready!</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-home-layout1.html">
                                        Shop Home Layout1{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-home-layout2.html">
                                        Shop Home Layout2{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-home-layout3.html">
                                        Shop Home Layout3{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-products.html">Products</a>
                                    </li>
                                    <li>
                                      <a href="shop-products-sidebar.html">
                                        Products With Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-product-details.html">
                                        Product Details
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-cart.html">Cart</a>
                                    </li>
                                    <li>
                                      <a href="shop-checkout.html">Checkout</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-item">
                            <a href="#">Shortcodes</a>
                            <div className="megamenu megamenu-fullwidth megamenu-position-left">
                              <div className="megamenu-row">
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Built-in Shortcodes (16)</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="shortcode-accordion.html">
                                            <i className="fa fa-list-ul"></i>{" "}
                                            Accordion
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-alerts.html">
                                            <i className="fa fa-exclamation-circle"></i>{" "}
                                            Alerts
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-animations.html">
                                            <i className="fa fa-magic"></i>{" "}
                                            Animations
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-background-video-html5.html">
                                            <i className="fas fa-video"></i>{" "}
                                            Background Video - HTML5
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-background-video-youtube.html">
                                            <i className="fab fa-youtube"></i>{" "}
                                            Background Video - Youtube
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-before-after-slider.html">
                                            <i className="fa fa-window-restore"></i>{" "}
                                            Before After Slider
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-blockquotes.html">
                                            <i className="fa fa-quote-right"></i>{" "}
                                            Blockquotes
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-box-gradient-effect.html">
                                            <i className="fas fa-fill-drip"></i>{" "}
                                            Box Gradient
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-button-groups-and-dropdowns.html">
                                            <i className="fa fa-link"></i>{" "}
                                            Buttons groups & Dropdowns
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-buttons.html">
                                            <i className="fa fa-link"></i>{" "}
                                            Buttons
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-call-to-actions.html">
                                            <i className="fa fa-plus-square"></i>{" "}
                                            Call To Actions
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-charts.html">
                                            <i className="fas fa-chart-pie"></i>{" "}
                                            Charts
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-clients.html">
                                            <i className="fas fa-briefcase"></i>{" "}
                                            Clients Logo
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-timer-final-countdown.html">
                                            <i className="fas fa-stopwatch-20"></i>{" "}
                                            Countdown - Final
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-timer-flipclock.html">
                                            <i className="fab fa-creative-commons-zero"></i>{" "}
                                            Countdown - Flipclock
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-timer-slick-circular.html">
                                            <i className="fas fa-stopwatch-20"></i>{" "}
                                            Countdown- Slick Circular
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Built-in Shortcodes (16)</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="shortcode-custom-columns-holder.html">
                                            <i className="fas fa-columns"></i>{" "}
                                            Custom Columns Holder
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-datetime-datepair.html">
                                            <i className="far fa-calendar-plus"></i>{" "}
                                            Datepair
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-datetime-datepicker.html">
                                            <i className="far fa-calendar-check"></i>{" "}
                                            Datepicker
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-datetime-timepicker.html">
                                            <i className="far fa-clock"></i>{" "}
                                            Date Timepicker
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-divider.html">
                                            <i className="fas fa-sort-amount-up"></i>{" "}
                                            Divider
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-dropcaps.html">
                                            <i className="fas fa-closed-captioning"></i>{" "}
                                            Dropcaps
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-flickr-feed.html">
                                            <i className="fas fa-rss"></i>{" "}
                                            Flickr Feed
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-flipbox.html">
                                            <i className="fab fa-flipboard"></i>{" "}
                                            Flipbox
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-forms.html">
                                            <i className="fab fa-wpforms"></i>{" "}
                                            Forms
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-funfacts.html">
                                            <i className="fas fa-fire-alt"></i>{" "}
                                            Funfacts
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-hotspot.html">
                                            <i className="fas fa-wifi"></i>{" "}
                                            Hotspot
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-iconbox.html">
                                            <i className="fas fa-atom"></i> Icon
                                            Box
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-image-box.html">
                                            <i className="far fa-images"></i>{" "}
                                            Image Box
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-instagram-feed.html">
                                            <i className="fab fa-instagram"></i>{" "}
                                            Instagram Feed
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-labels-badges.html">
                                            <i className="fas fa-certificate"></i>{" "}
                                            Labels Badges
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-listgroup-panels.html">
                                            <i className="fas fa-tags"></i>{" "}
                                            Listgroup Panels
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Built-in Shortcodes (16)</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="shortcode-lists.html">
                                            <i className="fas fa-list"></i> List
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-maps.html">
                                            <i className="fas fa-map-marked"></i>{" "}
                                            Map
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-media-embed.html">
                                            <i className="fas fa-code"></i>{" "}
                                            Media Embed
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-modal-bootstrap.html">
                                            <i className="fas fa-bullhorn"></i>{" "}
                                            Modal - Bootstrap
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-modal-lightbox.html">
                                            <i className="fas fa-lightbulb"></i>{" "}
                                            Modal Lightbox
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-navigation.html">
                                            <i className="fas fa-tasks"></i>{" "}
                                            Navigation
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-odometer.html">
                                            <i className="fas fa-tachometer-alt"></i>{" "}
                                            Odometer
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-owl-carousel.html">
                                            <i className="fas fa-images"></i>{" "}
                                            Owl Carousel
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-pagination.html">
                                            <i className="fas fa-ellipsis-h"></i>{" "}
                                            Pagination
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-piechart.html">
                                            <i className="fas fa-chart-pie"></i>{" "}
                                            Piechart
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-pricing-table.html">
                                            <i className="fas fa-microchip"></i>{" "}
                                            Pricing Table
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-progressbar.html">
                                            <i className="fas fa-sliders-h"></i>{" "}
                                            Progressbar
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-responsive.html">
                                            <i className="fas fa-tablet-alt"></i>{" "}
                                            Responsive
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-separator.html">
                                            <i className="fas fa-object-ungroup"></i>{" "}
                                            Separator
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-sitemap.html">
                                            <i className="fas fa-sitemap"></i>{" "}
                                            Sitemap
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-slick-slider.html">
                                            <i className="fas fa-images"></i>{" "}
                                            Slick Slider
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col3">
                                  <ul className="list-unstyled list-dashed">
                                    <li className="menu-item">
                                      <a className="tm-submenu-title" href="#">
                                        <span>Built-in Shortcodes (16)</span>{" "}
                                        <span className="badge bg-danger">
                                          New
                                        </span>
                                      </a>
                                      <ul className="list-unstyled">
                                        <li>
                                          <a href="shortcode-sliders.html">
                                            <i className="fas fa-images"></i>{" "}
                                            Sliders
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-smoothscrolling.html">
                                            <i className="fa fa-binoculars"></i>{" "}
                                            Smoothscrolling
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-styled-icons.html">
                                            <i className="fab fa-facebook-square"></i>{" "}
                                            Styled Icons
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-subscribe.html">
                                            <i className="fa fa-user-plus"></i>{" "}
                                            Subscribe
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-tables.html">
                                            <i className="fas fa-icons"></i>{" "}
                                            Tables
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-tabs.html">
                                            <i className="fa fa-indent"></i>{" "}
                                            Tabs
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-testimonials.html">
                                            <i className="fas fa-user-shield"></i>{" "}
                                            Testimonials
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-textblock.html">
                                            <i className="fa fa-bold"></i>{" "}
                                            Textblock
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-thumbnails-carousels.html">
                                            <i className="fab fa-buffer"></i>{" "}
                                            Thumbnails Carousels
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-title.html">
                                            <i className="fas fa-heading"></i>{" "}
                                            Title
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-vertical-timeline.html">
                                            <i className="fas fa-grip-vertical"></i>{" "}
                                            Timeline - Vertical
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-twitter.html">
                                            <i className="fab fa-twitter-square"></i>{" "}
                                            Twitter
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-typography.html">
                                            <i className="fas fa-font"></i>{" "}
                                            Typography
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-video-play-btn.html">
                                            <i className="fas fa-play-circle"></i>{" "}
                                            Video Play Btn
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-widgets.html">
                                            <i className="fa fa-gift"></i>{" "}
                                            Widgets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shortcode-working-process.html">
                                            <i className="fas fa-network-wired"></i>{" "}
                                            Working Process
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-sm-auto align-self-center nav-side-icon-parent">
                      <ul className="list-inline nav-side-icon-list">
                        <li className="hidden-mobile-mode">
                          <div
                            id="side-panel-trigger"
                            className="side-panel-trigger"
                          >
                            <a href="#">
                              <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                              </div>
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div id="top-nav-search-form" className="clearfix">
                        <form action="#" method="GET">
                          <input
                            type="text"
                            name="s"
                            value=""
                            placeholder="Type and Press Enter..."
                            autoComplete="off"
                          />
                        </form>
                        <a href="#" id="close-search-btn">
                          <i className="fa fa-times"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row d-block d-xl-none">
                    <div className="col-12">
                      <nav
                        id="top-primary-nav-clone"
                        className="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive"
                        data-effect="slide"
                        data-animation="none"
                        data-align="right"
                      >
                        <ul
                          id="main-nav-clone"
                          className="menuzord-menu menuzord-right menuzord-indented scrollable"
                        ></ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        

        <a className="scrollToTop" href="#">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
