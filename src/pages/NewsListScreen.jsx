import React from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const NewsListScreen = () => {
  return (
    <>
      {/* <!-- Section: page title --> */}
      <PageTitle title={"News & Events"} />

      {/* <!-- Section: News List Screen --> */}
      <section
        class="bg-img-cover bg-img-center"
        data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/p2.jpg"
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
                        href="#tab-yoga-tabs"
                        class="active show"
                        data-bs-toggle="tab"
                      >
                        {" "}
                        <i class="fas fa-music"></i>
                        <span>Yoga</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored2">
                      {" "}
                      <a href="#tab-karate-tabs" class="" data-bs-toggle="tab">
                        {" "}
                        <i class="fas fa-graduation-cap"></i>{" "}
                        <span>Karate</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored3">
                      {" "}
                      <a
                        href="#tab-robotics-tabs"
                        class=""
                        data-bs-toggle="tab"
                      >
                        {" "}
                        <i class="fas fa-paint-brush"></i> <span>Robotics</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored1">
                      {" "}
                      <a href="#tab-coding-tabs" class="" data-bs-toggle="tab">
                        {" "}
                        <i class="far fa-life-ring"></i> <span>Coding</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored4">
                      {" "}
                      <a
                        href="#tab-handwriting-tabs"
                        class=""
                        data-bs-toggle="tab"
                      >
                        {" "}
                        <i class="fas fa-trophy"></i> <span>Handwriting</span>{" "}
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div
                      class="tab-pane fade in active show"
                      id="tab-yoga-tabs"
                    >
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored1">
                              Yoga
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
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Structured play-based learning.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Introduction to basic shapes, colors, and
                                      numbers.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
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
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Outdoor playtime for gross motor skill
                                      enhancement.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Creative arts and crafts activities.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Regular communication with parents to
                                      track developmental milestones.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          {/* <img
                            src="https://html.kodesolution.com/2017/kidspro-html-b5/images/services/1.jpg"
                            alt=""
                            class="w-100 mb-md-30"
                          /> */}
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-karate-tabs">
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored2">
                              Karate
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
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Introduction to phonics and basic language
                                      skills.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Hands-on exploration of math concepts.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
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
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Development of fine motor skills through
                                      art and writing activities.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Interactive storytelling sessions to
                                      enhance language comprehension.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Regular assessments and progress reports
                                      for parents.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                           <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored2"
                                href="#"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-robotics-tabs">
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored3">
                              Robotics
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
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Advanced phonics and early reading
                                      comprehension.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Introduction to basic mathematics and
                                      problem-solving.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
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
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Creative expression through arts, drama,
                                      and music.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Outdoor activities for physical
                                      development and teamwork.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Regular parent-teacher conferences to
                                      discuss progress.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored3"
                                href="#"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-coding-tabs">
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored1">
                              Coding
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
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Advanced reading and comprehension skills.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Mastery of basic mathematics concepts.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
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
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Critical thinking and problem-solving
                                      activities.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Collaborative projects for teamwork and
                                      communication.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Individualized learning plans to address
                                      specific learning needs.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                             <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored1"
                                href="#"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-handwriting-tabs">
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored4">
                              Handwriting
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
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Safe and secure environment with trained
                                      caregivers.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Balanced schedule including nap time,
                                      meals, and play.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Age-appropriate learning activities.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Outdoor play for physical development.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Regular updates and communication with
                                      parents.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Flexible hours to accommodate varying
                                      schedules.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                             <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored4"
                                href="#"
                              >
                                View Details
                              </a>
                            </div> 
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-sm-12">
                <div class="tm-sc-departments tm-sc-departments-tab">
                  <ul class="nav nav-tabs">
                    <li class="bg-theme-colored1 active">
                      {" "}
                      <a
                        href="#tab-abacus-tabs"
                        class="active show"
                        data-bs-toggle="tab"
                      >
                        {" "}
                        <i class="fas fa-music"></i> <span>Abacus</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored2">
                      {" "}
                      <a
                        href="#tab-fun-activity-tabs"
                        class=""
                        data-bs-toggle="tab"
                      >
                        {" "}
                        <i class="fas fa-graduation-cap"></i>{" "}
                        <span>Fun Activity</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored3">
                      {" "}
                      <a
                        href="#tab-dance-music-tabs"
                        class=""
                        data-bs-toggle="tab"
                      >
                        {" "}
                        <i class="fas fa-graduation-cap"></i>{" "}
                        <span>Dance & Music</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored1">
                      {" "}
                      <a href="#tab-library-tabs" class="" data-bs-toggle="tab">
                        {" "}
                        <i class="far fa-life-ring"></i> <span>Library</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored4">
                      {" "}
                      <a href="#tab-chess-tabs" class="" data-bs-toggle="tab">
                        {" "}
                        <i class="fas fa-trophy"></i> <span>Chess</span>{" "}
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div
                      class="tab-pane fade in active show"
                      id="tab-abacus-tabs"
                    >
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored1">
                              Abacus
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
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Structured play-based learning.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Introduction to basic shapes, colors, and
                                      numbers.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
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
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Outdoor playtime for gross motor skill
                                      enhancement.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Creative arts and crafts activities.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Regular communication with parents to
                                      track developmental milestones.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                             <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored1"
                                href="#"
                              >
                                View Details
                              </a>
                            </div> 
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-fun-activity-tabs">
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored2">
                              Fun Activity
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
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Introduction to phonics and basic language
                                      skills.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Hands-on exploration of math concepts.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
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
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Development of fine motor skills through
                                      art and writing activities.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Interactive storytelling sessions to
                                      enhance language comprehension.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Regular assessments and progress reports
                                      for parents.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                             <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored2"
                                href="#"
                              >
                                View Details
                              </a>
                            </div> 
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-dance-music-tabs">
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored3">
                              Dance & Music
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
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Advanced phonics and early reading
                                      comprehension.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Introduction to basic mathematics and
                                      problem-solving.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
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
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Creative expression through arts, drama,
                                      and music.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Outdoor activities for physical
                                      development and teamwork.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Regular parent-teacher conferences to
                                      discuss progress.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored3"
                                href="#"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-library-tabs">
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored1">
                              Library
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
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Advanced reading and comprehension skills.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Mastery of basic mathematics concepts.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
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
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Critical thinking and problem-solving
                                      activities.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Collaborative projects for teamwork and
                                      communication.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Individualized learning plans to address
                                      specific learning needs.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored1"
                                href="#"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab-chess-tabs">
                      <div class="row">
                        {/* <div class="col-lg-6 col-xl-7">
                          <div class="tab-left-part mb-lg-40">
                            <h3 class="title mb-20 text-theme-colored4">
                              chess
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
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Safe and secure environment with trained
                                      caregivers.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Balanced schedule including nap time,
                                      meals, and play.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Age-appropriate learning activities.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Outdoor play for physical development.{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Regular updates and communication with
                                      parents.
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Flexible hours to accommodate varying
                                      schedules.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="tab-contact d-flex flex-column flex-md-row">
                              <a
                                class="btn btn-sm btn-dark btn-theme-colored4"
                                href="#"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div> */}
                        <div class="col-lg-8 col-xl-8 mx-auto">
                          <iframe
                            src="https://www.youtube.com/embed/Hr5iLG7sUa0"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                          ></iframe>
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

      {/* <!-- News --> */}
      {/* <section>
        <div class="container mt-30 mb-30 pt-30 pb-30">
          <div class="row">
            <div class="col-md-6 order-lg-2">
              <div class="blog-posts">
                <article class="post clearfix mb-30 pb-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb">
                      <img
                        src={
                          "https://html.kodesolution.com/2017/kidspro-html-b5/images/shop/portfolio-big1.jpg"
                        }
                        alt="images"
                        class="img-responsive img-fullwidth"
                      />
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20 pr-10">
                    <div class="entry-meta mt-0">
                      <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i class="far fa-calendar-alt mr-10 text-theme-colored1"></i>{" "}
                        Jul 20, 2021
                      </span>
                      <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i class="far fa-comments mr-10 text-theme-colored1"></i>{" "}
                        214 Comments
                      </span>
                    </div>
                    <h4 class="entry-title">
                      <Link to={"1"}>Post title here</Link>
                    </h4>
                    <p class="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                      Molestias eius illum libero dolor nobis deleniti, sint
                      assumenda. Pariatur iste veritatis excepturi, ipsa optio
                      nobis.
                    </p>
                    <Link to={"1"}>Read more</Link>
                    <div class="clearfix"></div>
                  </div>
                </article>

                <article class="post clearfix mb-30 pb-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb">
                      <iframe
                        src="https://player.vimeo.com/video/114959015?title=0&byline=0&portrait=0"
                        width="640"
                        height="360"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20 pr-10">
                    <div class="entry-meta mt-0">
                      <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i class="far fa-calendar-alt mr-10 text-theme-colored1"></i>{" "}
                        Jul 20, 2021
                      </span>
                      <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i class="far fa-comments mr-10 text-theme-colored1"></i>{" "}
                        214 Comments
                      </span>
                    </div>
                    <h4 class="entry-title">
                      <a href="blog-single-right-sidebar.html">
                        Post title here
                      </a>
                    </h4>
                    <p class="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                      Molestias eius illum libero dolor nobis deleniti, sint
                      assumenda. Pariatur iste veritatis excepturi, ipsa optio
                      nobis.
                    </p>
                    <a href="#" class="btn btn-plain-text-with-arrow">
                      Read more
                    </a>
                    <div class="clearfix"></div>
                  </div>
                </article>

                <article class="post clearfix mb-30 pb-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb">
                      <iframe
                        width="600"
                        height="340"
                        src="http://www.youtube.com/embed/oIDqz2BrVec?autoplay=0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20 pr-10">
                    <div class="entry-meta mt-0">
                      <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i class="far fa-calendar-alt mr-10 text-theme-colored1"></i>{" "}
                        Jul 20, 2021
                      </span>
                      <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i class="far fa-comments mr-10 text-theme-colored1"></i>{" "}
                        214 Comments
                      </span>
                    </div>
                    <h4 class="entry-title">
                      <a href="blog-single-right-sidebar.html">
                        Post title here
                      </a>
                    </h4>
                    <p class="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                      Molestias eius illum libero dolor nobis deleniti, sint
                      assumenda. Pariatur iste veritatis excepturi, ipsa optio
                      nobis.
                    </p>
                    <a href="#" class="btn btn-plain-text-with-arrow">
                      Read more
                    </a>
                    <div class="clearfix"></div>
                  </div>
                </article>

                <article class="post clearfix mb-30 pb-30">
                  <div class="entry-header">
                    <div class="post-thumb thumb">
                      <div class="tm-owl-carousel-1col" data-nav="true">
                        <div class="item">
                          <img
                            src="images/shop/portfolio-big1.jpg"
                            alt="images"
                          />
                        </div>
                        <div class="item">
                          <img
                            src="images/shop/portfolio-big1.jpg"
                            alt="images"
                          />
                        </div>
                        <div class="item">
                          <img
                            src="images/shop/portfolio-big1.jpg"
                            alt="images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="entry-content border-1px p-20 pr-10">
                    <div class="entry-meta mt-0">
                      <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i class="far fa-calendar-alt mr-10 text-theme-colored1"></i>{" "}
                        Jul 20, 2021
                      </span>
                      <span class="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i class="far fa-comments mr-10 text-theme-colored1"></i>{" "}
                        214 Comments
                      </span>
                    </div>
                    <h4 class="entry-title">
                      <a href="blog-single-right-sidebar.html">
                        Post title here
                      </a>
                    </h4>
                    <p class="mt-10">
                      Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                      Molestias eius illum libero dolor nobis deleniti, sint
                      assumenda. Pariatur iste veritatis excepturi, ipsa optio
                      nobis.
                    </p>
                    <a href="#" class="btn btn-plain-text-with-arrow">
                      Read more
                    </a>
                    <div class="clearfix"></div>
                  </div>
                </article>
                <nav>
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="next page-link" href="#">
                        «
                      </a>
                    </li>
                    <li class="page-item active">
                      <span class="page-link">1</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="next page-link" href="#">
                        »
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-md-3 order-lg-1">
              <div class="sidebar sidebar-left mt-sm-30">
                <div class="widget widget_categories">
                  <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">
                    Categories
                  </h4>
                  <ul>
                    <li class="cat-item">
                      <a href="#">Anxiety</a>{" "}
                    </li>
                    <li class="cat-item">
                      <a href="#">Grief and loss</a>{" "}
                    </li>
                    <li class="cat-item">
                      <a href="#">Uncategorized</a>{" "}
                    </li>
                  </ul>
                </div>
                <div class="widget widget_tag_cloud">
                  <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">
                    Tags
                  </h4>
                  <div class="tagcloud">
                    <a href="#" class="tag-cloud-link">
                      health
                    </a>
                    <a href="#" class="tag-cloud-link">
                      medical
                    </a>
                    <a href="#" class="tag-cloud-link">
                      news
                    </a>
                    <a href="#" class="tag-cloud-link">
                      latest
                    </a>
                  </div>
                </div>
                <div class="widget widget_text text-center">
                  <div class="textwidget">
                    <div class="section-typo-light bg-theme-colored1 mb-md-40 p-30 pt-40 pb-40">
                      {" "}
                      <img
                        class="size-full wp-image-800 aligncenter"
                        src="images/headphone-128.png"
                        alt="images"
                        width="128"
                        height="128"
                      />
                      <h4>Online Help!</h4>
                      <h5>+(123) 456-78-90</h5>
                    </div>
                  </div>
                </div>
                <div class="widget widget-brochure-box clearfix">
                  <a class="brochure-box brochure-box-theme-colored1" href="#">
                    <i class="far fa-file-word brochure-icon"></i>
                    <h5 class="text">Download PDF</h5>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 order-lg-3">
              <div class="sidebar sidebar-right mt-sm-30">
                <div class="widget">
                  <h5 class="widget-title">Search box</h5>
                  <div class="search-form">
                    <form>
                      <div class="input-group">
                        <input
                          type="text"
                          placeholder="Click to Search"
                          class="form-control search-input"
                        />
                        <button
                          type="submit"
                          class="btn btn-theme-colored1 search-button"
                        >
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="widget">
                  <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">
                    Latest News
                  </h4>
                  <div class="latest-posts">
                    <article class="post clearfix pb-0 mb-20">
                      <a class="post-thumb" href="#">
                        <img src="images/shop/portfolio-sq1.jpg" alt="images" />
                      </a>
                      <div class="post-right">
                        <h5 class="post-title mt-0">
                          <a href="#">Sustainable Construction</a>
                        </h5>
                        <span class="post-date">
                          <time
                            class="entry-date"
                            datetime="2021-05-15T06:10:26+00:00"
                          >
                            April 15, 2021
                          </time>
                        </span>
                      </div>
                    </article>
                    <article class="post clearfix pb-0 mb-20">
                      <a class="post-thumb" href="#">
                        <img src="images/shop/portfolio-sq2.jpg" alt="images" />
                      </a>
                      <div class="post-right">
                        <h5 class="post-title mt-0">
                          <a href="#">Industrial Coatings</a>
                        </h5>
                        <span class="post-date">
                          <time
                            class="entry-date"
                            datetime="2021-05-15T06:10:26+00:00"
                          >
                            April 15, 2021
                          </time>
                        </span>
                      </div>
                    </article>
                    <article class="post clearfix pb-0 mb-20">
                      <a class="post-thumb" href="#">
                        <img src="images/shop/portfolio-sq3.jpg" alt="images" />
                      </a>
                      <div class="post-right">
                        <h5 class="post-title mt-0">
                          <a href="#">Storefront Installations</a>
                        </h5>
                        <span class="post-date">
                          <time
                            class="entry-date"
                            datetime="2021-05-15T06:10:26+00:00"
                          >
                            April 15, 2021
                          </time>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>

                <div class="widget widget_archive">
                  <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">
                    Archives
                  </h4>
                  <ul>
                    <li>
                      <a href="#">October 2021</a>
                    </li>
                    <li>
                      <a href="#">February 2021</a>
                    </li>
                  </ul>
                </div>
                <div class="widget widget_meta">
                  <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">
                    Meta
                  </h4>
                  <ul>
                    <li>
                      <a href="#">Site Admin</a>
                    </li>
                    <li>
                      <a href="#">Log out</a>
                    </li>
                    <li>
                      <a href="#">Entries feed</a>
                    </li>
                    <li>
                      <a href="#">Comments feed</a>
                    </li>
                    <li>
                      <a href="#">WordPress.org</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default NewsListScreen;
