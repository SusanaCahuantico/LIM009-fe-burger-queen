  export const WhereProduct = (category) => {
     return firebase.firestore().collection("Productos").where("Categoría", "==", category).get()
 }
 /*
 export const WhereType = () => {
    return firebase.firestore().collection("Productos").where("Tipo", "array-contains", "pollo").get()
}
*/

//export const order = () => {
    
//}
export const setOrders = (objOrder) => {
    return firebase.firestore().collection("order").add(objOrder)

    }
