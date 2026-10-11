import Link from "next/link";

export interface CommitteeCardProperties {
  image?: string | undefined;
  name: string;
  role?: string;
  founder?: boolean;
  lcs?: boolean;
  year?: string;
  roleDescription?: string;
}

export const CommitteeCard = (properties: CommitteeCardProperties) => {
  return (
    <div className="flex flex-col bg-leeds-hack-2026-primary-500/10 border-white/50 border-r border-b">
      <div className="bg-white/10 w-full aspect-square overflow-hidden border-b border-dashed border-white/50">
        {/* <img alt={`LeedsHack Committee Member ${properties.name}`} src={properties.image}></img> */}
        {properties.image !== undefined ? (
          <img
            alt={`LeedsHack Committee Member ${properties.name}`}
            src={properties.image}
            className="w-full h-full object-cover object-top"
          ></img>
        ) : (
          <svg
            viewBox="0 0 256 256"
            strokeWidth="1"
            className="w-full h-full stroke-white/50"
          >
            <line x1="0" y1="256" x2="256" y2="0" />
          </svg>
        )}
      </div>
      <div className="flex flex-col grow justify-between p-3">
        <div>
          <div className="text-md min-[48rem]:text-lg">{properties.name}</div>
          {properties.role && (
            <div className="text-sm min-[48rem]:text-md">{properties.role}</div>
          )}
          {properties.year && (
            <div className="text-xs min-[48rem]:text-sm text-white/75">
              <div>{properties.year}</div>
            </div>
          )}
          {properties.roleDescription && (
            <div className="text-sm min-[48rem]:text-md mt-3">
              <div>{properties.roleDescription}</div>
            </div>
          )}
        </div>
        <div className="flex gap-3 justify-between mt-3 text-xs min-[48rem]:text-sm text-white/75">
          {properties.founder ? <div>Founder</div> : <div></div>}
          {properties.lcs && (
            <Link
              href="https://luucompsoc.co.uk"
              className="link link-leeds-hack-2026"
            >
              CompSoc
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
