import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Testimonials = () => {
  return (
    <section
      className="testimonials layer-overlay overlay-theme-colored4-7"
      data-tm-bg-img="https://html.kodesolution.com/2017/kidspro-html-b5/images/bg/b1.jpg"
    >
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tm-sc-section-title section-title text-center">
                <div className="title-wrapper">
                  <h2 className="title">
                    Happy{" "}
                    <span className="text-theme-colored2">Parent's Say</span>
                  </h2>
                  {/* <p data-tm-text-color="#fff">There are many variations of passages. But the majority have suffered alteration in some form, by injected humour, or randomised words.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row g-3">
            <div className="col-lg-6">
              <Card
                style={{
                  width: "100%",
                  borderRadius: "25px",
                  backgroundColor: "#31ceef",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Text>
                    Candibrain has exceeded our expectations in every aspect.
                    The caring staff, innovative teaching methods, and emphasis
                    on holistic development make it an exceptional preschool.
                    Our child looks forward to each day with excitement and joy,
                    thanks to Candibrain's enriching learning environment.
                  </Card.Text>
                  <Card.Title className="my-auto">
                    Anurag
                    <br />
                    <span style={{ fontSize: "15px" }}>Desginer</span>
                    <Card.Img
                      variant="top"
                      style={{
                        height: "60px",
                        width: "60px",
                        borderRadius: "100%",
                        marginLeft: "85%",
                      }}
                      src="https://html.kodesolution.com/2017/kidspro-html-b5/images/testimonials/1.jpg"
                    />
                  </Card.Title>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
            <br />
            <div className="col-lg-6">
              <Card style={{ width: "100%",
                  borderRadius: "25px",
                  backgroundColor: "#f55e45",
                  color: "white",}}>
                <Card.Body>
                  <Card.Text>
                    We are grateful to have found Candibrain for our child's
                    early education. The personalized attention, emphasis on
                    character development showcase the commitment of the
                    Candibrain team. Choosing Candibrain has been one of the
                    best decisions we've made for our child's educational
                    journey.
                  </Card.Text>
                  <Card.Title className="my-auto">
                    Vivek
                    <br />
                    <span style={{ fontSize: "15px" }}>Desginer</span>
                    <Card.Img
                      variant="top"
                      style={{
                        height: "60px",
                        width: "60px",
                        borderRadius: "100%",
                        marginLeft: "85%",
                      }}
                      src="https://html.kodesolution.com/2017/kidspro-html-b5/images/testimonials/1.jpg"
                    />
                  </Card.Title>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div class="item">
      <div class="shadow-effect">
        <img class="img-circle" src={img} />
        <p>{description}</p>
      </div>
      <div class="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
      </div>
    </div>
  );
};

export default Testimonials;
