function dogFactory(nome, raca, cor, sexo, tipoExame){
    let caracteristics = {
        nome: nome,
        raça: raca,
        cor: cor,
        sexo: sexo,
        tiposDeExame: ["Exame de sangue", "Ultrassonografia", "Exame de ferimentos"],
        exames: function(tipoExame){
            this.tiposDeExame.push(tipoExame)
        }
    }
    return caracteristics
}

let Jerry = dogFactory("Jerry", "border-collie", "marrom", "macho", "Exame de urina");

console.log(Jerry);