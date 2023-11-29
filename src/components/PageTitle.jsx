
const PageTitle = ({title}) => {
  return (
    <>
      <section
        className="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center"
        data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/bg3.jpg"
      >
        <div className="container pt-50 pb-50">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="title">{title}</h2>
                <nav
                  className="breadcrumbs"
                  role="navigation"
                  aria-label="Breadcrumbs"
                >
                  <div className="breadcrumbs">
                    <span>
                      <a href="#" rel="home">
                        Home
                      </a>
                    </span>
                    {" "}
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                    {" "}
                    <span>
                      <a href="#">Pages</a>
                    </span>
                    {" "}
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                    {" "}
                    <span className="active">{title}</span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
