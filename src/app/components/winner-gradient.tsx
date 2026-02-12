"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export interface Properties extends React.SVGProps<SVGElement> { };

export const WinnerGradient = ({ className, ...properties }: Properties) =>
{
    useGSAP(() =>
    {
        gsap.fromTo(".circle-rotate", {
            rotate: 0
        }, {
            rotate: 360,
            duration: 4,
            repeat: -1
        });
    });

    return (
        <svg className="absolute -top-12 w-48 h-48 circle-rotate scale-300 blur-[32px]" viewBox="0 0 64 64" fill="none">
            <defs>
                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00FFAE" />
                    <stop offset="30%" stopColor="#00FFFF" />
                    <stop offset="100%" stopColor="#FF00FF" />
                </linearGradient>
            </defs>
            <circle strokeWidth="12" stroke="url(#myGradient)" cx="32" cy="32" r="26" />
        </svg>
    );
};