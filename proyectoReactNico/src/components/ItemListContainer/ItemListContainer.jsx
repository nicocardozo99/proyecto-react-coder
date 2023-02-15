import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import "./itemListContainer.css";

export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams()

  useEffect(() => {
    if (idCategoria) {
      gFetch()
      .then(resp => setProductos(resp.filter(producto=> producto.categoria === idCategoria)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    } else {
      gFetch()
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return (
    <>
      <p>{saludo}</p>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="productos">
          {productos.map((producto) => (
            <div key={producto.id} className="card m-5 mt-2">
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
          ))}
        </div>
      )}
    </>
  );
};
