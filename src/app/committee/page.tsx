import { CommitteeCard } from "../components/committee-card";
import committee from "../static/committee.json";

export default function Page()
{
    return (
        <div className="flex flex-row justify-center grow text-white">
            <div className="flex flex-col mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem] border-l border-r border-dashed border-white/50">
                <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-3xl border-t border-b border-white/50 bg-white/10">
                    Meet the committee
                </div>
                <div className="py-6 px-6 min-[96rem]:px-48 text-md">
                    Our committee work to ensure that LeedsHack runs smoothly and efficiently. They cooperate with sponsors, the University and School of Computing to make sure the event facilitates for everyone and provides a fun and challenging experience.
                </div>
                <div className="flex flex-row mb-12">
                    <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
                    {
                        committee.length === 0 ?
                            <div className="grow text-md p-6 border border-white/50">
                                Uh oh.. did someone delete the DB.
                            </div>
                            :
                            <div className="grow grid max-[64rem]:grid-cols-2 max-[128rem]:grid-cols-3 grid-cols-4 border-b min-[48rem]:border-r border-white/50">
                                {committee.map((member) => <CommitteeCard key={member.name} {...member}></CommitteeCard>)}
                            </div>
                    }
                    <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
                </div>
            </div>
        </div>
    );
};