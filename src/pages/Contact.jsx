

export default function Contact() {
    return (
        <main>
            <h1>Contact</h1>
            <div className="contactLinks">
                <a>Email: christiant_07@berkeley.edu | chris0112tomas@gmail.com</a>
                <a href = "https://www.linkedin.com/in/christian-tomas-ocampo-9664a7304/" >LinkedIn Page</a>
                <a href = "https://github.com/Christiant07" >GitHub</a>
            </div>
            
            <div className="contactLinks">
                <h3>Reach Out! 😁 →</h3>
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
