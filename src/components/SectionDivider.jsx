const SectionDivider = () => {
  return (
    <section
      className="divider bg-img-cover bg-img-center layer-overlay overlay-theme-colored4-7"
      data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/p2.jpg"
    >
      <div className="container pt-90 pb-90">
        <div className="row">
          <div
            className="col-sm-6 col-lg-3 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
          >
            <div className="funfact-item text-center mb-md-30">
              <div className="icon">
                <span className="fas fa-user-friends"></span>
              </div>
              <div>
                <h2 className="counter">
                  <span
                    data-animation-duration="2000"
                    data-value="864"
                    className="animate-number"
                  >
                    0
                  </span>
                </h2>
                <h5 className="title">Qualified Teachers</h5>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-lg-3 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="funfact-item text-center mb-md-30">
              <div className="icon">
                <span className="fas fa-graduation-cap"></span>
              </div>
              <div>
                <h2 className="counter">
                  <span
                    data-animation-duration="2000"
                    data-value="486"
                    className="animate-number"
                  >
                    0
                  </span>
                </h2>
                <h5 className="title">Successful Kids</h5>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-lg-3 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <div className="funfact-item text-center mb-sm-30">
              <div className="icon">
                <span className="far fa-smile"></span>
              </div>
              <div>
                <h2 className="counter">
                  <span
                    data-animation-duration="2000"
                    data-value="1468"
                    className="animate-number"
                  >
                    0
                  </span>
                </h2>
                <h5 className="title">Happy Parents</h5>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-lg-3 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.7s"
          >
            <div className="funfact-item text-center">
              <div className="icon">
                <span className="fas fa-medal"></span>
              </div>
              <div>
                <h2 className="counter">
                  <span
                    data-animation-duration="2000"
                    data-value="32"
                    className="animate-number"
                  >
                    0
                  </span>
                </h2>
                <h5 className="title">Award Won</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDivider;
