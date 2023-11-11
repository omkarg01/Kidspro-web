import React from "react";
import PageTitle from "../components/PageTitle";

const EventsDetailScreen = () => {
  return (
    <>
      <PageTitle title={"Event Details"}/>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="list-style-none">
                <li>
                  <h5>Topics:</h5>
                  Web design & development, Graphics design
                </li>
                <li>
                  <h5>Host:</h5>
                  Kodesolution Lmd.
                </li>
                <li>
                  <h5>Location:</h5>
                  #405, Lan Streen, Los Vegas, USA
                </li>
                <li>
                  <h5>Start Date:</h5>
                  January 26, 2021
                </li>
                <li>
                  <h5>End Date:</h5>
                  February 10, 2021
                </li>
                <li>
                  <h5>Website:</h5>
                  kodesolution.com
                </li>
                <li>
                  <h5>Share:</h5>
                  <div className="styled-icons icon-sm icon-gray icon-circled">
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="tm-owl-carousel-1col" data-nav="true">
                <div className="item">
                  <iframe
                    width="800"
                    height="460"
                    src="http://www.youtube.com/embed/oIDqz2BrVec?autoplay=0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-md-6">
              <h4 className="mt-0">Event Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi id perspiciatis facilis nulla possimus quasi, amet
                qui. Ea rerum officia, aspernatur nulla neque nesciunt alias
                repudiandae doloremque, dolor, quam nostrum laudantium earum
                illum odio quasi excepturi mollitia corporis quas ipsa modi
                nihil, ad ex tempore.
              </p>
            </div>
            <div className="col-md-6">
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-md-12">
              <h4 className="mb-20">Keynote Speakers</h4>
              <div className="tm-owl-carousel-6col" data-nav="true">
                <div className="item">
                  <div className="attorney">
                    <div className="thumb">
                      <img
                        src="https://via.placeholder.com/270x353"
                        alt="images"
                      />
                    </div>
                    <div className="content text-center">
                      <h5 className="author mb-0">
                        <a className="text-theme-colored1" href="#">
                          Alex Jacobson
                        </a>
                      </h5>
                      <h6 className="title text-gray font-12 mt-0 mb-0">Lawyer</h6>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="attorney">
                    <div className="thumb">
                      <img
                        src="https://via.placeholder.com/270x353"
                        alt="images"
                      />
                    </div>
                    <div className="content text-center">
                      <h5 className="author mb-0">
                        <a className="text-theme-colored1" href="#">
                          Alex Jacobson
                        </a>
                      </h5>
                      <h6 className="title text-gray font-12 mt-0 mb-0">
                        Businessman
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section: Registration Form --> */}
      <section
        className="layer-overlay overlay-white-8"
        data-tm-bg-img="https://via.placeholder.com/1920x800"
      >
        <div className="container-fluid">
          <div className="section-title">
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <h3 className="title text-theme-colored1">Registration Form</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form
                id="booking-form"
                name="booking-form"
                action="includes/event-register.php"
                method="post"
                enctype="multipart/form-data"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        name="register_name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Enter Email"
                        name="register_email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Enter Phone"
                        name="register_phone"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label>Ticket types</label>
                      <select name="ticket_type" className="form-control">
                        <option>One Person</option>
                        <option>Two Person</option>
                        <option>Family Pack</option>
                        <option>Premium</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label>Event types</label>
                      <select name="event_type" className="form-control">
                        <option>Event 1</option>
                        <option>Event 2</option>
                        <option>Event 3</option>
                        <option>All package</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb-3 text-center">
                      <input
                        name="form_botcheck"
                        className="form-control"
                        type="hidden"
                        value=""
                      />
                      <button
                        data-loading-text="Please wait..."
                        className="btn btn-theme-colored1 btn-round btn-block mt-20 pt-10 pb-10"
                        type="submit"
                      >
                        Register now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Job Form Validation--> */}
              {/* <script>
              $("#booking-form").validate({
                submitHandler: function(form) {
                  var form_btn = $(form).find('button[type="submit"]');
                  var form_result_div = '#form-result';
                  $(form_result_div).remove();
                  form_btn.before('<div id="form-result" className="alert alert-success" role="alert" style="display: none;"></div>');
                  var form_btn_old_msg = form_btn.html();
                  form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                  $(form).ajaxSubmit({
                    dataType:  'json',
                    success: function(data) {
                      if( data.status === 'true' ) {
                        $(form).find('.form-control').val('');
                      }
                      form_btn.prop('disabled', false).html(form_btn_old_msg);
                      $(form_result_div).html(data.message).fadeIn('slow');
                      setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
                    }
                  });
                }
              });
            </script> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="mb-20">Photo Gallery</h4>
              <div className="tm-owl-carousel-5col" data-nav="true">
                <div className="item">
                  <img src="//placehold.it/285x215" alt="images" />
                </div>
                <div className="item">
                  <img src="//placehold.it/285x215" alt="images" />
                </div>
                <div className="item">
                  <img src="//placehold.it/285x215" alt="images" />
                </div>
                <div className="item">
                  <img src="//placehold.it/285x215" alt="images" />
                </div>
                <div className="item">
                  <img src="//placehold.it/285x215" alt="images" />
                </div>
                <div className="item">
                  <img src="//placehold.it/285x215" alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsDetailScreen;
