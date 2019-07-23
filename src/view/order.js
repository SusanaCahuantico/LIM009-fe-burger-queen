// import {WhereProduct} from '../controller/firebase.js'
import { dataProduct } from '../controller/functions.js'


let array1 = [];

const createButton = (text, id, precio) => {
    const createButton = document.createElement("button");
    // console.log(createButton)
    createButton.innerHTML = text;
    createButton.id = id;
    createButton.precio = precio;
    createButton.addEventListener('click', ()=>{
        const prodSelec = createButton.precio;
        //const create = createButton.innerHTML;
        //products.innerHTML += create;
        products.innerHTML += `
        <div> 
          <li><input type="checkbox"/> ${text} ${precio}</li> 
        </div> `;  
        array1.push(prodSelec);
        const total = document.querySelector('#total');

        total.innerHTML = suma(array1)
    })
    /* createButton.addEventListener ("click", () => {
        functionOfButton()
    }) */
    return createButton;
}

const suma = (arr) => {
    let acum = 0;
    arr.forEach(elemento => {
      acum = acum + elemento;
    })
    return acum;
  }

export default () => {
    const createDiv = document.createElement('div');
    const order = `
    <section class="col-lg">
    <header>
    <h1> BURGER QUEEN </h1>
    </header>
    <section class="col-lg-6">
        <button id="btn-desayuno" class="col-md-3"> Desayuno </button>
        <button id="btn-ac" class="col-lg-3"> Almuerzo y cena </button>
        <div id="contenido" class="col-lg-4">  </div>
    </section>
    <section class="col-lg-6">
        <p> Nombre del cliente <input type="text" name="nombre" required> </p>
        <p> N° de mesa  <input type="number" name="nombre" required> </p> 
        <section> 
           <div id="cantidad" class="col-md-4"> Cantidad </div>
           <div id="products" class="col-md-4"> Productos </div>
           <div class="col-md-4"> Precio </div>
        </div>
        <div> <h1> Total S/ <h1> 
        <p id="total"> </p>
         </section>
    </section>
    </section>
    `;
    createDiv.innerHTML = order;
    
    //const contenido = document.querySelector("#contenido")
    const btnDesayuno = createDiv.querySelector('#btn-desayuno');
    btnDesayuno.addEventListener('click', () => {
        dataProduct("Desayuno")
        .then(res => {
           //  console.log(res)
             const arrayAc = res;
             contenido.innerHTML='';
             arrayAc.forEach(element => {
               contenido.appendChild(createButton(element.datos.Nombre, element.id, element.datos.Precio))
             //  console.log(createButton(element.datos.Nombre, element.id))
             })
          })

//total.innerHTML = suma(array1)
       })


    const btnAc = createDiv.querySelector('#btn-ac')
    btnAc.addEventListener('click', () => {
     dataProduct("Almuerzo y cena")
     .then(res => {
         // console.log(res)
          const arrayAc = res;
          contenido.innerHTML='';
          arrayAc.forEach(element => {
            contenido.appendChild(createButton(element.datos.Nombre, element.id, element.datos.Precio)) 
          })
       })
    })    
        
        return createDiv;
    }
    
  
      
 