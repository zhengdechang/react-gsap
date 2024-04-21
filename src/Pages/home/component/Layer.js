import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Layer = () => {

   const layerRef = useRef(null);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const element = layerRef.current;

      // Create the scroll-triggered animation
      const scrollTrigger = ScrollTrigger.create({
         trigger: element.parentElement, // Use parentElement as trigger
         start: "center top",
         end: "bottom top",
         scrub: true,
         onUpdate: self => {
            console.log(self.progress, 'progress');
            const progress = self.progress;
            const opacity = 1 - progress; // Linearly interpolate opacity from 1 to 0
            gsap.set(element, { opacity: opacity });
         }
      });

      return () => scrollTrigger.kill();
   }, []);
   return (
      <div className="scroll-trigger-wrapper" style={{ height: '100vh' }}>
         <div className="w-full h-screen-s bg-eggshell relative"></div>

         <div className="w-full h-screen-s fixed top-0 left-0 " ref={layerRef} data-color="blank" style={{ transform: 'none' }}>
            <div className="relative w-full h-full">
               <div data-scroll-target="5BLQBidZnY6leGPU28qFBj" className="relative w-full h-full flex flex-col justify-end md:justify-center bg-eggshell md:pt-24 text-black">
                  <div className="absolute w-full h-2/3 md:h-1/3 left-0 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent z-10"></div>
                  <video preload="auto" autoPlay loop playsInline poster="https://cdn.sp-assets.net/videos/hero-bg-poster.jpg" className="absolute top-0 left-0 w-full h-full object-cover z-0">
                     <source src="https://cdn.sp-assets.net/videos/hero-bg.webm" type="video/webm" />
                     <source src="https://cdn.sp-assets.net/videos/hero-bg.mp4" type="video/mp4" />
                  </video>
                  <div className="w-screen relative px-6 md:px-14 lg:px-20 xl:px-24">
                     <div className="w-full mx-auto max-w-8xl relative flex flex-col z-20 overflow-visible mb-6 md:mb-24">
                        <div className="relative flex flex-col" style={{ transform: 'translate3d(0,-0%,0)', opacity: 1 }}>
                           <h1 className="type-title-3xl">The <span className="inline font-display">Programmable </span><br /><span className="inline font-display">IP </span>Layer<br /></h1>
                        </div>
                     </div>
                  </div>
                  <div className="relative md:absolute flex w-full md:bottom-12 ">
                     <div className="w-screen relative px-6 md:px-14 lg:px-20 xl:px-24">
                        <div className="w-full mx-auto max-w-8xl relative flex flex-col z-20 overflow-visible mb-8 md:mb-0">
                           <div className="relative flex flex-col" style={{ transform: 'translate3d(0,-0%,0)', opacity: 1 }}>
                              <h3 className="flex type-body-lg md:self-end">Story Protocol transforms IPs into networks <br className="hidden sm:block" />that transcend mediums and platforms, <br className="hidden sm:block" />unleashing global creativity and liquidity.<br className="hidden sm:block" /></h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="w-screen relative px-6 md:px-14 lg:px-20 xl:px-24">
                     <div className="w-full mx-auto max-w-8xl relative flex md:hidden flex-col z-20 pb-4 md:pb-0 overflow-visible">
                        <a href="/media/vision" className="group type-button transform-gpu overflow-hidden relative flex flex-shrink-0 justify-center items-center rounded-full bg-purple text-white outline-none appearance-none focus-visible:bg-purple-dark h-16 pl-6 pr-2 lg:pl-10 lg:pr-2 transition-[height,_font-size] duration-300 ease-out-cubic lg:h-18 !text-sm w-full xs:w-auto mb-10" tabIndex="0" type="button" data-gtag="true" data-gtag-category="nav" data-gtag-label="cta">
                           <span className="mr-4 lg:mr-8 whitespace-nowrap transition-opacity opacity-100">Our Vision</span>
                           <span className="h-full w-0 transition-[width] duration-500 ease-out-expo group-hover:w-16 group-focus-visible:w-16"></span>
                           <span className="flex absolute items-center justify-center top-1 right-1 rounded-full bg-eggshell origin-right transition-[width,_transform] duration-500 ease-out-expo h-[calc(100%_-_0.5rem)] w-12 group-hover:w-16 lg:w-16 lg:group-hover:w-20 group-focus-visible:w-20 translate-x-16 lg:translate-x-20 group-hover:translate-x-0 group-focus-visible:translate-x-0">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple w-5 md:w-7">
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
               </div>
            </div>
         </div>
      </div>
   );
};

export default Layer;
