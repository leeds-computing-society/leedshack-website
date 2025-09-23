"use client";
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
import { LeedsHack2025LogoOld } from "../components/leeds-hack-2026-logo-old";
import Image from "next/image";

export default function Page()
{
    return (
        <div className="flex flex-row justify-center grow text-white">
            <div className="flex flex-col text-center mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem]">
                <div className="border-l border-r border-dashed border-white/50 py-12 min-[48rem]:py-24 px-6 min-[48rem]:px-24 flex flex-col gap-6">
                    <LeedsHack2025LogoOld className="fill-white max-w-[48rem] mb-6 self-center min-[48rem]:mx-24"></LeedsHack2025LogoOld>
                    {/* <TypeAnimation
                        preRenderFirstString={true}
                        omitDeletionAnimation={true}
                        sequence={[
                            "",
                            "LeedsHack 2025"
                        ]}
                        wrapper="div"
                        speed={40}
                        cursor={true}
                        className="h-[6.25rem] min-[29.313rem]:h-[3.375rem] min-[32rem]:h-[4rem] min-[64rem]:h-[5.25rem] text-header-sm min-[35rem]:text-header-md min-[64rem]:text-header-lg"
                    /> */}
                    <div className="text-md min-[32rem]:text-lg">
                        Thank you to all who attended and supported LeedsHack 2025! Your support and enthusiasm allowed the first University of Leeds hackathon to be a big success.
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-12 pt-3">
                        <StatisticCard label="Hackers" value="84"></StatisticCard>
                        <StatisticCard label="Sponsors" value="8"></StatisticCard>
                        <StatisticCard label="Prizes" value="£1200+"></StatisticCard>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="h-40 max-[64rem]:h-80 grid grid-cols-4 max-[64rem]:grid-cols-2 border border-white/50">
                        <SponsorLink
                            className="hover:bg-[#042130] hover:fill-[#29b5e8] max-[64rem]:border-b"
                            logo={<SnowflakeLogo className="h-9 max-[64rem]:h-8"></SnowflakeLogo>}
                            href="https://www.snowflake.com"
                        ></SponsorLink>
                        <SponsorLink
                            className="hover:bg-[#f5c518] hover:fill-[#161616] max-[64rem]:border-b"
                            logo={<IMDbLogo className="h-8"></IMDbLogo>}
                            href="https://www.imdb.com"
                        ></SponsorLink>
                        <SponsorLink
                            className="hover:bg-[#0d062a] hover:fill-[#d10956] max-[64rem]:border-l-0"
                            logo={<TheDataCityLogo className="h-12 max-[64rem]:h-10"></TheDataCityLogo>}
                            href="https://thedatacity.com"
                        ></SponsorLink>
                        <SponsorLink
                            className="hover:bg-[#2ba7de]"
                            logo={<RebuildingSocietyLogo className="h-8 max-[64rem]:h-6"></RebuildingSocietyLogo>}
                            href="https://www.rebuildingsociety.com"
                        ></SponsorLink>
                    </div>
                    <div className="h-32 grid grid-cols-2 border-l border-r border-b border-white/50">
                        <SponsorLink
                            className="hover:bg-[#4ef2ba] hover:fill-[#0a2136]"
                            logo={<PexipLogo className="h-6"></PexipLogo>}
                            href="https://www.pexip.com"
                        ></SponsorLink>
                        <SponsorLink
                            className="hover:bg-[#fc88c6] hover:fill-black"
                            logo={<GenioLogo className="h-7"></GenioLogo>}
                            href="https://genio.co"
                        ></SponsorLink>
                    </div>
                    <div className="h-24 grid grid-cols-2 border-l border-r border-b border-white/50">
                        <SponsorLink
                            className="hover:bg-white hover:fill-[#d50c2d]"
                            logo={<HetznerLogo className="h-3"></HetznerLogo>}
                            href="https://www.hetzner.com"
                        ></SponsorLink>
                        <SponsorLink
                            className="hover:bg-white hover:fill-[#0d457d]"
                            logo={<AudaciaLogo className="h-4"></AudaciaLogo>}
                            href="https://audacia.co.uk"
                        ></SponsorLink>
                    </div>
                </div>
                <div className="h-12 border-l border-r border-dashed border-white/50">
                </div>
                <div className="h-32 grid grid-cols-1 border border-white/50">
                    <SponsorLink
                        className="hover:bg-[#B7A6FF] hover:fill-black"
                        logo={<UoLLogo className="h-10"></UoLLogo>}
                        href="https://www.leeds.ac.uk"
                    ></SponsorLink>
                </div>
                <div className="py-12 px-6 min-[48rem]:px-24 text-md min-[32rem]:text-lg border-l border-r border-dashed border-white/50">
                    A big thank you to all of the participants, sponsors, volunteers, and judges at LeedsHack 2025. It wouldn't have been possible without your support, and we hope to see you again next year.
                </div>
                <Image className="border border-white/50" alt="LeedsHack 2025 attendees" src="/leeds-hack/2025-main.webp" width={2048} height={1024} />
                <div className="flex flex-row border-l border-r border-b border-white/50">
                    <div>
                        <Image alt="Attendees showing their work to a judge at LeedsHack 2025" src="/leeds-hack/2025-1.webp" width={1536} height={1024} />
                    </div>
                    <div className="border-l border-white/50">
                        <Image alt="Attendees working on their hackathon project at LeedsHack 2025" src="/leeds-hack/2025-2.webp" width={1024} height={1024} />
                    </div>
                </div>
                <div className="flex flex-row border-l border-r border-b border-white/50">
                    <div>
                        <Image alt="Attendees showing their work to a judge at LeedsHack 2025" src="/leeds-hack/2025-3.webp" width={1024} height={1024} />
                    </div>
                    <div className="border-l border-white/50">
                        <Image alt="Attendees showing their work to a judge at LeedsHack 2025" src="/leeds-hack/2025-4.webp" width={1536} height={1024} />
                    </div>
                </div>
                <div className="min-h-12 grow border-l border-r border-dashed border-white/50">
                </div>
            </div>
        </div>
    );
};