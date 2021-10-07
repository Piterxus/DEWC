const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: [
            'Don Pepito', 'Perico', 'Don José', 'Ximo' , 'a' ,'b' ,'c', 'h'
        ]
    },

    {
        nombre: 'Desarrollo Web en entorno cliente',
        
        curso: 2,
        asignatura: '',
        alumnos: [
            'Juan', 'Perico', 'Andrés', 'Don Pepito', 'Ximo' ,'a', 'b' ,'c'
        ]
    },

]


console.log(" ");
({alumnos:s}=modulos[0]);
({alumnos:d}=modulos[1]);
let primero = [];
let segundo = [];
let mySet=new Set();
 for (i=0;i<modulos.length;i++){
     if (modulos[i].curso===1){
            for (j=0;j<modulos[i].alumnos.length;j++){
                primero[j]=modulos[i].alumnos[j];
            }
     }

     if (modulos[i].curso===2){
        for (j=0;j<modulos[i].alumnos.length;j++){
            segundo[j]=modulos[i].alumnos[j];
        }
     }
 }
console.log("P"+primero.length);
console.log("S"+segundo);
let uno=primero.length;
let dos=segundo.length;

if (uno>=dos){
    for (i=0;i<uno;i++){
        mySet.add(primero[i]);
    }
    for (i=0;i<segundo.length;i++){

        if (mySet.has(segundo[i])){
            console.log("R"+segundo[i]);
        }
    
    }

}else{
    for (i=0;i<dos;i++){
        mySet.add(segundo[i]);
    }
    for (i=0;i<primero.length;i++){

        if (mySet.has(primero[i])){
            console.log("R"+primero[i]);
        }
    
    }
}

/*
var mySet = new Set();
mySet.add(modulos[0].alumnos);
mySet.add('p')
console.log(mySet);
console.log(mySet.has('p'));

for (i=0;i<modulos.length;i++){
   for (j=0;j<modulos[i].alumnos.length;j++){
    console.log(modulos[i].alumnos[j]);
   }
}

*/