import {WhereProduct} from '../controller/firebase.js'

let array1 = [];

export default () => {
    const createDiv = document.createElement('div');
    const order = `
    <section class="col-lg">
    <header>
    <h1> BURGER QUEEN </h1>
    </header>
    <section class="col-lg">
    <button id="btn-desayuno" class="col-md"> Desayunar </button>
    <button id="btn-ac" class="col-lg"> Almuerzo y cena </button>
    <div id="contenido" class="col-lg">  </div>
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
    <button> Enviar a cocina </button>
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
            const contenido = document.querySelector('#contenido');
            const products = document.querySelector('#products');
            const total = document.querySelector('#total');
            contenido.innerHTML = '';
            array.forEach((element) => {
                const createButton = document.createElement('button');
                createButton.innerHTML = `${element.datos.Nombre}`
                createButton.id = `${element.id}`
                contenido.appendChild(createButton);
                createButton.addEventListener('click', ()=>{
                    // console.log(createButton.innerHTML)
                    const prodPrecio = parseInt(`${element.datos.Precio}`)
                    const create = createButton.innerHTML;
                    //localStorage.setItem('producto', create)
                    products.innerHTML += `<div>
                    <ul>
                    <li> <input type="submit"/> ${create}  ${element.datos.Precio} </li>
                    </ul> 
                    </div> `;  
                    array1.push(prodPrecio);
                    total.innerHTML = suma(array1);
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
            const contenido = document.querySelector('#contenido');
            const products = document.querySelector('#products');
            const total = document.querySelector('#total');
            contenido.innerHTML = '';
            array.forEach((element) => {
                const createButton = document.createElement('button');
                createButton.innerHTML = `${element.datos.Nombre}`
                createButton.id = `${element.id}`
                contenido.appendChild(createButton);
                createButton.addEventListener('click', ()=>{
                    // console.log(createButton.innerHTML)
                    const prodPrecio = parseInt(`${element.datos.Precio}`)
                    const create = createButton.innerHTML;
                    //localStorage.setItem('producto', create)
                    products.innerHTML += `<div>
                    <ul>
                    <li> <input type="submit"/> ${create}  ${element.datos.Precio} </li>
                    </ul> 
                    </div> `;  
                    array1.push(prodPrecio);
                    total.innerHTML = suma(array1);
                    })
            });     
        })
        });       
        return createDiv;
    }
    
const suma = (array) => {
        let sum = 0;
        for(let i=0; i<array.length; i++){
            sum = sum +array[i];
        }
        return sum;
}




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
        const contenido = document.querySelector('#contenido');
        const products = document.querySelector('#products');
        const total = document.querySelector('#total');
        contenido.innerHTML = '';
        array.forEach((element) => {
            const createButton = document.createElement('button');
            createButton.innerHTML = `${element.datos.Nombre}`
            createButton.id = `${element.id}`
            contenido.appendChild(createButton);
            createButton.addEventListener('click', ()=>{
                // console.log(createButton.innerHTML)
                const prodPrecio = parseInt(`${element.datos.Precio}`)
                const create = createButton.innerHTML;
                //localStorage.setItem('producto', create)
                products.innerHTML += `<div>
                <ul>
                <li> <input type="submit"/> ${create}  ${element.datos.Precio} </li>
                </ul> 
                </div> `;  
                array1.push(prodPrecio);
                total.innerHTML = suma(array1);
                })
        });     
    })
    });       
    return createDiv;
}

const suma = (array) => {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum +array[i];
    }
    return sum;
}
