

export default function HomeP() {
    return (
        <main>
            <div className="homeName">
                <h2>Hello</h2>
                <h3>My name is</h3>
                <h1 className="myName">
                    <span>CHRISTIAN</span>
                    <span> TOMAS OCAMPO</span>
                </h1>
            </div>


            <h2>About</h2>
            <div className="aboutMe">
                <h3> I'm a person who loves trying new drinks-from coffee, tea, and boba to matcha (as long as it's paired with a fun flavor like butter cookie, without that its lwk mid). I also enjoy soccer, running, hiking, and spending time in nature. One of my favorite foods is tacos from Tacos Los Tres Reyes, especially with some spicy sauce and an agua de horchata to cool down. I've grown up working in my family's Mexican cuisine business, which has been a big part of my life. Beyond that, I enjoy computer science and have had a lot of fun building my personal website. </h3>
                <img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/IMG_7466.jpeg"alt = "Photo of me" width = {250} height = {250}/>
            </div>
        </main>
    );
}