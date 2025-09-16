import Link from "next/link";
import { LeedsHack2026Logo } from "./components/leeds-hack-2026-logo";

export default function Page()
{
    return (
        <div className="flex flex-col grow gap-6 p-12 min-[32rem]:justify-center items-center text-center text-white mx-auto">
            <h1 className="hidden">LeedsHack 2026</h1>
            <LeedsHack2026Logo className="fill-white mb-6 min-[96rem]:w-[56rem]"></LeedsHack2026Logo>
            <div className="text-md min-[32rem]:text-lg">
                More Coming Soon...
            </div>
            <div className="text-md min-[32rem]:text-lg text-white/75 flex gap-6 min-[64rem]:gap-12 justify-between">
                <div className="text-left">7th - 8th February</div>
                <Link href="https://maps.app.goo.gl/mcv9zr9xncYnC7L77" className="text-right underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Sir William Henry Bragg Building</Link>
            </div>
        </div>
    );
};