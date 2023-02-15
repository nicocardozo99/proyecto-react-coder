import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {

    return (
    <div className="NavBar">
    <h1>Mi e-commerce</h1>

        <NavLink to='/' className="btn btn-primary">Inicio</NavLink>
        <NavLink className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/categoria/remeras'>Remeras</NavLink>
        <NavLink className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/categoria/pantalones'>Pantalones</NavLink>
<CartWidget/>
    </div>
  )
}

export default NavBar