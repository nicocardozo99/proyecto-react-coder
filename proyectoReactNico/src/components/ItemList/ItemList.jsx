import { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ productos }) => {
  return (
    <div className="productos">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
});

export default ItemList;
