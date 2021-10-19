function mostrarMensaje(evento){
   if(evento.type==="keyup"){
       alert(evento.keyCode);
   }else if(evento.type==="click"){
       alert(evento.clientX+" "+evento.clientY);
   }
}
//document.getElementById("cont").addEventListener("click",mostrarMensaje);
document.addEventListener("keyup",mostrarMensaje);
document.getElementById("cont").addEventListener("dblclick",function(){alert("Código")})

