import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="navbar-header">
      <Link to={"/"}>
      <h1 style={{ marginLeft: "20px" }}>ORC GAMES</h1>      
      </Link>
      

      <nav>
        <ul>
            <li>
            <Link to={"/categoria/3"}> Automovilismo </Link>
            </li>
            <li>
            <Link to={"/categoria/2"}> Deportes </Link>
            </li>
            <li>
            <Link to={"/categoria/1"}> Aventura </Link>
            </li>
          
        </ul>
      </nav>


        <CartWidget />
        </header>
  )
}

export default NavBar