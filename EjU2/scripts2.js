let cuerpo = document.body;
let pre = document.createElement("pre");
let lista = document.createElement("ol");
cuerpo.appendChild(pre);
pre.appendChild(lista);

let encabezado1 = document.getElementsByTagName("h1");
let encabezado2 = document.getElementsByTagName("h2");

let all = document.getElementsByTagName("*");
for (let i = 0, max = all.length; i < max; i++) {
  for (elementos of encabezado1) {
    if (all[i] == elementos) {
      let listah1 = lista.appendChild(document.createElement("li"));
      var listah2 = document.createElement("ol"); //Si declaro esta variable con let luego no puedo acceder a ella para añadir elementos.

      let text = elementos.innerHTML;

      listah1.appendChild(document.createTextNode(text));
      listah1.appendChild(listah2);
    }
  }
  for (elementos of encabezado2) {
    if (all[i] == elementos) {
      listah2.appendChild(document.createElement("li"));

      let text = elementos.innerHTML;

      listah2.appendChild(document.createTextNode(text));
    }
  }
}
