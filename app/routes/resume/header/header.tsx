export default function Header(){
    return <div className="flex flex-col items-center">
        <h1 className="text-4xl">Connor Day</h1>
        <p>Jacksonville, Florida</p>
        <div className="flex gap-1">
            <a href="mailto:connor.t.day@gmail.com" className="text-sky-400 underline">connor.t.day@gmail.com</a>
            |
            <p>(678) 542-0432</p>
            |
            <a href="https://github.com/ConnorDay" className="text-sky-400 underline">github.com/ConnorDay</a>
            |
            <a href="https://linkedin.com/in/connor-day-742221178/" className="text-sky-400 underline">linkedin.com/in/connor-day-742221178/</a>
        </div>
    </div>
}