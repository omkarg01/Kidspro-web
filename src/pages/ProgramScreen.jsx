import React from "react";
import PageTitle from "../components/PageTitle";
import { FaStar } from "react-icons/fa6";

const ProgramScreen = () => {
  return (
    <>
      {/* <PageTitle title={"Programs"} /> */}

      {/* <!-- Section: Activity --> */}
      <section
        class="bg-img-cover bg-img-center"
        // data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/p2.jpg"
        style={{
          backgroundImage: `url('https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/p2.jpg')`,
          // marginTop: '-34px',
          marginBlock: "-5%",
        }}
      >
        <div class="container pb-md-120" data-tm-padding-bottom="205px">
          <div class="section-title">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-xl-9">
                <div class="tm-sc-section-title section-title text-center">
                  <div class="title-wrapper">
                    <h2 class="title">
                      Our <span class="text-theme-colored3">Programs</span>
                    </h2>
                    <p>
                      Embark on a journey with Candibrain Preschool as we guide
                      your child through five distinct programs—{" "}
                      <span className="text-theme-colored1"> Playgroup</span>,{" "}
                      <span className="text-theme-colored2">Nursery </span>,{" "}
                      <span className="text-theme-colored3"> Junior KG</span>,{" "}
                      <span className="text-theme-colored1"> Senior KG </span>,
                      and{" "}
                      <span className="text-theme-colored4"> Day Care </span>.
                      From the early stages of socialization in Playgroup to the
                      advanced readiness for primary school in the Senior
                      Program, each program is crafted to stimulate cognitive
                      growth, foster essential skills, and instill a lifelong
                      love for learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-content">
            <div class="row">
              <div class="col-sm-12">
                <div class="tm-sc-departments tm-sc-departments-tab">
                  <ul class="nav nav-tabs">
                    <li class="bg-theme-colored1 active">
                      {" "}
                      <a
                        href="#tab-music-tabs"
                        class="active show"
                        data-bs-toggle="tab"
                      >
                        {" "}
                        <img
                          src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/abc-block.png"
                          alt=""
                          style={{
                            width: "auto",
                            maxWidth: "45%",
                            marginBottom: "0.5rem",
                          }}
                        />
                        {/* <i class="fas fa-music"></i> */}
                        <p class="m-0">Playgroup</p>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored2">
                      {" "}
                      <a href="#tab-learn-tabs" class="" data-bs-toggle="tab">
                        {" "}
                        {/* <i class="fas fa-graduation-cap"></i> */}
                        <img
                          src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/kindergarten.png"
                          alt=""
                          style={{
                            width: "auto",
                            maxWidth: "45%",
                            marginBottom: "0.5rem",
                          }}
                          />
                        {" "}
                        <p class="m-0">Nursery</p>
                        {" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored3">
                      {" "}
                      <a
                        href="#tab-painting-tabs"
                        class=""
                        data-bs-toggle="tab"
                      >
                        {" "}
                        {/* <i class="fas fa-paint-brush"></i> */}
                        <img
                          src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/hand-print.png"
                          alt=""
                          style={{
                            width: "auto",
                            maxWidth: "45%",
                            marginBottom: "0.5rem",
                          }}
                          />
                        {" "}
                        <p class="m-0">Junior KG</p>
                        {" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored1">
                      {" "}
                      <a href="#tab-sports-tabs" class="" data-bs-toggle="tab">
                        {" "}
                        {/* <i class="far fa-life-ring"></i>  */}
                        <img
                          src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/house.png"
                          alt=""
                          style={{
                            width: "auto",
                            maxWidth: "45%",
                            marginBottom: "0.5rem",
                          }}
                          />
                        {/* <span>Senior KG</span> */}
                        <p class="m-0">Senior KG</p>
                        {" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored4">
                      {" "}
                      <a
                        href="#tab-playground-tabs"
                        class=""
                        data-bs-toggle="tab"
                      >
                        {" "}
                        {/* <i class="fas fa-trophy"></i>  */}
                        <img
                          src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/block.png"
                          alt=""
                          style={{
                            width: "auto",
                            maxWidth: "45%",
                            marginBottom: "0.5rem",
                          }}
                          />
                        <p class="m-0">Day Care</p>
                        {" "}
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div
                      class="tab-pane fade in active show"
                      id="tab-music-tabs"
                    >
                      <div class="row">
                        <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored1">
                              Playgroup
                            </h3>
                            <p class="lead">
                              Welcome to the vibrant world of playgroup at
                              Candibrain Preschool, where curiosity and
                              imagination take center stage. Our playgroup
                              program is designed to provide a stimulating
                              environment for children aged{" "}
                              <span className="text-theme-colored1">
                                {" "}
                                1.5 to 2.5{" "}
                              </span>{" "}
                              years, fostering early socialization and
                              fundamental skill development.
                            </p>
                            <p>
                              Through age-appropriate activities and interactive
                              play, children embark on a journey of discovery,
                              laying the foundation for future academic success.
                              Our dedicated team of educators ensures a
                              nurturing atmosphere, encouraging each child to
                              explore, create, and build essential interpersonal
                              skills.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Structured play-based learning.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Introduction to basic shapes, colors, and
                                      numbers.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Storytelling and music sessions for
                                      sensory development.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Outdoor playtime for gross motor skill
                                      enhancement.{" "}
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Creative arts and crafts activities.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Regular communication with parents to
                                      track developmental milestones.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored1"
                                href="#"
                              >
                                View Details
                              </a>
                            </div> */}
                          </div>
                        </div>
                        <div class="col-lg-6 col-xl-5">
                          <img
                            src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0262_1_11zon.jpg"
                            alt=""
                            class="w-100 mb-md-30"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-learn-tabs">
                      <div class="row">
                        <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored2">
                              Nursery
                            </h3>
                            <p class="lead">
                              At Candibrain Preschool, the nursery program marks
                              the next step in your child's educational journey.
                              Tailored for children aged{" "}
                              <span className="text-theme-colored2">
                                {" "}
                                2.5 to 3.5{" "}
                              </span>{" "}
                              years, our nursery curriculum is designed to
                              provide a balanced blend of academic readiness and
                              social development.
                            </p>
                            <p>
                              With a focus on fostering independence and a love
                              for learning, our experienced educators engage
                              students in activities that promote cognitive
                              growth and language skills. The nursery program at
                              Candibrain is a holistic approach to early
                              education, ensuring that each child thrives in a
                              supportive and encouraging environment.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored2 me-2"></i> */}
                                      <FaStar className="text-theme-colored2" />
                                      {" "}
                                      Introduction to phonics and basic language
                                      skills.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored2 me-2"></i> */}
                                      <FaStar className="text-theme-colored2" />
                                      {" "}
                                      Hands-on exploration of math concepts.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored2 me-2"></i> */}
                                      <FaStar className="text-theme-colored2" />
                                      {" "}
                                      Themed learning units for
                                      interdisciplinary understanding.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored2 me-2"></i> */}
                                      <FaStar className="text-theme-colored2" />
                                      {" "}
                                      Development of fine motor skills through
                                      art and writing activities.{" "}
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored2 me-2"></i> */}
                                      <FaStar className="text-theme-colored2" />
                                      {" "}
                                      Interactive storytelling sessions to
                                      enhance language comprehension.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored2 me-2"></i> */}
                                      <FaStar className="text-theme-colored2" />
                                      {" "}
                                      Regular assessments and progress reports
                                      for parents.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored2"
                                href="#"
                              >
                                View Details
                              </a>
                            </div> */}
                          </div>
                        </div>
                        <div class="col-lg-6 col-xl-5">
                          <img
                            src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0419_1_11zon.jpg"
                            alt=""
                            class="w-100 mb-md-30"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-painting-tabs">
                      <div class="row">
                        <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored3">
                              Junior KG
                            </h3>
                            <p class="lead">
                              The Junior KG at Candibrain Preschool caters to
                              the dynamic needs of children aged{" "}
                              <span className="text-theme-colored3">
                                {" "}
                                3.5 to 4.5{" "}
                              </span>
                              years, offering a comprehensive curriculum that
                              blends academic readiness with creative
                              expression.
                            </p>
                            <p>
                              Our experienced educators guide students through a
                              structured learning path, introducing them to
                              foundational concepts in literacy, numeracy, and
                              critical thinking. The junior program focuses on
                              building a strong academic foundation while
                              nurturing each child's unique talents and
                              interests, ensuring a well-rounded and confident
                              learner.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored3 me-2"></i> */}
                                      <FaStar className="text-theme-colored3" />
                                      {" "}
                                      Advanced phonics and early reading
                                      comprehension.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored3 me-2"></i> */}
                                      <FaStar className="text-theme-colored3" />
                                      {" "}
                                      Introduction to basic mathematics and
                                      problem-solving.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored3 me-2"></i> */}
                                      <FaStar className="text-theme-colored3" />
                                      {" "}
                                      Hands-on science experiments for
                                      curiosity-driven learning.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored3 me-2"></i> */}
                                      <FaStar className="text-theme-colored3" />
                                      {" "}
                                      Creative expression through arts, drama,
                                      and music.{" "}
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored3 me-2"></i> */}
                                      <FaStar className="text-theme-colored3" />
                                      {" "}
                                      Outdoor activities for physical
                                      development and teamwork.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored3 me-2"></i> */}
                                      <FaStar className="text-theme-colored3" />
                                      {" "}
                                      Regular parent-teacher conferences to
                                      discuss progress.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored3"
                                href="#"
                              >
                                View Details
                              </a>
                            </div> */}
                          </div>
                        </div>
                        <div class="col-lg-6 col-xl-5">
                          <img
                            src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0363(1)_1_11zon.jpg"
                            alt=""
                            class="w-100 mb-md-30"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-sports-tabs">
                      <div class="row">
                        <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored1">
                              Senior KG
                            </h3>
                            <p class="lead">
                              The senior program at Candibrain Preschool is
                              designed for children aged{" "}
                              <span className="text-theme-colored1">
                                {" "}
                                4.5 to 5.5{" "}
                              </span>{" "}
                              years, preparing them for a smooth transition to
                              primary school. This program builds upon the
                              skills developed in earlier stages, focusing on
                              advanced literacy, numeracy, and critical
                              thinking.
                            </p>
                            <p>
                              Our experienced educators create a dynamic and
                              engaging learning environment, fostering a love
                              for learning and curiosity about the world. The
                              senior program equips children with the confidence
                              and knowledge needed to embark on their academic
                              journey successfully.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Advanced reading and comprehension skills.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Mastery of basic mathematics concepts.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Introduction to basic science and
                                      environmental awareness.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Critical thinking and problem-solving
                                      activities.{" "}
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Collaborative projects for teamwork and
                                      communication.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored1 me-2"></i> */}
                                      <FaStar className="text-theme-colored1" />
                                      {" "}
                                      Individualized learning plans to address
                                      specific learning needs.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored1"
                                href="#"
                              >
                                View Details
                              </a>
                            </div> */}
                          </div>
                        </div>
                        <div class="col-lg-6 col-xl-5">
                          <img
                            src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0396_4_11zon.jpg"
                            alt=""
                            class="w-100 mb-md-30"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-playground-tabs">
                      <div class="row">
                        <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored4">
                              Day Care Program
                            </h3>
                            <p class="lead">
                              Our day care program at Candibrain Preschool
                              provides a safe and nurturing environment for
                              children of various age groups, ensuring their
                              well-being while parents are at work or otherwise
                              occupied.
                            </p>
                            <p>
                              With a focus on creating a home away from home,
                              our day care program includes a balance of
                              structured activities and free play, fostering
                              socialization, creativity, and emotional
                              development.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored4 me-2"></i> */}
                                      <FaStar className="text-theme-colored4" />
                                      {" "}
                                      Safe and secure environment with trained
                                      caregivers.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored4 me-2"></i> */}
                                      <FaStar className="text-theme-colored4" />
                                      {" "}
                                      Balanced schedule including nap time,
                                      meals, and play.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored4 me-2"></i> */}
                                      <FaStar className="text-theme-colored4" />
                                      {" "}
                                      Age-appropriate learning activities.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored4 me-2"></i> */}
                                      <FaStar className="text-theme-colored4" />
                                      {" "}
                                      Outdoor play for physical development.{" "}
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored4 me-2"></i> */}
                                      <FaStar className="text-theme-colored4" />
                                      {" "}
                                      Regular updates and communication with
                                      parents.
                                    </li>
                                    <li>
                                      {/* <i class="icon fas fa-heart text-theme-colored4 me-2"></i> */}
                                      <FaStar className="text-theme-colored4" />
                                      {" "}
                                      Flexible hours to accommodate varying
                                      schedules.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored4"
                                href="#"
                              >
                                View Details
                              </a>
                            </div> */}
                          </div>
                        </div>
                        <div class="col-lg-6 col-xl-5">
                          <img
                            src="https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0358_4_11zon.jpg"
                            alt=""
                            class="w-100 mb-md-30"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tm-floating-objects">
          <span
            class="z-index-1 bg-img-cover"
            data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/f2.png"
            data-tm-width="100%"
            data-tm-height="143"
            data-tm-top="auto"
            data-tm-bottom="0"
            data-tm-left="0"
            data-tm-right="0"
            data-tm-opacity="-100px"
          ></span>
        </div>
      </section>
    </>
  );
};

export default ProgramScreen;
