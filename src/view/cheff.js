import {getOrder} from '../controller/firebase.js'

export default () => {
    getOrder(data =>{
        console.log(data)
    })
    const createDiv = document.createElement('div');
    const cheff = `
    <section>
    <header id="orderCheff"> Listado de Pedidos </header>
    <div id="pedido"
    
    <div
    </section>
    `;
    createDiv.innerHTML = cheff;

    return createDiv;
}
