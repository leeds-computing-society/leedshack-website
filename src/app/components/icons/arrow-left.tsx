export interface Properties extends React.SVGProps<SVGSVGElement> { };

export const ArrowLeft = (properties: Properties) =>
{
    return (
        <svg viewBox="0 0 24 24" fill="none" {...properties}>
            <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>);
};