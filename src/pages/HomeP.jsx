

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
                <p>Im a person who enjoys trying new drinks. I enjoy coffee, tea, boba, matcha only if its over powered by another flavor like butter cookie so not mathca lol. But, its not all aboout drinks. I also like to run when I can and play soccer or jsut be oustide and enjoy nature...</p>
                <img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/IMG_7466.jpeg"alt = "Photo of me" width = {250} height = {250}/>
            </div>
        </main>
    );
}