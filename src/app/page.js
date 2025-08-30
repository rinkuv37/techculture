import About from "./components/About";
import HomeServices from "./components/HomeServices";
import HomeSlider from "./components/HomeSlider";
import Team from "./components/Team";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import UserSaying from "./components/UserSaying";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <About/>
      <HomeServices/>
      <Testimonials/>
      <Technologies/>
      <UserSaying/>
      <Team/>
      
    </>
  );
}
