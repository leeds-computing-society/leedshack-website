import { Metadata } from "next";
import { defaultMetadata } from "@/app/metadata";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "Committee | LeedsHack",
    description: "Our committee work to ensure that LeedsHack runs smoothly and efficiently. They cooperate with sponsors, the University and School of Computing to make sure the event facilitates for everyone and provides a fun and challenging experience."
};

export default function YourSectionLayout({
    children,
}: {
    children: React.ReactNode;
})
{
    return (<>{children}</>);
}