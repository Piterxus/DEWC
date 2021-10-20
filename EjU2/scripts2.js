let cuerpo = document.body;
let pre = document.createElement("pre");
let encabezado1 = document.getElementsByTagName("h1");
let encabezado2 = document.getElementsByTagName("h2");
cuerpo.appendChild(pre);


for (i=0;i<encabezado1.length;i++){
    // pre.appendChild(document.createTextNode(encabezado1[i].innerHTML));

    pre.innerHTML+=(i+1)+ ".-"+encabezado1[i].innerHTML + "<br>";


    

}

// pre.appendChild(encabezado1[0]);


