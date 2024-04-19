import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",

        borderRadius: "0 0 50px 50px",

        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <header
      ref={ref}
      className="flex justify-between items-center text-white relative z-50 md:px-12 md:py-2"
      style={{
        backgroundColor: "var(--nav)",
        color: "var(--white)",
        padding: "1rem 5rem",
      }}
    >
      <a href="#" className="flex items-center cursor-pointer">
        <img src={logo} alt="CodeBucks" className="mr-2 w-8" />
        <h3>CodeBucks</h3>
      </a>
      <nav className="hidden md:flex md:space-x-8 md:items-center">
        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          About Us
        </a>
        <a href="#services" onClick={(e) => scrollUp("services", e)}>
          Services
        </a>
        <button className="bg-purple-500 py-2 px-4 rounded-full text-white font-semibold cursor-pointer transition duration-200 hover:scale-110 focus:scale-90">
          Contact Us
        </button>
      </nav>
      <button
        className={`md:hidden ${click ? "transform rotate-45" : ""}`}
        onClick={() => setClick(!click)}
      >
        {/* Hamburger icon logic */}
      </button>
      <nav
        className={`flex flex-col items-center justify-center absolute top-full left-0 right-0 bg-opacity-95 rounded-lg transition-all ${
          click ? "visible opacity-100" : "invisible opacity-0"
        } md:hidden`}
      >
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => handleClick("about", e)}>
          About Us
        </a>
        <a href="#services" onClick={(e) => handleClick("services", e)}>
          Services
        </a>
        <button className="bg-purple-500 py-2 px-4 rounded-full text-white font-semibold cursor-pointer transition duration-200 hover:scale-110 focus:scale-90">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
