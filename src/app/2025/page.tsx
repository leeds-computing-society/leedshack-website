"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Page()
{
    return (
        <div className="flex flex-col grow min-[32rem]:justify-center items-center text-center text-white max-w-5xl mx-auto">
            <div className="m-12 flex flex-col gap-6">
                <div className="max-[29.13rem]:h-[9rem] max-[32rem]:h-[6rem] max-[33.63rem]:h-[10.5rem] max-[49.88rem]:h-[7rem] max-[66rem]:h-[3.5rem] h-[4.5rem]">
                    <TypeAnimation
                        preRenderFirstString={true}
                        omitDeletionAnimation={true}
                        sequence={[
                            "",
                            "LeedsHack 2025"
                        ]}
                        wrapper="div"
                        speed={40}
                        cursor={true}
                        className="text-header-sm min-[32rem]:text-header-md min-[66rem]:text-header-lg"
                    />
                </div>
                <div className="text-md min-[32rem]:text-lg">
                    Coming Soon...
                </div>
                <div className="text-md min-[32rem]:text-lg">
                    Want to register your interest, sign up <Link href="https://forms.gle/VYim7PLPyHCguw6f8" className="text-leeds-hack-2026-secondary-500 link link-leeds-hack-2026">here</Link>.
                </div>
            </div>
        </div>
    );
};