import { CommitteeCard } from "@/app/components/committee-card";
import leads from "@/app/static/committee-lead.json";
import general from "@/app/static/committee-general.json";
import previous from "@/app/static/previous-committee.json";

export default function Page() {
  return (
    <div className="flex flex-row justify-center grow text-white">
      <h1 className="hidden">Committee</h1>
      <div className="flex flex-col mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem] border-l border-r border-dashed border-white/50">
        <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-lg min-[48rem]:text-xl border-t border-b border-white/50 bg-white/10">
          Meet the committee
        </div>
        <div className="py-6 px-6 min-[96rem]:px-48 text-sm min-[48rem]:text-md">
          Our committee work to ensure that LeedsHack runs smoothly and
          efficiently. They cooperate with sponsors, the University and School
          of Computing to make sure the event facilitates for everyone and
          provides a fun and challenging experience.
        </div>

        <div className="flex flex-row mb-12">
          <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
          {leads.length === 0 ? (
            <div className="grow text-sm min-[48rem]:text-md p-6 border border-white/50">
              Uh oh.. did someone delete the DB.
            </div>
          ) : (
            <div className="grow grid max-[64rem]:grid-cols-2 max-[128rem]:grid-cols-3 grid-cols-4 border-t border-l border-white/50">
              {leads.map((member) => (
                <CommitteeCard key={member.name} {...member}></CommitteeCard>
              ))}
            </div>
          )}
          <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
        </div>
        <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-lg min-[48rem]:text-xl border-t border-b border-white/50 bg-white/10">
          General Committee
        </div>
        <div className="flex flex-row mb-12">
          <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
          {general.length === 0 ? (
            <div className="grow text-sm min-[48rem]:text-md p-6 border border-white/50">
              Uh oh.. did someone delete the DB.
            </div>
          ) : (
            <div className="grow grid max-[64rem]:grid-cols-2 max-[128rem]:grid-cols-3 grid-cols-4 border-t border-l border-white/50">
              {general.map((member) => (
                <CommitteeCard key={member.name} {...member}></CommitteeCard>
              ))}
            </div>
          )}
          <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48"></div>
        </div>

        <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-lg min-[48rem]:text-xl border-t border-b border-white/50 bg-white/10">
          Previous Committee
        </div>
        <div className="flex flex-row mb-12">
          <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
          {previous.length === 0 ? (
            <div className="grow text-sm min-[48rem]:text-md p-6 border border-white/50">
              Uh oh.. did someone delete the DB.
            </div>
          ) : (
            <div className="grow grid max-[64rem]:grid-cols-2 max-[128rem]:grid-cols-3 grid-cols-4 border-t border-l border-white/50">
              {previous.map((member) => (
                <CommitteeCard key={member.name} {...member}></CommitteeCard>
              ))}
            </div>
          )}
          <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
        </div>
      </div>
    </div>
  );
}
