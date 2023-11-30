import React from "react";
import PageTitle from "../components/PageTitle";

const EnrollScreen = () => {
  return (
    <div>
      <PageTitle title={"Enrol Now"} />

      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="border-1px p-25">
                <h4 class="text-theme-colored1 text-uppercase m-0">
                  Enroll Form
                </h4>
                <div class="line-bottom mb-30"></div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur elit.</p> */}
                <form
                  id="appointment_form"
                  name="appointment_form"
                  class="mt-30"
                  method="post"
                  action="includes/appointment.php"
                >
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_name"
                          class="form-control"
                          type="text"
                          placeholder="Enter Child's Name"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="mb-3 mb-10">
                        <select
                          name="form_name"
                          class="form-control"
                          //   type="text"
                          placeholder="Enter Child's Name"
                          aria-required="true"
                        >
                          <option value="" selected>
                            --Gender--
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_appontment_date"
                          class="form-control required date-picker"
                          type="text"
                          placeholder="Date of Birth"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="mb-3 mb-10">
                        <select
                          name="form_name"
                          class="form-control"
                          //   type="text"
                          placeholder="Class Enrol For"
                          aria-required="true"
                        >
                          <option value="" selected>
                            -- Select Class Enrol For --
                          </option>
                          <option>Play Group</option>
                          <option>Nursery</option>
                          <option>Junior KG</option>
                          <option>Senior KG</option>
                          <option>Day Care</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_email"
                          class="form-control required email"
                          type="text"
                          placeholder="Father's Name"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_phone"
                          class="form-control required"
                          type="text"
                          placeholder="Enter Phone"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_email"
                          class="form-control required email"
                          type="text"
                          placeholder="Mother's Name"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_phone"
                          class="form-control required"
                          type="text"
                          placeholder="Enter Phone"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div class="col-sm-12">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_phone"
                          class="form-control required"
                          type="text"
                          placeholder="Address Line 1"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div class="col-sm-12">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_phone"
                          class="form-control required"
                          type="text"
                          placeholder="Address Line 2"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_phone"
                          class="form-control required"
                          type="text"
                          placeholder="State"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_phone"
                          class="form-control required"
                          type="text"
                          placeholder="City"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_phone"
                          class="form-control required"
                          type="text"
                          placeholder="Postal Code"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div class="col-sm-12">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_phone"
                          class="form-control required"
                          type="email"
                          placeholder="Email"
                          //   aria-required="true"
                        />
                      </div>
                    </div>

                    {/* <div class="col-sm-12">
                      <div class="mb-3 mb-10">
                        <input
                          name="form_appontment_time"
                          class="form-control required time-picker"
                          type="text"
                          placeholder="Appoinment Time"
                          aria-required="true"
                        />
                      </div>
                    </div> */}
                  </div>
                  {/* <div class="mb-3 mb-10">
                    <textarea
                      name="form_message"
                      class="form-control required"
                      placeholder="Enter Message"
                      rows="5"
                      aria-required="true"
                    ></textarea>
                  </div> */}
                  <div class="mb-3 tm-sc-button mb-0 mt-20">
                    <input
                      name="form_botcheck"
                      class="form-control"
                      type="hidden"
                      value=""
                    />
                    <button
                      type="submit"
                      class="btn btn-theme-colored1 btn-sm"
                      data-loading-text="Please wait..."
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </form>
                {/* <!-- Appointment Form Validation--> */}
                {/* <script>
                (function($) {
                  $("#appointment_form").validate({
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
                })(jQuery);
              </script> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollScreen;
