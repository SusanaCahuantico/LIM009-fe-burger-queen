
export const getProduct = () => {
    return firebase.firestore().collection("Productos").get()
 }      
