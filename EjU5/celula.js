let celula = {
  tipo: "Procariota",
  horasCicloVital: 8,
  divisible:true,

  mitosis: function mitosis() {
    celulaCopy = celula;
  }
};
celula.prueba = function prueba() {
  console.log("Prueba");
};
celula.prueba2 = function prueba2() {
  console.log("Prueba2");
};
celula.mitosis();
console.log(celula.tipo);

let celula2 = celula;

celula2.mitosis();
console.log(celulaCopy.tipo);

let celula3 = celula;

celula3.mitosis();
celulaCopy.mitosis();
console.log(celulaCopy.tipo);
celula3.prueba();

celulaCopy.prueba3 = function prueba3() {
  console.log("Prueba3");
};
celulaCopy.prueba3();
celula3.prueba3();
console.log(celula3.divisible);