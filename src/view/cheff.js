export default () => {
    const createDiv = document.createElement('div');
    const cheff =`
    <section>
    <div id="orderCheff"> hola crayola </div>
    </section>
    `;
    createDiv.innerHTML = cheff;
    return createDiv;
}