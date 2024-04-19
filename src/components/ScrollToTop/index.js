/*
 * @Description:
 * @Author: Devin
 * @Date: 2024-04-19 12:04:53
 */
import SvgIcon from "../../assets/arrow-up.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    const element = ref.current;
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        scrub: true,
        onEnter: () => gsap.set(element, { display: "block" }),
        onLeaveBack: () => gsap.set(element, { display: "none" }),
      },
    });
  }, []);

  return (
    <div
      onClick={scrollUp}
      className="fixed right-[100px] bottom-[80px] z-[10px] w-[48px] h-[40px] cursor-pointer hidden md:block"
    >
      <img
        ref={ref}
        src={SvgIcon}
        alt="to top"
        className="w-12 h-12 transition-transform duration-300 hover:scale-125 active:scale-90"
        style={{
          border: "2px solid var(--white)",
          borderRadius: "50%",
          backgroundColor: "var(--white)",
        }}
      />
    </div>
  );
};

export default ScrollToTop;
