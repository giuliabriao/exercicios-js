let umBeloArray =
[
    {
        nome: "Gabriel",
        idade: 0, // deveria ser 10
    },
    {
        nome: "Lais",
        idade: 0, // deveria ser 20
    },
    {
        nome: "Vitrola",
        idade: 0, // deveria ser 30
    },
    {
        nome: "qual_das_anas",
        idade: 0, // deveria ser 40
    },
];
let idadeSoma = 10;
umBeloArray.forEach( function(objeto){
        objeto.idade = idadeSoma;
        idadeSoma += 10;
} );

console.log( umBeloArray );
