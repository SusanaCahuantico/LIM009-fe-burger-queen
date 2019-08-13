import {sendToOrder} from '../controller/functions.js'; 

export default () => {
    const createDiv = document.createElement('div');
    const cheff = `
    <section>
    <div id="orderCheff"> </div>
    </section>
    `;
    createDiv.innerHTML = cheff;

    return createDiv;
}