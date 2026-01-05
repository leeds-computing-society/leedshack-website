export interface Properties extends React.SVGProps<SVGSVGElement> { };

export const ArrowDown = (properties: Properties) =>
{
    return (
        <svg viewBox="0 0 24 24" fill="none" {...properties}>
            <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};