// Modelo de dados
class Pessoa
{
    // Chamado toda vez que fazemos um `new Pessoa( ...`
    constructor( nome, idade )
    {
        // Construímos a pessoa
        this._nome = nome;
        this._idade = idade;
        this._elemento = document.createElement("p");

        this.atualizaNome();
    }

    // Atualizamos o elemento mostrado na tela
    atualizaNome()
    {
        this._elemento.textContent = `[${this._idade}] ${this._nome}`;
    }

    // Colocamos o elemento dentro de um elemento específico
    desenha( conteiner )
    {
        conteiner.appendChild( this._elemento );
    }
}

// Função para nos ajudar a criar uma `query string`
function criaQueryString()
{
    // Pega o número escrito no input
    let quantidade = parseInt( document.getElementById( "resultados" ).value );

    return `?results=${ quantidade }`;
}

// Botão que vai adicionar pessoas na nossa tela
let adicionaPessoa = document.getElementById( "adicionaPessoa" );

// Evento de CLIQUE do BOTÃO
//
// ( Atualmente disparado toda vez que clicamos. E se quiséssemos evitar que
//   o usuário enviasse várias requests ao mesmo tempo, desativando o botão
//   enquanto uma request está sendo feita e reativando-o quando ela for
//   finalizada? )
adicionaPessoa.addEventListener( "click", function()
{
    // 1. Cria uma nova request
    let request = new XMLHttpRequest();

    // 2.1 Configura o método ("verbo") do pedido e a URL do recurso
    request.open( "GET", `https://randomuser.me/api/${ criaQueryString() }` );

    // 2.2 Configura o evento de !!CARREGAMENTO COM SUCESSO!! da REQUEST!
    //
    //     Ou seja, o callback passado como parâmetro só será executado
    //     caso não dê nenhum ERRO NA REQUEST. Caso queira disparar outros
    //     callbacks em casos diferentes, dê uma olhada nos eventos suportados:
    //
    //     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#events
    //
    request.addEventListener( "load", function ()
    {
        // Mostramos no console o status e o seu texto equivalente
        console.log( `${request.status} (${request.statusText}): Dados recebidos` );

        // `200 (OK)` é o código de status que esta API retorna quando
        // conseguimos buscar um DADO com sucesso. Referência da especificação
        // da convenção utilizada nos códigos HTTP:
        //
        // * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
        //
        if ( request.status == 200 /*OK*/ )
        {
            // Transforma a string retornada pela API em um objeto
            let response = JSON.parse( request.responseText );
            
            // Pega os resultados da pesquisa. Como sabemos a estrutura da resposta?
            // Documentação! Cada API tem uma forma diferente de disponibilizar os seus
            // dados, então procure-a para saber o formato dos dados e sua estrutura!
            //
            // * https://randomuser.me/documentation#results
            //
            let pessoas = response.results;
            
            for ( let pessoa of pessoas )
            {
                // Cria uma nova pessoa
                let novaPessoa = new Pessoa( `${pessoa.name.first} ${pessoa.name.last}`, pessoa.dob.age );
                // Desenha essa pessoa dentro do corpo do documento
                novaPessoa.desenha( document.body );
            }
        }
        // Outro código de status. Talvez um `404 (Not Found)`,
        // `503 (Service Unavailable)` ou algum outro código de status
        // diferente pode ser retornado para nós. Lembrem-se: CÓDIGO DE ERRO
        // é diferente de um ERRO NA REQUEST! ERROS NA REQUEST podem ocorrer
        // quando você não possui conexão de rede, o servidor recusou seu pedido,
        // algum erro no seu driver de rede etc. Já os CÓDIGOS DE ERRO são os
        // os status entre 400-599 de uma request processada e respondida com
        // sucesso!
        else
        {
            console.log( "Um código inesperado foi retornado!" );
        }
    });

    // 3. Envia a request
    request.send();

    console.log( "Pedido foi enviado!" );
});
