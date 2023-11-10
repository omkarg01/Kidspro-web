import FeatureDivider from "./FeatureDivider";
import Features from "./Features";
import SectionDivider from "./SectionDivider";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Carousel from "./Carousel";

const Homescreen = () => {
  return (
    <>
      <Carousel></Carousel>
      <FeatureDivider></FeatureDivider>
      <Features></Features>
      <SectionDivider></SectionDivider>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
    </>
  );
};

export default Homescreen;
