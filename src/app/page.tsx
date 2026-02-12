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
import { CornerBox } from "./components/corner-box";
import { ValueBox } from "./components/value-box";
import { WinnerCarousel } from "./components/winner-carousel";
import Image from "next/image";
import { Power } from "./components/icons/power";
import { LeedsHackText } from "./components/leeds-hack-text";

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
                {/* <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center gap-6 pt-24 pb-12">
                    <LeedsHack2026Logo className="fill-white max-w-128 px-6 min-[48rem]:px-0"></LeedsHack2026Logo>
                </div> */}
                <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center gap-6 pt-12 min-[48rem]:pt-24 pb-12 min-[48rem]:pb-24">
                    <div className="flex flex-row gap-1.5 min-[48rem]:gap-6">
                        <Power className="shrink-0 w-9 h-9 mt-0.5 min-[48rem]:w-22 min-[48rem]:h-22 min-[48rem]:pt-2"></Power>
                        <div className="flex flex-col items-start text-leeds-hack-small min-[48rem]:text-leeds-hack">
                            <LeedsHackText></LeedsHackText>
                        </div>
                    </div>
                </div>
                <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center pb-12">
                    <div className="max-w-[48rem] text-md min-[48rem]:text-lg flex flex-col items-center gap-3">
                        <div className="px-6 min-[48rem]:px-24">Thank you to everyone who attended LeedsHack 2026! It was an absolute blast to see the amazing projects you all created, and we enjoyed meeting every one of you.</div>
                        <div className="px-6 min-[48rem]:px-24">Here's some stats from the weekend.</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 min-[32rem]:grid-cols-3 border-l border-t border-white/50 bg-white/10">
                    <CornerBox className="relative border-r border-white/50 py-6 px-1.5 min-[48rem]:px-6">
                        <div className="text-sm min-[48rem]:text-lg">Hackers</div>
                        <ValueBox className="text-xl min-[48rem]:text-4xl" value="171"></ValueBox>
                    </CornerBox>
                    <CornerBox className="relative border-r max-[32rem]:border-t border-white/50 py-6 px-1.5 min-[48rem]:px-6">
                        <div className="text-sm min-[48rem]:text-lg">First Timers</div>
                        <ValueBox className="text-xl min-[48rem]:text-4xl" value="82"></ValueBox>
                    </CornerBox>
                    <CornerBox className="relative border-r max-[32rem]:border-t border-white/50 py-6 px-1.5 min-[48rem]:px-6">
                        <div className="text-sm min-[48rem]:text-lg">Prizes</div>
                        <ValueBox className="text-xl min-[48rem]:text-4xl" value="2000" prefix="£" suffix="+"></ValueBox>
                    </CornerBox>
                </div>
                <div className="grid grid-cols-2 min-[32rem]:grid-cols-4 border-l border-t border-white/50 bg-white/10">
                    <CornerBox className="relative border-r border-white/50 py-6 px-1.5 min-[48rem]:px-6">
                        <div className="text-sm min-[48rem]:text-lg">Volunteers</div>
                        <ValueBox className="text-xl min-[48rem]:text-4xl" value="30"></ValueBox>
                    </CornerBox>
                    <CornerBox className="relative border-r border-white/50 py-6 px-1.5 min-[48rem]:px-6">
                        <div className="text-sm min-[48rem]:text-lg">Sponsors</div>
                        <ValueBox className="text-xl min-[48rem]:text-4xl" value="6"></ValueBox>
                    </CornerBox>
                    <CornerBox className="relative border-r max-[32rem]:border-t border-white/50 py-6 px-1.5 min-[48rem]:px-6">
                        <div className="text-sm min-[48rem]:text-lg">UoL Students</div>
                        <ValueBox className="text-xl min-[48rem]:text-4xl" value="135"></ValueBox>
                    </CornerBox>
                    <CornerBox className="relative border-r max-[32rem]:border-t border-white/50 py-6 px-1.5 min-[48rem]:px-6">
                        <div className="text-sm min-[48rem]:text-lg">External Students</div>
                        <ValueBox className="text-xl min-[48rem]:text-4xl" value="36"></ValueBox>
                    </CornerBox>
                </div>
                <Image className="border-t border-l border-r border-white/50" alt="LeedsHack 2026 attendees" src="/leeds-hack/2026-main.jpg" width={2048} height={1024} />
                <Marquee autoFill={true} speed={40} className="bg-black/50 border-white/50 border-t border-l border-r border-b w-full h-24">
                    <PwCLogo className="mr-24 fill-white h-8"></PwCLogo>
                    <GenioLogo className="mr-24 fill-white h-8"></GenioLogo>
                    <IMDbLogo className="mr-24 fill-white h-6"></IMDbLogo>
                    <LigentiaLogo className="mr-24 fill-white h-7"></LigentiaLogo>
                    <ParallaxLogo className="mr-24 fill-white h-6"></ParallaxLogo>
                </Marquee>
                <div className="border-l border-r border-dashed border-white/50">
                    <div className="flex flex-col items-center pt-12 pb-12">
                        <div className="max-w-[48rem] text-md min-[48rem]:text-lg flex flex-col items-center gap-3">
                            <div className="px-6 min-[48rem]:px-24 text-lg min-[48rem]:text-xl">Congratulations!</div>
                            <div className="px-6 min-[48rem]:px-24">Well done to all the winners from this year's LeedsHack. Check out the awesome projects they created in just 24 hours.</div>
                        </div>
                    </div>
                </div>
                <WinnerCarousel></WinnerCarousel>
                <div className="border-l border-r border-dashed border-white/50">
                    <div className="flex flex-col items-center pt-12 pb-12">
                        <div className="max-w-[48rem] text-md min-[48rem]:text-lg flex flex-col items-center gap-3">
                            <div className="px-6 min-[48rem]:px-24">You can also check out all the other amazing projects on our <Link href="https://leedshack-2026.devpost.com/project-gallery" className="text-right underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Devpost</Link>.</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 border border-white/50">
                    <Image className="col-span-3 h-full object-cover" alt="Attendees showing their work to a judge at LeedsHack 2025" src="/leeds-hack/2026-1.jpg" width={1536} height={1024} />
                    <Image className="border-l border-white/50 col-span-2 h-full w-full object-cover" alt="Attendees working on their hackathon project at LeedsHack 2025" src="/leeds-hack/2026-3.jpg" width={1024} height={1024} />
                </div>
                <div className="grid grid-cols-5 border-l border-r border-b border-white/50">
                    <Image className="h-full w-full col-span-2 object-cover" alt="Attendees showing their work to a judge at LeedsHack 2025" src="/leeds-hack/2026-2.jpg" width={1536} height={1024} />
                    <Image className="border-l border-white/50 col-span-3 h-full object-cover" alt="Attendees working on their hackathon project at LeedsHack 2025" src="/leeds-hack/2026-4.jpg" width={1024} height={1024} />
                </div>
                {/* <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center pt-12">
                    <div className="max-w-[48rem] text-sm min-[48rem]:text-md flex flex-col items-center gap-3">
                        <div className="px-6 min-[48rem]:px-24 text-lg min-[48rem]:text-xl">Team Registration</div>
                        <div className="px-6 min-[48rem]:px-24">If you have a group of people that you wouldn't want to do LeedsHack without then fill out this additional form to indicate you would like to be treated as a team.</div>
                        <div className="px-6 w-full">
                            <Link className="w-full block text-center py-4 border transition-button bg-white/10 border-white/50 hover:bg-leeds-hack-2026-primary-500 cursor-pointer" href="https://forms.gle/GycdWX2e9x3zdTep9">Register A Team</Link>
                        </div>
                    </div>
                </div> */}
                <div className="border-l border-r border-dashed border-white/50">
                    <div className="flex flex-col items-center pt-12 pb-12">
                        <div className="max-w-[48rem] text-md min-[48rem]:text-lg flex flex-col items-center gap-3">
                            <div className="px-6 min-[48rem]:px-24 text-lg min-[48rem]:text-xl">Thanks To Our Sponsors</div>
                            <div className="px-6 min-[48rem]:px-24">Find out more about the sponsors who made LeedsHack 2026 possible.</div>
                        </div>
                    </div>
                </div>
                <SponsorCarousel></SponsorCarousel>
                <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center py-12">
                    <div className="max-w-[48rem] text-md min-[48rem]:text-lg flex flex-col items-center gap-3">
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
                {/* <div className="border-l border-r border-dashed border-white/50 flex flex-col items-center pt-12">
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
                </div> */}
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