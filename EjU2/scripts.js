let myDiv = document.getElementById("objetos");
let losP = document.getElementById("objeto");

function mostrar(evento) {
  losP.innerHTML = evento.clientY + " " + evento.clientX;
}

this.onmousemove = mostrar;
