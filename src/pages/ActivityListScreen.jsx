import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const ActivityListScreen = () => {
  const [videoGallery, setVideoGallery] = useState([]);

  const fetchData = async () => {
    const apiUrl = "https://api.candibrain.com/api/read-only-video-gallery/";
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data fetched successfully!", data);
        // You may want to reset the form or handle success in some way
        setVideoGallery(data.results);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <!-- Section: page title --> */}
      <PageTitle title={"Activity"} />

      {/* <!-- Section: News List Screen --> */}
      {videoGallery ? (
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
                        Embark on a journey with Candibrain Preschool as we
                        guide your child through five distinct programs—{" "}
                        <span className="text-theme-colored1"> Playgroup</span>,{" "}
                        <span className="text-theme-colored2">Nursery </span>,{" "}
                        <span className="text-theme-colored3"> Junior KG</span>,{" "}
                        <span className="text-theme-colored1"> Senior KG </span>
                        , and{" "}
                        <span className="text-theme-colored4"> Day Care </span>.
                        From the early stages of socialization in Playgroup to
                        the advanced readiness for primary school in the Senior
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
                        {console.log("videoGallery", videoGallery)}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "yoga" }}
                          class="show"
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="fas fa-music"></i>
                          <img
                            // src="https://html.kodesolution.com/2017/kidspro-html-b5/images/services/1.jpg"
                            src="../../"
                            alt=""
                            class="w-5 mb-md-3"
                          />
                          <span>Yoga</span>{" "}
                        </Link>
                      </li>
                      <li class="bg-theme-colored2">
                        {" "}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "karate" }}
                          class=""
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="fas fa-graduation-cap"></i>{" "}
                          <span>Karate</span>{" "}
                        </Link>
                      </li>
                      <li class="bg-theme-colored3">
                        {" "}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "robotics" }}
                          class=""
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="fas fa-paint-brush"></i>{" "}
                          <span>Robotics</span>{" "}
                        </Link>
                      </li>
                      <li class="bg-theme-colored4">
                        {" "}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "coding" }}
                          class=""
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="far fa-life-ring"></i> <span>Coding</span>{" "}
                        </Link>
                      </li>
                      <li class="bg-theme-colored1">
                        {" "}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "handwriting" }}
                          class=""
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="fas fa-trophy"></i> <span>Handwriting</span>{" "}
                        </Link>
                      </li>
                    </ul>
                    <br />
                    <br />
                    <ul class="nav nav-tabs">
                      <li class="bg-theme-colored3 active">
                        {" "}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "abacus" }}
                          class="active show"
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="fas fa-music"></i> <span>Abacus</span>{" "}
                        </Link>
                      </li>
                      <li class="bg-theme-colored4">
                        {" "}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "fun-activity" }}
                          class=""
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="fas fa-graduation-cap"></i>{" "}
                          <span>Fun Activity</span>{" "}
                        </Link>
                      </li>
                      <li class="bg-theme-colored1">
                        {" "}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "dance" }}
                          class=""
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="fas fa-graduation-cap"></i>{" "}
                          <span>Dance & Music</span>{" "}
                        </Link>
                      </li>
                      <li class="bg-theme-colored2">
                        {" "}
                        <Link
                          to="1"
                          state={{ data: videoGallery, type: "library" }}
                          class=""
                          // data-bs-toggle="tab"
                        >
                          {" "}
                          <i class="far fa-life-ring"></i> <span>Library</span>{" "}
                        </Link>
                      </li>
                      <li class="bg-theme-colored3">
                        {" "}
                        <Link
                          to="1"
                          class=""
                          state={{ data: videoGallery, type: "chess" }}
                        >
                          {" "}
                          <i class="fas fa-trophy"></i> <span>Chess</span>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
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
      ) : (
        <p>Loading API data...</p>
      )}

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

export default ActivityListScreen;
