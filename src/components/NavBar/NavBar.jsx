import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="navbar-header">
      <Link to={"/"}>
      <h1 style={{ marginLeft: "20px" }}>ORC GAMES</h1>      
      </Link>
      

      <nav>
        <ul>
          <li>
            <NavLink to={"/"}> Home </NavLink>
            </li>
            <li>
            <NavLink to={"/tienda"}> Tienda </NavLink>
            </li>
            <li>
            <NavLink to={"/descargas"}> Descargas </NavLink>
            </li>
          
        </ul>
      </nav>


        <CartWidget />
        </header>
  )
}

export default NavBar