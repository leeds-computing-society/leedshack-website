import Link from "next/link";
import type { Organization, Event, WithContext, WebSite } from "schema-dts";
import { LeedsHack2026Logo } from "@/app/components/leeds-hack-2026-logo";
import { TypeAnimation } from "react-type-animation";
import { SnowflakeLogo } from "@/app/components/sponsors/snowflake-logo";
import { IMDbLogo } from "@/app/components/sponsors/imdb-logo";
import { PexipLogo } from "@/app/components/sponsors/pexip-logo";
import { TheDataCityLogo } from "@/app/components/sponsors/the-data-city-logo";
import { RebuildingSocietyLogo } from "@/app/components/sponsors/rebuilding-society-logo";
import { GenioLogo } from "@/app/components/sponsors/genio-logo";
import { HetznerLogo } from "@/app/components/sponsors/hetzner-logo";
import { AudaciaLogo } from "@/app/components/sponsors/audacia-logo";
import { UoLLogo } from "@/app/components/uol-logo";
import { SponsorLink } from "@/app/components/sponsor-link";
import { StatisticCard } from "@/app/components/statistic-card";
import { SponsorCarousel } from "./components/sponsor-carousel";
import Marquee from "react-fast-marquee";
import { PwCLogo } from "./components/sponsors/pwc-logo";
import { LigentiaLogo } from "./components/sponsors/ligentia-logo";
import { ParallaxLogo } from "./components/sponsors/parallax-logo";
import { LeedsHack2026LogoOld } from "./components/leeds-hack-2026-logo-old";
import { RSLogo } from "./components/sponsors/rs-logo";
import { MLHLogo } from "./components/sponsors/mlh-logo";
import { RegistrationCountdown } from "./components/registration-countdown";

const organisation: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Lifton Place",
        addressLocality: "Leeds",
        addressCountry: "GB",
        addressRegion: "England",
        postalCode: "LS2 9JZ"
    },
    contactPoint: {
        "@type": "ContactPoint",
        email: "info@leedshack.com"
    },
    description: "LeedsHack is the official hackathon of the Leeds Computing Society. We invite students from Universities across the UK to participate in a free 24-hour hackathon. LeedsHack is supported by the University of Leeds, School of Computing and our sponsors.",
    email: "info@leedshack.com",
    logo: "https://leedshack.com/structured-data/organisation.jpg",
    name: "LeedsHack",
    url: "https://leedshack.com"
};

const event: WithContext<Event> = {
    "@context": "https://schema.org",
    "@type": "Event",
    location: {
        "@type": "Place",
        name: "Sir William Henry Bragg Building",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Woodhouse Lane",
            addressLocality: "Leeds",
            addressCountry: "GB",
            addressRegion: "England",
            postalCode: "LS2 9JT"
        }
    },
    name: "LeedsHack 2026",
    startDate: "2026-02-07",
    endDate: "2026-02-08",
    description: "LeedsHack is the official hackathon of the Leeds Computing Society. We invite students from Universities across the UK to participate in a free 24-hour hackathon. LeedsHack is supported by the University of Leeds, School of Computing and our sponsors.",
    eventStatus: "EventScheduled",
    image: [
        "https://leedshack.com/structured-data/leeds-hack-1x1.jpg",
        "https://leedshack.com/structured-data/leeds-hack-4x3.jpg",
        "https://leedshack.com/structured-data/leeds-hack-16x9.jpg"
    ],
    organizer: {
        "@type": "Organization",
        name: "Leeds Computing Society",
        url: "https://luucompsoc.co.uk"
    }
};

let website: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LeedsHack",
    url: "https://leedshack.com"
};

let structuredData: any[] = [
    organisation,
    event,
    website
];

export default function Page()
{
    return (
        <div className="flex flex-row justify-center grow text-white">
            {
                structuredData.map((object, index) => <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(object).replace(/</g, '\\u003c'),
                    }}
                />)
            }
            <div className="flex flex-col min-w-0 text-center mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem]">
                <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center gap-6 pt-24 pb-12">
                    <LeedsHack2026Logo className="fill-white max-w-128 px-6 min-[48rem]:px-0"></LeedsHack2026Logo>
                    <div className="mx-auto max-w-128 px-6 min-[48rem]:px-0 text-sm min-[48rem]:text-md text-white flex gap-6 min-[64rem]:gap-6 justify-between">
                        <div className="text-left">7th - 8th February</div>
                        <Link href="https://maps.app.goo.gl/mcv9zr9xncYnC7L77" className="text-right underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Sir William Henry Bragg Building</Link>
                    </div>
                    {/* <div className="mt-12 flex flex-col items-center w-fit mx-auto">
                        {registrationCountdown()}
                        <Link className="w-fit block text-center mt-3 mb-3 px-48 py-4 border transition-button bg-white/10 border-white/50 hover:bg-leeds-hack-2026-primary-500 cursor-pointer text-md" href="https://www.universe.com/events/leedshack-2026-tickets-N9LZPY">Apply For Your Ticket Now</Link>
                        <div className="text-sm">* Registering does not guarantee a ticket to the event,</div>
                        <div className="text-sm">allocation of tickets is random and will take place</div>
                        <div className="text-sm">on Thursday 15th January.</div>
                    </div> */}
                </div>

                <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center pb-12">
                    <div className="max-w-[48rem] text-sm min-[48rem]:text-md flex flex-col items-center gap-3">
                        <div className="px-6 min-[48rem]:px-24">The wait is finally over! We're excited to announce LeedsHack will be returning for 2026. All UK university students are welcome, whatever your skill level or hackathon experience.</div>
                        <div className="px-6 min-[48rem]:px-24 pb-12">Find out more on our <Link href="/faq" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">FAQ</Link>.</div>
                        <div className="px-12 min-[48rem]:px-24"><RegistrationCountdown></RegistrationCountdown></div>
                        <div className="px-6 w-full">
                            <Link className="w-full block text-center py-4 border transition-button bg-white/10 border-white/50 hover:bg-leeds-hack-2026-primary-500 cursor-pointer" href="https://www.universe.com/events/leedshack-2026-tickets-N9LZPY">Apply For Your Ticket Now!</Link>
                        </div>
                        <div className="text-xs px-12 min-[48rem]:px-24 text-white/50">* Registration does not guarantee a ticket to the event, allocation of tickets is random and will take place on Thursday 15th January.</div>
                    </div>
                </div>
                <Marquee autoFill={true} speed={40} className="bg-black/50 border-white/50 border-t border-l border-r border-b w-full h-24">
                    <PwCLogo className="mr-24 fill-white h-8"></PwCLogo>
                    <GenioLogo className="mr-24 fill-white h-8"></GenioLogo>
                    <IMDbLogo className="mr-24 fill-white h-6"></IMDbLogo>
                    <LigentiaLogo className="mr-24 fill-white h-7"></LigentiaLogo>
                    <ParallaxLogo className="mr-24 fill-white h-6"></ParallaxLogo>
                </Marquee>
                <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center pt-12">
                    <div className="max-w-[48rem] text-sm min-[48rem]:text-md flex flex-col items-center gap-3">
                        <div className="px-6 min-[48rem]:px-24 text-lg min-[48rem]:text-xl">Team Registration</div>
                        <div className="px-6 min-[48rem]:px-24">If you have a group of people that you wouldn't want to do LeedsHack without then fill out this additional form to indicate you would like to be treated as a team.</div>
                        <div className="px-6 w-full">
                            <Link className="w-full block text-center py-4 border transition-button bg-white/10 border-white/50 hover:bg-leeds-hack-2026-primary-500 cursor-pointer" href="https://forms.gle/GycdWX2e9x3zdTep9">Register A Team</Link>
                        </div>
                    </div>
                </div>
                <div className="border-l border-r border-dashed border-white/50 pt-12">
                    <div className="border-t border-dashed border-white/50 flex flex-col items-center pt-12 pb-12">
                        <div className="max-w-[48rem] text-sm min-[48rem]:text-md flex flex-col items-center gap-3">
                            <div className="px-6 min-[48rem]:px-24 text-lg min-[48rem]:text-xl">Sponsors</div>
                            <div className="px-6 min-[48rem]:px-24">Find out more about the sponsors making LeedsHack 2026 possible.</div>
                        </div>
                    </div>
                </div>
                <SponsorCarousel></SponsorCarousel>
                <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center py-12">
                    <div className="max-w-[48rem] text-sm min-[48rem]:text-md flex flex-col items-center gap-3">
                        <div className="px-6 min-[48rem]:px-24 text-lg min-[48rem]:text-xl">Partners</div>
                    </div>
                </div>
                <div className="h-48 max-[64rem]:h-72 grid grid-cols-3 max-[64rem]:grid-cols-2 max-[64rem]:grid-rows-2 border border-white/50">
                    <SponsorLink
                        className="bg-white mlh-logo-hover"
                        logo={<MLHLogo className="h-12 "></MLHLogo>}
                        href="https://mlh.io"
                    ></SponsorLink>
                    <SponsorLink
                        className="bg-black fill-white max-[64rem]:col-span-2 max-[64rem]:row-start-2 max-[64rem]:border-t max-[64rem]:border-l-0"
                        logo={<UoLLogo className="h-10"></UoLLogo>}
                        href="https://www.leeds.ac.uk"
                    ></SponsorLink>
                    <SponsorLink
                        className="bg-[#ef0000] fill-white rs-logo-hover"
                        logo={<RSLogo className="h-14"></RSLogo>}
                        href="https://uk.rs-online.com/web"
                    ></SponsorLink>
                </div>
                <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center pt-12">
                    <div className="max-w-[48rem] text-sm min-[48rem]:text-md flex flex-col items-center gap-3">
                        <div className="px-6 min-[48rem]:px-24 text-lg min-[48rem]:text-xl">Volunteer</div>
                        <div className="px-6 min-[48rem]:px-24">We are looking for people to help out with general volunteering, mentoring and judging. Find out more through the links below.</div>
                        <div className="px-6 w-full">
                            <Link className="w-full block text-center py-4 border transition-button bg-white/10 border-white/50 hover:bg-leeds-hack-2026-primary-500 cursor-pointer" href="https://forms.gle/XGLrbFsoZ6vULu7X9">Apply To Volunteer</Link>
                        </div>
                        <div className="px-6 w-full">
                            <Link className="w-full block text-center py-4 border transition-button bg-white/10 border-white/50 hover:bg-leeds-hack-2026-primary-500 cursor-pointer" href="https://forms.gle/mZLsZhMmfQhY2FDj7">Apply To Mentor</Link>
                        </div>
                        <div className="text-xs px-12 min-[48rem]:px-24 text-white/50">If you are interested in helping out as a judge please email <Link href="mailto:leedshack@luucompsoc.co.uk" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">leedshack@luucompsoc.co.uk</Link>. Please note for this role we are looking for professionals in the technology sector (such as software engineers, product managers, QA engineers, and designers).</div>
                    </div>
                </div>
                <div className="border-l border-r border-dashed border-white/50 h-12">
                </div>

            </div>
        </div>
    );
};

//[https://forms.gle/XGLrbFsoZ6vULu7X9](https://forms.gle/XGLrbFsoZ6vULu7X9)
// Minimum size
// Parallax 20px / 10mm
// Ligentia 10mm
// Genio Unknown
// IMDb Unknown
// PwC width 0.375inch / 48px