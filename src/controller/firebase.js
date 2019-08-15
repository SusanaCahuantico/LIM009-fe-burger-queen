 
 export const WhereProduct = (category) => {
    return firebase.firestore().collection("Productos").where("Categoría", "==", category).get()
 }

export const setOrders = (objOrder) => {
    return firebase.firestore().collection("order").add(objOrder)

    }

     
/* Obtener los datos desde la colección de firestore */
export const getOrder =(callback) => {
    firebase.firestore().collection('order')
    .orderBy('fecha', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({id:doc.id, 
                  cliente:doc.data().cliente,
                  fecha: doc.data().fecha,
                  estado: doc.data().estado,
                  productos: doc.data().productos,
                 })
      });
    callback(data);
    })
  }
     
