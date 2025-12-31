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
                <div className="border-l border-r border-dashed border-white/50 py-12 min-[48rem]:py-24 px-6 min-[48rem]:px-24 flex flex-col gap-6">
                    <LeedsHack2026Logo className="fill-white mb-6 min-[96rem]:w-[48rem]"></LeedsHack2026Logo>
                    <div className="text-md min-[32rem]:text-lg text-white/75 flex gap-6 min-[64rem]:gap-12 justify-between">
                        <div className="text-left">7th - 8th February</div>
                        <Link href="https://maps.app.goo.gl/mcv9zr9xncYnC7L77" className="text-right underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Sir William Henry Bragg Building</Link>
                    </div>
                </div>
                <SponsorCarousel></SponsorCarousel>
            </div>
        </div>
    );
};