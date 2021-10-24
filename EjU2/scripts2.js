let cuerpo = document.body;
let pre = document.createElement("pre");
let lista = document.createElement("ol");
let lista2 = document.createElement("ol");


let encabezado1 = document.getElementsByTagName("h1");
let encabezado2 = document.getElementsByTagName("h2");
let n = (encabezado1.length + encabezado2.length);
cuerpo.appendChild(pre);
pre.appendChild(lista);

let all = document.getElementsByTagName("*");
for (var i = 0, max = all.length; i < max; i++) {


  for (elementos of encabezado1) {
    if (all[i] == elementos) {
      let a = lista.appendChild(document.createElement("li"));
      let b = document.createElement("ol");


      let text = elementos.innerHTML;

      a.appendChild(document.createTextNode(text));
      a.appendChild(b);

      
    }


 
  }

  for (elementos of encabezado2) {
    if (all[i] == elementos) {
      let a = lista.appendChild(document.createElement("li"));
      let b = document.createElement("ol");


      let text = elementos.innerHTML;

      a.appendChild(document.createTextNode(text));
      a.appendChild(b);
    }
  }

  









}

































