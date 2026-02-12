"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PropsWithChildren, useRef } from "react";
export interface Properties extends React.HTMLAttributes<HTMLDivElement>
{
    prefix?: string;
    suffix?: string;
    value: string;
};

export const ValueBox = ({ value, prefix, suffix, ...properties }: Properties) =>
{
    let valueReference = useRef<HTMLSpanElement>(null);

    useGSAP(() =>
    {
        gsap.from(valueReference.current, {
            innerText: 0,
            duration: 2,
            ease: "power4.out",
            snap: {
                innerText: 1
            }
        });
    });

    return (
        <div {...properties}>{prefix || prefix}<span ref={valueReference}>{value}</span>{suffix || suffix}</div>
    );
};