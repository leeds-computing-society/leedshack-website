"use client";

export const RegistrationCountdown = () =>
{
    let now: Date = new Date();
    let target: Date = new Date("2026-01-12T12:00:00Z");

    let difference = target.getTime() - now.getTime();

    if (difference <= 0) return "Registration is now closed.";

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let remainingHours = hours % 24;
    let remainingMinutes = minutes % 60;

    let remainingHoursSuffix = hours === 1 ? "hour" : "hours";
    let remainingDaysSuffix = days === 1 ? "day" : "days";
    let remainingMinutesSuffix = hours === 1 ? "minute" : "minutes";

    if (days >= 1) return <div>Registration closes in <span className="text-[#a375ff]">{`${days} ${remainingDaysSuffix}, ${remainingHours} ${remainingHoursSuffix}`}</span>.</div>;
    return <div>Registration closes in <span className="text-[#FF526F]">{`${remainingHours} ${remainingHoursSuffix}, ${remainingMinutes} ${remainingMinutesSuffix}`}</span>.</div>;
};