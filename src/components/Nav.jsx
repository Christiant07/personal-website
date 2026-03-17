import { NavLink } from "react-router-dom";
import Image from "next/image";

const Nav = () => {
   return (
      <div className="navRow">
        <NavLink className="navLink"to = "/experience">Experience</NavLink>
        <NavLink className="navLink"to = "/contact">Contact</NavLink>
        <a href = "/Resume-Christian Tomas Ocampo.pdf" download="Resume-Christian Tomas Ocampo.pdf"><Image src = "/resumeLogo.png"  width={50} height={50} alt ="Download Resume"/></a> 
      </div>
   )
}
 
export default Nav
