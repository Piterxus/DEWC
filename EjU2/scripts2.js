let cuerpo = document.body;
let pre = document.createElement("pre");
let lista = document.createElement("ol");


let encabezado1 = document.getElementsByTagName("h1");
let encabezado2 = document.getElementsByTagName("h2");

cuerpo.appendChild(pre);
pre.appendChild(lista);


//lista.appendChild(encLista);
//lista.appendChild(encLista2);

for (i = 0; i < encabezado1.length; i++) {

    let a = lista.appendChild(document.createElement("li"));


    let text = encabezado1[i].innerHTML;
    a.appendChild(document.createTextNode(text));



}









let contH1 = 0;
















// for (elemento of encabezado2){

// }










// for (i=0;i<encabezado1.length;i++){
//     // pre.appendChild(document.createTextNode(encabezado1[i].innerHTML));


//     let tema=encabezado1[i].innerHTML.split(" ");
//     let subtema = tema[1];
//     console.log(encabezado1[i].innerHTML);
//     console.log(encabezado2[i].innerHTML)
//     //console.log(subtema);
//     //console.log(encabezado2[i].innerHTML)
//     pre.innerHTML+=(i+1)+ ".-"+encabezado1[i].innerHTML + "<br>";



// }

// pre.appendChild(encabezado1[0]);


