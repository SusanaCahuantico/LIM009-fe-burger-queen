
export default () => {
    const createDiv = document.createElement('div');
    const order = `
    <header>
    <h1> BURGER QUEEN </h1>
    </header>
    <section>
    <button> Desayuno </button>
    <button> Almuerzo y cena </button>
    </section>
    <section>
    <p> Nombre del cliente </p>
    <input type="text" placeholder="Nombre del cliente"/>
    <p> N° de mesa </p> 
    <input type="text" placeholder="N° de mesa"/>
    <p> Total S/0.00 <p>
    </section>
    `;
    createDiv.innerHTML = order;

    return createDiv
}