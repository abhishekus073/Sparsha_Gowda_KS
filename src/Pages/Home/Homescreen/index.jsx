import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import Expertise from "../Expertise";
import Industry from "../Industry";


export default function Home(){
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Industry />
      <MyPortfolio />
      <Testimonial />
      <Expertise />
      <ContactMe />
      <Footer />
    </>
  );
}
