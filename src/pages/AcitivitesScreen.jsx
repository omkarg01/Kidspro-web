import React from "react";
import PageTitle from "../components/PageTitle";

const AcitivityScreen = () => {
  return (
    <>
      <PageTitle title={"Activity"} />

      {/* <!-- Section: Activity --> */}
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
                      Our <span class="text-theme-colored3">Activities</span>
                    </h2>
                    <p>
                      Dive into the world of hands-on activities and engaging
                      projects that make learning at CandiBrain Preschool a
                      delightful adventure. The gallery showcases the diverse
                      range of activities, from art and science experiments to
                      cultural celebrations and themed events. It's a visual
                      feast that highlights the dynamic and stimulating
                      experiences we offer.
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
                        <i class="fas fa-music"></i> <span>Music</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored2">
                      {" "}
                      <a href="#tab-learn-tabs" class="" data-bs-toggle="tab">
                        {" "}
                        <i class="fas fa-graduation-cap"></i> <span>Learn</span>{" "}
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
                        <i class="fas fa-paint-brush"></i> <span>Painting</span>{" "}
                      </a>
                    </li>
                    <li class="bg-theme-colored1">
                      {" "}
                      <a href="#tab-sports-tabs" class="" data-bs-toggle="tab">
                        {" "}
                        <i class="far fa-life-ring"></i> <span>Sports</span>{" "}
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
                        <i class="fas fa-trophy"></i> <span>Playground</span>{" "}
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
                              Music
                            </h3>
                            <p class="lead">
                              Engaging in musical activities at Candibrain
                              Preschool is a harmonious journey for young
                              learners. Our music program is designed to foster
                              a love for rhythm, melody, and self-expression.
                            </p>
                            <p>
                              Students participate in interactive sessions where
                              they explore various instruments, sing along to
                              age-appropriate songs, and develop a sense of
                              rhythm through creative movement. The joy of music
                              not only enhances cognitive development but also
                              encourages teamwork and boosts confidence.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Instrument Exploration
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Singing Adventures
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Rhythm and Movement
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Musical Storytelling{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Group Performances
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Creative Sound Play
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
                            src="https://html.kodesolution.com/2017/kidspro-html-b5/images/services/1.jpg"
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
                              Learn
                            </h3>
                            <p class="lead">
                              At Candibrain Preschool, the "Learn" activities
                              are carefully curated to stimulate intellectual
                              curiosity and a passion for discovery. Our program
                              focuses on cultivating foundational skills through
                              hands-on experiences, interactive lessons, and a
                              playful approach to learning.
                            </p>
                            <p>
                              Students embark on a journey where every moment
                              becomes an opportunity to explore, inquire, and
                              build a strong foundation for lifelong learning.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Hands-On Exploration
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Interactive Lessons
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Science Adventures
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Literacy Adventures{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Math Magic
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Inquisitive Play
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
                            src="https://html.kodesolution.com/2017/kidspro-html-b5/images/services/2.jpg"
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
                              Painting
                            </h3>
                            <p class="lead">
                              Diving into the world of creativity, our painting
                              activities at Candibrain Preschool ignite the
                              artistic spirit in young minds. The painting
                              program is designed to foster self-expression,
                              fine motor skills, and an appreciation for colors
                              and shapes.
                            </p>
                            <p>
                              Students explore various painting techniques and
                              materials, allowing their imagination to flourish
                              as they create unique masterpieces.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Exploration of Colors
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Texture Play
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Themed Art Projects
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Outdoor Painting{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Collaborative Murals
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Art Showcases
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
                            src="https://html.kodesolution.com/2017/kidspro-html-b5/images/services/3.jpg"
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
                              Sports
                            </h3>
                            <p class="lead">
                              Candibrain Preschool believes in the holistic
                              development of children, and our sports activities
                              are designed to promote physical fitness,
                              coordination, and teamwork.
                            </p>
                            <p>
                              Through a variety of age-appropriate games and
                              activities, children not only enhance their motor
                              skills but also develop a positive attitude
                              towards an active and healthy lifestyle.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Basic Motor Skills
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Team Building Games
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Introduction to Sports
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Obstacle Courses{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Sportsmanship Values
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Fun Fitness Challenges
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
                            src="https://html.kodesolution.com/2017/kidspro-html-b5/images/services/4.jpg"
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
                              Playground
                            </h3>
                            <p class="lead">
                              Play is an integral part of early childhood
                              development, and our outdoor and indoor play areas
                              are designed to promote physical activity, social
                              interaction, and imaginative play.
                            </p>
                            <p>
                              These spaces provide opportunities for children to
                              explore, climb, and engage in activities that
                              enhance their gross motor skills and foster a
                              sense of teamwork.
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Safe Exploration
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Imaginative Play
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Social Interaction
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Physical Fitness{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Nature Connection
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Structured Games
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
                            src="https://html.kodesolution.com/2017/kidspro-html-b5/images/services/5.jpg"
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

export default AcitivityScreen;
