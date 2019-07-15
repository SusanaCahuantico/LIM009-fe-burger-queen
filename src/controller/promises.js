/* import {getProduct} from './firebase.js';

export const dataProduct = () => {
    getProduct()
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
     //console.log(array);
    });
    
}
*/