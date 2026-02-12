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
        <Link href={properties.href} className={"relative flex items-center justify-center transition-sponsor cursor-pointer border-l first:border-l-0 border-white/50 hover:bg-white/10 hover:fill-white " + properties.className}>
            <div className="absolute top-0 left-0 border-l border-t border-white/75 w-6 h-6"></div>
            <div className="absolute top-0 right-0 border-r border-t border-white/75 w-6 h-6"></div>
            <div className="absolute bottom-0 left-0 border-l border-b border-white/75 w-6 h-6"></div>
            <div className="absolute bottom-0 right-0 border-r border-b border-white/75 w-6 h-6"></div>
            {properties.logo}
        </Link>
    );
};
//bg-white/10 fill-white