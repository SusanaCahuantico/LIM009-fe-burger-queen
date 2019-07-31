
export default () => {
 const createDiv = document.createElement('div');
 const home = `
 <section>
    <p class="burger col-12"> "Bienvenidos a Burger Queen" </p>
   <div>
     <a href='#/mesero' class="mesero col-6"> Mesero <a>
     <a href='#/cocinero' class="cocinero col-6"> Cocinero </a>
   </div> 
 </section>
 `;
 
 createDiv.innerHTML = home;

 return createDiv
}