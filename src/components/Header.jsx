import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <header id="header" className="header header-layout-type-header-2rows">
        <div className="header-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-auto header-top-left align-self-center text-center text-xl-start">
                <ul className="element contact-info">
                  <li className="contact-phone">
                    <i className="fa fa-phone font-icon sm-display-block"></i>{" "}
                    Tel: +91 8925353323
                  </li>
                  <li className="contact-email">
                    <i className="fa fa-envelope font-icon sm-display-block"></i>{" "}
                    contact@candibrainpreschool.com
                  </li>
                  <li className="contact-address">
                    <i className="fa fa-map font-icon sm-display-block"></i>{" "}
                    Vilankurchi, Saravanampatti, Coimbatore
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
                  <Link
                    to={"enroll"}
                    className="btn text-white btn-danger btn-sm"
                  >
                    Enrol Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="images/CandiBrain.png"
                width="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto font-size-20 gap-4">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                <NavDropdown title="Programs" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">Gallery</Nav.Link>
                <Nav.Link href="#pricing2">News & Events</Nav.Link>
                <Nav.Link href="#pricing3">Reach Us</Nav.Link>
              </Nav>
              <Nav className="font-size-20">
                <li>
                  <Nav.Link className="social-link" href="#">
                    <i className="fab fa-facebook"></i>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="social-link" href="#">
                    <i className="fab fa-twitter"></i>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="social-link" href="#">
                    <i className="fab fa-youtube"></i>
                  </Nav.Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
