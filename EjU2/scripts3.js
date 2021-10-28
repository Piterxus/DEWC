let elementos = document.getElementsByTagName('p');
let boton = document.getElementsByTagName('button');




function oculta(event) {
    //this.style.display = 'none';

    setTimeout(
        () => event.target.style.visibility='hidden',500



    )

}

function elimina() {
 this.parentNode.removeChild(this);
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