import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";


 const Header = () => {
  return (
    <header>
        <div className="headerContainer">
            <div>
                <NavLink className="navLink"to = "/"><h1>CTO</h1></NavLink>
            </div>
            <Nav />
        </div>
    </header>
  )
}
  
export default Header
