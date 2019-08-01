export default () => {
 const createDiv = document.createElement('div');
 const home = `
 <section>
    <h1 class="burger col-12"> "Bienvenidos a" </h1>
    <img src="./image/burgerqueen.png" class="imgburger">
   <div class="divmesero">
     <a href='#/mesero' class="mesero col-4"> Mesero <a>
     <a href='#/cocinero' class="mesero col-4"> Cocinero </a>
   </div> 
 </section>
 `;
 
 createDiv.innerHTML = home;

 return createDiv
}