import React from "react";
import PageTitle from "../components/PageTitle";

const AboutScreen = () => {
  return (
    <>
      <PageTitle title={"About"} />

      {/* <!-- Section: About Us --> */}
      <section>
        <div class="container" data-tm-padding-bottom="220px">
          <div class="section-content">
            <div class="row">
              <div class="col-lg-6 col-xl-8">
                <div class="about-box-contents">
                  <div class="destails">
                    <h3 class="text-theme-colored2">Welcome To CandiBrain Preschool</h3>
                    <h4 class="text-theme-colored3 line-bottom">
                      World Best Education In Our Kindergarten
                    </h4>
                    <p>"Welcome to CandiBrain Preschool, where the magic of early childhood education comes to life! Established with a vision to create a nurturing space for young minds to flourish, we take pride in being more than just a preschool – we're a community dedicated to sparking curiosity and igniting a love for learning."</p>
                    <p>"At the heart of CandiBrain Preschool is our belief that every child is a unique individual, and our approach revolves around cultivating their individual strengths. Our team of experienced educators is committed to providing a warm, inclusive atmosphere that encourages exploration, creativity, and social development."</p>
                    <p>"We understand that the early years are crucial for laying the groundwork for a lifetime of learning. Our curriculum is thoughtfully designed to blend play-based activities with educational fundamentals, ensuring a holistic approach to early childhood education. We celebrate diversity, foster a sense of community, and create an environment where each child feels valued and supported."</p>
                    <p>"Safety is paramount in our preschool community. Our facilities are equipped with modern safety measures, and we maintain a low student-to-teacher ratio to ensure personalized attention for every child. We strive to create an atmosphere where parents feel confident and children feel secure, making CandiBrain Preschool a home away from home."</p>
                    <p>"Join us on this exciting journey of discovery and growth. At CandiBrain Preschool, we're not just shaping minds; we're nurturing the future leaders, thinkers, and dreamers of tomorrow. Come, be a part of our vibrant educational family!"</p>
                  </div>
                </div>
                {/* <div class="row">
                  <div class="col-sm-6">
                    <div class="tm-sc-icon-box icon-box icon-left text-center text-lg-start iconbox-centered-in-responsive iconbox-theme-colored3 animate-icon-on-hover animate-icon-rotate-y mb-30">
                      <div class="icon-box-wrapper">
                        <div class="icon-wrapper">
                          {" "}
                          <a class="icon icon-sm icon-dark icon-circled">
                            {" "}
                            <i class="pe-7s-scissors"></i>{" "}
                          </a>
                        </div>
                        <div class="icon-text">
                          <h5 class="icon-box-title mb-0">Active Learning</h5>
                          <div class="content">
                            <p>
                            Kidspro is a creative skill and a joy beyond anything found dolor.
                            </p>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="tm-sc-icon-box icon-box icon-left text-center text-lg-start iconbox-centered-in-responsive iconbox-theme-colored2 animate-icon-on-hover animate-icon-rotate-y mb-30">
                      <div class="icon-box-wrapper">
                        <div class="icon-wrapper">
                          {" "}
                          <a class="icon icon-sm icon-dark icon-circled">
                            {" "}
                            <i class="pe-7s-pen"></i>{" "}
                          </a>
                        </div>
                        <div class="icon-text">
                          <h5 class="icon-box-title mb-0">Funny and Happy</h5>
                          <div class="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="tm-sc-icon-box icon-box icon-left text-center text-lg-start iconbox-centered-in-responsive iconbox-theme-colored4 animate-icon-on-hover animate-icon-rotate-y mb-30">
                      <div class="icon-box-wrapper">
                        <div class="icon-wrapper">
                          {" "}
                          <a class="icon icon-sm icon-dark icon-circled">
                            {" "}
                            <i class="pe-7s-phone"></i>{" "}
                          </a>
                        </div>
                        <div class="icon-text">
                          <h5 class="icon-box-title mb-0">Fulfill With Love</h5>
                          <div class="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="tm-sc-icon-box icon-box icon-left text-center text-lg-start iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate-y mb-30">
                      <div class="icon-box-wrapper">
                        <div class="icon-wrapper">
                          {" "}
                          <a class="icon icon-sm icon-dark icon-circled">
                            {" "}
                            <i class="pe-7s-light"></i>{" "}
                          </a>
                        </div>
                        <div class="icon-text">
                          <h5 class="icon-box-title mb-0">Expert Teachers</h5>
                          <div class="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div class="col-lg-6 col-xl-4">
                <div class="text-center">
                  <div class="thumb">
                    <img
                      class="img-fullwidth"
                      src="https://html.kodesolution.com/2017/kidspro-html-b5/images/about/6.png"
                      alt="a1.png"
                    />
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

export default AboutScreen;
