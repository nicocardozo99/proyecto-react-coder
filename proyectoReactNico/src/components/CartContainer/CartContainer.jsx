import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CarritoVacio = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <h2>Carrito Vacio</h2>
      <Link to="/" className="btn btn-outline-primary">
        Volver al Inicio
      </Link>
    </div>
  );
};

const CartContainer = () => {
  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    validarEmail: "",
  });
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } =
    useCartContext();

  const generarOrden = (event) => {
    event.preventDefault();
    const order = {};
    order.buyer = dataForm;
    order.precioTotal = cartList.map(({ id, name, price }) => ({
      id,
      name,
      price,
    }));

    const db = getFirestore();
    const queryCollection = collection(db, "Orders");

    addDoc(queryCollection, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        vaciarCarrito();
        setDataForm({
          name: "",
          phone: "",
          email: "",
          validarEmail: "",
        });
      });
  };

  const handleOnChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {id !== "" && <h2>Su numero de orden de compra es: {id}</h2>}
      {cartList.length === 0 ? (
        <CarritoVacio />
      ) : (
        <>
          {cartList.map((prodCart) => (
            <p key={prodCart.id}>
              <img src={prodCart.foto} className="w-25" />
              Nombre: {prodCart.name} - cantidad: {prodCart.cantidad} - precio:{" "}
              {prodCart.price}
              {
                <button
                  onClick={() => eliminarProducto(prodCart.id)}
                  className="btn btn-danger"
                >
                  {" "}
                  X{" "}
                </button>
              }
            </p>
          ))}
          <p>Precio total: ${precioTotal()}</p>
          <button onClick={vaciarCarrito} className="btn-clear-all">
            Vaciar carrito
          </button>

          <div className="container d-flex justify-content-center align-items-center mtop-5">
            <form className="form-group w-50" onSubmit={generarOrden}>
              <h3>Datos del comprador</h3>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Ingresar nombre"
                onChange={handleOnChange}
                required
                value={dataForm.name}
              />
              <input
                className="form-control"
                type="text"
                name="phone"
                placeholder="Ingresar telefono"
                onChange={handleOnChange}
                required
                value={dataForm.phone}
              />
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Ingresar email"
                onChange={handleOnChange}
                required
                value={dataForm.email}
              />
              <input
                className="form-control"
                type="text"
                name="validarEmail"
                placeholder="Validar el mail"
                onChange={handleOnChange}
                required
                value={dataForm.validarEmail}
              />
              <button className="btn btn-success"> Generar Orden </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
