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
        answer: <div className="px-6 py-4">Any UK university students.</div>
    },
    {
        question: "Is LeedsHack suitable for beginners?",
        answer: <div className="px-6 py-4">Yes, LeedsHack is open and inclusive to all skill levels.</div>
    },
    {
        question: "How do I register a team?",
        answer: <div className="flex flex-col gap-3 px-6 py-4">
            <div>All members of the team must apply for a ticket on <Link href="https://www.universe.com/events/leedshack-2026-tickets-N9LZPY" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Universe</Link>.</div>
            <div>Once all members have applied for a ticket you can use the <Link href="https://forms.gle/GycdWX2e9x3zdTep9" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">Team Registration Form</Link> to inform us of your team preference. Please keep in mind that if you register a team either all team members will be allocated a ticket, or no one will be allocated a ticket.</div>
        </div>
    },
    {
        question: "When does the event start and end?",
        answer: <div className="px-6 py-4">LeedsHack 2026 will start on February 7th at 10:00 AM and will end on February 8th at 16:00 PM.</div>
    },
    {
        question: "What if I am allocated a ticket but can no longer attend?",
        answer: <div className="px-6 py-4">Email <Link href="mailto:support@leedshack.com" className="underline underline-offset-2 decoration-2 decoration-leeds-hack-2026-primary-500">support@leedshack.com</Link> and let us know so your ticket can be reallocated.</div>
    },
    {
        question: "What are the challenges?",
        answer: <div className="px-6 py-4">Challenges are set by our sponsors and will be revealed on the day.</div>
    },
    {
        question: "What will I be building?",
        answer: <div className="px-6 py-4">Whatever you want. We encourage you to come up with creative solutions to any of the set out challenges.</div>
    },
    {
        question: "Do I have to stay all night?",
        answer: <div className="px-6 py-4">No, feel free to leave the venue whenever you want.</div>
    },
    {
        question: "What should I bring?",
        answer: <div className="px-6 py-4">At minimum yourself and a laptop. Lab computers will be available for University of Leeds students, unfortunately these systems cannot be accessed by people from other universities.</div>
    },
    {
        question: "What are the rules around what I build?",
        answer: <div className="px-6 py-4">Placeholder</div>
    },
    {
        question: "Is food and drink provided?",
        answer: <div className="px-6 py-4">Yes. We provide lunch and dinner (dinner and tea for the northern folk), a midnight meal and breakfast. We will also provide a range of snacks throughout the day.</div>
    },
    {
        question: "Can I bring my own food?",
        answer: <div className="px-6 py-4">Yes. However, we cannot allow food containing nuts into the venue and we will not be able to provide any facilities to reheat food.</div>
    },
];

export default function Page()
{
    return (
        <div className="flex flex-col min-w-0 mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem]">
            <div className="grow border-l border-r border-dashed border-white/50 text-white">
                <Accordion.Root
                    className="w-full mt-12 mb-12 border-white/50 border-t"
                    type="multiple">
                    {
                        FAQItemList.map((item: FAQItem, index: number) =>
                            <Accordion.Item
                                key={index}
                                value={index.toString()}
                                className="overflow-hidden">
                                <Accordion.Header className="w-full flex border-white/50 border-b">
                                    <Accordion.Trigger className="cursor-pointer accordion-trigger text-md w-full text-left flex items-center justify-between bg-white/15 px-6 py-4">
                                        {item.question}
                                        <ArrowDown className="accordion-arrow stroke-white h-6"></ArrowDown>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="animation-accordion overflow-clip bg-white/5 text-md border-b border-white/50">
                                    {item.answer}
                                </Accordion.Content>
                            </Accordion.Item>)
                    }
                </Accordion.Root>
            </div>
        </div>
    );
};