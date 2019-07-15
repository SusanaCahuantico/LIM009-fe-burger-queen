
export const getProduct = () => {
    return firebase.firestore().collection("Productos").get()
 } 
 
 export const WhereProduct = () => {
     return firebase.firestore().collection("Productos").where("Categoría", "==", "Desayuno").get()
 }
 
 