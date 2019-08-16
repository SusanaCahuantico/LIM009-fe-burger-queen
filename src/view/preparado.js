import { getOrder, editStateOrder } from "../controller/firebase.js";

export default () => {
    const createDiv = document.createElement('div');
    const entregar = `
    <section>
    <header id="orderCheff"> 
    <div class="divPreparar">
    <h3 class="pedidos"> Lista de entrega <a href="#/home" class="inicio"> Inicio </a></h3>
    </div> 
    </header>
    <div id="pedidoListo" class="col-12">  </div>
    </section>
    `;
    createDiv.innerHTML = entregar;

    const pedidoListo = createDiv.querySelector('#pedidoListo');
    getOrder("preparado", data => {
        data.forEach(element =>{
            const createListo = document.createElement('div');
            createListo.className = 'box-order col-5';
            createListo.innerHTML += `
            <div class="cliente"> ${element.cliente} : ${element.estado}</div>
            `;
            (element.productos).forEach(products => {
                createListo.innerHTML += `
                <li class="lista"> ${products.name}</li>
                `;
            })
            createListo.innerHTML += `<button id="btn-${element.id}" class="btn-listo"> Entregado </button>`; 
            pedidoListo.appendChild(createListo)
            const btnListo = document.querySelector(`#btn-${element.id}`)
             btnListo.addEventListener('click', ()=>{
             editStateOrder(element.id, "entregado")
             pedidoListo.removeChild(createListo)
        }) 
        });
    })   
    


    return createDiv;
}