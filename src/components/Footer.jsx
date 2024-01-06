// import $ from 'jquery';

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        id="footer"
        className="footer divider layer-overlay overlay-dark-8"
        data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/bg8.jpg"
      >
        <div className="footer-widget-area">
          <div className="container pt-90 pb-40">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="widget tm-widget-contact-info contact-info-style1 contact-icon-theme-colored1">
                  <div className="thumb">
                    <img
                      alt="Logo"
                      src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/CandiBrain.png"
                      style={{ height: "100px", width: "120px" }}
                    />
                  </div>
                  <div className="text-decoration font-size-15">
                    <strong>
                      Candibrain Preschool - an IITian's Initiative
                    </strong>
                  </div>
                  <div className="description">
                    Vilankurchi, Saravanampatti, Coimbatore
                  </div>
                  <ul className="mb-30">
                    <li className="contact-phone">
                      <div className="icon">
                        <FaPhoneAlt className="text-white" />
                        {/* <i className="flaticon-contact-042-phone-1"></i> */}
                      </div>
                      <div className="text">
                        <a href="tel:+918925353323">+918925353323</a>
                      </div>
                    </li>
                    <li className="contact-email">
                      <div className="icon">
                        <IoIosMail className="text-white" />
                        {/* <i className="flaticon-contact-043-email-1"></i> */}
                      </div>
                      <div className="text">
                        <a href="mailto:contact@candibrainpreschool.com">
                          contact@candibrainpreschool.com
                        </a>
                      </div>
                    </li>
                    <li className="contact-website">
                      <div className="icon">
                        <CiGlobe className="text-white" />
                        {/* <i className="flaticon-contact-035-website"></i> */}
                      </div>
                      <div className="text">
                        <a href="http://yourdomain.com">
                          candibrainpreschool.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 pt-5">
                <div className="widget">
                  <h4 className="widget-title">Opening Hours</h4>
                  <div className="opening-hours border-dark">
                    <ul>
                      <li className="clearfix">
                        {" "}
                        <span> Mon - Fri : </span>
                        <div className="value"> 8.00 am - 8.00 pm </div>
                      </li>
                      <li className="clearfix">
                        {" "}
                        <span> Sat - Sun :</span>
                        <div className="value"> Closed </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 pt-4">
                {/* <div className="col-sm-6 col-md-4 col-lg-4"> */}
                <div className="widget dark">
                  <h5 className="widget-title mb-10">Connect With Us</h5>
                  <ul className="styled-icons icon-dark icon-theme-colored1 icon-rounded clearfix">
                    <li>
                      <a className="social-link" href="#">
                        <FaFacebook />
                        {/* <i className="fab fa-facebook"></i> */}
                      </a>
                    </li>
                    <li>
                      <a className="social-link" href="#">
                        <FaTwitter />
                        {/* <i className="fab fa-twitter"></i> */}
                      </a>
                    </li>
                    <li>
                      <a className="social-link" href="#">
                        <FaYoutube />
                        {/* <i className="fab fa-youtube"></i> */}
                      </a>
                    </li>
                    <li>
                      <a className="social-link" href="#">
                        <RiInstagramFill />
                        {/* <i className="fab fa-instagram"></i> */}
                      </a>
                    </li>
                  </ul>
                </div>
                <form
                  id="mailchimp-subscription-form1"
                  className="newsletter-form"
                >
                  <label htmlFor="mce-EMAIL"></label>
                  <div className="input-group">
                    <input
                      type="email"
                      id="mce-EMAIL"
                      // data-tm-height="45px"
                      className="form-control"
                      placeholder="Your Email"
                      name="EMAIL"
                      value=""
                    />
                    <div className="input-group-append tm-sc-button">
                      <button
                        type="submit"
                        className="btn btn-theme-colored1 btn-sm h-100"
                        // data-tm-height="45px"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="row"> */}
            {/* <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="widget dark">
                <h5 className="widget-title mb-10">Connect With Us</h5>
                <ul className="styled-icons icon-dark icon-theme-colored1 icon-rounded clearfix">
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
                  <li>
                    <a className="social-link" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <form
                id="mailchimp-subscription-form1"
                className="newsletter-form"
              >
                <label htmlFor="mce-EMAIL"></label>
                <div className="input-group">
                  <input
                    type="email"
                    id="mce-EMAIL"
                    data-tm-height="45px"
                    className="form-control"
                    placeholder="Your Email"
                    name="EMAIL"
                    value=""
                  />
                  <div className="input-group-append tm-sc-button">
                    <button
                      type="submit"
                      className="btn btn-theme-colored1 btn-sm"
                      data-tm-height="45px"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
            {/* </div> */}
          </div>
          <div className="footer-bottom" data-tm-bg-color="#2A2A2A">
            <div className="container">
              <div className="row pt-20 pb-20">
                <div className="col-sm-6">
                  <div className="footer-paragraph">
                    © 2023 Candibrain. All Rights Reserved.
                  </div>
                </div>
                {/* <div className="col-sm-6">
                  <div className="footer-paragraph text-right">
                    Site Template
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
