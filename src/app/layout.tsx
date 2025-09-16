import "./globals.css";
import type { Metadata, Viewport } from "next";
import { MouseHighlight } from "./components/mouse-highlight";
import { Header } from "./components/header";
import { JetBrains_Mono } from "next/font/google";
import { Footer } from "./components/footer";
import { Background } from "./components/background";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "LeedsHack | Leeds Computing Society",
    keywords: ["LeedsHack", "LeedsHack 2026", "LeedsHack 2025", "Hackathon", "Leeds", "Leeds Computing Society", "University of Leeds", "School of Computing", "LUU", "Leeds University Union", "LUUCompSoc", "CompSoc", "Computing Society", "DurHack", "Major League Hacking", "Hackathons UK", "Devpost", "UK"],
    description: "LeedsHack is the official hackathon of the Leeds Computing Society. LeedsHack is supported by the University of Leeds, School of Computing and our sponsors. We invite students from Universities across the UK to participate in a free 24-hour hackathon.",
    applicationName: "LeedsHack",
    authors: {
        name: "Leeds Computing Society"
    },
    creator: "Leeds Computing Society",
    publisher: "Leeds Computing Society",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "48x48" },
            { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
            { url: "/favicon-196x196.png", sizes: "196x196", type: "image/png" }
        ],
        apple: [
            { url: "/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png", rel: "apple-touch-icon-precomposed" },
            { url: "/apple-touch-icon-60x60.png", sizes: "60x60", type: "image/png", rel: "apple-touch-icon-precomposed" },
            { url: "/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png", rel: "apple-touch-icon-precomposed" },
            { url: "/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png", rel: "apple-touch-icon-precomposed" },
            { url: "/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png", rel: "apple-touch-icon-precomposed" },
            { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png", rel: "apple-touch-icon-precomposed" },
            { url: "/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png", rel: "apple-touch-icon-precomposed" },
            { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png", rel: "apple-touch-icon-precomposed" }
        ]
    },
    twitter: {
        title: "LeedsHack | Leeds Computing Society | Leeds University Union",
        description: "LeedsHack is the official hackathon of the Leeds Computing Society. LeedsHack is supported by the University of Leeds, School of Computing and our sponsors. We invite students from Universities across the UK to participate in a free 24-hour hackathon."
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": 0,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": 0
        }
    }
};

export const viewport: Viewport = {
    themeColor: "#00074d"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <html lang="en" >
            <head>
            </head>
            <body className={jetBrainsMono.className + " absolute h-full w-full m-0 p-0 bg-brand-primary-500"}>
                <div className="absolute w-full flex flex-col overflow-hidden">
                    <Background></Background>
                    <MouseHighlight></MouseHighlight>
                    <Header></Header>
                    <div className="min-h-[100vh] flex flex-col">
                        <div className="pt-14 grow flex flex-col">
                            {children}
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </body>
        </html>
    );
};