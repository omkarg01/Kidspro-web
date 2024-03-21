import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import FontAwesome from 'react-fontawesome'
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Header = () => {
  const location = useLocation();

  return (
    <>
      {/* <!-- Header --> */}
      <header id="header" className="header header-layout-type-header-2rows">
        <div className="header-top">
          <div className="">
            <div className="row">
              <div className="col-xl-auto header-top-left align-self-center text-center text-xl-start">
                <ul className="element contact-info text-black">
                  <li className="contact-phone">
                    <FaPhone />{" "}
                    {/* <i class="fa fa-phone font-icon sm-display-block"></i>  */}
                    Tel: +91 8925353323
                  </li>
                  <li className="contact-email">
                    <FaEnvelope />
                    {/* <i className="fa fa-envelope font-icon sm-display-block"></i>{" "} */}{" "}
                    contact@candibrainpreschool.com
                  </li>
                  <li className="contact-address">
                    <FaLocationDot />
                    {/* <i className="fa fa-map font-icon sm-display-block"></i> */}{" "}
                    Vilankurchi, Saravanampatti, Coimbatore
                  </li>
                </ul>
              </div>
              <div className="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-end">
                <div className="element pt-0 pb-0">
                  <ul className="styled-icons icon-dark icon-theme-colored3 icon-circled clearfix">
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
                  </ul>
                </div>
                {/* <div className="element pt-0 pt-lg-10 pb-0"> */}
                {/* <Link
                  to={"enroll"}
                  className="btn text-white btn-danger btn-sm"
                  style={{ border: "5px solid white", borderRadius: "10px" }}
                >
                  Enrol Now
                </Link> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Container>
            <Navbar.Brand href="/">
              <img
                src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/CandiBrain.png"
                width="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto font-size-20 text-white font-weight-bold navbar-nav">
                <Nav.Link href="/" className={styles.navLink}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
                  About Us
                </Nav.Link>
                {/* <Nav.Link to="/program" as={NavLink} className={styles.navLink}>
                  Program
                </Nav.Link> */}
                <Nav.Link as={NavLink} to="/gallery" className={styles.navLink}>
                  Gallery
                </Nav.Link>
                {/* <Nav.Link
                  as={NavLink}
                  to="/activity"
                  className={styles.navLink}
                >
                  Acitivity
                </Nav.Link> */}
                <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>
                  Reach Us
                </Nav.Link>
                <Nav.Link as={NavLink} to="/library" className={styles.navLink}>
                  Library
                </Nav.Link>
                <Nav.Link as={NavLink} to="/blogs" className={styles.navLink}>
                  Blogs
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
