import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"

const ItemDetailContainer = () => {

  const { idProducto } = useParams()
  gFetch(idProducto)


  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer