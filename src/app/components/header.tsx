"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderType = "leeds-hack-2025" | "leeds-hack-2026";

const HeaderTypeMap: { [key in HeaderType]: string; } = {
    "leeds-hack-2025": "bg-brand-primary-500/50",
    "leeds-hack-2026": "bg-black/25"
};

type HeaderItemType = "default" | "leeds-computing-society" | "leeds-hack-2025" | "leeds-hack-2026";

const HeaderItemTypeMap: { [key in HeaderItemType]: string; } = {
    "default": "link",
    "leeds-computing-society": "link link-leeds-computing-society",
    "leeds-hack-2025": "link link-leeds-hack-2025",
    "leeds-hack-2026": "link link-leeds-hack-2026"
};

interface HeaderItem
{
    text: string;
    link: string;
    type: HeaderItemType;
};

const headerItems: HeaderItem[] = [
    {
        text: "LeedsHack 2026",
        link: "/",
        type: "leeds-hack-2026"
    },
    {
        text: "LeedsHack 2025",
        link: "/2025",
        type: "leeds-hack-2025"
    },
    {
        text: "Committee",
        link: "/committee",
        type: "leeds-hack-2026"
    },
    {
        text: "FAQ",
        link: "/faq",
        type: "leeds-hack-2026"
    },
    {
        text: "Leeds Computing Society",
        link: "https://luucompsoc.co.uk",
        type: "leeds-computing-society"
    },
    // {
    //     text: "Sponsors",
    //     link: "/sponsors",
    //     type: "leeds-hack-2026"
    // },
    // {
    //     text: "FAQ",
    //     link: "/questions",
    //     type: "leeds-hack-2026"
    // }
];

export const Header = () =>
{
    let pathname = usePathname();
    let router = useRouter();
    let [menuOpen, setMenuOpen] = useState<boolean>(false);
    let [headerType, setHeaderType] = useState<HeaderType>("leeds-hack-2026");

    let menuButtonClicked = () =>
    {
        setMenuOpen(!menuOpen);
    };

    let navigationClicked = (route: string) =>
    {
        setMenuOpen(false);
        router.push(route);
    };

    let handleResize = () =>
    {
        setMenuOpen(false);
    };

    useEffect(() =>
    {
        if (pathname === "/2025") setHeaderType("leeds-hack-2025");
        if (pathname !== "/2025") setHeaderType("leeds-hack-2026");

        window.addEventListener("resize", handleResize);

        return () =>
        {
            window.removeEventListener("resize", handleResize);
        };
    }, [pathname]);

    return (
        <div className="fixed h-14 w-full text-md z-50 text-white">
            <div style={{ WebkitBackdropFilter: "blur(48px)", backdropFilter: "blur(48px)" }} className={`h-14 transition-header border-b border-white/50 ${HeaderTypeMap[headerType]}`}>
                <div className="h-full flex justify-center items-center gap-6 max-[68rem]:hidden">
                    {headerItems.map((item, index) => <Link key={index} href={item.link} className={HeaderItemTypeMap[item.type]}>{item.text}</Link>)}
                </div>
                <div className="h-full flex justify-start items-center min-[68rem]:hidden">
                    <button aria-label="Navigation Menu Toggle" onClick={menuButtonClicked} className="p-4 cursor-pointer">
                        <svg className="stroke-white w-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M3 5H21"></path>
                            <path d="M3 12H21"></path>
                            <path d="M3 19H21"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div style={{ WebkitBackdropFilter: "blur(24px)", backdropFilter: "blur(48px)" }} className={`transition-navigation border-dashed w-full text-md overflow-clip border-b border-transparent flex flex-col gap-3 items-center ${HeaderTypeMap[headerType]} ${menuOpen ? "h-[13.5rem] border-white/50" : "h-0"}`}>
                {headerItems.map((item, index) => <button key={index} onClick={() => navigationClicked(item.link)} className={HeaderItemTypeMap[item.type] + " first:mt-6 last:mb-6 cursor-pointer"}>{item.text}</button>)}
            </div>
        </div>
    );
};
