let productos = [
    { id: '1' ,categoria: 'remeras', name:"Remera negra", price: 35, stock:5, foto: "../../public/images/remera-negra.jpg"},
    { id: '2' ,categoria: 'remeras', name:"Remera verde", price: 39, stock:2, foto: "../../public/images/REMERA-RELAXED.jpg"},
    { id: '3' ,categoria: 'remeras', name:"Remera beige", price: 33, stock:6, foto: "../../public/images/remera-nube-A.webp"},
    { id: '4' ,categoria: 'pantalones', name:"Pantalon cargo", price: 42, stock:4, foto: "../../public/images/pantalon-beige.webp"},
    { id: '5' ,categoria: 'pantalones', name:"Pantalon", price: 45, stock:3, foto: "../../public/images/pantalon-beige.webp"},
    { id: '6' ,categoria: 'pantalones', name:"Pantalon beige", price: 45, stock:3, foto: "../../public/images/pantalon-beige.webp"},
  
  ]
  
  
  export const gFetch = (id) => new Promise( (res, rej)=>{
    let condition = true
    if(condition) {
      setTimeout(() =>{
        res(id ? productos.find(prod => id === prod.id) : productos)
      }, 2000)
    } else {
      rej('Todo mal')
    }
  },)