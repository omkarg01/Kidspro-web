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
            <div class="col-lg-7">
              <h2 class="mt-0 mb-0">Interested in discussing?</h2>
              <p class="font-size-20">Send Us a Message</p>
              {/* <!-- Contact Form --> */}
              <form
                id="contact_form"
                name="contact_form"
                class=""
                action="includes/sendmail.php"
                method="post"
              >
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label>
                        Name <small>*</small>
                      </label>
                      <input
                        name="form_name"
                        class="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label>
                        Email <small>*</small>
                      </label>
                      <input
                        name="form_email"
                        class="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label>
                        Subject <small>*</small>
                      </label>
                      <input
                        name="form_subject"
                        class="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label>Phone</label>
                      <input
                        name="form_phone"
                        class="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label>Message</label>
                  <textarea
                    name="form_message"
                    class="form-control required"
                    rows="5"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <input
                    name="form_botcheck"
                    class="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    class="btn btn-flat btn-theme-colored1 text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px"
                    data-loading-text="Please wait..."
                  >
                    Send your message
                  </button>
                  <button
                    type="reset"
                    class="btn btn-flat btn-theme-colored3 text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px"
                  >
                    Reset
                  </button>
                </div>
              </form>

              {/* <!-- Contact Form Validation--> */}
              {/* <script>
              (function($) {
                $("#contact_form").validate({
                  submitHandler: function(form) {
                    var form_btn = $(form).find('button[type="submit"]');
                    var form_result_div = '#form-result';
                    $(form_result_div).remove();
                    form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
                    var form_btn_old_msg = form_btn.html();
                    form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                    $(form).ajaxSubmit({
                      dataType:  'json',
                      success: function(data) {
                        if( data.status == 'true' ) {
                          $(form).find('.form-control').val('');
                        }
                        form_btn.prop('disabled', false).html(form_btn_old_msg);
                        $(form_result_div).html(data.message).fadeIn('slow');
                        setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
                      }
                    });
                  }
                });
              })(jQuery);
            </script> */}
            </div>
            <div class="col-lg-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd"
                data-tm-width="100%"
                height="600"
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
