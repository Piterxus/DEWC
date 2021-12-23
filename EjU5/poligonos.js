class Poligono {
  constructor(...puntos) {
    this.puntos = puntos;
  }
}

class Triangulo extends Poligono {
  constructor(...puntos) {
    super(...puntos);
  }

  perimetro() {
    let x = new Array();
    let y = new Array();
    let contX = 0;
    let contY = 0;
    if (this.puntos.length == 6) {
      for (let i = 0; i < this.puntos.length; i++) {
        if (i % 2 == 0) {
          x[contX] = this.puntos[i];
          contX++;
        } else {
          y[contY] = this.puntos[i];
          contY++;
        }
      }
    } else {
      console.log("No es un triangulo");
    }
 

    let perimetro =
      Math.sqrt(Math.pow(x[1] - x[0], 2) + Math.pow(y[1] - y[0], 2)) +
      Math.sqrt(Math.pow(x[2] - x[1], 2) + Math.pow(y[2] - y[1], 2)) +
      Math.sqrt(Math.pow(x[2] - x[0], 2) + Math.pow(y[2] - y[0], 2));
    console.log(perimetro);
  }
}



class Cuadrado extends Poligono {
  constructor(...puntos) {
    super(...puntos);
  }

  perimetro() {
    let x = new Array();
    let y = new Array();
    let contX = 0;
    let contY = 0;

    if (this.puntos.length == 8) {
      for (let i = 0; i < this.puntos.length; i++) {
        if (i % 2 == 0) {
          x[contX] = this.puntos[i];
          contX++;
        } else {
          y[contY] = this.puntos[i];
          contY++;
        }
      }
      let perimetro = 4 * (x[1] - x[0]);

      console.log(perimetro);
    } else if (this.puntos.length != 8) {
      console.log("No es un cuadrado.");
    }
  }
}



class Rectangulo extends Poligono {
  constructor(...puntos) {
    super(...puntos);
  }
  perimetro() {
    let x = new Array();
    let y = new Array();
    let contX = 0;
    let contY = 0;

    if (this.puntos.length == 8) {
      for (let i = 0; i < this.puntos.length; i++) {
        if (i % 2 == 0) {
          x[contX] = this.puntos[i];
          contX++;
        } else {
          y[contY] = this.puntos[i];
          contY++;
        }
      }
      let perimetro = 2 * (x[1] - x[0]) + 2 * (y[2] - y[0]);
      console.log(perimetro);
    } else {
      console.log("No es un rectángulo.");
    }
  }
}

let triangulo1 = new Triangulo(3, -8, -2, 2, 7, -1);
triangulo1.perimetro();

let cuadrado1 = new Cuadrado(1, 0, 2, 0, 2, 1, 1, 2);
cuadrado1.perimetro();

let rectangulo1 = new Rectangulo(1, 0, 4, 0, 4, 2, 1, 2);
rectangulo1.perimetro();
