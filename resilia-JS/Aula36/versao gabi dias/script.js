let button = document.getElementById("GerarPessoa");
button.addEventListener("click", gerarPessoa);
let input = document.getElementById("NumeroDePessoas");

class Div{
    constructor(outerDiv, foto, nome, idade){
        this.outerDiv = outerDiv;
        this.foto = foto;
        this.nome = nome;
        this.idade = idade;
    }

    generate(){
        this.outerDiv.setAttribute("class", "user");
        let imageContainer = document.createElement('img');
        imageContainer.src = this.foto;
        this.outerDiv.append(imageContainer);

        let nomeContainer = document.createElement('p');
        nomeContainer.textContent = `${this.nome.title}. ${this.nome.first} ${this.nome.last}`;
        this.outerDiv.append(nomeContainer);

        let idadeContainer = document.createElement('p');
        idadeContainer.textContent = `${this.idade}`;
        this.outerDiv.append(idadeContainer);

        document.main.append(this.outerDiv);
    }
}

function gerarPessoa(){
    let numeroDePessoas = input.value;
    let request = new XMLHttpRequest();
    if (typeof (parseInt(numeroDePessoas)) != typeof 5){
        console.log(numeroDePessoas);
        return;
    }
    requestText = `https://randomuser.me/api?results=${numeroDePessoas}`
    request.open("GET", requestText);
    request.addEventListener("load", function(){
        for(let i = 0; i < numeroDePessoas; i++){
            if(request.status != 200) {
                console.log(request.status);
                return;
            }
            let pessoa = JSON.parse(request.responseText);
            let dados = pessoa.results[i];
            let div = new Div(document.createElement('div'), dados.picture.medium, dados.name, dados.registered.age);
            div.generate();
        }
    })
    request.send();
}