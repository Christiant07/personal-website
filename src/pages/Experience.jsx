import Image from "next/image";

export default function Experience() {
    return (
        <main>
            <h2>Experience</h2>
            <h2 className = "skillsUnderline">Skills | Tools | Frameworks</h2>
            <div className="skills">
                <p>Java</p>
                <p>Python</p>
                <p>SQL</p>
                <p>HTML/CSS</p>
                <p>Javascript</p>
                <p>React</p>
                <p>Next.JS</p>
                <p>SupaBase</p>
                <p>Github</p>
            </div>

            <h2>Projects</h2>
            <div className="projects">

                <div className="experience">
                    <img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/next-for-autism-logo.svg" alt = "Next for Autism logo" width = {250} height = {250}/>
                    <div className="description">
                        <h2>NextFor Autism Project</h2>
                        <p>This is a project I currently am working on, where I'm building a full-stack mentorship platform alongside a team of developers for students with autism and their mentors. It includes dashboards for tracking progress, weekly content, and a matching system that pairs mentors and mentees based on their goals. I've also been working on automating things like emails and building tools for the admin team to help the program run more smoothly.</p>                    </div>
                </div>
                <br></br>
                <div className="experience">
                    <img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/screenshot.gif" alt = "Ants vs SomeBees gif" width = {500} height = {250}/>
                    <div className="description">
                        <h2>Ants VS SomeBees</h2>
                        <p>This is a tower defense game I built inspired by Plants vs. Zombies. It was honestly one of my favorite projects because it brought back a lot of childhood memories while I worked on it. I used object-oriented programming to design different ant types, their behaviors, and how they interact with enemies, along with features like special abilities and game logic to bring everything together.</p>
                    </div>
                </div>

            </div>
            

            <h2>Work</h2>
            <div className="experience">
                <img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/IMG_8942.jpeg" alt = "picture with colleagues" width = {250} height = {300}/>
                <div className="description">
                    <h2>BGCSV Code + Create STEM Program Specialist</h2>
                    <p>This is a photo of me and my team on the first day of my internship at Boys & Girls Clubs of Silicon Valley. During my time there, I taught STEM workshops to groups of 15-20 students, covering robotics, animation, and coding. I even designed my own lesson to introduce Swift, and it was really rewarding seeing students go from confused to genuinely excited about what they were building. This experience meant a lot to me because I got to make learning more engaging and see the real impact of it.</p>
                </div>
            </div>
            <br></br>
            <div className="skills">
                <p>Click on the button below to dowload my resume!</p>
            </div>
        </main>
    );
}