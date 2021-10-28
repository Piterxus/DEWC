let elementos = document.getElementsByTagName('p');
let boton = document.getElementsByTagName('button');




function oculta(event) {
    

    setTimeout(
        () => event.target.style.visibility='hidden',500



    )

}

function elimina(event) {
 //this.parentNode.removeChild(this); // Sin event

//event.target.parentNode.removeChild(this);
event.target.remove();

}

function reaparece() {
    for (elemento of elementos){
        elemento.style.visibility='visible';
    }
}


for (elemento of elementos) {
    elemento.onclick = oculta;
    elemento.ondblclick = elimina;
}

boton[0].onclick = reaparece;