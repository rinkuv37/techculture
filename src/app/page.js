import About from "./components/About";
import HomeServices from "./components/HomeServices";
import HomeSlider from "./components/HomeSlider";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <About/>
      <HomeServices/>
    </>
  );
}
