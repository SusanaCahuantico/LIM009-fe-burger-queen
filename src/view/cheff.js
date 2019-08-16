import {getOrder, editStateOrder } from '../controller/firebase.js'

export default () => {
    const createDiv = document.createElement('div');
    const cheff = `
    <section>
    <header id="orderCheff"> 
    <div class="divPreparar">
    <h3 class="pedidos">Listado de Pedidos  <a href="#/preparado" class="preparado"> Preparado </a>  </h3>
    </div>
    </header>
    <div id="pedido" class="col-12">  </div>
    </section>
    `;
    createDiv.innerHTML = cheff;
    
    const pedido = createDiv.querySelector('#pedido')
    getOrder(data =>{
        //let mostrar = "";
        data.forEach(element => {
            //console.log(element.estado)
            const createOrder = document.createElement('div')
            createOrder.className = 'box-order col-5';
          createOrder.innerHTML += `
          <div class="cliente"> ${element.cliente} : ${element.estado} </div>
          `;
          (element.productos).forEach(products => {
            createOrder.innerHTML += `
              <li class="lista"> ${products.name}</li>
            `;
        })
        createOrder.innerHTML += `<button id="btn-${element.id}" class="btn-listo"> Listo </button>`;
        pedido.appendChild(createOrder);
        const btnListo = document.querySelector(`#btn-${element.id}`)
        btnListo.addEventListener('click', ()=>{
             editStateOrder(element.id, "entregado")
             pedido.removeChild(createOrder)
        }) 
        });
    })   
    return createDiv;
}