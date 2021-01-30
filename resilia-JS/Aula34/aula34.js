// Modelo!
class Pessoa
{
    // Constrói os objetos. É chamado quando utilizamos o `new`!
    //
    // Exemplo:
    //
    //      let instancia = new NomeClasse( param1, param2, ..., paramX );
    //                            /\
    //                            ||
    //                  Invoca o constructor do NomeClasse
    //
    constructor( nome )
    {
        // Aqui declaramos os atributos que um objeto dessa classe possui!
        // Construímos a instância a partir disso
        this._nome = nome;
        this._vacinas = [];
    }

    // Convenção utilizada em algumas linguagens de programação (por exemplo, Java) para métodos que
    // retornam os valores dos atributos da instância (conhecidos como métodos get):

    getNome()
    {
        // Retorna uma cópia do nome em letras maiúsculas
        return this._nome.toUpperCase();
    }

    getVacinas()
    {
        // Cria uma novo array
        let copia = [];

        // Copia os dados do array de vacinas para o array de cópia
        for ( let vacina of this._vacinas )
            copia.push( vacina );

        // Devolve o array idêntico ao que possuímos
        return copia;
    }

    // Outra forma disponibilizada pelo JavaScript para buscar esses valores: getters
    // A declaração é parecida com um método, mas a forma que executamos esse método
    // é quando acessamos ele como se fosse um atributo! Não precisamos dos parênteses.

    get nome()
    {
        return this.getNome();
    }

    get vacinas()
    {
        return this.getVacinas();
    }

    cumprimentar()
    {
        // Podemos chamar getters dentro de métodos!
        console.log( "Olá, sou " + this.nome + "!" );
    }

    vacinar( vacina )
    {
        // Adiciona uma vacina nova na cartela
        this._vacinas.push( vacina );
    }
}

// Cria uma instância de Pessoa com nome "X"
const cobaia = new Pessoa( "X" );

cobaia.cumprimentar();

// Não temos nada ainda
console.log( cobaia._vacinas );         // []

// Pega a referência do array de vacinas: estamos quebrando o encapsulamento!
// Isto não é recomendado, pois não queremos interferir em dados privados desta pessoa!
// Podemos gerar erros e inconsistências...
let referenciaDadosVacinas = cobaia._vacinas;

referenciaDadosVacinas.push( "Teste" );

// Perceba que alteramos esses dados e ele foi refletido no atributo original da instância!
// Não queremos isso!
console.log( referenciaDadosVacinas );  // [ "Teste" ]
console.log( cobaia._vacinas );         // [ "Teste" ]

// Usando um método get
let copia1DosDadosVacina = cobaia.getVacinas();
// Usando o getter do JavaScript
let copia2DosDadosVacina = cobaia.vacinas;

// Como adicionamos esses valores em dados copiados, eles não vão interferir na cartela de
// vacinas da nossa cobaia.
copia1DosDadosVacina.push( "Tétano" );
copia2DosDadosVacina.push( "HPV" );

console.log( copia1DosDadosVacina );    // [ "Teste", "Tétano" ]
console.log( copia2DosDadosVacina );    // [ "Teste", "HPV" ]

// EXPLICITAMENTE VACINAMOS A COBAIA, PELO MÉTODO FORNECIDO POR ELA MESMA!
cobaia.vacinar( "COVID-19" );

console.log( referenciaDadosVacinas );  // [ "Teste", "COVID-19" ]
console.log( cobaia._vacinas );         // [ "Teste", "COVID-19" ]