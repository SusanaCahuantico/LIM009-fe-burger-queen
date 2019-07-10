export default () => {
    const createDiv = document.createElement('div');
    const order = `
    <header>
    <h1> BURGER QUEEN </h1>
    </header>
    <section>
    <button id="btn-desayuno"> Desayuno </button>
    <button id="btn-ac"> Almuerzo y cena </button>
    </section>
    <div id="contenido">  </div>
    <section>
    <p> Nombre del cliente </p>
    <input type="text" placeholder="Nombre del cliente"/>
    <p> N° de mesa </p> 
    <input type="text" placeholder="N° de mesa"/>
    <p> Total S/0.00 <p>
    </section>
    `;
    createDiv.innerHTML = order;

    const btnDesayuno = createDiv.querySelector('#btn-desayuno')
    btnDesayuno.addEventListener('click', () => {
        const contenido = document.querySelector('#contenido')
        contenido.innerHTML = `
        <button> Café Americano </button>
        <button> Café con leche </button>
        <button> Sandwich de jamón y queso </button>
        <button> Jugo de frutas natural </button>

        `;
    })

    const btnAc = createDiv.querySelector('#btn-ac')
    btnAc.addEventListener('click', () => {
        const contenido = document.querySelector('#contenido')
        contenido.innerHTML=`
        <button> Hamburguesa simple </button>
        <button> Hamburguesa doble </button>
        <button> Papas fritas </button>
        <button> Aros de cebolla </button>
        <button> Agua 500ml </button>
        <button> Agua 750ml  </button>
        <button> bebida/gaseosa 500ml </button>
        <button> bebida/gaseosa 750ml </button>
        
        `
    })

    return createDiv;
}