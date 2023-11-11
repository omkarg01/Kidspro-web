import React from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const EventsListScreen = () => {
  return (
    <>
      <PageTitle title={"Events"} />

      {/* <!-- Section: Event List --> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9 blog-pull-right">
              <div className="upcoming-events bg-white-fa mb-20">
                <div className="row">
                  <div className="col-sm-4 pr-0 pr-sm-15">
                    <div className="thumb p-15">
                      <img
                        className="img-fullwidth"
                        src="//placehold.it/220x160"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 pl-0 pl-sm-15">
                    <div className="event-details p-15">
                      <h4 className="media-heading text-uppercase mt-0">
                        feed a hungry child
                      </h4>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante Nulla vel metus scelerisque ante.
                      </p>
                      <Link
                        to={"1"}
                        className="btn btn-outline-theme-colored1 btn-round btn-sm"
                      >
                        Details <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="event-count p-15 mt-15">
                      <div className="event-date">
                        <span className="day">26</span>
                        <span className="month">May</span>
                      </div>
                      <ul className="event-meta mt-10">
                        <li>
                          <i className="fa fa-map-marker"></i> 89 Newyork City.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="upcoming-events bg-white-fa mb-20">
                <div className="row">
                  <div className="col-sm-4 pr-0 pr-sm-15">
                    <div className="thumb p-15">
                      <img
                        className="img-fullwidth"
                        src="//placehold.it/220x160"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 pl-0 pl-sm-15">
                    <div className="event-details p-15">
                      <h4 className="media-heading text-uppercase mt-0">
                        feed a hungry child
                      </h4>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante Nulla vel metus scelerisque ante.
                      </p>
                      <a
                        href="#"
                        className="btn btn-outline-theme-colored1 btn-round btn-sm"
                      >
                        Details <i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="event-count p-15 mt-15">
                      <div className="event-date">
                        <span className="day">26</span>
                        <span className="month">May</span>
                      </div>
                      <ul className="event-meta mt-10">
                        <li>
                          <i className="fa fa-map-marker"></i> 89 Newyork City.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="upcoming-events bg-white-fa mb-20">
                <div className="row">
                  <div className="col-sm-4 pr-0 pr-sm-15">
                    <div className="thumb p-15">
                      <img
                        className="img-fullwidth"
                        src="//placehold.it/220x160"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 pl-0 pl-sm-15">
                    <div className="event-details p-15">
                      <h4 className="media-heading text-uppercase mt-0">
                        feed a hungry child
                      </h4>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante Nulla vel metus scelerisque ante.
                      </p>
                      <a
                        href="#"
                        className="btn btn-outline-theme-colored1 btn-round btn-sm"
                      >
                        Details <i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="event-count p-15 mt-15">
                      <div className="event-date">
                        <span className="day">26</span>
                        <span className="month">May</span>
                      </div>
                      <ul className="event-meta mt-10">
                        <li>
                          <i className="fa fa-map-marker"></i> 89 Newyork City.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <nav>
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="next page-link" href="#">
                          «
                        </a>
                      </li>
                      <li className="page-item active">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="next page-link" href="#">
                          »
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sidebar sidebar-right mt-sm-30">
                <div className="widget">
                  <h5 className="widget-title">Search box</h5>
                  <div className="search-form">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Click to Search"
                          className="form-control search-input"
                        />
                        <button
                          type="submit"
                          className="btn btn-theme-colored1 search-button"
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="widget-title widget-title-line-bottom line-bottom-theme-colored1">
                    Latest News
                  </h4>
                  <div className="latest-posts">
                    <article className="post clearfix pb-0 mb-20">
                      <a className="post-thumb" href="#">
                        <img src="images/shop/portfolio-sq1.jpg" alt="images" />
                      </a>
                      <div className="post-right">
                        <h5 className="post-title mt-0">
                          <a href="#">Sustainable Construction</a>
                        </h5>
                        <span className="post-date">
                          <time
                            className="entry-date"
                            datetime="2021-05-15T06:10:26+00:00"
                          >
                            April 15, 2021
                          </time>
                        </span>
                      </div>
                    </article>
                    <article className="post clearfix pb-0 mb-20">
                      <a className="post-thumb" href="#">
                        <img src="images/shop/portfolio-sq2.jpg" alt="images" />
                      </a>
                      <div className="post-right">
                        <h5 className="post-title mt-0">
                          <a href="#">Industrial Coatings</a>
                        </h5>
                        <span className="post-date">
                          <time
                            className="entry-date"
                            datetime="2021-05-15T06:10:26+00:00"
                          >
                            April 15, 2021
                          </time>
                        </span>
                      </div>
                    </article>
                    <article className="post clearfix pb-0 mb-20">
                      <a className="post-thumb" href="#">
                        <img src="images/shop/portfolio-sq3.jpg" alt="images" />
                      </a>
                      <div className="post-right">
                        <h5 className="post-title mt-0">
                          <a href="#">Storefront Installations</a>
                        </h5>
                        <span className="post-date">
                          <time
                            className="entry-date"
                            datetime="2021-05-15T06:10:26+00:00"
                          >
                            April 15, 2021
                          </time>
                        </span>
                      </div>
                    </article>
                  </div>
                </div>

                <div className="widget widget_archive">
                  <h4 className="widget-title widget-title-line-bottom line-bottom-theme-colored1">
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
                <div className="widget widget_meta">
                  <h4 className="widget-title widget-title-line-bottom line-bottom-theme-colored1">
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
                <div className="widget widget_categories">
                  <h4 className="widget-title widget-title-line-bottom line-bottom-theme-colored1">
                    Categories
                  </h4>
                  <ul>
                    <li className="cat-item">
                      <a href="#">Anxiety</a>{" "}
                    </li>
                    <li className="cat-item">
                      <a href="#">Grief and loss</a>{" "}
                    </li>
                    <li className="cat-item">
                      <a href="#">Uncategorized</a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="widget widget_tag_cloud">
                  <h4 className="widget-title widget-title-line-bottom line-bottom-theme-colored1">
                    Tags
                  </h4>
                  <div className="tagcloud">
                    <a href="#" className="tag-cloud-link">
                      health
                    </a>
                    <a href="#" className="tag-cloud-link">
                      medical
                    </a>
                    <a href="#" className="tag-cloud-link">
                      news
                    </a>
                    <a href="#" className="tag-cloud-link">
                      latest
                    </a>
                  </div>
                </div>
                <div className="widget widget_text text-center">
                  <div className="textwidget">
                    <div className="section-typo-light bg-theme-colored1 mb-md-40 p-30 pt-40 pb-40">
                      {" "}
                      <img
                        className="size-full wp-image-800 aligncenter"
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
                <div className="widget widget-brochure-box clearfix">
                  <a className="brochure-box brochure-box-theme-colored1" href="#">
                    <i className="far fa-file-word brochure-icon"></i>
                    <h5 className="text">Download PDF</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsListScreen;
