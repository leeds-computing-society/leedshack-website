"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { ArrowDown } from "../components/icons/arrow-down";

interface FAQItem
{
    question: string;
    answer: React.ReactNode;
};

const FAQItemList: FAQItem[] = [
    {
        question: "Who can participate?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Any UK university student.</div>
    },
    {
        question: "When is it?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">LeedsHack 2026 will start on February 7th at 10:00 AM and will end on February 8th at 16:00 PM.</div>
    },
    {
        question: "Where is it?",
        answer: <div className="flex flex-col gap-3 px-6 min-[96rem]:px-48 py-4">
            <div>LeedsHack 2026 will be hosted at the University of Leeds in the <Link href="https://maps.app.goo.gl/mcv9zr9xncYnC7L77" className="text-right underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Sir William Henry Bragg Building</Link>.</div>
            <div>From <Link href="https://maps.app.goo.gl/VRa4h2gbHgdVcpQC6" className="text-right underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Leeds Railway Station</Link> it is around a 30 minute walk.</div>
            <div>From <Link href="https://maps.app.goo.gl/Bk6fV4AHmTu7af1w7" className="text-right underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Leeds Bus And Coach Station</Link> it is around a 30 minute walk or 20 minute bus journey.</div>
        </div>
    },
    {
        question: "Is LeedsHack suitable for beginners?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Yes, LeedsHack is open and inclusive to all skill levels.</div>
    },
    {
        question: "When can I register to participate?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Registration opens on Monday 5th January at 12:00 PM and will close on Monday 12th January at 12:00 PM.</div>
    },
    {
        question: "How do I register to participate?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Registration is done through <Link href="https://www.universe.com/events/leedshack-2026-tickets-N9LZPY" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Universe</Link>.</div>
    },
    {
        question: "How do I register a team?",
        answer: <div className="flex flex-col gap-3 px-6 min-[96rem]:px-48 py-4">
            <div>All members of the team must apply for a ticket on <Link href="https://www.universe.com/events/leedshack-2026-tickets-N9LZPY" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Universe</Link>.</div>
            <div>Once all members have applied for a ticket you can use the <Link href="https://forms.gle/GycdWX2e9x3zdTep9" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Team Registration Form</Link> to inform us of your team preference. Please keep in mind that if you register a team either all team members will be allocated a ticket, or no one will be allocated a ticket. This does not affect your chance of being assigned a ticket, but ensures that your whole group will be able to attend.</div>
            <div>Each team may only fill out the form once and each person may only be part of one team. Duplicate submissions will be ignored.</div>
            <div>Team registration opens on Monday 5th January at 12:00 PM and will close on Monday 12th January at 12:00 PM.</div>
        </div>
    },
    {
        question: "How do I volunteer?",
        answer: <div className="flex flex-col gap-3 px-6 min-[96rem]:px-48 py-4">
            <div>Volunteer</div>
            <div>We're looking for volunteers for LeedsHack 2026. This is a great opportunity for anyone looking to give back to the student community and gain some volunteering experience. You don't have to be a computer science student and no technical skills are required, we are looking for people with a range of transferable skills!</div>
            <div>Apply before Saturday 17th January at 12:00 PM using the <Link href="https://forms.gle/XGLrbFsoZ6vULu7X9" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Application Form</Link>.</div>
            <div className="mt-9">Mentor</div>
            <div>We're looking for technical mentors for LeedsHack 2026. This is a great opportunity for experienced students (such as Master’s or PhD students).</div>
            <div>Apply before Saturday 17th January at 12:00 PM using the <Link href="https://forms.gle/mZLsZhMmfQhY2FDj7" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Application Form</Link>.</div>
            <div className="mt-9">Judge</div>
            <div>We're looking for professionals in the technology sector (such as software engineers, product managers, QA engineers, and designers) who think they could spot a well-designed or innovative project. As a thank you we provide our judges with lunch and some LeedsHack merchandise! No experience of hackathons/judging is necessary as we'll provide a briefing beforehand. This is a great way to support student innovation and see what the next generation is building.</div>
            <div>If you're interested, please get in touch at <Link href="mailto:leedshack@luucompsoc.co.uk" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">leedshack@luucompsoc.co.uk</Link>.</div>
        </div>
    },
    {
        question: "What if I am allocated a ticket but can no longer attend?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Email <Link href="mailto:leedshack@luucompsoc.co.uk" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">leedshack@luucompsoc.co.uk</Link> and let us know so your ticket can be reallocated.</div>
    },
    {
        question: "What are the challenges?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Challenges are set by our sponsors and will be revealed on the day.</div>
    },
    {
        question: "What will I be building?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Whatever you want. We encourage you to come up with creative solutions to any of the set out challenges.</div>
    },
    {
        question: "Do I have to stay all night?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">No, feel free to leave the venue whenever you want.</div>
    },
    {
        question: "What should I bring?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">At minimum yourself and a laptop. Lab computers will be available for University of Leeds students, unfortunately these systems cannot be accessed by people from other universities.</div>
    },
    {
        question: "What are the rules around what I build?",
        answer: <div className="flex flex-col gap-3 px-6 min-[96rem]:px-48 py-4">
            <div>We will not allow projects which make use of resources unavailable to others at the event such as personal hardware devices. This makes sure the event is fair to everyone.</div>
            <div>We also suggest you familiarise yourself with the <Link href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">MLH Code of Conduct</Link>.</div>
        </div>
    },
    {
        question: "Is food and drink provided?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Yes, we provide lunch and dinner (dinner and tea for the northern folk), a midnight meal and breakfast. We will also provide a range of snacks throughout the day.</div>
    },
    {
        question: "Can I bring my own food?",
        answer: <div className="px-6 min-[96rem]:px-48 py-4">Yes, however, we cannot allow food containing nuts into the venue and we will not be able to provide any facilities to reheat food.</div>
    },
];

export default function Page()
{
    return (
        //
        <div className="flex grow justify-center">

            <div className="mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 max-w-[96rem] grow border-l border-r border-dashed border-white/50 text-white">
                <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-lg min-[48rem]:text-xl border-t border-b border-white/50 bg-white/10">
                    FAQ
                </div>
                <div className="py-6 px-6 min-[96rem]:px-48 text-sm min-[48rem]:text-md">
                    If you have any other questions not answered below please reach out by emailing us at <Link href="mailto:leedshack@luucompsoc.co.uk" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">leedshack@luucompsoc.co.uk</Link>.
                </div>

                <Accordion.Root
                    className="w-full mb-12 border-white/50 border-t"
                    type="multiple">
                    {
                        FAQItemList.map((item: FAQItem, index: number) =>
                            <Accordion.Item
                                key={index}
                                value={index.toString()}
                                className="overflow-hidden">
                                <Accordion.Header className="w-full flex border-white/50 border-b">
                                    <Accordion.Trigger className="transition-button cursor-pointer accordion-trigger text-sm min-[48rem]:text-md w-full text-left flex items-center justify-between bg-white/10 hover:bg-white/20 px-6 min-[96rem]:px-48 py-4">
                                        {item.question}
                                        <ArrowDown className="accordion-arrow stroke-white h-6"></ArrowDown>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="animation-accordion overflow-clip bg-white/5 text-sm min-[48rem]:text-md border-b border-white/50">
                                    {item.answer}
                                </Accordion.Content>
                            </Accordion.Item>)
                    }
                </Accordion.Root>
            </div>
        </div>
    );
};