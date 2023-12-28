import React from "react";

const ContactScreen = () => {
  return (
    <div>
      {/* <!-- Section: Have Any Question --> */}
      <section class="divider">
        <div class="container pt-60 pb-60">
          <div class="section-title mb-60">
            <div class="row">
              <div class="col-md-12">
                <div class="esc-heading small-border text-center">
                  <h3>Have any Questions?</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="section-content">
            <div class="row">
              <div class="col-sm-12 col-md-4">
                <div class="icon-box text-center iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-50">
                  <div class="icon-box-wrapper">
                    <div class="icon-wrapper mb-30">
                      <a class="icon icon-type-font-icon icon-dark icon-circled">
                        {" "}
                        <i class="flaticon-contact-044-call-1"></i>{" "}
                      </a>
                    </div>
                    <div class="icon-text">
                      <h5 class="icon-box-title mt-0">Phone</h5>
                      <div class="content">
                        <a href="tel:+123.456.7890">+91 8925353323</a>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div class="icon-box text-center iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-50">
                  <div class="icon-box-wrapper">
                    <div class="icon-wrapper mb-30">
                      <a class="icon icon-type-font-icon icon-dark icon-circled">
                        {" "}
                        <i class="flaticon-contact-043-email-1"></i>{" "}
                      </a>
                    </div>
                    <div class="icon-text">
                      <h5 class="icon-box-title mt-0">Email</h5>
                      <div class="content">
                        <a href="mailto:contact@candibrainpreschool.com">
                          contact@candibrainpreschool.com
                        </a>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div class="icon-box text-center iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-50">
                  <div class="icon-box-wrapper">
                    <div class="icon-wrapper mb-30">
                      <a class="icon icon-type-font-icon icon-dark icon-circled">
                        {" "}
                        <i class="flaticon-contact-025-world"></i>{" "}
                      </a>
                    </div>
                    <div class="icon-text">
                      <h5 class="icon-box-title mt-0">Address</h5>
                      <div class="content">
                        Vilankurchi, Saravanampatti, Coimbatore
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Divider: Contact --> */}
      <section class="divider bg-white-f7">
        <div class="container">
          <div class="row">
            {/*  */}
            <div class="col-lg-12 mx-auto">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Candibrain+Preschool,+Akkammal+Garden,+33/2,+Villankurichi+Rd,+near+Selvalakshmi+Bakery,+Arivoli+Nagar,+FCI+Nagar,+Saravanampatti,+Coimbatore,+Tamil+Nadu+641035&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                // data-tm-width="100%"
                height="600"
                width="100%"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;
