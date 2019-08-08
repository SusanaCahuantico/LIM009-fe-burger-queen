import { dataProduct, sendToOrder } from '../controller/functions.js'

let array1 = [];
let array2 = [];

const array1Order = (objproducto, ele, adic = {}) => {
  //debugger
  if (objproducto.datos.Adicional != undefined && ((adic.nombre == 'huevo')||(adic.nombre == 'queso'))) {
    let objeto = {
      name: objproducto.datos.Nombre +' '+ ele + ' '+ adic.nombre,
      price: objproducto.datos.Precio + 1,
      id: objproducto.id,
      adicional: objproducto.datos.Adicional
    }
    array1.push(objeto);
  } else if (objproducto.datos.Tipo != undefined && ((objproducto.datos.Nombre == 'Hamburguesa Simple')||(objproducto.datos.Nombre == 'Hamburguesa doble'))){
        let objeto = {
          name: objproducto.datos.Nombre +' '+ ele,
          price: objproducto.datos.Precio,
          id: objproducto.id,
        }
        array1.push(objeto);
  } else {
      let objeto = {
         name: objproducto.datos.Nombre,
         price: objproducto.datos.Precio,
         id: objproducto.id,
    }
    array1.push(objeto);
    //console.log(array1)
  };
  products.innerHTML = '';
  array1.forEach(elementos => {
    const createList = document.createElement('li');
    createList.innerHTML = elementos.name + ' ' + 'S/.'+elementos.price+'.00';
    const buttonList = document.createElement('button');
    buttonList.innerHTML = 'x';
    buttonList.className = 'aspa';
    buttonList.id = elementos.id;
    buttonList.addEventListener('click', () => {
      const indice = array1.indexOf(elementos)
      //console.log(indice)
      if(indice> -1){
        array1.splice(indice, 1);
        array2.splice(indice, 1);
        //console.log(array2)
      }
      const total = document.querySelector('#total');
      total.innerHTML = suma(array2) 
      products.removeChild(createList)
    })
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
    createDiv.className = "product col-md-4 col-lg-4";
    const createButton = document.createElement("button");
    createButton.div = objproducto.datos.Tipo;
    createButton.className = 'createButton';
    //console.log(objproducto.datos.Tipo)
    createButton.innerHTML = objproducto.datos.Nombre + ' ' + 'S/.'+objproducto.datos.Precio+'.00';
    createButton.id = objproducto.id;
    createButton.precio = objproducto.datos.Precio;
    createDiv.appendChild(createButton)
    createButton.addEventListener('click', (e)=>{
      const createBtn = e.target.id;
      //console.log(e.target)
      const div = document.querySelector('#div-add'+ createBtn)
      switch (createBtn){  
        case ('s3XmdNPPmSKupPjBj5IQ'): 
        case ('HYLEqOtNeTj3sEzBtabZ'):
          (createButton.div).forEach(ele => {
            //res pollo y vegano
            //console.log(ele)
            const divBtnEle = document.createElement('div')
            const createBtnEle = document.createElement("button")
            divBtnEle.id = createBtn+ele;
            createBtnEle.innerHTML = ele;
            divBtnEle.appendChild(createBtnEle)
            div.appendChild(divBtnEle)
            createBtnEle.addEventListener('click', () => {
              const arrayAdic = objproducto.datos.Adicional;
              arrayAdic.forEach(adic => {
                 const btnAdic = document.createElement('button')
                 btnAdic.innerHTML = adic.nombre;
                  divBtnEle.appendChild(btnAdic)
                  btnAdic.addEventListener('click', () => {
                  products.innerHTML += `<li>${objproducto.datos.Nombre} de ${ele} con ${adic.nombre} </li>`;
                array1Order(objproducto, ele, adic)
                const sumaPrecio = objproducto.datos.Precio + adic.precio;
                array2.push(sumaPrecio)
               const total = document.querySelector('#total');
                total.innerHTML = suma(array2) 
                   })
                  })
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
    const order = `
    <section class="col-12">
    <header>
    <h1 class="burgerTitulo"> BURGER QUEEN </h1>
    </header>
    <section class="col-6">
        <button id="btn-desayuno" class="desayuno col-6"> Desayuno </button>
        <button id="btn-ac" class="desayuno col-6"> Almuerzo y cena </button>
        <div id="contenido" class="content col-12"> </div>
    </section>
    <section class="col-6">
        <p class=""> Nombre del cliente: <input id="nombre" type="text" name="nombre" class="mesa" required> </p>
        <p class=""> N° de mesa: <input id="mesa" type="number" name="nombre" class="mesa" required> </p>  
        <section class="col-12"> 
           <button class="list-product col-4"> Cantidad </button>
           <button class="list-product col-4"> Productos </button>
           <button class="list-product col-4"> Precio </button>
           <div id="list-order" class="col-12">
           <ul id=products class="lista"> </ul>
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
             const arrayAc = res;
             contenido.innerHTML='';
             arrayAc.forEach(element => {
               contenido.appendChild(createButton(element))
             })             
          })
       })

    const btnAc = createDiv.querySelector('#btn-ac')
    btnAc.addEventListener('click', () => {
     dataProduct("Almuerzo y cena")
     .then(res => {
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
    //console.log(array1)
    sendToOrder(nombre, array1,"pendiente", mesa)
   })

  return createDiv;
  }