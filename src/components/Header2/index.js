import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import LogoSvg from '../Svg/logo';

const Header = () => {
    const headerRef = useRef(null); // Reference to the header element
    // Function to calculate luminance and set text color
    useEffect(() => {
        let lastScrollTop = 0;
        const header = headerRef.current;

        // Function to update the header class based on the data-color attribute
        const updateHeaderClass = () => {
            // Select all divs that could affect the header color
            const colorDivs = document.querySelectorAll('div[data-color]');
            // Initialize variables to find the div closest to the top of the viewport
            let closestDiv = null;
            let closestDivDistance = Infinity;

            colorDivs.forEach(div => {
                const rect = div.getBoundingClientRect();
                // Check if the div is above the bottom of the viewport and closer than the current closest
                if (rect.bottom > 0 && rect.top < closestDivDistance) {
                    closestDiv = div;
                    closestDivDistance = rect.top;
                }
            });

            // If we found a div, update the header class
            if (closestDiv) {
                const color = closestDiv.getAttribute('data-color');
                if (color === 'blank') {
                    header.classList.add('text-blank');
                    header.classList.remove('text-white');
                } else if (color === 'white') {
                    header.classList.add('text-white');
                    header.classList.remove('text-blank');
                }
            }
        };
        // Run the update function once on mount to set the initial class
        updateHeaderClass();

        // Create the scroll-triggered animation
        const scrollTrigger = ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const scrollTop = self.scroll();
                if (scrollTop > lastScrollTop) {
                    gsap.to(header, { y: -header.offsetHeight, autoAlpha: 0, duration: 0.2 });
                } else {
                    gsap.to(header, { y: 0, autoAlpha: 1, duration: 0.2 });
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

                // Update the header class on scroll
                updateHeaderClass();
            }
        });

        // Clean up the ScrollTrigger instance on component unmount
        return () => scrollTrigger.kill();
    }, []);

    return (
        <header
            ref={headerRef}
            class="fixed top-0 left-0 w-full md:w-auto flex items-center justify-between z-[999] md:z-40  py-0 md:py-6 lg:py-10 px-6 lg:px-10 translate-y-0 bg-transparent transition-all duration-300 md:duration-500 ease-out-cubic"
            style={{ transform: "translate3d(var(--tw-translate-x), var(--tw-translate-y), 1px)" }}
        >
            <div class="flex items-center md:h-12">
                <button class="relative group cursor-pointer outline-none">
                    <div class="cursor-pointer ">
                        <LogoSvg></LogoSvg>
                    </div>
                    <div class="absolute -bottom-2 left-[2%] w-[96%] h-1 bg-black opacity-0 pointer-events-none group-focus-visible:opacity-100"></div>
                </button>
                <div class="hidden md:flex type-body-sm ml-4 lg:ml-8 xl:ml-10">
                    <nav
                        aria-label="Main"
                        data-orientation="horizontal"
                        dir="ltr"
                        class="relative z-10 flex max-w-max flex-1 items-center justify-center"
                    >
                        <div className="relative">
                            <ul
                                data-orientation="horizontal"
                                class="group flex flex-1 list-none items-center justify-center space-x-1"
                                dir="ltr"
                            >
                                <li class="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                    <a
                                        tabIndex="0"
                                        href="https://docs.storyprotocol.xyz/docs/what-is-story-protocol"
                                        class="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="relative pb-1 outline-none ">
                                            Docs
                                            <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                        </span>
                                    </a>
                                </li>
                                <li class="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                    <button
                                        class="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                        tabIndex="0"
                                    >
                                        <span class="relative pb-1 outline-none ">
                                            About
                                            <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                        </span>
                                    </button>
                                </li>
                                <li class="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                    <button
                                        class="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                        tabIndex="0"
                                    >
                                        <span class="relative pb-1 outline-none ">
                                            Values
                                            <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                        </span>
                                    </button>
                                </li>
                                <li class="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                    <button
                                        class="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                        tabIndex="0"
                                    >
                                        <span class="relative pb-1 outline-none ">
                                            Partners
                                            <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                        </span>
                                    </button>
                                </li>
                                <li class="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                    <button
                                        class="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                        tabIndex="0"
                                    >
                                        <span class="relative pb-1 outline-none ">
                                            People
                                            <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                        </span>
                                    </button>
                                </li>
                                <li class="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                    <a
                                        href="/media"
                                        class="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                        tabIndex="0"
                                    >
                                        <span class="relative pb-1 outline-none ">
                                            News
                                            <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                                        </span>
                                    </a>
                                </li>
                                <li class="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent type-body-sm transition-colors ease-out-cubic focus:bg-white/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
                                    <a
                                        tabIndex="0"
                                        href="https://jobs.lever.co/storyprotocol"
                                        class="group/navlink cursor-pointer outline-none mx-2 lg:mx-4 xl:mx-5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="relative pb-1 outline-none ">
                                            Careers
                                            <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
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
                class="burgerButton_burger-menu__19bxi relative md:hidden flex items-center justify-center ml-6 cursor-pointer z-40 -mr-6 outline-none focus:outline-none"
            >
                <div class="burgerButton_bars__O6nfk">
                    <div class="burgerButton_bar__lLH45"></div>
                    <div class="burgerButton_bar__lLH45"></div>
                    <div class="burgerButton_bar__lLH45"></div>
                    <div class="burgerButton_bar__lLH45"></div>
                </div>
            </div>
            <div class="fixed md:hidden top-0 right-0 w-full h-screen-d overflow-auto bg-purple z-30 pointer-events-none translate-x-full transition-transform ease-out-quart duration-500">
                <div class="flex flex-col justify-end gap-6 w-full h-full px-6 text-white pt-12">
                    <div class="flex flex-col h-full justify-start type-body-lg gap-4 mb-6">
                        <a
                            tabIndex="0"
                            href="https://docs.storyprotocol.xyz/docs/what-is-story-protocol"
                            class="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                            style={{ transitionDelay: 0 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="relative pb-1 outline-none ">
                                Docs
                                <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                            </span>
                        </a>
                        <button
                            class="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                            style={{ transitionDelay: 0 }}
                            tabIndex="0"
                        >
                            <span class="relative pb-1 outline-none ">
                                About
                                <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                            </span>
                        </button>
                        <button
                            class="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                            style={{ transitionDelay: 0 }}
                            tabIndex="0"
                        >
                            <span class="relative pb-1 outline-none ">
                                Values
                                <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                            </span>
                        </button>
                        <button
                            class="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                            style={{ transitionDelay: 0 }}
                            tabIndex="0"
                        >
                            <span class="relative pb-1 outline-none ">
                                Partners
                                <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                            </span>
                        </button>
                        <button
                            class="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                            style={{ transitionDelay: 0 }}
                            tabIndex="0"
                        >
                            <span class="relative pb-1 outline-none ">
                                People
                                <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                            </span>
                        </button>
                        <a
                            href="/media"
                            class="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                            style={{ transitionDelay: 0 }}
                            tabIndex="0"
                        >
                            <span class="relative pb-1 outline-none ">
                                News
                                <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                            </span>
                        </a>
                        <a
                            tabIndex="0"
                            href="https://jobs.lever.co/storyprotocol"
                            class="group/navlink cursor-pointer outline-none transition-all relative flex duration-500 ease-out-quart text-white border-white transform-gpu opacity-0 translate-x-8"
                            style={{ transitionDelay: 0 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="relative pb-1 outline-none ">
                                Careers
                                <span class="w-full h-0 border-b absolute bottom-0 transition-transform duration-300 ease-out-quart left-0 origin-right scale-x-0 group-hover/navlink:scale-x-100 group-hover/navlink:origin-left group-focus-visible/navlink:scale-x-100 group-focus-visible/navlink:origin-left"></span>
                            </span>
                        </a>
                    </div>
                    <div class="flex flex-col gap-6 w-full"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
