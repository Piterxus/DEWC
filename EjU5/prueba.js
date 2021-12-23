

function temporizadorDeRetraso() {
    let identificadorTiempoDeEspera;
  identificadorTiempoDeEspera = setInterval(funcionConRetraso, 3000);
  function funcionConRetraso() {
    console.log("Han pasado 3 segundos.");
  }
}



temporizadorDeRetraso();
