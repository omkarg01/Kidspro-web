import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const data = [
  {
    image: "https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0404_2_11zon.jpg",
    caption: "Candibrain Preschool",
    description: "- an IITian's Initiative",
  },
  {
    image: "https://payroll-appserver.s3.us-east-2.amazonaws.com/static/1C1A0416_3_11zon.jpg",
    caption: "Candibrain Preschool",
    description: "- an IITian's Initiative",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 h-75 mx-auto"
              src={slide.image}
              alt="slider image"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "50%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                color: "white", // Change text color if needed
                textAlign: "center",
                width: "100%",
              }}
            >
              <h3 className="text-white" style={{fontSize: "7vw"}}>
                Candibrain <br />{" "}
                <span className="text-danger"> Preschool </span> - an <br />{" "}
                IITian's Initiative
              </h3>
              {/* <p>{slide.description}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
