
export default () => {
    const createDiv = document.createElement('div');
    const entregar = `
    <section>
    <header id="orderCheff"> 
    <div class="divPreparar">
    <h3 class="pedidos"> Lista de entrega <a href="#/home" class="inicio"> Inicio </a></h3>
    </div> 
    </header>
    <div id="pedido" class="col-12">  </div>
    </section>
    `;
    createDiv.innerHTML = entregar;
    return createDiv;
}