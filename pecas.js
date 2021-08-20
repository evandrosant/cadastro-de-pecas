const listaDePecas = ["ar condicionado", "motor", "amortecedor"]

console.log(listaDePecas)

if (listaDePecas.length < 10) {
    console.log("é possivel cadastrar mas peças")
} else {
    console.log("nao há mais espaço na lista")
}

var peso = 50;

if(peso >= 100) {
    console.log("peso da peça esta adequado");
} else {
    console.log("peso insuficiente")
}

let nomePeca = "disco de freio";

if (nomePeca.length >3) {
    console.log("nome adequado!!")    
} else if(nomePeca.length == 0){
    console.log("o nome nao pode ser vazio")
} else {
    console.log("o nome deve possouir mais de 3 caracteres")
}

switch (nomePeca.length) {
    case 0:
        console.log("o nome nao pode ser vazio")
        break

    case 1:
    case 2:
    case 3:


        console.log("o nome deve posuir mais de 3 caracteres")
        break

        default:
            console.log("nome adequado")
            break


}

// = -> atribuicao de valor, recebe
// == -> verificar se o valor é igual
// === -< verificar se o valor, e o tipo de dado, sao iguais
