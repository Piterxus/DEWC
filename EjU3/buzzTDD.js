//He preferido hacer el ejercicio en un principio sin usar jest.
//Esto me ha servido para comprender mejor TDD.
//Segurarmente se podría afinar más con las pruebas (por ejemplo haciendo el ciclo Red-Green-Refactor antes de cada uno de los test que propongo).
//Tengo que decir que aplicar esta práctica me ha servido para enfocar mejor el concepto de programación. Me ha ayudado a estructurar y planificar el problema,
//cosa que me costaba.

//Dado que el ejercicio lo primero que propone es mostrar por pantalla los números del 1 al 300, para cumplir los principios TDD iniciar el ciclo Red-Green-Refactor
//con un primer test fallido. Un bucle mal instanciado, por ejemplo:

function bucleMal() {
  let cont;
  for (i = 0; i < 300; i++) {
    cont = i;
  }

  return cont;
}

if (bucleMal() == 300) {
  console.log("Bucle ok");
} else {
  console.log("Error en el bucle");
}

//Corregiríamos el error para que pase.

function bucleIncrementa300() {
  let cont;
  for (i = 0; i <= 300; i++) {
    cont = i;
  }

  return cont;
}
if (bucleIncrementa300() == 300) {
  console.log("Bucle ok");
} else {
  console.log("Error en el bucle");
}

// Ahora podríamos añadir alguna funcionalidad al código original ya que el resultado es óptimo. Para poder realizar el ejercicio tendremos que manejar cadenas.
// Será necesario convertir a string los valores numéricos que necesitaremos transformar.

function convierteaString(i) {
  return i.toString();
}
if (typeof convierteaString(bucleIncrementa300()) == "string") {
  console.log("Test String ok");
} else {
  console.log("Test String fail");
}

//Además, podríamos comprobar que el string sea igual a '300';

if (
  typeof convierteaString(bucleIncrementa300()) == "string" &&
  convierteaString(bucleIncrementa300()) == "300"
) {
  console.log("Test String ok");
} else {
  console.log("Test String fail");
}

// Lo siguiente que pide el ejercicio es sustituir los números que acaban en 3 por la cadena "fizz".

function testTresToFizz() {
  for (let i = 0; i <= 300; i++) {
    numToString = convierteaString(i); // Podríamos simplemente usar i.toString();
    tres = numToString.slice(-1);

    if (tres == "3") {
      numToString = "fizz";
    }
    console.log(numToString);
  }
}

//testTresToFizz();

//Lo mismo con los números acabados en 5 y que sustituimos por "buzz"

function testCincoToBuzz() {
  for (let i = 0; i <= 300; i++) {
    numToString = convierteaString(i); // Podríamos simplemente usar i.toString();
    cinco = numToString.slice(-1);

    if (cinco == "5") {
      numToString = "buzz";
    }
    console.log(numToString);
  }
}

//testCincoToBuzz();

//Lo mismo para los números acabados en 15.

function testQuinceToFizzBuzz() {
  for (let i = 0; i <= 300; i++) {
    numToString = convierteaString(i); // Podriamos simplemente usar i.toString();

    quince = numToString.slice(-2);

    if (quince == "15") {
      numToString = "fizzbuzz";
    }

    console.log(numToString);
  }
}

//testQuinceToFizzBuzz();

//Habiendo comprobado que pasa todos los test de los ítems que pide el ejercicio podríamos integrar todas las partes de código.
//Por qué no hacerlo en una función.

function change(i) {
  numToString = i.toString();
  last = numToString.slice(-1);
  quince = numToString.slice(-2);

  if (last == "3") {
    numToString = "fizz";
  } else if (last == "5") {
    numToString = "buzz";
  }

  if (quince == "15") {
    numToString = "fizzbuz";
  }

  return numToString;
}

//Ahora podríamos ejecutar el ejercicio con cualquier incremento. Por ejemplo:

for (let i = 0; i <= 5; i++) {
  console.log(change(i));
}

//O también:

for (let i = 0; i <= 500; i++) {
  console.log(change(i));
}
