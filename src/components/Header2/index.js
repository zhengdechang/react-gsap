import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import LogoSvg from "../Svg/logo";

const Header = () => {
    const headerRef = useRef(null); // Reference to the header element
    const headerButtonRef = useRef(null); // Reference to the header button element
    // Function to calculate luminance and set text color
    useEffect(() => {
        let lastScrollTop = 0;
        const header = headerRef.current;
        const headerButton = headerButtonRef.current;

        // Function to update the header className based on the data-color attribute
        const updateHeaderclassName = () => {
            // Select all divs that could affect the header color
            const colorDivs = document.querySelectorAll("div[data-color]");
            // Initialize variables to find the div closest to the top of the viewport
            let closestDiv = null;
            let closestDivDistance = Infinity;

            colorDivs.forEach((div) => {
                const rect = div.getBoundingClientRect();
                // Check if the div is above the bottom of the viewport and closer than the current closest
                if (rect.bottom > 0 && rect.top < closestDivDistance) {
                    closestDiv = div;
                    closestDivDistance = rect.top;
                }
            });

            // If we found a div, update the header className
            if (closestDiv) {
                const color = closestDiv.getAttribute("data-color");
                if (color === "blank") {
                    header.classList.add("text-blank");
                    header.classList.remove("text-white");
                } else if (color === "white") {
                    header.classList.add("text-white");
                    header.classList.remove("text-blank");
                }
            }
        };
        // Run the update function once on mount to set the initial className
        updateHeaderclassName();

        // Create the scroll-triggered animation
        const scrollTrigger = ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const scrollTop = self.scroll();
                if (scrollTop > lastScrollTop) {
                    gsap.to(header, {
                        y: -header.offsetHeight,
                        autoAlpha: 0,
                        duration: 0.2,
                    });
                    gsap.to(headerButton, {
                        y: -headerButton.offsetHeight,
                        autoAlpha: 0,
                        duration: 0.2,
                    });
                } else {
                    gsap.to(header, { y: 0, autoAlpha: 1, duration: 0.2 });
                    gsap.to(headerButton, { y: 0, autoAlpha: 1, duration: 0.2 });
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

                // Update the header className on scroll
                updateHeaderclassName();
            },
        });

        // Clean up the ScrollTrigger instance on component unmount
        return () => scrollTrigger.kill();
    }, []);

    return (
        <div>
            <header
                ref={headerRef}
                className="fixed top-0 left-0 w-full md:w-auto flex items-center justify-between z-[999] md:z-40  py-0 md:py-6 lg:py-10 px-6 lg:px-10 translate-y-0 bg-transparent transition-all duration-300 md:duration-500 ease-out-cubic"
                style={{
                    transform:
                        "translate3d(var(--tw-translate-x), var(--tw-translate-y), 1px)",
                }}
            >
                <div className="flex items-center md:h-12">
                    <button className="relative group cursor-pointer outline-none">
                        <div className="cursor-pointer ">
                            <LogoSvg></LogoSvg>
                        </div>
                        <div className="absolute -bottom-2 left-[2%] w-[96%] h-1 bg-black opacity-0 pointer-events-none group-focus-visible:opacity-100"></div>
                    </button>
                    <div className="hidden md:flex type-body-sm ml-4 lg:ml-8 xl:ml-10">
                        <nav
                            aria-label="Main"
                            data-orientation="horizontal"
                            dir="ltr"
                            className="relative z-10 flex max-w-max flex-1 items-center justify-center"
                        >
                            <div className="relative">
                                <ul
                                    data-orientation="horizontal"
                                    className="group flex flex-1 list-none items-center justify-center space-x-1"
                                    dir="ltr"
                                >
                                    <li className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                        <a
                                            tabIndex="0"
                                            href="https://docs.storyprotocol.xyz/docs/what-is-story-protocol"
                                            className="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="relative pb-1 outline-none ">
                                                Docs
                                                <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                        <button
                                            className="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                            tabIndex="0"
                                        >
                                            <span className="relative pb-1 outline-none ">
                                                About
                                                <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                            </span>
                                        </button>
                                    </li>
                                    <li className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                        <button
                                            className="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                            tabIndex="0"
                                        >
                                            <span className="relative pb-1 outline-none ">
                                                Values
                                                <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                            </span>
                                        </button>
                                    </li>
                                    <li className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                        <button
                                            className="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                            tabIndex="0"
                                        >
                                            <span className="relative pb-1 outline-none ">
                                                Partners
                                                <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                            </span>
                                        </button>
                                    </li>
                                    <li className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                        <button
                                            className="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                            tabIndex="0"
                                        >
                                            <span className="relative pb-1 outline-none ">
                                                People
                                                <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                            </span>
                                        </button>
                                    </li>
                                    <li className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                        <a
                                            href="/media"
                                            className="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                            tabIndex="0"
                                        >
                                            <span className="relative pb-1 outline-none ">
                                                News
                                                <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                        <a
                                            tabIndex="0"
                                            href="https://jobs.lever.co/storyprotocol"
                                            className="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="relative pb-1 outline-none ">
                                                Careers
                                                <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div
                    tabIndex="0"
                    role="button"
                    className="burgerButton_burger-menu__19bxi relative md:hidden flex items-center justify-center ml-6 cursor-pointer z-40 -mr-6 outline-none focus:outline-none"
                >
                    <div className="burgerButton_bars__O6nfk">
                        <div className="burgerButton_bar__lLH45"></div>
                        <div className="burgerButton_bar__lLH45"></div>
                        <div className="burgerButton_bar__lLH45"></div>
                        <div className="burgerButton_bar__lLH45"></div>
                    </div>
                </div>
                <div className="fixed md:hidden top-0 right-0 w-full h-screen-d overflow-auto bg-purple z-30 pointer-events-none translate-x-full transition-transform ease-out-quart duration-500">
                    <div className="flex flex-col justify-end gap-6 w-full h-full px-6 text-white pt-12">
                        <div className="flex flex-col h-full justify-start type-body-lg gap-4 mb-6">
                            <a
                                tabIndex="0"
                                href="https://docs.storyprotocol.xyz/docs/what-is-story-protocol"
                                className="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                                style={{ transitionDelay: 0 }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="relative pb-1 outline-none ">
                                    Docs
                                    <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                </span>
                            </a>
                            <button
                                className="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                                style={{ transitionDelay: 0 }}
                                tabIndex="0"
                            >
                                <span className="relative pb-1 outline-none ">
                                    About
                                    <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                </span>
                            </button>
                            <button
                                className="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                                style={{ transitionDelay: 0 }}
                                tabIndex="0"
                            >
                                <span className="relative pb-1 outline-none ">
                                    Values
                                    <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                </span>
                            </button>
                            <button
                                className="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                                style={{ transitionDelay: 0 }}
                                tabIndex="0"
                            >
                                <span className="relative pb-1 outline-none ">
                                    Partners
                                    <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                </span>
                            </button>
                            <button
                                className="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                                style={{ transitionDelay: 0 }}
                                tabIndex="0"
                            >
                                <span className="relative pb-1 outline-none ">
                                    People
                                    <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                </span>
                            </button>
                            <a
                                href="/media"
                                className="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                                style={{ transitionDelay: 0 }}
                                tabIndex="0"
                            >
                                <span className="relative pb-1 outline-none ">
                                    News
                                    <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                </span>
                            </a>
                            <a
                                tabIndex="0"
                                href="https://jobs.lever.co/storyprotocol"
                                className="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                                style={{ transitionDelay: 0 }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="relative pb-1 outline-none ">
                                    Careers
                                    <span className="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                </span>
                            </a>
                        </div>
                        <div className="flex flex-col gap-6 w-full"></div>
                    </div>
                </div>
            </header>
            <div
                className="fixed hidden top-0 right-0 md:flex pt-6 lg:pt-10 pr-6 lg:pr-10 z-40 transition-all duration-300 md:duration-500 ease-out-cubic translate-y-0"
                style={{
                    transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 1px)'
                }}
                ref={headerButtonRef}
            >
                <a
                    href="/media/vision"
                    className="group type-button transform-gpu overflow-hidden relative flex flex-shrink-0 justify-center items-center rounded-full bg-purple text-white outline-none appearance-none focus-visible:bg-purple-dark pl-6 pr-2 lg:pl-10 lg:pr-2 transition-[height,_font-size] duration-300 ease-out-cubic h-12 lg:h-12"
                    tabindex="0"
                    type="button"
                    data-gtag="true"
                    data-gtag-category="nav"
                    data-gtag-label="cta"
                >
                    <span className="mr-4 lg:mr-8 whitespace-nowrap transition-opacity opacity-100">
                        Our Vision
                    </span>
                    <span className="h-full w-0 transition-[width] duration-500 ease-out-expo lg:group-hover:w-12 group-focus-visible:w-12"></span>
                    <span className="flex absolute items-center justify-center top-1 right-1 rounded-full bg-eggshell origin-right transition-[width,_transform] duration-500 ease-out-expo h-[calc(100%_-_0.5rem)] w-12 group-hover:w-16 lg:w-12 lg:group-hover:w-16 group-focus-visible:w-16 translate-x-14 lg:translate-x-16 group-hover:translate-x-0 group-focus-visible:translate-x-0">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-purple w-5"
                        >
                            <path d="M13 5H19V11"></path>
                            <path d="M19 5L5 19"></path>
                        </svg>
                    </span>
                    <span className="absolute top-0 left-0 w-full h-full flex justify-center items-center transition-opacity opacity-0 pointer-events-none">
                        <div className="loading_ring__th98j">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Header;
