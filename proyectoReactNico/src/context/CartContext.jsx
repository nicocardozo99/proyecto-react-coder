import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function productoEnCarrito(producto) {
    return cartList.find((item) => item.name === producto.name);
  }

  const agregarCart = (producto) => {
    const productoExistente = productoEnCarrito(producto);

    if (productoExistente) {
      const actualizarCarrito = [...cartList];
      productoExistente.cantidad += producto.cantidad;
      setCartList(actualizarCarrito);
    } else {
      setCartList([...cartList, { ...producto, cantidad: producto.cantidad }]);
    }
  };
  function precioTotal() {
    return cartList.reduce(
      (total, producto) => total + producto.price * producto.cantidad,
      0
    );
  }

  function totalProductos() {
    return cartList.reduce(
      (total, producto) => (total += producto.cantidad),
      0
    );
  }

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const eliminarProducto = (id) => {
    setCartList((cartList) =>
      cartList.filter((producto) => producto.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCart,
        vaciarCarrito,
        eliminarProducto,
        precioTotal,
        totalProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
