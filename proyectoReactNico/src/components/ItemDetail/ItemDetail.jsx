import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [isCount, setIsCount] = useState(true);
  const { agregarCart } = useCartContext();

  function onAdd(cantidad) {
    agregarCart({ ...product, cantidad });
    setIsCount(false);
  }
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div>
            <img src={product.foto} alt="image" className="w-50" />
          </div>
          <div>
            <p>Nombre: {product.name}</p>
            <p> Categoria: {product.categoria}</p>
            <p> Precio: {product.price}</p>
            <p> Stock: {product.stock}</p>
          </div>
        </div>
        <div className="col-6">
          {isCount ? (
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
          ) : (
            <>
              <Link to="/cart" className="btn btn-primary">
                Ir a carrito
              </Link>
              <Link to="/" className="btn btn-primary">
                Seguir comprando
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
