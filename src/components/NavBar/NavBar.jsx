import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>Accesorios Deportivos</h1>

        <nav>
            <ul>
                <li>Pelotas</li>
                <li>Colchonetas</li>
                <li>Pesas</li>
            </ul>
        </nav>


        <CartWidget />
        </header>
  )
}

export default NavBar