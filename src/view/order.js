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
                contenido.innerHTML = '';
                array.forEach((element) => {                    
                    contenido.innerHTML += `    
                    <button> ${element.datos.Nombre} </button>
                    `;
                }) 
            });     
    })

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
                contenido.innerHTML = '';
                let templates = '';
                array.forEach((element) => {  
                    console.log(element.id)                 
                    let producto = `    
                    <button id="${element.id}"> ${element.datos.Nombre} </button>
                    `;
                    templates += producto;
                })
                contenido.innerHTML = templates;
            }); 
    })   
    return createDiv;
}