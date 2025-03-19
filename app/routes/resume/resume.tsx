import Header from "./header/header";
import Section from "./section/section";

export default function Resume(){
    return <div className="w-204 text-sm">
        <Header/>
        <Section title="skills" />
    </div>
}