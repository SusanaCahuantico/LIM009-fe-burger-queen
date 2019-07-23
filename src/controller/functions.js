import {WhereProduct} from './firebase.js';

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


export const order = (idProduct, quantity, unitPrice) => {
    const arrayOrder = [];
    const product = idProduct;
    arrayOrder.push({
        quantity: quantity,
        nameProduct: product,
        unitPrice: unitPrice,
        totalPrice: totalPrice
    })
    return arrayOrder;
}