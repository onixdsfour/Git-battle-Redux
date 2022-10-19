import { FC } from "react";
import { NavLink, Outlet} from "react-router-dom";

const Nav: FC = (): JSX.Element => {
  
    const navLinks: string[] = ['Home' , 'Popular' , 'Battle'];
    
    return (
        <>
        <header>
            <nav>
                <ul className="nav">
                    {navLinks.map((navLink: string, index: number):JSX.Element  => 
                        <li key={index}>
                            <NavLink className="nav" to={navLink === 'Home' ? '/' : navLink.toLowerCase()}> {navLink}</NavLink></li>
                    )}
                </ul>
            </nav>   
        </header>        
        <main>
            <Outlet/>
        </main>         
        </>  
    )
}
export default Nav;