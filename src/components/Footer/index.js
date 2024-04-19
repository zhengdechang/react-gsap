import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

const Footer = () => {
  return (
    <footer className="px-[calc(2.5rem+2.5vw)] py-5 text-base flex items-center justify-between flex-wrap md:flex-nowrap">
      <div className="text-left mb-4 md:mb-0">
        © 2021 Built and Design by
        <a
          href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA"
          className="no-underline"
        >
          @CodeBucks
        </a>
      </div>
      <div className="flex items-center">
        Reach out to me via 😉
        <a
          href="https://twitter.com/code_bucks"
          className="ml-4 hover:scale-150 transition-transform duration-200"
        >
          <img src={Twitter} alt="Twitter" className="w-6 h-6 filter invert" />
        </a>
        <a
          href="https://www.instagram.com/code.bucks/"
          className="ml-4 hover:scale-150 transition-transform duration-200"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="w-6 h-6 filter invert"
          />
        </a>
        <a
          href="mailto:codebucks27@gmail.com?subject=Email From Your Website"
          className="ml-4 hover:scale-150 transition-transform duration-200"
        >
          <img src={Gmail} alt="Gmail" className="w-6 h-6 filter invert" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
