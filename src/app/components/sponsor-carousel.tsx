"use client";
import React, { useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HetznerLogo } from "./sponsors/hetzner-logo";
import { ArrowLeft } from "./icons/arrow-left";
import { ArrowRight } from "./icons/arrow-right";
import { LigentiaLogo } from "./sponsors/ligentia-logo";
import { IMDbLogo } from "./sponsors/imdb-logo";
import { GenioLogo } from "./sponsors/genio-logo";
import { PwCLogo } from "./sponsors/pwc-logo";
import { ParallaxLogo } from "./sponsors/parallax-logo";
import { PwCLogoOrange } from "./sponsors/pwc-logo-orange";
import { LigentiaLogoColour } from "./sponsors/ligentia-logo-colour";
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

interface SponsorCarouselItem
{
    description: string;
    logo: React.ReactNode;
    background: string;
};

const SponsorCarouselItemList: SponsorCarouselItem[] = [
    {
        logo: <IMDbLogo className="fill-black h-10"></IMDbLogo>,
        background: "bg-[#f5c518]",
        description: "IMDb is the world's most popular and authoritative source for information on movies, TV shows, and celebrities. Hundreds of millions of customers all over the world rely on IMDb to discover and decide what to watch, advance their professional entertainment careers through IMDbPro, and grow their businesses using IMDb data and trending insights. Col Needham is the founder and CEO of IMDb. After starting a computer games software business at the age of 14, he went on to complete a computer science degree at Leeds University before commencing a career in technology research in Bristol, England."
    },
    {
        logo: <GenioLogo className="fill-black h-13"></GenioLogo>,
        background: "bg-[#FC88C6]",
        description: "At Genio (formerly Glean) we envision a world where every person has the tools and confidence to expand what's possible through learning. We believe this happens when you equip, empower, and encourage learners with courses to develop study skills, and tools that put knowledge into action, unlocking better learning. Trusted by over 1,000 institutions, Genio Notes makes classroom learning more effective for students of all abilities, and is now paired with an engaging course to boost study skills. Genio Present helps students gain presentation confidence through structured rehearsal, self-reflection, actionable feedback, and visible growth."
    },
    {
        logo: <PwCLogoOrange className="fill-black h-14"></PwCLogoOrange>,
        background: "bg-white",
        description: "PwC are a tech-forward, people-empowered network. With deep expertise and advanced capabilities, they help harness technology, make smart investments and be ready for any future. Across audit and assurance, tax and legal, deals and consulting they bring together the teams, resources and alliances to help companies to act boldly and achieve real results. PwC helps meet the demands of our ever-changing world with consistent quality and objective advice. Building on 175 years of trusted relationships, PwC are ready to help, ready to lead and ready to grow. They'll help you accelerate as you embrace the future"
    },
    {
        logo: <ParallaxLogo className="fill-white h-9"></ParallaxLogo>,
        background: "bg-[#8561F6]",
        description: "Founded in 2010, Parallax is a digital innovation consultancy with a team of 40 people based in Leeds and London. The firm positions itself as a partner in digital delivery and technical innovation, crafting digital solutions and cutting-edge technologies for both global organizations and ambitious scale-ups. Their core service areas include Digital & Product Consulting, Software Engineering, Experience Design, and Agile Delivery. Additionally, Parallax maintains specialized expertise in Generative AI, IoT, and Low-code platforms. The company holds ISO 27001 and 9001 certifications, is an AWS Hero and Partner with Azure and GCP experience, and has won over 25 awards for its work."
    },
    {
        logo: <LigentiaLogoColour className="h-12"></LigentiaLogoColour>,
        background: "bg-white",
        description: "Ligentia is a leading supply chain technology and solutions provider with over almost 30 years' experience delivering more sustainable and agile supply chains. Our customers include some of the world's most sophisticated retailers and best-known brands in manufacturing, healthcare, and consumer goods. With teams located across Asia, Australia, North America, and Europe, our people are supply chain experts who provide world-class sector and regional expertise, backed by smart technology. We give businesses the data, insights and tools they need to transform their supply chains, proactively manage disruption, reduce supply chain waste, and deliver exceptional experiences for their customers."
    }
];

export const SponsorCarousel = () =>
{
    // const { slides, options } = props;

    let progressNode = useRef<HTMLDivElement>(null);
    let [emblaReference, emblaApi] = useEmblaCarousel(
        { loop: true },
    );

    //[Autoplay({ playOnInit: true, delay: 8000 })]

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
        <div className="w-full h-fit flex flex-row border-white/50 border">
            <button onClick={() => { emblaApi?.scrollPrev(); }} className="w-6 min-[48rem]:w-12 transition-button shrink-0 h-full border-white/50 border-r bg-white/10 hover:bg-white/20 flex justify-center items-center hover:cursor-pointer">
                <ArrowLeft className="w-6 stroke-white"></ArrowLeft>
            </button>

            {/* h-full flex-1 min-w-0 */}
            <div className="h-full grow overflow-hidden" ref={emblaReference}>
                <div className="h-full flex flex-row">
                    {SponsorCarouselItemList.map((item: SponsorCarouselItem, index: number) => (
                        <div className="flex flex-col h-full w-[90%] min-[48rem]:w-[80%] mx-4 shrink-0 flex align-middle items-center bg-white/5 border-white/50 border-l border-r" key={index}>
                            <div className={"h-32 border-white/50 border-b w-full flex justify-center items-center " + item.background}>
                                {item.logo}
                                {/* bg-black/50 */}
                            </div>
                            <div className="py-4 px-4 min-[48rem]:px-6 grow text-sm min-[48rem]:text-md">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={() => { emblaApi?.scrollNext(); }} className="w-6 min-[48rem]:w-12 transition-button shrink-0 h-full border-white/50 border-l bg-white/10 hover:bg-white/20 flex justify-center items-center hover:cursor-pointer">
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