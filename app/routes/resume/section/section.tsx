export interface SectionProps{
    title: string
}

export default function Section(props: SectionProps) {
    const {title} = props

    return <>
        <h2>{title.toLocaleUpperCase()}</h2>
        <hr/>
    </>
}