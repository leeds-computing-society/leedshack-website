import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { MouseHighlight } from "@/app/components/mouse-highlight";
import { Header } from "@/app/components/header";
import { JetBrains_Mono } from "next/font/google";
import { Footer } from "@/app/components/footer";
import { Background } from "@/app/components/background";
import { defaultMetadata } from "./metadata";

// Debug
import { ReactScan } from "@/app/components/react-scan";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "LeedsHack 2026 | LeedsHack"
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
        <html lang="en">
            <ReactScan></ReactScan>
            <head>
            </head>
            <body className={jetBrainsMono.className + " absolute h-full w-full m-0 p-0 bg-black"}>
                <div className="absolute w-full flex flex-col overflow-hidden">
                    <Background></Background>
                    <MouseHighlight></MouseHighlight>
                    <Header></Header>
                    <a className="block w-12 min-[48rem]:w-24 fixed right-6 min-[48rem]:right-12 top-0 z-50" href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black" target="_blank">
                        <img className="w-full" src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" alt="Major League Hacking 2026 Hackathon Season"></img>
                    </a>
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