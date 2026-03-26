import { NavLink } from "react-router-dom";
import Image from "next/image";

const Nav = () => {
   return (
      <div className="navRow">
        <NavLink className="navLink"to = "/experience">Experience</NavLink>
        <NavLink className="navLink"to = "/contact">Contact</NavLink>
        <a href = "/Resume-Christian Tomas Ocampo.pdf" download="Resume-Christian Tomas Ocampo.pdf"><img src = "https://zfkwhyiovawoxvgxvfbv.supabase.co/storage/v1/object/public/images/download.png" width={65} height={65} alt ="Download Resume"/></a> 
      </div>
   )
}
 
export default Nav
