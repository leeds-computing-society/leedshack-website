"use client";
import React, { useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HetznerLogo } from "./sponsors/hetzner-logo";
import { ArrowLeft } from "./icons/arrow-left";
import { ArrowRight } from "./icons/arrow-right";
// import { useAutoplay } from "./EmblaCarouselAutoplay";
// import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
// import
// {
//     NextButton,
//     PrevButton,
//     usePrevNextButtons
// } from "./EmblaCarouselArrowButtons";

// type PropType = {
//     slides: number[];
//     options?: EmblaOptionsType;
// };

export const SponsorCarousel = () =>
{
    // const { slides, options } = props;

    let slides = [1, 2, 3, 4];
    let progressNode = useRef<HTMLDivElement>(null);
    let [emblaReference, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ playOnInit: true, delay: 8000 })]);

    // const {
    //     prevBtnDisabled,
    //     nextBtnDisabled,
    //     onPrevButtonClick,
    //     onNextButtonClick
    // } = usePrevNextButtons(emblaApi);

    // const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    //     useAutoplay(emblaApi);

    // const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

    return (
        <div className="w-full h-128 flex flex-row border-white/50 border">
            <button onClick={() => { emblaApi?.scrollPrev(); }} className="w-12 transition-button shrink-0 h-full border-white/50 border-r bg-leeds-hack-2026-primary-500/25 hover:bg-leeds-hack-2026-primary-500/50 flex justify-center hover:cursor-pointer">
                <ArrowLeft className="w-6 stroke-white"></ArrowLeft>
            </button>

            {/* h-full flex-1 min-w-0 */}
            <div className="h-full grow overflow-hidden" ref={emblaReference}>
                <div className="h-full flex flex-row">
                    {slides.map((index: number) => (
                        <div className="ml-12 h-full w-3xl shrink-0 flex align-middle items-center bg-leeds-hack-2026-primary-500/10 border-white/50 border-l border-r" key={index}>
                            <div className="h-full w-48 shrink-0 border-white/50 border-r flex justify-center items-center">
                                <HetznerLogo className="w-32 fill-white"></HetznerLogo>
                            </div>
                            <div className="m-6">
                                Ligentia is a leading supply chain technology and solutions provider with over almost 30 years’ experience delivering more sustainable and agile supply chains. Our customers include some of the world’s most sophisticated retailers and best-known brands in manufacturing, healthcare, and consumer goods. With teams located across Asia, Australia, North America, and Europe, our people are supply chain experts who provide world-class sector and regional expertise, backed by smart technology. We give businesses the data, insights and tools they need to transform their supply chains, proactively manage disruption, reduce supply chain waste, and deliver exceptional experiences for their customers.
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={() => { emblaApi?.scrollNext(); }} className="w-12 transition-button shrink-0 h-full border-white/50 border-l bg-leeds-hack-2026-primary-500/25 hover:bg-leeds-hack-2026-primary-500/50 flex justify-center hover:cursor-pointer">
                <ArrowRight className="w-6 stroke-white"></ArrowRight>
            </button>
        </div>
    );
};


//   {/* <div className="embla__viewport" ref={emblaReference}>
//                 <div className="embla__container">
//                     {slides.map((index: number) => (
//                         <div className="embla__slide" key={index}>
//                             <div className="embla__slide__number">
//                                 <span>{index + 1}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="embla__controls">
//                 <div className="embla__buttons">


//                 </div>

//                 {/* <div
//                     className={`embla__progress`.concat(
//                         showAutoplayProgress ? "" : " embla__progress--hidden"
//                     )}
//                 >
//                     <div className="embla__progress__bar" ref={progressNode} />
//                 </div> */}

//                 {/* <button className="embla__play" onClick={toggleAutoplay} type="button">
//                     {autoplayIsPlaying ? "Stop" : "Start"}
//                 </button> */}
//             </div> */}