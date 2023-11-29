// import $ from 'jquery';

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
                      src="images/CandiBrain.png"
                      style={{ height: "100px", width: "120px" }}
                    />
                  </div>
                  <div className="description">
                    203, Envato Labs, Behind Alis Steet, Melbourne,
                    Australia.immersion along the information close the loop on
                    focusing
                  </div>
                  <ul className="mb-30">
                    <li className="contact-phone">
                      <div className="icon">
                        <i className="flaticon-contact-042-phone-1"></i>
                      </div>
                      <div className="text">
                        <a href="tel:+123-456-789">+123-456-789</a>
                      </div>
                    </li>
                    <li className="contact-email">
                      <div className="icon">
                        <i className="flaticon-contact-043-email-1"></i>
                      </div>
                      <div className="text">
                        <a href="mailto:contact@yourdomain.com">
                          contact@yourdomain.com
                        </a>
                      </div>
                    </li>
                    <li className="contact-website">
                      <div className="icon">
                        <i className="flaticon-contact-035-website"></i>
                      </div>
                      <div className="text">
                        <a href="http://yourdomain.com">yourdomain.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">Services</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Course</a>
                    </li>
                    <li>
                      <a href="#">Pricing Table</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="widget">
                  <h4 className="widget-title">Twitter Feed</h4>
                  <div
                    className="twitter-feed list-border clearfix"
                    data-username="Envato"
                    data-count="2"
                  ></div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="widget">
                  <h4 className="widget-title">Opening Hours</h4>
                  <div className="opening-hours border-dark">
                    <ul>
                      <li className="clearfix">
                        {" "}
                        <span> Mon - Tues : </span>
                        <div className="value"> 6.00 am - 10.00 pm </div>
                      </li>
                      <li className="clearfix">
                        {" "}
                        <span> Wednes - Thurs :</span>
                        <div className="value"> 8.00 am - 6.00 pm </div>
                      </li>
                      <li className="clearfix">
                        {" "}
                        <span> Fri :</span>
                        <div className="value"> 3.00 pm - 8.00 pm </div>
                      </li>
                      <li className="clearfix">
                        {" "}
                        <span> Sun : </span>
                        <div className="value"> Closed </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="widget dark">
                  <h5 className="widget-title mb-10">Call Us Now</h5>
                  <div className="text-gray">
                    +61 3 1234 5678 <br />
                    +12 3 1234 5678
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
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
                {/* <!-- Mailchimp Subscription Form--> */}
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
                {/* <!-- Mailchimp Subscription Form Validation--> */}
                {/* <script>
                (function($) {
                    $('#mailchimp-subscription-form1').ajaxChimp({
                        callback: mailChimpCallBack,
                        url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
                    });

                    function mailChimpCallBack(resp) {
                        // Hide any previous response text
                        var $mailchimpform = $('#mailchimp-subscription-form1'),
                            $response = '';
                        $mailchimpform.children(".alert").remove();
                        if (resp.result === 'success') {
                            $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
                        } else if (resp.result === 'error') {
                            $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
                        }
                        $mailchimpform.prepend($response);
                    }
                })(jQuery);
                </script> */}
              </div>
            </div>
          </div>
          <div className="footer-bottom" data-tm-bg-color="#2A2A2A">
            <div className="container">
              <div className="row pt-20 pb-20">
                <div className="col-sm-6">
                  <div className="footer-paragraph">
                    © 2021 ThemeMascot. All Rights Reserved.
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-paragraph text-right">
                    Site Template
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
