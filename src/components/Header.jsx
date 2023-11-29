import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
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
                    <i className="fa fa-map font-icon sm-display-block"></i> 121
                    King Street, Melbourne
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
                  <div className="col-sm-auto align-self-center" style={{height: '120px'}} >
                    <a
                      className="menuzord-brand site-brand"
                      href="index-mp-layout1.html"
                      style={{height:'80px', width:'120px'}}
                    >
                      <img
                        className="logo-default logo-1x"
                        src="images/CandiBrain.png"
                        alt="Logo"
                        style={{ height: '100%', width : '100%', marginBlock:'10px'}}
                      />
                      <img
                        className="logo-default logo-2x retina"
                        src="images/CandiBrain.png"
                        alt="Logo"
                        style={{ width : '60%', height:'80%'}}
                      />
                    </a>
                  </div>
                  <div className="col col-xl-auto  pe-0 align-self-center">
                    <nav
                      id="top-primary-nav"
                      className="menuzord theme-color1"
                      data-effect="fade"
                      data-animation="none"
                      data-align="right"
                    >
                      {/* <a
                        href="javascript:void(0)"
                        class="showhide"
                        style={{display: 'inline'}}
                      >
                        <em></em>
                        <em></em>
                        <em></em>
                      </a> */}
                      <ul id="main-nav" className="menuzord-menu">
                        <li className="active menu-item">
                          <a href="/">Home</a>
                          {/* <div className="megamenu megamenu-fullwidth megamenu-position-left">
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
                          </div> */}
                        </li>

                        {/* About Us */}
                        <li className="menu-item">
                          <a href="#">About us</a>
                          <div className="megamenu megamenu-fullwidth megamenu-position-left">
                            <div className="megamenu-row">
                              <div className="col12">
                                <ul className="list-unstyled list-dashed">
                                  <li className="menu-item">
                                    <ul className="list-unstyled">
                                      <li>
                                        <Link to="about">About Us</Link>
                                      </li>
                                      <li>
                                        <Link to="vision">Vision</Link>
                                      </li>
                                      <li>
                                        <Link to="mission">Mission</Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* Programs */}
                        <li className="menu-item">
                          <a href="#">Programs</a>
                          <div className="megamenu megamenu-fullwidth megamenu-position-left">
                            <div className="megamenu-row">
                              <div className="col12">
                                <ul className="list-unstyled list-dashed">
                                  <li className="menu-item">
                                    <ul className="list-unstyled">
                                      <li>
                                        <Link to={"activities"}>Activity</Link>
                                      </li>
                                      {/* <li>
                                        <a href="index-hot-slider-split-home-layout1.html">
                                          Vission
                                        </a>
                                      </li>
                                      <li>
                                        <a href="index-hot-slider-split-home-layout1.html">
                                          Mission
                                        </a>
                                      </li> */}
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* Gallery */}
                        <li className="menu-item">
                          <Link to={"gallery"}>Gallery</Link>
                        </li>

                        {/* Events */}
                        <li className="menu-item">
                          <Link to={"events"}>Events</Link>
                        </li>

                        {/* News */}
                        <li className="menu-item">
                          <Link to={"news"}>News</Link>
                        </li>

                        {/* Contacts */}
                        {/* <li className="menu-item">
                          <a href="#">Contact Us</a>
                          <div className="megamenu megamenu-fullwidth megamenu-position-left">
                            <div className="megamenu-row">
                              <div className="col12">
                                <ul className="list-unstyled list-dashed">
                                  <li className="menu-item">
                                    <ul className="list-unstyled">
                                      <li>
                                        <a href="index-hot-slider-split-home-layout1.html">
                                          About Us
                                        </a>
                                      </li>
                                      <li>
                                        <a href="index-hot-slider-split-home-layout1.html">
                                          Vission
                                        </a>
                                      </li>
                                      <li>
                                        <a href="index-hot-slider-split-home-layout1.html">
                                          Mission
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                  <div className="col-sm-auto align-self-center element text-center text-md-start d-none d-xl-block border-left-3px">
                    <ul className="styled-icons icon-gray icon-theme-colored1 icon-md icon-circled clearfix pl-30">
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
    </>
  );
};

export default Header;
