const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: [
            'Don Pepito', 'Perico', 'Don José'
        ]
    },

    {
        nombre: 'Desarrollo Web en entorno cliente',
        curso: 2,
        asignatura: '',
        alumnos: [
            'Juan', 'Perico', 'Andrés', 'Don Pepito'
        ]
    },

]

//console.log(modulos[0].alumnos[0]);

for (i in modulos){
    console.log(modulos.alumnos);
}


/*
if (modulos[0].alumnos[0] === modulos[1].alumnos[2]) {
    console.log(modulos[0].alumnos[0]);
}*/