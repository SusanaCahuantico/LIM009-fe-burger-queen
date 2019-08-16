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
    }
    array1.push(objeto);
    console.log(array1)
  } else if (objproducto.datos.Tipo != undefined && ((objproducto.datos.Nombre == 'Hamburguesa Simple')||(objproducto.datos.Nombre == 'Hamburguesa doble'))){
        let objeto = {
          name: objproducto.datos.Nombre +' '+ ele,
          price: objproducto.datos.Precio,
          id: objproducto.id,
        }
        array1.push(objeto);
        console.log(array1)
  } else {
      let objeto = {
         name: objproducto.datos.Nombre,
         price: objproducto.datos.Precio,
         id: objproducto.id,
  }
    array1.push(objeto);
    console.log(array1)
  };
  products.innerHTML = '';
  array1.forEach(elementos => {
    const createList = document.createElement('li');
    createList.className = 'list col-12'
    createList.innerHTML = elementos.name + ' ' + 'S/.'+ elementos.price+'.00';
    const buttonList = document.createElement('button');
    buttonList.innerHTML = 'x';
    buttonList.className = 'aspa';
    buttonList.id = elementos.id;
    buttonList.addEventListener('click', () => {
      const indice = array1.indexOf(elementos)
      if(indice> -1){
        array1.splice(indice, 1);
        array2.splice(indice, 1);
      }
      const total = document.querySelector('#total');
      total.innerHTML = suma(array2) 
      products.removeChild(createList)
    })
    products.appendChild(createList);
    createList.appendChild(buttonList);
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
    createDiv.className = "product col-md-6 col-lg-6";
    const createButton = document.createElement("button");
    createButton.div = objproducto.datos.Tipo;
    createButton.className = 'createButton';
    createButton.innerHTML = objproducto.datos.Nombre + ' ' + 'S/.'+ objproducto.datos.Precio+'.00';
    createButton.id = objproducto.id;
    createButton.precio = objproducto.datos.Precio;
    createDiv.appendChild(createButton)
    createButton.addEventListener('click', (e)=>{
      //debugger
      const createBtn = e.target.id;
      //console.log(e.target)
      const div = document.querySelector('#div-add'+ createBtn)
     // div.innerHTML = '';
      switch (createBtn){  
        case ('s3XmdNPPmSKupPjBj5IQ'): 
        case ('HYLEqOtNeTj3sEzBtabZ'):
          if (div.childElementCount === 3) {
            return;
          }
          const divElements = document.createElement('div')
          div.appendChild(divElements)
          divElements.id = 'elementos';
          divElements.className = 'col-12';
          (createButton.div).forEach(ele => {
            //res pollo y vegano
            const divBtnEle = document.createElement('div')
            const createBtnEle = document.createElement("button")
           divBtnEle.className = "col-4";
           createBtnEle.setAttribute('class', 'btn-elementos')
           // createBtnEle.setAttribute('data-target', `#${ele}`)
           // console.log(createBtnEle)
            divBtnEle.id = createBtn+ele;
            createBtnEle.innerHTML = ele;
            //createBtnEle.setAttribute("class", "btn btn-outline-primary")
            divElements.appendChild(divBtnEle)
            divBtnEle.appendChild(createBtnEle)
            createBtnEle.addEventListener('click', () => {
              if (divBtnEle.childElementCount === 2) {
                return;
              }
              const arrayAdic = objproducto.datos.Adicional;
              const divInputAdic = document.createElement('div')
              divInputAdic.id = ele;
              divInputAdic.className = 'mascara';
              arrayAdic.forEach(adic => {
              // huevo o queso
              const inputAdic = document.createElement('input')
              const labelInput = document.createElement('label')
              inputAdic.className = 'inputAdic';
              inputAdic.type = 'checkbox';
                labelInput.innerHTML = adic.nombre;
                divBtnEle.appendChild(divInputAdic)
                divInputAdic.appendChild(inputAdic)
                divInputAdic.appendChild(labelInput)
                inputAdic.addEventListener('click', () => {
                products.innerHTML += `<li>${objproducto.datos.Nombre} de ${ele} con ${adic.nombre} </li>`;
                array1Order(objproducto, ele, adic)
                const sumaPrecio = objproducto.datos.Precio + adic.precio;
                array2.push(sumaPrecio)
               const total = document.querySelector('#total');
                total.innerHTML = suma(array2) 
                   })
                 })
                 const inputSinAdic = document.createElement('input')
                 const labelSinAdic = document.createElement('label')
                 inputSinAdic.type = 'checkbox';
                 inputSinAdic.id = "sinAdicional";
                 labelSinAdic.innerHTML = "sin adicional";
                 divBtnEle.appendChild(divInputAdic)
                 divInputAdic.appendChild(inputSinAdic)
                 divInputAdic.appendChild(labelSinAdic)
                 inputSinAdic.addEventListener('click', () => {
                   products.innerHTML += `<li> ${objproducto.datos.Nombre} de ${ele}</li>`;
                   array1Order(objproducto, ele)
                   array2.push(objproducto.datos.Precio)
                   const total = document.querySelector('#total');
                   total.innerHTML = suma(array2) 
                  })
                  if(ele == "res") {
                    document.getElementById("res").style.display = 'block';
                    document.getElementById("pollo").style.display = 'none';
                    document.getElementById("vegetariano").style.display = 'none';           
                  } else if (ele == "pollo"){
                    document.getElementById('pollo').style.display = 'block';
                    document.getElementById('res').style.display = 'none';
                    document.getElementById('vegetariano').style.display = 'none';
                  } else {
                    document.getElementById('vegetariano').style.display = 'block';
                    document.getElementById('res').style.display = 'none';
                    document.getElementById('pollo').style.display = 'none';
                  }
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
     <div class="cont-btn-menu">
        <button id="btn-desayuno" class="desayuno col-md-5 col-lg-5 col-xs-12"> Desayuno </button>
        <button id="btn-ac" class="desayuno col-md-5 col-lg-5 col-xs-12"> Almuerzo y cena </button>
      </div>  
        <div id="contenido" class="content col-12"> </div>
    </section>
    <section class="col-6">
        <p class=""> Nombre del cliente: <input id="nombre" type="text" name="nombre" class="mesa" required> </p>
        <p class=""> N° de mesa: <input id="mesa" type="number" name="nombre" class="mesa" required> </p>  
        <section class="section-lista col-12"> 
           <button class="list-product col-12"> Lista de productos </button>
           <div id="list-order" class="col-12">
           <ul id=products class="lista"> </ul>
           </div>
           </div>
           <div class="enviar"> 
           <h1 class="total"> Total S/ <span id="total"></span>.00 </h1>
             <button id="enviar" class="btn-enviar"> ENVIAR </button> 
          </div>
           </section>
           </section>
           </section>
           `;
           createDiv.innerHTML = order;
           
          // <button class="list-product col-4"> Productos </button>
           //<button class="list-product col-4"> Precio </button>
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
    sendToOrder(nombre, array1,"pendiente", mesa)
    const listOrder = document.querySelector("#list-order");
    listOrder.innerHTML = "";
    const total = document.querySelector("#total");
    total.innerHTML = ""
    
   })

  return createDiv;
  }
  