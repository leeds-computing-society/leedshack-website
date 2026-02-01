import { Metadata } from "next";
import { defaultMetadata } from "@/app/metadata";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "FAQ | LeedsHack",
    description: "Thank you to all who attended and supported LeedsHack 2025! Your support and enthusiasm allowed the first University of Leeds hackathon to be a big success."
};

export default function YourSectionLayout({
    children,
}: {
    children: React.ReactNode;
})
{
    return (<>{children}</>);
}