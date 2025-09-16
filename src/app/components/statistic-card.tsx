interface Properties
{
    value: string;
    label: string;
};

export const StatisticCard = (properties: Properties) =>
{
    return (
        <div className="basis-0 grow flex flex-col">
            <div className="text-header-sm min-[35rem]:text-header-md min-[66rem]:text-header-lg">{properties.value}</div>
            <div className="text-md min-[32rem]:text-lg text-white/75">{properties.label}</div>
        </div>
    );
};