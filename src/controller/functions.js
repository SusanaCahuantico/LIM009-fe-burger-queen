import {WhereProduct, setOrders } from './firebase.js';

export const dataProduct = (category) => {
    return WhereProduct(category)
    .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach(function(doc) {
            array.push({
                id: doc.id,
                datos: doc.data()
            })
            // doc.data() is never undefined for query doc snapshots
        });
        return array;
    });
    
}


export const sendToOrder = (nameCustomer, arrayorder,state, mesa) => {
    /*   const objUser = userAcces();
      console.log(objUser); */
        let  order= {
        cliente: nameCustomer,
        productos: arrayorder,
        fecha: new Date(),
        estado:state,
        nroMesa: mesa
      }
    
      return setOrders(order)
        .then( (docRef)  => {
          console.log(docRef)
          
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
        
    }
    /*export const createCommentPost = (idPost, user, comment, fechaComment) => {
  let db = firebase.firestore();
  return db.collection('posts').doc(`${idPost}`)
    .collection('comment').add({
      user: user,
      comment: comment,
      fecha: fechaComment
    });
};
export const getComentPost = (idPost) => {
  let db = firebase.firestore();
  return db.collection('posts').doc(`${idPost}`).collection('comment');
};*/

