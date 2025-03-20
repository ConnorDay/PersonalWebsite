import { Link } from "react-router";

export default function Toolbar(){
    return <header className="flex bg-oxford_blue pl-4 gap-12 text-platinum">
        <Link className="p-4" to={{pathname: "/"}}>About</Link>
        <Link className="p-4" to={{pathname: "/experience"}}>Experience</Link>
        <Link className="p-4" to={{pathname: "/resume"}}>Resume</Link>
        <Link className="p-4" to={{pathname: "/projects"}}>Projects</Link>
    </header>
}