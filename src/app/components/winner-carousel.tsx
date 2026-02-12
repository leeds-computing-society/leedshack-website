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
import Link from "next/link";
import { WinnerGradient } from "./winner-gradient";
import { CornerBox } from "./corner-box";
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

interface WinnerCarouselItem
{
    title: string;
    description: string;
    link: string;
    creators: string[];
    winners: string[];
};

const SponsorCarouselItemList: WinnerCarouselItem[] = [
    {
        title: "Viva",
        description: "NHS diagnosis system reboot. Making it more likely for breast cancer to be caught early.",
        link: "https://devpost.com/software/viva-g59as4",
        creators: ["Nalani Swan", "Grace Boothe", "Matilda Parker-Cole", "Folakemi Fashola"],
        winners: ["PwC Sponsor Challenge", "1st Prize Overall"]
    },
    {
        title: "Semamore",
        description: "Talk With Your Hands, Not Your Thumbs.",
        link: "https://devpost.com/software/semamore-talk-with-your-hands-not-your-thumbs",
        creators: ["Henry Cheadle", "Arsh Zilpe", "Ryan Olsson"],
        winners: ["2nd Prize Overall"]
    },
    {
        title: "IMDB Title Form",
        description: "Overhauled the current IMDB system for submitting a new title, significantly simplifying and adding new tooltip system.",
        link: "https://devpost.com/software/imdb-title-form",
        creators: ["Rowan Fartousi", "Ziyun Kang"],
        winners: ["IMDb Sponsor Challenge"]
    },
    {
        title: "Thebug",
        description: "A fun and whimsical game about the daily struggles of an IT support employee. Fixing his clients' laptops, one System Reboot at a time.",
        link: "https://devpost.com/software/thebug",
        creators: ["Jacob Warren", "Oleksandr Tunik", "Rostyslav Henyk", "Ali AlMaraghi"],
        winners: ["Genio Sponsor Challenge"]
    },
    {
        title: "Mercurial",
        description: "Mercurial empowers logistics providers to foresee supply chain disruptions. Monitor maritime, air, and road traffic in real-time.",
        link: "https://devpost.com/software/mercurial",
        creators: ["Adam Crawley", "Jack Dering", "William Kingdon", "Jacob Stockwell"],
        winners: ["Ligentia Sponsor Challenge"]
    },
    {
        title: "PredictPal",
        description: "PredictPal turns messy time-series data into clear forecasts and shareable story posts, guiding anyone from upload to insight in five simple steps.",
        link: "https://devpost.com/software/predictpal",
        creators: ["Nathan Walsh", "Cal Levitt", "Gabriel Saban", "Kian Thakrar"],
        winners: ["Parallax Sponsor Challenge"]
    },
    {
        title: "Attendamon",
        description: "Gamify University attendance with a customisable companion who levels up with you!",
        link: "https://devpost.com/software/attendamon",
        creators: ["Leo Gott", "Joseph Jacura", "Baran Dennis", "Oly Woolsey"],
        winners: ["SoCS Sponsor Challenge"]
    },
    {
        title: "Mindmaply",
        description: "Learn efficiently with an AI powered mindmap.",
        link: "https://devpost.com/software/mindmaply",
        creators: ["Samuel Shenker", "Ethan Villanueva", "Ngakudzweishe Njaravani", "Amr Mohamed"],
        winners: ["MLH Best Use of Gemini API"]
    },
    {
        title: "Chain-Reaction",
        description: "A web app that combines multivariate forecasting with a supply-chain digital twin. The goal is to turn historical logistics + weather data into predictive signals and mitigation for operations.",
        link: "https://devpost.com/software/chain-reaction-guaz52",
        creators: ["Zian Wang", "Demian Volkov", "Ayomide Ojediran", "Adam Selby"],
        winners: ["MLH Best Use of Solana"]
    },
    {
        title: "CampusConnect",
        description: "Connect, Collaborate, Create Together.",
        link: "https://devpost.com/software/campusconnect-hyt39e",
        creators: ["Danial Eizlan Bin Daud", "Tasnim Zulkifli", "Wei Xi See", "Abdul Ibrahim"],
        winners: ["MLH Best Use of ElevenLabs"]
    },
    {
        title: "StudyDino",
        description: "A casual study mobile application for university students to study together, find community, and ease the overcrowding of the tiny collaborative area in the university library!",
        link: "https://devpost.com/software/studydino-6ext05",
        creators: ["Huseyin Emre Ozden", "Joseph Garnett"],
        winners: ["MLH Best Use of MongoDB Atlas"]
    }
];

export const WinnerCarousel = () =>
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
                    {SponsorCarouselItemList.map((item: WinnerCarouselItem, index: number) => (
                        <div className="relative flex flex-col h-full w-[90%] min-[48rem]:w-[70%] mx-4 shrink-0 flex align-middle items-center border-white/50 border-l border-r" key={index}>
                            {/* <div className="absolute z-50 top-16 -right-3 min-[48rem]:top-14 min-[48rem]:-right-3 bg-black px-6 py-2 border border-white/50 rotate-5 text-xs min-[48rem]:text-sm">
                                {item.winners.map((winner, index) => <div key={index}>{winner}</div>)}
                            </div> */}

                            <CornerBox className="relative h-24 border-white/50 border-b w-full flex justify-center items-center text-lg min-[48rem]:text-2xl overflow-hidden">
                                <div className="z-10">{item.title}</div>
                                <WinnerGradient></WinnerGradient>
                            </CornerBox>
                            <div className="bg-white/5 w-full py-4 px-4 min-[48rem]:px-6 text-sm min-[48rem]:text-md flex flex-row flex-wrap justify-center border-b border-dashed border-white/50 bg-white/10">
                                {item.winners.map((winner, index) => <div className="px-6" key={index}>{winner}</div>)}
                            </div>
                            <div className="w-full bg-white/5 py-4 px-6 min-[48rem]:px-24 grow text-md min-[48rem]:text-lg">
                                {item.description}
                            </div>
                            <div className="bg-white/5 w-full py-4 px-4 min-[48rem]:px-6 text-sm min-[48rem]:text-md flex flex-row flex-wrap justify-center border-dashed border-t border-b border-white/50 bg-white/10">
                                {item.creators.map((creator, index) => <div className="px-6" key={index}>{creator}{index + 1 == item.creators.length || ","}</div>)}
                            </div>

                            <div className="w-full bg-white/5 py-4 px-4 min-[48rem]:px-6 min-[48rem]:pb-6 text-md min-[48rem]:text-lg bg-white/10">
                                <Link className="block text-center py-4 px-6 border transition-button bg-white/10 border-white/50 hover:bg-leeds-hack-2026-primary-500 cursor-pointer" href={item.link}> Check It Out</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={() => { emblaApi?.scrollNext(); }} className="w-6 min-[48rem]:w-12 transition-button shrink-0 h-full border-white/50 border-l bg-white/10 hover:bg-white/20 flex justify-center items-center hover:cursor-pointer">
                <ArrowRight className="w-6 stroke-white"></ArrowRight>
            </button>
        </div >
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