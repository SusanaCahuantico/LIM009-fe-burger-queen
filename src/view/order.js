import { dataProduct } from '../controller/functions.js'

let array1 = [];

const createButton = (objproducto) => {
  //console.log(objproducto)
  
    const createButton = document.createElement("button");
    createButton.div = objproducto.datos.Tipo;
    createButton.innerHTML = objproducto.datos.Nombre;
    createButton.id = objproducto.id;
    createButton.precio = objproducto.datos.Precio;
    createButton.addEventListener('click', (e)=>{
     const createBtn = e.target.id;
     switch (createBtn) {
       case ('HYLEqOtNeTj3sEzBtabZ'):
         category()
         const createDiv = document.createElement('div');
         createDiv.id = "adicional"; 
         (createButton.div).forEach(ele => {
           //console.log(ele)
           const crea = `
           <button> ${ele} </button>
           `;
           createDiv.innerHTML += crea;
           contenido.insertBefore(createDiv, createButton.nextSibling)    
         })
         break;
       case ('s3XmdNPPmSKupPjBj5IQ'):
         const createDivo = document.createElement('div');
         (createButton.div).forEach(ele => {
         const create =  `<button>  ${ele} </button>`
         createDivo.innerHTML += create;
         contenido.insertBefore(createDivo, createButton.nextSibling)
         })
         break;
     } 
        const prodSelec = createButton.precio;
        products.innerHTML += `
        <div> 
          <li><input type="checkbox"/> ${objproducto.datos.Nombre} ${objproducto.datos.Precio}</li> 
        </div> `;  
        array1.push(prodSelec);
        const total = document.querySelector('#total');

        total.innerHTML = suma(array1)
    })
   
    return createButton;
}

const suma = (arr) => {
    let acum = 0;
    arr.forEach(elemento => {
      acum = acum + elemento;
    })
    return acum;
}

const category = () => {
        dataProduct("Adicional")
     .then(res1 => {
       console.log(res1)
      const arrayA = res1;
       arrayA.forEach(elem => {
        const opcion = elem.datos.Opción;
        opcion.forEach(opc => {
         // console.log(opc)
          const createDivo = document.createElement('div');
          const opciones =  `<button>  ${opc} </button>`
          console.log(opc)
          createDivo.innerHTML += opciones;
          contenido.insertBefore(createDivo, opciones.nextSibling)
        })
       })
      })
}

export default () => {
    const createDiv = document.createElement('div');
    const order = `
    <section class="col-lg">
    <header>
    <h1> BURGER QUEEN </h1>
    </header>
    <section class="col-6">
        <button id="btn-desayuno" class="col-3"> Desayuno </button>
        <button id="btn-ac" class="col-3"> Almuerzo y cena </button>
        <div id="contenido" class="col-4">  </div>
    </section>
    <section class="col-6">
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
               contenido.appendChild(createButton(element))
             //  console.log(createButton(element.datos.Nombre, element.id))
             })
          })
//total.innerHTML = suma(array1)
       })

    const btnAc = createDiv.querySelector('#btn-ac')
    btnAc.addEventListener('click', () => {
     dataProduct("Almuerzo y cena")
     .then(res => {
         //console.log(res)
          const arrayAc = res;
          contenido.innerHTML='';
          arrayAc.forEach(element => {
            contenido.appendChild(createButton(element))
       })
    })
  })
  return createDiv;
  }