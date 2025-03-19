import type {ReactNode} from "react";

export interface EntryProps{
    title: string
    date?: string
    description?: string
    children?: (string|ReactNode)[]
}

function createIfExists( to_create: ReactNode, ...args: any[]) {
    if (args.every( e => e !== undefined)){
        return to_create;
    }

    return null
}

export default function Entry(props: EntryProps) {
    const {title, date, description, children} = props;
    return <div className="flex flex-col">
        <div className="flex">
            <h3 className="font-semibold flex-1">{title}</h3>
            {createIfExists(<p className="font-semibold">{date}</p>, date)}
        </div>
        {createIfExists(<p>{description}</p>, description)}
        {createIfExists(
            <ul className="ml-4 list-disc">
                {children?.map( (child, index) => <li id={`${title}-${index}`}>{child}</li>)}
            </ul>,
            children
        )}
    </div>
}