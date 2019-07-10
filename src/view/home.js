
export default () => {
 const createDiv = document.createElement('div');
 const home = `
 <section>
    <p> "Bienvenidos a Burger Queen" </p>
   <div>
     <a href='#/mesero'> Mesero <a>
     <a href='#/cocinero'> Cocinero </a>
   </div> 
 </section>
 `;
 
 createDiv.innerHTML = home;

 return createDiv
}