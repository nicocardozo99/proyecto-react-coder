import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card m-5 mt-2">
      <div className="card-header">Nombre: {producto.name}</div>
      <div className="card-body">
        <img src={producto.foto} alt="" />
        <br />
        <label>Categoria: {producto.categoria} </label>
        <br />
        <label> Precio: {producto.price} </label>
        <br />
        <label> Stock: {producto.stock} </label>
      </div>
      <div className="card-footer">
        <Link to={`/detalle/${producto.id}`}>
          <button className="btn btn-outline-dark w-100">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
