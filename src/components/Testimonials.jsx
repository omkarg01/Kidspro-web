/* eslint-disable react/no-unescaped-entities */

const Testimonials = () => {
  return (
    <section className="testimonials layer-overlay overlay-theme-colored4-7" data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/b1.jpg">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tm-sc-section-title section-title text-center">
                <div className="title-wrapper">
                  <h2 className="title">Happy <span className="text-theme-colored2">Parent's Say</span></h2>
                  {/* <p data-tm-text-color="#fff">There are many variations of passages. But the majority have suffered alteration in some form, by injected humour, or randomised words.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-theme tm-owl-carousel-2col testimonial style2" data-autoplay="true" data-loop="true" data-duration="6000" data-smartspeed="300" data-margin="10" data-stagepadding="0">
                <div className="tm-carousel-item">
                  <div className="testimonial-wrapper">
                    <div className="content bg-theme-colored1 p-30 pb-40">
                      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque est quasi, quas ipsam, expedita placeat facilis odio illo ex accusantium eaque itaque officiis et sit. Vero quo, impedit neque.</p>
                      <i className="fa fa-quote-right mt-10 text-white"></i>
                      <h4 className="author text-white mt-20 mb-0">Catherine Grace</h4>
                      <h6 className="title text-white mt-0 mb-15">Designer</h6>
                      <div className="thumb mt-20"><img className="rounded-circle" alt="" src="https://html.kodesolution.com/2017/kidspro-html-b5/images/testimonials/1.jpg"/></div>
                    </div>
                  </div>
                </div>
                <div className="tm-carousel-item">
                  <div className="testimonial-wrapper">                  
                    <div className="content bg-theme-colored3 p-30 pb-40">
                      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque est quasi, quas ipsam, expedita placeat facilis odio illo ex accusantium eaque itaque officiis et sit. Vero quo, impedit neque.</p>
                      <i className="fa fa-quote-right mt-10 text-white"></i>
                      <h4 className="author text-white mt-20 mb-0">Catherine Grace</h4>
                      <h6 className="title text-white mt-0 mb-15">Designer</h6>
                      <div className="thumb mt-20"><img className="rounded-circle" alt="" src="https://html.kodesolution.com/2017/kidspro-html-b5/images/testimonials/2.jpg"/></div>
                    </div>
                  </div>
                </div>
                <div className="tm-carousel-item">
                  <div className="testimonial-wrapper">                  
                    <div className="content bg-theme-color-lemon p-30 pb-40">
                      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque est quasi, quas ipsam, expedita placeat facilis odio illo ex accusantium eaque itaque officiis et sit. Vero quo, impedit neque.</p>
                      <i className="fa fa-quote-right mt-10 text-white"></i>
                      <h4 className="author text-white mt-20 mb-0">Catherine Grace</h4>
                      <h6 className="title text-white mt-0 mb-15">Designer</h6>
                      <div className="thumb mt-20"><img className="rounded-circle" alt="" src="https://html.kodesolution.com/2017/kidspro-html-b5/images/testimonials/3.jpg"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials