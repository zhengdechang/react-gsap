/*
 * @Description:
 * @Author: Devin
 * @Date: 2024-04-19 12:04:53
 */
// Import all the required sections here
import HeroSection from "../../Sections/Hero/index";
import About from "../../Sections/About/index";
import Services from "../../Sections/Services/index";
import Testimonials from "../../Sections/Testimonials/index";
import Contact from "../../Sections/Contact/index";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <HeroSection />
            <About />
            <Services />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
