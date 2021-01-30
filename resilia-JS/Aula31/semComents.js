
let taxaCombustivel = 120;

function fabricaCarro( nomeDoCarro, placaDoCarro )
{
    let carroNovo =
    {
        nome: nomeDoCarro,
        placa: placaDoCarro,
        emprestado: "",
        tanque: 100,

        abastecer: function( precoDoTanqueCheio )
        {
            let combustivelAnterior = this.tanque;
            this.tanque = 100;

            let custoAbastecimento = ( this.tanque - combustivelAnterior ) * precoDoTanqueCheio / 100;

            return custoAbastecimento;
        },

        emprestar: function()
        {
            if ( this.emprestado )
            {
                console.log( "Carro já foi emprestado você ainda não pode pegá-lo." );
            }else
            {
                let cliente = prompt("Qual o nome do cliente?");
                if ( cliente != "" )
                {
                    this.emprestado = cliente;
                }
            }
        },
    
        devolver: function( quantaGasolinaSobrou )
        {
            if ( !this.emprestado )
            {
                console.log( "Este carro já foi devolvido! Você não precisa devolvê-lo novamente!" );
            }
            else
            {   
                this.tanque = quantaGasolinaSobrou;

                let custo = this.abastecer( taxaCombustivel );

                alert( `Cobrar R$ ${custo.toFixed(2)} de taxa de reabastecimento de ${this.emprestado}` );
    
                this.emprestado = "";
            }
        }
    };

    // Retorna o carro!
    return carroNovo;
}

// Colocamos os carros em um array de carros
let carros =
[
    fabricaCarro( "Vectra Elite 2.2 MPFI 16V Aut."          , "LGE-3018" ),  // Coloca um novo carro na posição 0
    fabricaCarro( "Way 1.6 Total Flex 8V Mec."              , "KDW-8217" ),  // Coloca um novo carro na posição 1
    fabricaCarro( "Dakota Sport 3.9 V6"                     , "NCA-4354" ),  // Coloca um novo carro na posição 2
    fabricaCarro( "Pampa S 1.8"                             , "NBA-3764" ),  // Coloca um novo carro na posição 3
    fabricaCarro( "Picape BG-Truck CD Turbo Diesel"         , "JFH-4781" ),  // Coloca um novo carro na posição 4
    fabricaCarro( "Master 2.3 dCi Extra F.Vitre 16V Diesel" , "HSO-9186" ),  // Coloca um novo carro na posição 5
    fabricaCarro( "PRISMA Sed. Maxx 1.0 8V FlexPower 4p"    , "JNS-8609" ),  // Coloca um novo carro na posição 6
    fabricaCarro( "Opala Diplomata/ Diplom. SLE 4.1 / 2.5"  , "LWP-6962" ),  // Coloca um novo carro na posição 7
    fabricaCarro( "Corsa Sed. Joy 1.0/ 1.0 FlexPower 8V 4p" , "MVK-7720" ),  // Coloca um novo carro na posição 8
    fabricaCarro( "Gol Rock in Rio 1.0 Mi Total Flex 8V 5p" , "ILJ-6228" )   // Coloca um novo carro na posição 9
];

// Procura o elemento da tabela
let tabela = document.getElementById( "automoveis" );

// Faz um for do número da primeira até a última posição do array de carros
for ( let i = 0; i < carros.length; i++ )
{
    // `carro` recebe quem está na posição `i` do array `carros`
    let carro = carros[i];
    
    // Cria uma linha na tabela (uma nova entrada de carro)
    //  __________________________________________
    // |__________________________________________|
    //
    let linha = document.createElement("tr");
    
    // Cria a célula do modelo do modelo do carro
    //   ___________
    //  |___________|
    //
    let celulaModelo = document.createElement("td");
    
    // Cria a célula da placa do carro
    //               ___________
    //              |___________|
    //
    let celulaPlaca = document.createElement("td");
    
    // Cria a célula de ações dos carros
    //                           ________________
    //                          |________________|
    //
    let celulaAcoes = document.createElement("td");

    // Cria o botão de emprestar
    //                            ___
    //                           [_E_]
    //
    let botaoEmpresta = document.createElement("button");
    botaoEmpresta.textContent = "Emprestar";
    
    // Cria o botão de devolver
    //                                 ___
    //                                [_D_]
    //
    let botaoDevolve = document.createElement("button");
    botaoDevolve.textContent = "Devolver";

    // Cria o texto do nome do cliente
    //                                 
    //                                       Cli
    //
    let textoCliente = document.createElement("span");

    // ======> Configura os botões

    // Desativa o botão "Emprestar" caso o carro esteja emprestado
    botaoEmpresta.disabled = carro.emprestado;
    
    // Ao clicar em emprestar...
    botaoEmpresta.addEventListener("click", function()
    {
        // Empresta o carro
        carro.emprestar();

        // Coloca o nome do cliente que alugou no texto
        textoCliente.innerText = carro.emprestado;

        // Ativa/desativa os botões
        botaoEmpresta.disabled = ( carro.emprestado != "" );
        botaoDevolve.disabled = ( carro.emprestado == "" );
    });

    // Desativa o botão "Devolver" caso o carro já tenha sido devolvido
    botaoDevolve.disabled = !carro.emprestado;
    
    // Ao clicar em devolver...
    botaoDevolve.addEventListener("click", function()
    {
        // Busca quanto combustível sobrou e calcula a taxa de reabastecimento
        let combustivelRestante = parseFloat( prompt( `Quantos % restam do tanque do \n[${carro.placa}] ${carro.nome}?` ) );
        
        // Caso seja um número inválido, coloca o valor para 0
        if ( isNaN( combustivelRestante ) )
        {
            combustivelRestante = 0;
        }

        // Devolve o carro
        carro.devolver( combustivelRestante );

        // Limpa o texto do nome do cliente que alugou
        textoCliente.innerText = "";
        
        // Ativa/desativa os botões
        botaoEmpresta.disabled = carro.emprestado;
        botaoDevolve.disabled = !carro.emprestado;
    });


    // Coloca os dados do modelo do carro na célula de modelo
    //   ___________
    //  |__ModeloX__|
    //
    celulaModelo.textContent = carro.nome;

    // Coloca os dados da placa do carro na célula da placa
    //               ___________
    //              |___Placa___|
    //
    celulaPlaca.textContent = carro.placa;
    
    // Adiciona o botão "Emprestar" no final da célula de ações
    //                           ________________
    //                          |[_E_]___________|
    //
    celulaAcoes.appendChild( botaoEmpresta );
    
    // Adiciona o botão "Devolver" no final da célula de ações
    //                           ________________
    //                          |[_E_]|[_D_]     |
    //
    celulaAcoes.appendChild( botaoDevolve );

    // Adiciona o botão "Devolver" no final da célula de ações
    //                           ________________
    //                          |[_E_]|[_D_] Cli |
    //
    celulaAcoes.appendChild( textoCliente );
    
    // Adiciona a célula do modelo no final da linha
    //  __________________________________________
    // ||__ModeloX__|_____________________________|
    //
    linha.appendChild( celulaModelo );
    
    // Adiciona a célula da placa no final da linha
    //  __________________________________________
    // ||__ModeloX__|___Placa___|_________________|
    //
    linha.appendChild( celulaPlaca );
    
    // Adiciona a célula de ações no final da linha
    //  _________________________________________
    // ||__ModeloX__|___Placa___|[_E_]|[_D_] Cli |
    //
    linha.appendChild( celulaAcoes );

    // Coloca a linha dentro da tabela
    //
    //     MODELO       PLACA       AÇÕES
    //  __________________________________________
    // ||...........|...........|[...]|[...]_..._||
    //  __________________________________________
    // ||...........|...........|[...]|[...]_..._||
    //  __________________________________________
    // ||__ModeloX__|___Placa___|[_E_]|[_D_]_Cli_|| <===
    //
    tabela.appendChild( linha );
}
