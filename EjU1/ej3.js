let meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let dias = ["Jueves", "Viernes", "Sábado", "Domingo", "Lunes", "Martes", "Miércoles"];
let voidDay = [" "];
let mes = 10;
let dia = 7;
let start = mes - 1;
let cont = 0;
let cont2 = 0;

if (dia > 31 || mes > 12) {
    console.log("Datos erroneos");
} else if (mes === 2 && dia > 28) {
    console.log("Febrero no puede tener más de 28 días. A no ser que sea bisiesto y para eso este programa debería incluir tambien el año.");
} else {
    for (i = 0; i < start; i++) {
        if (meses[i] == 1 || meses[i] == 3 || meses[i] == 5 || meses[i] == 7 || meses[i] == 8 || meses[i] == 10 || meses[i] == 12) {
            cont = cont + 31;
        } else if (meses[i] == 4 || meses[i] == 6 || meses[i] == 9 || meses[i] == 11) {
            cont = cont + 30;
        } else if (meses[i] == 2) {
            cont = cont + 28;
        }


    }


    for (i = 0; i < cont + dia; i++) {

        voidDay[0] = dias[cont2];

        cont2++;


        voidDay[0] = dias[cont2];
        //console.log(voidDay[0]);


        while (cont2 > 6) {

            cont2 = 0;
        }


    }



    if (voidDay[0] == undefined) {
        console.log("Jueves");
    } else {
        console.log(voidDay[0]);
    }
}