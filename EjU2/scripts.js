
let myDiv=document.getElementById("objetos");
let losP=document.getElementById("objeto");
//let obj=document.body;



function mostrar(evento){
   
losP.innerHTML=evento.clientY+ " "+evento.clientX;
}
//this.onmouseover=mostrar;
this.onmousemove=mostrar;