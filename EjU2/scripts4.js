let central = document.getElementsByClassName("central");
let prueba = document.getElementsByTagName("div");

function cambiaColor() {
  for (elemento of central) {
    let estilo = window.getComputedStyle(this);

    elemento.style.backgroundColor =  estilo.getPropertyValue("background-color");
     
  }
}

for (elemento of prueba) {
    elemento.onclick = cambiaColor;
  }