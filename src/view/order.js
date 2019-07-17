import {WhereProduct} from '../controller/firebase.js'

export default () => {
    const createDiv = document.createElement('div');
    const order = `
    <header>
        <h1> BURGER QUEEN </h1>
    </header>
    <section>
        <button id="btn-desayuno"> Desayunar </button>
        <button id="btn-ac"> Almuerzo y cena </button>
    </section>
    <div id="contenido">  </div>
    <section>
        <p> Nombre del cliente </p>
        <input type="text" placeholder="Nombre del cliente"/>
        <p> N° de mesa </p> 
        <input type="text" placeholder="N° de mesa"/>
        <div id="products"> </div>
        <p> Total S/0.00 <p>
    </section>
    `;
    createDiv.innerHTML = order;

    const btnDesayuno = createDiv.querySelector('#btn-desayuno');
    btnDesayuno.addEventListener('click', () => {
        WhereProduct("Desayuno")
        .then((querySnapshot) => {
            const array = [];
            querySnapshot.forEach((doc) => {
                array.push({
                    id: doc.id,
                    datos: doc.data()
                }); 
            })
            // return array;
                //console.log(array);
                const contenido = document.querySelector('#contenido');
                const products = document.querySelector('#products')
                contenido.innerHTML = '';
                array.forEach((element) => {
                    const createButton = document.createElement('button');
                   createButton.innerHTML = `${element.datos.Nombre}`
                   createButton.id = `${element.id}`
                   contenido.appendChild(createButton);
                   createButton.addEventListener('click', ()=>{
                       console.log(createButton.innerHTML)
                       const create = createButton.innerHTML;
                       localStorage.setItem('producto', create)
                       products.innerHTML += localStorage.getItem('producto', create)
                   })
            });     
    })
});

    const btnAc = createDiv.querySelector('#btn-ac')
    btnAc.addEventListener('click', () => {
        WhereProduct("Almuerzo y cena")
        .then((querySnapshot) => {
            const array = [];
            querySnapshot.forEach((doc) => {
                array.push({
                    id: doc.id,
                    datos: doc.data()
                }); 
            })
            // return array;
                //console.log(array);
                const contenido = document.querySelector('#contenido');
                //contenido.innerHTML = '';
                array.forEach((element) => {
                    const createButton = document.createElement('button');
                   createButton.innerHTML = `${element.datos.Nombre}`
                   contenido.appendChild(createButton);
            }); 
    })
});  
    return createDiv;
}