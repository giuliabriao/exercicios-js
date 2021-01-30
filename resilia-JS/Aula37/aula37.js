// Cuida das ações da aplicação. Possui os métodos que serão chamados nos pontos
// de entrada do programa (neste caso, inputs do usuário).
class PessoaController
{
    buscaPessoa()
    {
        // Cria uma model e guarda os dados vindos da API
        let model = new PessoaModel();
        model.buscaDados();

        // Cria uma view a partir dos dados de uma model para mostrá-los na tela
        let view = new PessoaView( model );
        view.desenha( document.body );
    }
}


// Cuida do armazenamento e busca de dados de uma pessoa.
class PessoaModel
{
    // Nesse caso, nós não criamos os dados e sim buscamos eles de uma API de
    // leitura. Assim, não precisamos passar dados para o construtor!
    constructor()
    {
        this._nome = "";
        this._idade = "";
    }

    get nome()
    {
        return this._nome;
    }

    get idade()
    {
        return this._idade;
    }

    // Método responsável para buscar os dados da API e preencher
    // os dados da model.
    buscaDados()
    {
        // Cria request
        let request = new XMLHttpRequest();

        // Configura método HTTP, URL e colocamos o pedido como SÍNCRONO:
        // "Pausamos" o JavaScript até que o pedido seja retornado
        request.open( "GET", `https://randomuser.me/api/`, false );

        // Configura callback para quando a response carregar
        //
        // Utilizamos uma ARROW FUNCTION: é uma função anônima que possui o THIS
        // atribuído com o contexto DE FORA dela, e não de quem está chamando essa
        // função. Assim, temos uma consistência de quem estamos nos referindo
        // quando utilizamos o THIS do lado de fora e dentro do callback: neste caso,
        // estamos falando da própria model
        request.addEventListener( "load", () =>
        {
            // Dados buscados com sucesso
            if ( request.status == 200 /*OK*/ )
            {
                // Transforma texto retornado em um objeto
                let response = JSON.parse( request.responseText );
                let pessoa = response.results[0];

                // Preenche os dados da model
                this._nome = pessoa.name.first + " " + pessoa.name.last;
                this._idade = pessoa.dob.age;
            }
            // Qualquer outro código de status
            else
            {
                console.log( "Um código inesperado foi retornado!" );
            }
        });

        // Envia a request
        request.send();
    }
}


// Cuida da visualização dos dados de uma pessoa
class PessoaView
{
    // Constrói a view de acordo com os dados passados de uma determinada model
    constructor( model )
    {
        this._elemento = document.createElement("p");

        this._elemento.innerText = `[${model.idade}] ${model.nome}`;
    }

    // Adiciona o parágrafo dentro de outro elemento
    desenha( elementoPai )
    {
        elementoPai.appendChild( this._elemento );
    }
}

// Nova controller
let controller = new PessoaController();

// Quando clicarem, chama um método da controller
document.getElementById( "adicionaPessoa" ).addEventListener( "click", function()
{
    controller.buscaPessoa();
});
