import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import styles from './EnrollScreen.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const data = [
  {
    image:
      "https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0404_2_11zon.jpg",
    caption: "Candibrain Preschool",
    description: "- an IITian's Initiative",
  },
  // {
  //   image: "https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0416_3_11zon.jpg",
  //   caption: "Candibrain Preschool",
  //   description: "- an IITian's Initiative",
  // },
];

function Slider() {
  const placeholderText = "Date of Birth";
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [formData, setFormData] = useState({
    childname: "",
    gender: "",
    dob: "",
    enrollfor: "",
    father: "father",
    mother: "mother",
    fatherphone: "",
    motherphone: "123456",
    addressline1: "addressline1",
    addressline2: "addressline2",
    state: "state",
    city: "city",
    postalcode: "postalcode",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log("handleChange", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // let formData = {
    //   addressline1: "addressline1",
    //   addressline2: "addressline2",
    //   city: "city",
    //   dob: "2019-02-04",
    //   email: "sowmyamohan918@gmail.com",
    //   enrollfor: "playgroup",
    //   father: "Vishal Singh",
    //   fatherphone: "8884902800",
    //   gender: "female",
    //   mother: "Sowmya Mohan",
    //   motherphone: "9740911636",
    //   childname: "Aaruhi Singh",
    //   postalcode: "641035",
    //   state: "Tamil Nadu",
    // };

    console.log("formData", formData);
    const apiUrl = "https://api.candibrain.com/enroll-now/";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // You may want to reset the form or handle success in some way
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const styles = {
    backgroundImage: `url('https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0416_3_11zon.jpg')`,
    // Default padding left
    paddingLeft: "40%",
  };

  // Adjust paddingLeft based on screen size
  if (window.innerWidth < 425) {
    styles.paddingLeft = "0"; // Adjust this value according to your requirements
  }

  return (
    <section
      class="bg-img-cover bg-img-center"
      // data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/p2.jpg"
      style={styles}
    >
      <section>
        <div className="container border-2">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="border-1px p-25 font-size-15">
                <h4 className="text-theme-colored4 text-uppercase m-0">
                  Enroll Form
                </h4>
                -<div className="line-bottom mb-30"></div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur elit.</p> */}
                <form
                  id="appointment_form"
                  // name="appointment_form"
                  className="mt-30"
                  // method="post"
                  // action="includes/appointment.php"
                  onSubmit={submitHandler}
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="mb-3 mb-10">
                      <label
                          className="form-label text-theme-colored3"
                          style={{
                            marginTop: "2px",
                            fontWeight: 'bold' 
                          }}
                        >
                          {"Child Name"}
                        </label>
                        <input
                          name="childname"
                          className="form-control"
                          type="text"
                          placeholder="Enter Child's Name"
                          // aria-required="true"
                          value={formData.childname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="mb-3 mb-10">
                      <label
                          className="form-label text-theme-colored3"
                          style={{
                            marginTop: "2px",
                            fontWeight: 'bold' 
                          }}
                        >
                          {"Gender"}
                        </label>
                        <select
                          name="gender"
                          className="form-control"
                          placeholder="Enter Child's Name"
                          aria-required="true"
                          value={formData.gender}
                          onChange={handleChange}
                        >
                          <option value="" selected>
                            --Gender--
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="mb-3 mb-10">
                        <label
                          className="form-label text-theme-colored3 "
                          style={{
                            marginTop: "2px",
                            fontWeight: 'bold' 
                          }}
                        >
                          {"Date of Birth"}
                        </label>
                        <input
                          name="dob"
                          className="form-control required"
                          type="date"
                          placeholder={placeholderText}
                          aria-required="true"
                          value={formData.dob}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="mb-3 mb-10">
                      <label
                          className="form-label text-theme-colored3 "
                          style={{
                            marginTop: "2px",
                            fontWeight: 'bold' 
                          }}
                        >
                          {"Select Program"}
                        </label>
                        <select
                          name="enrollfor"
                          className="form-control"
                          //   type="text"
                          placeholder="className Enrol For"
                          aria-required="true"
                          value={formData.enrollfor}
                          onChange={handleChange}
                        >
                          <option value="" selected>
                            -- Select Program --
                          </option>
                          <option value="playgroup">Play Group</option>
                          <option value="nursery">Nursery</option>
                          <option value="junior-kg">Junior KG</option>
                          <option value="senior-kg">Senior KG</option>
                          <option value="daycare">Day Care</option>
                          <option value="after-school-program">
                            After School Program
                          </option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="col-sm-6">
                      <div className="mb-3 mb-10">
                        <input
                          name="father"
                          className="form-control required email"
                          type="text"
                          placeholder="Father's Name"
                          aria-required="true"
                          value={formData.father}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}
                    <div className="col-sm-12">
                      <div className="mb-3 mb-10">
                      <label
                          className="form-label text-theme-colored3"
                          style={{
                            marginTop: "2px",
                            fontWeight: 'bold' 
                          }}
                        >
                          {"Phone No."}
                        </label>
                        <input
                          name="fatherphone"
                          className="form-control required"
                          type="text"
                          placeholder="Enter Phone No."
                          aria-required="true"
                          value={formData.fatherphone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <div className="col-sm-6">
                      <div className="mb-3 mb-10">
                        <input
                          name="mother"
                          className="form-control required email"
                          type="text"
                          placeholder="Mother's Name"
                          aria-required="true"
                          value={formData.mother}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}
                    {/* <div className="col-sm-6">
                      <div className="mb-3 mb-10">
                        <input
                          name="motherphone"
                          className="form-control required"
                          type="text"
                          placeholder="Enter Phone"
                          aria-required="true"
                          value={formData.motherphone}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-sm-12">
                      <div className="mb-3 mb-10">
                        <input
                          name="addressline1"
                          className="form-control required"
                          type="text"
                          placeholder="Address Line 1"
                          aria-required="true"
                          value={formData.addressline1}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-sm-12">
                      <div className="mb-3 mb-10">
                        <input
                          name="addressline2"
                          className="form-control required"
                          type="text"
                          placeholder="Address Line 2"
                          aria-required="true"
                          value={formData.addressline2}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-sm-6">
                      <div className="mb-3 mb-10">
                        <input
                          name="state"
                          className="form-control required"
                          type="text"
                          placeholder="State"
                          aria-required="true"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-sm-6">
                      <div className="mb-3 mb-10">
                        <input
                          name="city"
                          className="form-control required"
                          type="text"
                          placeholder="City"
                          aria-required="true"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-sm-6">
                      <div className="mb-3 mb-10">
                        <input
                          name="postalcode"
                          className="form-control required"
                          type="text"
                          placeholder="Postal Code"
                          aria-required="true"
                          value={formData.postalcode}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}

                    {/* <div className="col-sm-12">
                      <div className="mb-3 mb-10">
                        <input
                          name="email"
                          className="form-control required"
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className="mb-3 tm-sc-button mb-0 mt-20">
                    <button
                      type="submit"
                      className="btn btn-theme-colored1 btn-sm"
                      data-loading-text="Please wait..."
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Slider;
