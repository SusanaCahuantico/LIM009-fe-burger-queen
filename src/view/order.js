import { dataProduct } from '../controller/functions.js'

let array1 = [];
let array2 = [];

//aqui pintas el Storage: JSON.parseInt
const array1Order = (objproducto, ele, adic = {}) => {
 // debugger
  //console.log(adic.nombre)
  if (objproducto.datos.Adicional != undefined && ((adic.nombre == 'huevo')||(adic.nombre == 'queso'))) {
    let objeto = {
      name: objproducto.datos.Nombre +' '+ ele + ' '+ adic.nombre,
      price: objproducto.datos.Precio + 1,
      id: objproducto.id,
      adicional: objproducto.datos.Adicional
    }
    array1.push(objeto);
   // console.log(array1)
  } else if (objproducto.datos.Tipo != undefined && ((objproducto.datos.Nombre == 'Hamburguesa Simple')||(objproducto.datos.Nombre == 'Hamburguesa doble'))){
   // console.log(objproducto.datos.Nombre)
        let objeto = {
          name: objproducto.datos.Nombre +' '+ ele,
          price: objproducto.datos.Precio,
          id: objproducto.id,
         // adicional: objproducto.datos.Adicional
        }
        array1.push(objeto);
       // console.log(array1)
  } else {
    let objeto = {
      name: objproducto.datos.Nombre,
      price: objproducto.datos.Precio,
      id: objproducto.id,
    }
    array1.push(objeto);
   // console.log(array1)
  };
  products.innerHTML = '';
  array1.forEach(elementos => {
   // console.log(elementos)
    const createList = document.createElement('li');
    createList.innerHTML = elementos.name + elementos.price;
    const buttonList = document.createElement('button');
    buttonList.innerHTML = 'x';
    buttonList.id = elementos.id;
   // console.log(buttonList.id)
    createList.appendChild(buttonList);
    products.appendChild(createList);
  })
 return array1;
 // console.log(array1)
}

const createButton = (objproducto) => {
    const createDiv = document.createElement("div");
    createDiv.id = 'div-add' + objproducto.id;
    const image = document.createElement('img');
    image.src = objproducto.datos.img;
    image.className = 'image';
    createDiv.appendChild(image);
    createDiv.className = "product col-3";
    const createButton = document.createElement("button");
    //console.log(createButton)
    createButton.div = objproducto.datos.Tipo;
    createButton.innerHTML = objproducto.datos.Nombre;
    createButton.id = objproducto.id;
    createButton.precio = objproducto.datos.Precio;
    createDiv.appendChild(createButton)
    createButton.addEventListener('click', (e)=>{
      const createBtn = e.target.id;
      const div = document.querySelector('#div-add'+ createBtn)
      //console.log(createBtn) identifica el boton a quien se hizo clic
      //aqui pintas el Storage: JSON.parseInt
      switch (createBtn){  
        case ('s3XmdNPPmSKupPjBj5IQ'): 
        case ('HYLEqOtNeTj3sEzBtabZ'):
          (createButton.div).forEach(ele => {
            //res pollo y vegano
            const divBtnEle = document.createElement('div')
            const createBtnEle = document.createElement("button")
            divBtnEle.id = createBtn+ele;
            createBtnEle.innerHTML = ele;
            divBtnEle.appendChild(createBtnEle)
            div.appendChild(divBtnEle)
            createBtnEle.addEventListener('click', (even) => {
             // const tipoPendiente = even.target;
             // console.log(tipoPendiente)
              const arrayAdic = objproducto.datos.Adicional;
             // console.log(arrayAdic)
              arrayAdic.forEach(adic => {
                //console.log(adic.nombre)
               //huevo queso y precio
             //  if( ((adic.nombre == 'queso')||(adic.nombre == 'huevo'))){
                 const btnAdic = document.createElement('button')
                 btnAdic.innerHTML = adic.nombre;
                  divBtnEle.appendChild(btnAdic)
                  btnAdic.addEventListener('click', () => {
                  products.innerHTML += `<li>${objproducto.datos.Nombre} de ${ele} con ${adic.nombre} </li>`;
                   //console.log(adic.nombre)
                array1Order(objproducto, ele, adic)
                array2.push(objproducto.datos.Precio)
                array2.push(adic.precio)
               const total = document.querySelector('#total');
                total.innerHTML = suma(array2) 
                   })
                  })
               //} else {
                 const btnSinAdic = document.createElement('button')
                 btnSinAdic.id = "sinAdicional"
                 btnSinAdic.innerHTML = "sin adicional"
                 divBtnEle.appendChild(btnSinAdic)
                 btnSinAdic.addEventListener('click', () => {
                   products.innerHTML += `<li> ${objproducto.datos.Nombre} de ${ele}</li>`;
                   array1Order(objproducto, ele)
                   array2.push(objproducto.datos.Precio)
                   const total = document.querySelector('#total');
                   total.innerHTML = suma(array2) 
                  })
            })
          })
          break;
        default: 
        array1Order(objproducto)
        array2.push(objproducto.datos.Precio)
        const total = document.querySelector('#total');
        total.innerHTML = suma(array2)
        break;
      } 
    })
    return createDiv;
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
    //console.log(createDiv)
    const order = `
    <section class="col-12">
    <header>
    <h1 class="burgerTitulo"> BURGER QUEEN </h1>
    </header>
    <section class="col-6">
        <button id="btn-desayuno" class="col-6"> Desayuno </button>
        <button id="btn-ac" class="col-6"> Almuerzo y cena </button>
        <div id="contenido" class="col-12"> </div>
    </section>
    <section class="col-6">
        <p class=""> Nombre del cliente: <input id="nombre" type="text" name="nombre" class="mesa" required> </p>
        <p class=""> N° de mesa: <input id="mesa" type="number" name="nombre" class="mesa" required> </p>  
        <section class="col-12"> 
           <button class="productos col-md-4"> Cantidad </button>
           <button class="productos col-md-4"> Productos </button>
           <button class="productos col-4"> Precio </button>
           <div id="" class="col-12">
           <ul id=products> </ul>
           </div>
        </div>
        <h1> Total S/ <p id="total"> </p> <h1> 
        <button id="enviar"> ENVIAR </button> 
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

  const enviar = createDiv.querySelector('#enviar')
  enviar.addEventListener('click', () => {
    const nombre = document.getElementById("nombre").value; 
    const mesa = document.getElementById("mesa").value;
     console.log(nombre, mesa)
   })

  return createDiv;
  }
  