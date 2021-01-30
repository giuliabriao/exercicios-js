class fichaAnimal {

    constructor(nomeCachorro, idade) {
        this.nome = nomeCachorro;
        this.idade = idade;
        this.vacina = [];
        this.peso = [];
    }

    vacinacao(vacina) {
        this.vacina.push(vacina);
    }

    pesagem(kg) {
        this.peso.push(kg);
    }

}

let ficha = new fichaAnimal("bob", 4);
ficha.vacinacao("raiva");
ficha.pesagem(40);
console.log(ficha)

//giulia, elivelton, paulo saboia, julia