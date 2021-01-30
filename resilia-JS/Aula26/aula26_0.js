console.log("Revisão!");

function adicionarCaixinha()
{
    // DOM cria uma div "crua", sem nada;
    var caixinha = document.createElement("div");
    // Coloca uma classe do CSS nele;
    caixinha.className = "caixinha";

    // Cores aleatórias! Valores entre 0-255;
    var vermelho = Math.random() * 255;
    var verde = Math.random() * 255;
    var azul = Math.random() * 255;

    // Mudamos a cor de fundo de acordo com as cores
    // (perceba que esse estilo sobrescreve a propriedade da classe!)
    caixinha.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul})`;
    
    // Encontra no HTML a caixa na qual queremos inserir a nova `div`
    var caixona = document.getElementById("caixona");
    // Adicionamos essa `div` na caixa maior
    caixona.appendChild( caixinha );
}
