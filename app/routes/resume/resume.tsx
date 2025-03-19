import Entry from "./entry/entry";
import Header from "./header/header";
import Section from "./section/section";

export default function Resume(){
    return <div className="flex flex-col items-center py-8">
        <div className="w-204 text-sm flex flex-col gap-2 border-platinum border-solid border-2 p-8">
            <Header/>
            <Section title="skills">
                <p className="text-justify">
                    Javascript/Typescript, Python, Java, MySQL, Postgres, React, ExpressJS, 
                    GCP, Kubernetes, Docker, Dev Ops, Microservices, REST, Socket.IO, 
                    Electron, Git, Linux, Postman, Godot, Vim, VS Code, Rust, Lua, C++, C, C#
                </p>
            </Section>
            <Section title="Work Experience">
                <Entry title="Manhattan Associates" description="Senior Software Analyst" date="Jun 2021 - Present">
                    {[
                        "Used Jupyter notebooks (Python) to pull and process thousands of records through API calls",
                        "Used electron with React and Typescript to develop an app that handles proprietary API calls and improve efficiency of functional testing",
                        "Used Apache velocity to format json bodies for API calls through a proprietary framework (Manhattan ProActive)",
                        "Developed and maintained a new microservice in Java Spring and MySQL, allowing clients to migrate hundreds of thousands of records from existing environments to our new system",
                        "Developed and maintained a SaaS product based in GCP with over 100 different microservices",
                        "Successfully managed 3 go-lives including the deployment, monitoring and development of over 30 custom solutions per go-live",
                        "Developed new Dev Ops pipeline to ensure that all code is delivered and tested in a timely manner",
                        "Conducted code reviews to maintain high code quality during development",
                        "Quickly and efficiently resolved any errors or issues that arose during testing",
                        "Trained 4 new hires on product software and how to debug, maintain, and develop custom solutions. Two were recognized for outstanding performance",
                        "Recognized 3 separate times for outstanding performance"
                    ]}
                </Entry>
            </Section>
            <Section title="projects">
                <Entry title="Unofficial Website for the Antidote Card Game">
                    {[
                        "Technologies: NodeJS, Typescript, React, ExpressJS, Websockets (Socket.IO), Jest",
                        "Modeled after the card game Antidote, allows for players to create or connect to a game and play online",
                        "Extensively uses websockets to communicate in real time between the different players",
                        "Handles multiple simultaneous games",
                        "Test scripts written in NodeJS with the Jest framework"
                    ]}
                </Entry>
                <Entry title="DnD System for FoundryVTT">
                    {[
                        "Technologies: NodeJS, HTML, Handlebars",
                        "Defined the rules for a custom table top RPG system using NodeJS and create character sheets with HTML + CSS",
                        "Used Handlebars to create character sheets that will automatically roll dice with appropriate stats, tack ammunition and resources, and cast spells",
                        "Integrated with an already existing program, Foundry Virtual Table Top, which handles the connection of players, data storage, and a basic UI"
                    ]}
                </Entry>
                <Entry title="Social Deduction Game Discord Bot">
                    {[
                        "Technologies: Python, Docker",
                        "Manages a social deduction game called Bloodmoon where a moderator enters what actions the players take during the course of the game",
                        "Keeps track of player roles, a deck of cards, and communication between to the players, which allows for secret communication during a face to face game",
                        "Uses the Discord API to communicate with players privately and post important events to a shared channel that all players can see"
                    ]}
                </Entry>
            </Section>
            <Section title="education">
                <Entry title="Mercer University" date="Aug 2017 - May 2021" description="Bachelor of Science - Computer Science | Minor - Mathematics"/>
                <Entry title="Norcross High School" date="Aug 2012 - May 2017" description="IB Diploma and Honors Graduate"/>
            </Section>
        </div>
    </div>
}