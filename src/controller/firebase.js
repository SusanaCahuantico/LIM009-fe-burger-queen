 
 export const WhereProduct = (category) => {
     return firebase.firestore().collection("Productos").where("Categoría", "==", category).get()
 }

export const setOrders = (objOrder) => {
    return firebase.firestore().collection("order").add(objOrder)
  }
