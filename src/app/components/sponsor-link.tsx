import Link from "next/link";

interface Properties
{
    href: string;
    logo: React.ReactNode;
    className: string;
};

export const SponsorLink = (properties: Properties) =>
{
    return (
        <Link href={properties.href} className={"flex items-center justify-center transition-sponsor cursor-pointer border-l first:border-l-0 border-white/50 hover:bg-white/10 hover:fill-white " + properties.className}>
            {properties.logo}
        </Link>
    );
};
//bg-white/10 fill-white