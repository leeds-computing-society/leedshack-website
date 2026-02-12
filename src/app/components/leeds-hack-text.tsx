"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin);

export interface Properties extends React.HTMLAttributes<HTMLDivElement> { };

export const LeedsHackText = ({ className, ...properties }: Properties) =>
{
    useGSAP(() =>
    {
        gsap.fromTo(".leeds-hack-text", {
            filter: "blur(16px)",
            scale: 1.2,
        }, {
            scale: 1,
            filter: "blur(0px)",
            duration: 2,
            ease: "sine.inOut",
            scrambleText: "LeedsHack"
        });

        gsap.fromTo(".leeds-hack-text-year", {
            filter: "blur(16px)",
            scale: 1.2,
        }, {
            scale: 1,
            filter: "blur(0px)",
            duration: 2,
            ease: "sine.inOut",
            scrambleText: "2026"
        });









    });

    return (
        <>
            <div className="leeds-hack-text">LeedsHack</div>
            <div className="leeds-hack-text-year">2026</div>
        </>
    );
};