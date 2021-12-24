let jugador1 = {
  ficha: "X",
};

let jugador2 = {
  ficha: "O",
};

var tab = new Array(10);

function comprobar(array) {
  let seguir = true;

  if (
    (array[0] === "X" && array[1] === "X" && array[2] === "X") ||
    (array[0] === "X" && array[4] === "X" && array[8] === "X")
  ) {
    seguir = false;
  }

  return seguir;
}

for (let i = 0; i < 10; i++) {
  tab[i] = i + 1;
}

function tablero() {
  console.log("Tablero: ");
  console.log(tab[0], tab[1], tab[2]);
  console.log(tab[3], tab[4], tab[5]);
  console.log(tab[6], tab[7], tab[8]);
}

tablero();

function pregunta() {
  process.stdout.write("Casilla: ");
}

process.stdin.on("data", function (data) {
  let dataFormat = data.toString().trim();

  tab[dataFormat - 1] = jugador1.ficha;

  tablero();

  if (comprobar(tab)) {
    pregunta();
  } else {
    process.exit();
  }
});
pregunta();
