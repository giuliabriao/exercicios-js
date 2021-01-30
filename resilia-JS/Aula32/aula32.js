let dicionario = {};

document.getElementById("salvar").addEventListener("click", function()
{
    let chave = document.getElementById("chave").value;
    let valor = document.getElementById("valor").value;
    
    let div = document.createElement( "div" );

    let paragrafo = document.createElement( "p" );
    paragrafo.textContent = `${chave}: ${valor}`;
    
    let botao = document.createElement( "button" );
    botao.textContent = "Deletar";

    dicionario[ chave ] = {
        "idade": valor,
        "elemento": div
    };

    botao.addEventListener( "click", function()
    {
        div.remove();
        delete dicionario[ chave ];
        console.log( dicionario );
    });

    div.appendChild( paragrafo );
    div.appendChild( botao );

    document.body.appendChild( div );

    console.log( dicionario );
});
