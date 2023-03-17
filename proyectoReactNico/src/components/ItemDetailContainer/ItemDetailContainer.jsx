import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "Productos", idProducto);
    getDoc(queryDoc)
      .then((respProd) => setProduct({ id: respProd.id, ...respProd.data() }))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
