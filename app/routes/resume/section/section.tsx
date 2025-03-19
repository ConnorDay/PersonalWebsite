import type { ReactNode } from "react"

export interface SectionProps{
    title: string
    children?: ReactNode
}

export default function Section(props: SectionProps) {
    const {title, children} = props

    return <section>
        <h2 className="font-bold text-lg">{title.toLocaleUpperCase()}</h2>
        <hr/>
        <div className="flex flex-col py-2 gap-2">
            {children}
        </div>
    </section>
}