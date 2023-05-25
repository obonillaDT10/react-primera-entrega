import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="navbar-header">
      <h1 style={{ marginLeft: "20px" }}>ORC GAMES ONLINE</h1>

      <nav>
        <ul>
          <li>Información</li>
          <li>Tienda</li>
          <li>Descargas</li>
        </ul>
      </nav>


        <CartWidget />
        </header>
  )
}

export default NavBar