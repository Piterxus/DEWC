let gato = {
  hambre: Math.floor(Math.random() * 15),
  cansancio: Math.floor(Math.random() * 15),
  felicidad: Math.floor(Math.random() * 35),

  temporizador(segundos) {
    let id;
    id = setInterval(funcionConRetraso, segundos);
    function funcionConRetraso() {
      console.log("Han pasado" + segundos + "segundos.");
      gato.estado();
    }
  },
  comer(comida) {
    this.hambre = this.hambre - comida;
    return this.hambre;
  },

  dormir(descanso) {
    this.cansancio = this.cansancio - descanso;
    return this.cansancio;
  },

  jugar(entretiene) {
    this.felicidad = this.felicidad + entretiene;
    return this.felicidad;
  },
  estado() {
    if (this.hambre > 10) {
      console.log("Tengo hambre, dame de comer");
    }
    if (this.cansancio > 10) {
      console.log("Tengo sueño.");
    }
    if (this.felicidad < 15) {
      console.log("Me aburro.");
    }
  },
};

gato.temporizador(1000);