import { PropsWithChildren } from "react";
export interface Properties extends React.HTMLAttributes<HTMLDivElement> { };

export const CornerBox = ({ children, ...properties }: PropsWithChildren<Properties>) =>
{
    return (
        <div {...properties}>
            <div className="absolute top-0 left-0 border-l border-t border-white/75 w-6 h-6"></div>
            <div className="absolute top-0 right-0 border-r border-t border-white/75 w-6 h-6"></div>
            <div className="absolute bottom-0 left-0 border-l border-b border-white/75 w-6 h-6"></div>
            <div className="absolute bottom-0 right-0 border-r border-b border-white/75 w-6 h-6"></div>
            {children}
        </div>
    );
};