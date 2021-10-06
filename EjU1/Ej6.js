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


let x =     {
    nombre: 'Sistemas informáticos',
    curso: 1,
    alumnos: [
        'Don Pepito', 'Perico', 'Don José'
    ]
}
console.log(" ");
({nombre:n}=x);
console.log(n);