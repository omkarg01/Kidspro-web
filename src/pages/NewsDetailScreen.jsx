import React from "react";
import PageTitle from "../components/PageTitle";

const NewsDetail = () => {
  return (
    <>
      <PageTitle title={"News & Events Detail"}/>

      {/* <!-- Section: Blog --> */}
      <section>
        <div className="container mt-30 mb-30 pt-30 pb-30">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="blog-posts single-post">
                <article className="post clearfix mb-0">
                  <div className="entry-header mb-30">
                    <div className="post-thumb thumb">
                      {" "}
                      <img
                        src="https://html.kodesolution.com/2017/kidspro-html-b5/images/shop/portfolio-big1.jpg"
                        alt="images"
                        className="img-responsive img-fullwidth"
                      />{" "}
                    </div>
                    <h2>Sample News Title</h2>
                    <div className="entry-meta mt-0">
                      <span className="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i className="far fa-calendar-alt mr-10 text-theme-colored1"></i>{" "}
                        Jul 20, 2021
                      </span>
                      <span className="mb-10 text-gray-darkgray mr-10 font-size-13">
                        <i className="far fa-comments mr-10 text-theme-colored1"></i>{" "}
                        214 Comments
                      </span>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>
                      Nostra dapibus varius et semper semper rutrum ad risus
                      felis eros. Cursus libero viverra tempus netus diam
                      vestibulum lorem tincidunt congue porta. Non ligula
                      egestas commodo massa. Lorem non sit vivamus convallis
                      elit mollis. Viverra sodales feugiat natoque sem morbi hac
                      nunc ultricies nibh netus facilisis blandit. Felis purus
                      et iaculis. Semper orci duis montes curabitur potenti a
                      varius quis diam, vel litora et? Quis ridiculus pharetra
                      luctus augue duis.
                    </p>

                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution. User generated content in real-time will have
                      multiple touchpoints for offshoring natoque sem morbi hac
                      nunc ultricies.
                    </p>

                    <blockquote className="tm-sc-blockquote blockquote-style6  border-left-theme-colored quote-icon-theme-colored">
                      <p>
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day, going
                        forward, a new normal that has evolved from generation X
                        is on the runway heading towards a streamlined cloud
                        solution.
                      </p>
                      <footer>
                        <cite>Someone famous</cite>
                      </footer>
                    </blockquote>
                    <h5>Parturient tortor tortor sed tellus molestie neque</h5>
                    <p>
                      Habitasse justo, sed justo. Senectus morbi, fermentum
                      magna id tortor. Lacinia sociis morbi erat ultricies
                      dictumst condimentum dictum nascetur? Vitae litora erat
                      penatibus nam lorem. Euismod tempus, mollis leo tempus?
                      Semper est cursus viverra senectus lectus feugiat id! Odio
                      porta nibh dictumst nulla taciti lacus nam est praesent.
                    </p>

                    <h5>Porta tellus aliquam ligula sollicitudin</h5>
                    <p>
                      Ultrices conubia vehicula malesuada. Eros commodo a duis
                      accumsan vestibulum adipiscing hendrerit lobortis viverra
                      non justo?
                    </p>
                    <ul>
                      <li>Lorem ipsum dolor sit amet adipiscing elit.</li>
                      <li>Aliquam tincidunt mauris eu risus.</li>
                      <li>Vestibulum auctor dapibus neque.</li>
                      <li>Habitant aliquam taciti tellus leo className.</li>
                      <li>Vitae litora erat penatibus nam lorem</li>
                    </ul>
                  </div>
                </article>

                <div className="comment-box mt-30">
                  <h3>Leave a Comment</h3>
                  <form role="form" id="comment-form">
                    <div className="row">
                      <div className="col-6 pt-0 pb-0">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            required
                            name="contact_name"
                            id="contact_name"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            required
                            className="form-control"
                            name="contact_email2"
                            id="contact_email2"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Enter Website"
                            required
                            className="form-control"
                            name="subject"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            required
                            name="contact_message2"
                            id="contact_message2"
                            placeholder="Enter Message"
                            rows="7"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <button
                            type="submit"
                            className="btn btn-theme-colored1 btn-round m-0"
                            data-loading-text="Please wait..."
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
