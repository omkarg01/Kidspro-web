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
              <div class="col-lg-8 col-xl-6">
                <div class="tm-sc-section-title section-title text-center">
                  <div class="title-wrapper">
                    <h2 class="title">
                      Our <span class="text-theme-colored3">Activities</span>
                    </h2>
                    <p>
                      There are many variations of passages. But the majority
                      have suffered alteration in some form, by injected humour,
                      or randomised words.
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
                              One Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quaerat, iste, architecto ullam
                              tenetur quia nemo ratione tempora consectetur quos
                              minus ut quo nulla.
                            </p>
                            <p>
                              Lorem ipsum dolor sit am adipi we help you ensure
                              everyone is in the right jobs sicing elit, sed do
                              consulting firms There are many variations of
                              passages of Lorem Ipsum available but the majority
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Qualified Teacher
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Love & Care
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Delicious Food
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Strategi Location{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Active Learning
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Transportation
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
                              One Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quaerat, iste, architecto ullam
                              tenetur quia nemo ratione tempora consectetur quos
                              minus ut quo nulla.
                            </p>
                            <p>
                              Lorem ipsum dolor sit am adipi we help you ensure
                              everyone is in the right jobs sicing elit, sed do
                              consulting firms There are many variations of
                              passages of Lorem Ipsum available but the majority
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Qualified Teacher
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Love & Care
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Delicious Food
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Strategi Location{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Active Learning
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored2 me-2"></i>{" "}
                                      Transportation
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
                              One Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quaerat, iste, architecto ullam
                              tenetur quia nemo ratione tempora consectetur quos
                              minus ut quo nulla.
                            </p>
                            <p>
                              Lorem ipsum dolor sit am adipi we help you ensure
                              everyone is in the right jobs sicing elit, sed do
                              consulting firms There are many variations of
                              passages of Lorem Ipsum available but the majority
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Qualified Teacher
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Love & Care
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Delicious Food
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Strategi Location{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Active Learning
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored3 me-2"></i>{" "}
                                      Transportation
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
                              One Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quaerat, iste, architecto ullam
                              tenetur quia nemo ratione tempora consectetur quos
                              minus ut quo nulla.
                            </p>
                            <p>
                              Lorem ipsum dolor sit am adipi we help you ensure
                              everyone is in the right jobs sicing elit, sed do
                              consulting firms There are many variations of
                              passages of Lorem Ipsum available but the majority
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Qualified Teacher
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Love & Care
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Delicious Food
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Strategi Location{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Active Learning
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored1 me-2"></i>{" "}
                                      Transportation
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
                              One Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quaerat, iste, architecto ullam
                              tenetur quia nemo ratione tempora consectetur quos
                              minus ut quo nulla.
                            </p>
                            <p>
                              Lorem ipsum dolor sit am adipi we help you ensure
                              everyone is in the right jobs sicing elit, sed do
                              consulting firms There are many variations of
                              passages of Lorem Ipsum available but the majority
                            </p>
                            <div class="row mb-20">
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Qualified Teacher
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Love & Care
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Delicious Food
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="tm-sc-unordered-list list-style">
                                  <ul class="list-unstyled text-black">
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Strategi Location{" "}
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Active Learning
                                    </li>
                                    <li>
                                      <i class="icon fas fa-heart text-theme-colored4 me-2"></i>{" "}
                                      Transportation
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
