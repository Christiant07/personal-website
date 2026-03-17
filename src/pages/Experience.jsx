import Image from "next/image";

export default function Experience() {
    return (
        <main>
            <h2>Experience</h2>
            <h2 className = "skillsUnderline">Skills | Tools | Frameworks</h2>
            <div className="skills">
                <p>Java</p>
                <p>Python</p>
                <p>HTML/CSS</p>
                <p>JS</p>
                <p>React</p>
                <p>Next</p>
                <p>SupaBase</p>
            </div>

            <h2>Projects</h2>
            <div className="projects">

                <div className="experience">
                    <img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/next-for-autism-logo.svg" alt = "Next for Autism logo" width = {250} height = {250}/>
                    <div className="description">
                        <h2>NextFor Autism Project</h2>
                        <p>SOON! 🤫</p>
                    </div>
                </div>
                <br></br>
                <div className="experience">
                    <img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/screenshot.gif" alt = "Ants vs SomeBees gif" width = {500} height = {250}/>
                    <div className="description">
                        <h2>Ants VS SomeBees</h2>
                        <p>description</p>
                    </div>
                </div>

            </div>
            

            <h2>Work</h2>
            <div className="experience">
                <img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/IMG_8942.jpeg" alt = "picture with colleagues" width = {250} height = {300}/>
                <div className="description">
                    <h2>BGCSV Code + Create STEM Program Specialist</h2>
                    <p>description</p>
                </div>
            </div>
            <br></br>
            <div className="skills">
                <p>Click on the button below to dowload my resume!</p>
            </div>
        </main>
    );
}