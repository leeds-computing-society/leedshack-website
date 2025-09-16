"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type MouseType = "leeds-hack-2025" | "leeds-hack-2026";

const MouseTypeMap: { [key in MouseType]: string } = {
    "leeds-hack-2025": "bg-leeds-hack-2025-primary-500/25",
    "leeds-hack-2026": "bg-leeds-hack-2026-primary-500/25"
};

export const MouseHighlight = () =>
{
    let pathname = usePathname();
    let [mouseType, setMouseType] = useState<MouseType>("leeds-hack-2026");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() =>
    {
        if (pathname === "/2025") setMouseType("leeds-hack-2025");
        if (pathname !== "/2025") setMouseType("leeds-hack-2026");

        const handleMouseMove = (event: MouseEvent) =>
        {
            setMousePosition({
                x: event.pageX,
                y: event.pageY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () =>
        {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [pathname]);

    return (
        <div className={MouseTypeMap[mouseType] + " absolute w-[10vh] h-[10vh] top-0 left-0 translate-[-50%] rounded-full blur-mouse -z-10"} style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}>
        </div>
    );
};