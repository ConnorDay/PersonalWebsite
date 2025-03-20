import github from "./github-mark-white.svg";
import mail from "./mail.svg";
import linkedin from "./InBug-White.png"

export default function Footer(){
    return <footer className="flex flex-row bg-oxford_blue pl-4 gap-12 text-platinum items-center content-around justify-center">
        <a className="p-2" href="https://github.com/ConnorDay" download>
            <img className="w-[24px] h-[24px]" src={github} />
        </a>

        <a className="p-2" href="mailto:connor.t.day@gmail.com" download>
            <img className="w-[24px] h-[24px]" src={mail} />
        </a>

        <a className="p-2" href="https://linkedin.com/in/connor-day-742221178/" download>
            <img className="w-[24px] h-[24px]" src={linkedin} />
        </a>

        (678) 542 - 0432
    </footer>
}
