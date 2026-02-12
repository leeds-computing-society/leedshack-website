"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export interface Properties extends React.HTMLAttributes<HTMLDivElement> { };

export const Power = ({ className, ...properties }: Properties) =>
{
    useGSAP(() =>
    {
        gsap.from(".pill", {
            duration: 2,
            ease: "sine.inOut",
            scale: 10,
            rotate: 90,
            filter: "blur(128px)",
            top: "200%",
            left: "-200%"
        });

        gsap.from(".circle", {
            duration: 2,
            ease: "sine.inOut",
            scale: 20,
            rotate: -90,
            filter: "blur(128px)",
            top: "400%",
            left: "-200%"
        });

        let timelineCircleOut = gsap.timeline();
        let timelinePillOut = gsap.timeline();


        // timeline.from(".circle-out", {
        //     filter: "blur(256px)",
        //     scale: 2,
        // })

        timelineCircleOut.to(".circle-out", {
            delay: 1.8,
            scale: 1.2,
            filter: "blur(32px)",
            duration: 0.2,
            opacity: 0.6
        }).to(".circle-out", {
            duration: 2,
            ease: "sine.inOut",
            filter: "blur(256px)",
            scale: 2,
            opacity: 0
        });

        timelinePillOut.to(".pill-out", {
            delay: 1.8,
            scale: 1.2,
            filter: "blur(32px)",
            duration: 0.2,
            opacity: 0.6
        }).to(".pill-out", {
            duration: 2,
            ease: "sine.inOut",
            filter: "blur(256px)",
            scale: 2,
            opacity: 0
        });


        // gsap.fromTo(".pill-out", {
        //     filter: "blur(256px)",
        //     scale: 2,
        // }, {
        //     delay: 1.5,
        //     duration: 0.1,
        //     opacity: 1
        // });



        // gsap.to(".pill-out", {
        //     delay: 1.6,
        //     duration: 2,
        //     ease: "sine.inOut",
        //     filter: "blur(256px)",
        //     scale: 2,
        //     opacity: 0
        // });
    });

    return (
        <div className={"relative block " + className} {...properties}>
            <svg className="circle z-30 absolute top-0 left-0 h-full" viewBox="0 0 120 128" fill="none">
                <defs>
                    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FFAE" />
                        <stop offset="30%" stopColor="#00FFFF" />
                        <stop offset="100%" stopColor="#FF00FF" />
                    </linearGradient>
                </defs>
                <path fill="url(#myGradient)" d="M106.097 29.8116C102.414 25.4349 95.9172 24.8568 91.531 28.4903C87.1448 32.1239 86.5655 38.6478 90.2069 43.0245C96.0827 50.0439 99.3103 58.9626 99.3103 68.1291C99.3103 89.7652 81.6828 107.355 60 107.355C38.3172 107.355 20.6897 89.7652 20.6897 68.1291C20.6897 58.9626 23.9172 50.0439 29.7931 43.0245C33.4345 38.6478 32.8552 32.1239 28.469 28.4903C24.0828 24.8568 17.5448 25.4349 13.9034 29.8116C4.92414 40.5471 0 54.1316 0 68.1291C0 101.161 26.8966 128 60 128C93.1034 128 120 101.161 120 68.1291C120 54.1316 115.076 40.5471 106.097 29.8116Z" />
            </svg>
            <svg className="pill z-30 absolute top-0 left-0 h-full" viewBox="0 0 120 128" fill="none">
                <defs>
                    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FFAE" />
                        <stop offset="30%" stopColor="#00FFFF" />
                        <stop offset="100%" stopColor="#FF00FF" />
                    </linearGradient>
                </defs>
                <path fill="url(#myGradient)" d="M60 53.6774C65.7103 53.6774 70.3448 49.0529 70.3448 43.3548V10.3226C70.3448 4.62452 65.7103 0 60 0C54.2896 0 49.6552 4.62452 49.6552 10.3226V43.3548C49.6552 49.0529 54.2896 53.6774 60 53.6774Z" />
            </svg>

            <svg className="circle-out absolute top-0 left-0 h-full opacity-0 scale-200 blur-3xl" viewBox="0 0 120 128" fill="none">
                <path fill="white" d="M106.097 29.8116C102.414 25.4349 95.9172 24.8568 91.531 28.4903C87.1448 32.1239 86.5655 38.6478 90.2069 43.0245C96.0827 50.0439 99.3103 58.9626 99.3103 68.1291C99.3103 89.7652 81.6828 107.355 60 107.355C38.3172 107.355 20.6897 89.7652 20.6897 68.1291C20.6897 58.9626 23.9172 50.0439 29.7931 43.0245C33.4345 38.6478 32.8552 32.1239 28.469 28.4903C24.0828 24.8568 17.5448 25.4349 13.9034 29.8116C4.92414 40.5471 0 54.1316 0 68.1291C0 101.161 26.8966 128 60 128C93.1034 128 120 101.161 120 68.1291C120 54.1316 115.076 40.5471 106.097 29.8116Z" />
            </svg>
            <svg className="pill-out absolute top-0 left-0 h-full opacity-0 scale-200 blur-3xl" viewBox="0 0 120 128" fill="none">
                <path fill="white" d="M60 53.6774C65.7103 53.6774 70.3448 49.0529 70.3448 43.3548V10.3226C70.3448 4.62452 65.7103 0 60 0C54.2896 0 49.6552 4.62452 49.6552 10.3226V43.3548C49.6552 49.0529 54.2896 53.6774 60 53.6774Z" />
            </svg>
        </div>
    );
};