import {WhereProduct} from '../controller/firebase.js'

let array1 = [];

export default () => {
    const createDiv = document.createElement('div');
    const order = `
    <section class="col-lg-12">
    <header>
        <h1> BURGER QUEEN </h1>
    </header>
    <section class="col-lg-6">
        <button id="btn-desayuno" class="col-md-3"> Desayunar </button>
        <button id="btn-ac" class="col-lg-3"> Almuerzo y cena </button>
        <div id="contenido" class="col-lg-4">  </div>
    </section>
    <section class="col-lg-6">
        <p> Nombre del cliente <input type="text" name="nombre" required> </p>
        <p> N° de mesa  <input type="number" name="nombre" required> </p> 
        <div> 
        <p> Cantidad </p>
        <div id="cantidad"> </div>
        <p> Productos </p>
        <div id="products"> </div>
        <p> Precio </p>
        </div>
        <div> <h1> Total S/ <h1> 
        <p id="total"> </p>
         </div>
    </section>
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
                       // console.log(createButton.innerHTML)
                       const prodSelec = createButton.id;
                       const create = createButton.innerHTML;
                       //products.innerHTML += create;
                       localStorage.setItem('producto', create)
                       products.innerHTML += `<div> <input type="checkbox"/> <p> ${localStorage.getItem('producto', create)} <p> <p>  ${element.datos.Precio} <p> </div> `;  
                       array1.push(prodSelec);
                       console.log(array1);
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
                const products = document.querySelector('#products')
                contenido.innerHTML = '';
                array.forEach((element) => {
                    const createButton = document.createElement('button');
                   createButton.innerHTML = `${element.datos.Nombre}`
                   createButton.id = `${element.id}`
                   contenido.appendChild(createButton);
                   createButton.addEventListener('click', ()=>{
                      const prodSelec = createButton.id;
                     // console.log(prodSelec)
                      const create = createButton.innerHTML;
                      //products.innerHTML += create;
                      localStorage.setItem('producto', create)
                      products.innerHTML += `<div> <input type="checkbox"/> <p> ${localStorage.getItem('producto', create)} <p> <p>  ${element.datos.Precio} <p> </div> `;  
                      array1.push(prodSelec);
                      console.log(array1);
                    })
                }); 
            })
        });
        
        return createDiv;
    }
    
      let suma = 0;
      suma = suma + parseInt(`${element.datos.Precio}`);
      console.log(suma)
