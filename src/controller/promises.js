import {getProduct} from './firebase.js';

export const dataProduct = () => {
    getProduct()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().Precio);
        });
    });
}