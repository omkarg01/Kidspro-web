import FeatureDivider from "../components/FeatureDivider";
import Features from "../components/Features";
import SectionDivider from "../components/SectionDivider";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";

const HomeScreen = () => {
  return (
    <>
      <Carousel></Carousel>
      <FeatureDivider></FeatureDivider>
      <Features></Features>
      {/* <SectionDivider></SectionDivider> */}
      <Gallery></Gallery>
      <Testimonials></Testimonials>
    </>
  );
};

export default HomeScreen;
