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
    const registrationCountdown = () =>
    {
        let now: Date = new Date();
        let target: Date = new Date("2026-01-12T12:00:00Z");

        let difference = target.getTime() - now.getTime();

        if (difference <= 0) return "Registration is now closed.";

        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        let remainingHours = hours % 24;
        let remainingMinutes = minutes % 60;


        if (days >= 1) return <div className="text-sm px-24">Registration closes in <span className="text-[#a375ff]">{`${days} days, ${remainingHours} hours`}</span>.</div>;
        return <div className="text-sm px-24">Registration closes in <span className="text-[#FF526F]">{`${remainingHours} hours, ${remainingMinutes} minutes`}</span>.</div>;
    };

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
                <div className="border-l border-r border-dashed border-white/50 py-12 min-[48rem]:py-24 px-6 min-[48rem]:px-24 flex flex-col gap-6">
                    <LeedsHack2026Logo className="fill-white h-64"></LeedsHack2026Logo>
                    <div className="mx-auto w-[565px] text-sm text-white/75 flex gap-6 min-[64rem]:gap-12 justify-between">
                        <div className="text-left">7th - 8th February</div>
                        <Link href="https://maps.app.goo.gl/mcv9zr9xncYnC7L77" className="text-right underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Sir William Henry Bragg Building</Link>
                    </div>
                    <div className="mt-12 flex flex-col items-center w-fit mx-auto">
                        <div className="text-sm">{registrationCountdown()}</div>
                        <Link className="w-fit block text-center mt-3 mb-3 px-48 py-4 border transition-button bg-white/10 border-white/50 hover:bg-leeds-hack-2026-primary-500 cursor-pointer text-md" href="https://www.universe.com/events/leedshack-2026-tickets-N9LZPY">Apply For Your Ticket Now</Link>
                        <div className="text-sm">* Registering does not guarantee a ticket to the event,</div>
                        <div className="text-sm">allocation of tickets is random and will take place</div>
                        <div className="text-sm">on Thursday 15th January.</div>
                    </div>
                </div>
                <Marquee autoFill={true} speed={40} className="bg-black/50 border-white/50 border-t border-l border-r border-b w-full h-24">
                    <PwCLogo className="mr-24 fill-white h-8"></PwCLogo>
                    <GenioLogo className="mr-24 fill-white h-8"></GenioLogo>
                    <IMDbLogo className="mr-24 fill-white h-6"></IMDbLogo>
                    <LigentiaLogo className="mr-24 fill-white h-7"></LigentiaLogo>
                    <ParallaxLogo className="mr-24 fill-white h-6"></ParallaxLogo>
                </Marquee>
                <div className="border-l border-r border-dashed border-white/50 py-12 px-48 text-lg">
                    Find out more about our wonderful sponsors making LeedsHack 2026 possible.
                </div>
                <SponsorCarousel></SponsorCarousel>
            </div>
        </div>
    );
};

// Minimum size
// Parallax 20px / 10mm
// Ligentia 10mm
// Genio Unknown
// IMDb Unknown
// PwC width 0.375inch / 48px