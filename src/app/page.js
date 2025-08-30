import About from "./components/About";
import HomeServices from "./components/HomeServices";
import HomeSlider from "./components/HomeSlider";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <About/>
      <HomeServices/>
      <Testimonials/>
    </>
  );
}
