let listaServidores=[ "terra.es" , "myspace.com", "arrakis.es", "tuenti.es"];

const boton = document.getElementById("boton");
const email = document.getElementById("email");
let valido=false;
//let compruebaServidor= email.value;
//let x=compruebaServidor.split("@");
let emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/




// // for (elemento of listaServidores){

// //     if (x[1]==elemento)
    
// //     console.log("ok");
// //     else
// //     console.log("no")

// // }


boton.onclick = validar;

function validar(){
  let direccion=email.value;
//   let direccion="piterxus@terra.es";
  let partes_correo=direccion.split("@");
  valido=listaServidores.indexOf(partes_correo[1]) !== -1
  valido= valido && direccion.match(emailRegex);
  if(valido){
    document.getElementById("muestra").innerHTML="valido;"
   
}else{
    document.getElementById("muestra").innerHTML="NO valido;"
     email.value=" ";
}




 }
