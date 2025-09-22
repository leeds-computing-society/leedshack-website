import { Metadata } from "next";
import { defaultMetadata } from "@/app/metadata";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "LeedsHack 2025 | LeedsHack"
};

export default function YourSectionLayout({
    children,
}: {
    children: React.ReactNode;
})
{
    return (<>{children}</>);
}