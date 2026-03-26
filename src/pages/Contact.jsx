

export default function Contact() {
    return (
        <main>
            <h1>Contact</h1>
            <div className="contactLinks">
                <a>Email: christiant_07@berkeley.edu | chris0112tomas@gmail.com</a>
                <a href = "https://www.linkedin.com/in/christiantomasocampo" ><img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/linked-inn.png"alt = "Photo of me" width = {100} height = {100}/></a>
                <a href = "https://github.com/Christiant07" ><img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/githubcat.png"alt = "Photo of me" width = {200} height = {200}/></a>
            </div>

            <br></br>

            <div className="contactLinks">
                <div>
                    <h1>Want to Know More?</h1>
                    <h1>Reach Out! 😁 →</h1>
                </div>
                <form className="emailForm" action="https://formspree.io/f/mzdjjqgd" method="POST">
                    <p>Name: <input name = "name" placeholder="name" required/></p>
                    <p>Email: <input type = "email" name = "email" placeholder="email"required/></p>
                    <p>Message: <textarea name = "message"placeholder="message"required/></p>
                    <button type ="submit">Send!</button>
                </form>
            </div>
        </main>
    );
}
