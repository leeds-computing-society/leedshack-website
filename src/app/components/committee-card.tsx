import Link from "next/link";

export interface CommitteeCardProperties
{
    image: string;
    name: string;
    role: string;
    founder?: boolean;
    lcs?: boolean;
    roleDescription: string;
};

export const CommitteeCard = (properties: CommitteeCardProperties) =>
{
    return (
        <div className={`flex flex-col bg-leeds-hack-2026-primary-500/10 border-white/50
        border-t
        border-l
        max-[48rem]:odd:border-r
        max-[48rem]:border-l-0
        max-[64rem]:odd:border-r
        max-[64rem]:even:border-l-0
        max-[64rem]:nth-[7]:border-b
        max-[64rem]:nth-[8]:border-b
        max-[64rem]:nth-[9]:border-t-0
        min-[128rem]:nth-[1]:border-r
        min-[128rem]:nth-[2]:border-l-0
        min-[128rem]:nth-[5]:border-b
        min-[128rem]:nth-[5]:border-r
        min-[128rem]:nth-[6]:border-b
        min-[128rem]:nth-[6]:border-l-0
        min-[128rem]:nth-[7]:border-b
        min-[128rem]:nth-[8]:border-b
        min-[128rem]:nth-[9]:border-t-0
        min-[128rem]:nth-[9]:border-r
      `}>
            <div className="bg-white/10 w-full aspect-square border-b border-dashed border-white/50">
                <img alt="Committee Member Image" src={properties.image}></img>
            </div>
            <div className="flex flex-col grow justify-between p-3">
                <div>
                    <div className="text-lg">{properties.name}</div>
                    <div className="text-md">{properties.role}</div>
                    <div className="text-md mt-3">{properties.roleDescription}</div>
                </div>
                <div className="flex gap-3 justify-between mt-3 text-sm text-white/75">
                    {properties.founder ? <div>Founder</div> : <div></div>}
                    {properties.lcs && <Link href="https://luucompsoc.co.uk" className="link link-leeds-hack-2026">LCS</Link>}
                </div>
            </div>
        </div>
    );
};