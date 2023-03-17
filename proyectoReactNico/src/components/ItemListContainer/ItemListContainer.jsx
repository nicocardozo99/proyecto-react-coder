import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";
import BorderExample from "../BorderExample/BorderExample";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "Productos");

    // filtro
    const queryFilter = idCategoria
      ? query(queryCollection, where("categoria", "==", idCategoria))
      : queryCollection;

    getDocs(queryFilter)
      .then((respCollection) =>
        setProductos(
          respCollection.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        )
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [idCategoria]);

  return (
    <>
      {loading ? (
        <BorderExample />
      ) : (
        <>
          <p>{saludo}</p>
          <ItemList productos={productos} />
        </>
      )}
    </>
  );
};
