 
 export const WhereProduct = (category) => {
    return firebase.firestore().collection("Productos").where("Categoría", "==", category).get()
 }

export const setOrders = (objOrder) => {
    return firebase.firestore().collection("order").add(objOrder)

    }

     
/* Obtener los datos desde la colección de firestore */
export const getOrder = (state,callback) => {
    firebase.firestore().collection('order')
    .orderBy('fecha', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data().estado)
        if(doc.data().estado===state){  data.push({id:doc.id, 
          cliente:doc.data().cliente,
          fecha: doc.data().fecha,
          estado: doc.data().estado,
          productos: doc.data().productos,
          }
        )};
      });
    callback(data);
    })
  }
  
  export const editStateOrder = (idOrder, newState) => {
    var orderRef = firebase.firestore().collection('order').doc(idOrder);
    return orderRef.update({
      estado: newState

    })
  }


  