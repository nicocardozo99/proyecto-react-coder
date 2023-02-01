import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {

    return (
    <div className="NavBar">
    <h1>Mi e-commerce</h1>
<ul>
    <li>
        <a href="">Inicio</a>
    </li>
</ul>
<ul>
    <li>
        <a href="">Productos</a>
    </li>
</ul>
<ul>
    <li>
        <a href="">Nosotros</a>
    </li>
</ul>
<ul>
    <li>
        <a href="">Contacto</a>
    </li>
</ul>
<CartWidget/>
    </div>
  )
}

export default NavBar