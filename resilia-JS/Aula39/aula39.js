// Model de Pokemon
class Pokemon
{
    // Função estática para buscar um Pokemon (não precisa que uma model exista para ser executada)
    static busca( id, callback )
    {
        // Cria e configura a request
        let xhr = new XMLHttpRequest();
        xhr.open( "GET", "https://pokeapi.co/api/v2/pokemon/" + id );

        // Configura o que fazer quando a resposta chegar:
        xhr.addEventListener( "load", () =>
        {
            // Transforma o texto da resposta em um objeto
            let resultado = JSON.parse( xhr.responseText );
            
            // Mapeia os tipos do pokemon para strings (grama, fogo, água etc)
            let tipos = resultado.types.map( tipo => tipo.type.name );
            
            // Cria uma nova model de Pokemon
            let model = new Pokemon( resultado.id, resultado.name, tipos, resultado.sprites.front_default );
            
            // Passa essa model para o callback! Assim, conseguimos ter acesso
            // ao resultado "capturando" o primeiro parâmetro.
            callback( model );
        });

        // Envia a request
        xhr.send();
    }

    // Construtor
    constructor( id = 0, nome = "", tipos = [], imagem = "" )
    {
        this._id = id;
        this._nome = nome;
        this._tipos = tipos;
        this._imagem = imagem;
    }
}

// O 1° parâmetro é o ID que queremos buscar.
// O 2° parâmetro é o callback que será executado após a busca ser realizada
//
// Ou seja, todo o código que dependa da chegada do resultado para ser executado
// nós colocamos dentro desse callback.
Pokemon.busca( 31,
    // Lá na implementação da função estática, quando escrevemos `callback( model );`,
    // nós passamos a model criada para o primeiro parâmetro do callback.
    // Aqui é onde capturamos esse parâmetro.
    //   ||
    //   \/
    ( pokemon ) =>
    {
        console.log( pokemon )
    }
);

