import { FaHeart, FaUser, FaUserGraduate } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";

const FeatureDivider = () => {
  return (
    <section
      className="divider"
      // data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/b1.png"
      data-tm-margin-top="-34px"
      style={{
        backgroundImage: `url('https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/b1.png')`,
        marginTop: '-34px',
      }}
    >
      <div className="container" >
        <div className="section-content">
          <div className="row">
            <div
              className="col-sm-6 col-md-3 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="tm-sc-icon-box icon-box text-center iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate-y mb-sm-30">
                <div className="icon-box-wrapper">
                  <div className="icon-wrapper mb-20">
                    <a className="icon icon-xl icon-dark icon-circled bg-theme-colored1">
                      <FaUser fontSize={52} style={{ marginBlock: "25px" }} />
                      {/* <i className="fas fa-user text-white"></i> */}
                    </a>
                  </div>
                  <div className="icon-text">
                    <h4 className="icon-box-title">Expert Teachers</h4>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="tm-sc-icon-box icon-box text-center iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate-y mb-sm-30">
                <div className="icon-box-wrapper">
                  <div className="icon-wrapper mb-20">
                    <a className="icon icon-xl icon-dark icon-circled bg-theme-colored2">
                      <FaUserGraduate
                        fontSize={52}
                        style={{ marginBlock: "25px" }}
                      />
                    </a>
                  </div>
                  <div className="icon-text">
                    <h4 className="icon-box-title">Fully Equiped</h4>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="tm-sc-icon-box icon-box text-center iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate-y mb-sm-30">
                <div className="icon-box-wrapper">
                  <div className="icon-wrapper mb-20">
                    <a className="icon icon-xl icon-dark icon-circled bg-theme-colored3">
                      <CiFaceSmile
                        fontSize={60}
                        style={{ marginBlock: "25px" }}
                      />
                      {/* <i className="far fa-smile text-white"></i> */}
                    </a>
                  </div>
                  <div className="icon-text">
                    <h4 className="icon-box-title">Funny and Happy</h4>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.7s"
            >
              <div className="tm-sc-icon-box icon-box text-center iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate-y mb-sm-30">
                <div className="icon-box-wrapper">
                  <div className="icon-wrapper mb-20">
                    <a className="icon icon-xl icon-dark icon-circled bg-theme-colored4">
                      <FaHeart fontSize={60} style={{ marginBlock: "25px" }} />
                      {/* <i className="fas fa-heart text-white"></i> */}
                    </a>
                  </div>
                  <div className="icon-text">
                    <h4 className="icon-box-title">Fulfill With Love</h4>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDivider;
