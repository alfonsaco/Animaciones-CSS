const contenedor=document.querySelector(".container");

let cadenaHTML='';
let rotate=0;
let delay=-1000;

for (let i=0; i<10; i++) {
    cadenaHTML+=`<div style="rotate: ${rotate}deg; animation-delay: ${delay}ms;"></div>`
    rotate+=36;
    delay+=100;
}

contenedor.innerHTML+=cadenaHTML;