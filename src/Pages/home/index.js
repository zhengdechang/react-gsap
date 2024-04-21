
// Import all the required sections here
import HeroSection from "../../Sections/Hero/index";
import About from "../../Sections/About/index";
import Services from "../../Sections/Services/index";
import Testimonials from "../../Sections/Testimonials/index";
import Contact from "../../Sections/Contact/index";
import Layer from "./component/Layer";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Layer></Layer>
            <HeroSection />
            <About />
            <Services />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
