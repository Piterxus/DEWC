let matriz = [20];
let matriz2 = [10];
let con = 0;
let con1 = 0;
let con2 = 0;
let con3 = 0;
let con4 = 0;
let con5 = 0;
let con6 = 0;
let con7 = 0;
let con8 = 0;
let con9 = 0;
let cont10 = 0;



for (i = 0; i < 20; i++) {
    matriz[i] = Math.floor(Math.random() * 10);

//console.log(matriz[i]);




}

for (i = 0; i < matriz.length; i++) {
    if (matriz[i] === 0) {
        con++;
        
    } else if (matriz[i] === 1) {
        con1++;

    } else if (matriz[i] === 2) {
        con2++;
    } else if (matriz[i] === 3) {
        con3++;
    } else if (matriz[i] === 4) {
        con4++;
    } else if (matriz[i] === 5) {
        con5++;
    } else if (matriz[i] === 6) {
        con6++;
    } else if (matriz[i] === 7) {
        con7++;
    } else if (matriz[i] === 8) {
        con8++;
    } else if (matriz[i] === 9) {
        con9++;
    } else if (matriz[i] === 10) {
        con10++;
    }



}

if (con>=con1){
    max=con;
}else{
    max=con1;
}

if (con2>=max){
    max=con2;
}