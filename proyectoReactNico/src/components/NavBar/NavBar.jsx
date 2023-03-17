import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const categorias = [
  { id: "categoria1", path: "/categoria/remeras", name: "Remeras" },
  { id: "categoria2", path: "/categoria/pantalones", name: "Pantalones" },
];

function NavBar() {
  return (
    <div className="NavBar">
      <h1>Mi e-commerce</h1>

      <NavLink to="/" className="btn btn-primary">
        Inicio
      </NavLink>
      {categorias.map((cat) => (
        <NavLink
          key={cat.id}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-outline-primary"
          }
          to={cat.path}
        >
          {cat.name}
        </NavLink>
      ))}
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
}

export default NavBar;
