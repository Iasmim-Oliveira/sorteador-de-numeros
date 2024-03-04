function sortear () {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // let resultado = numeroSorteado (de, ate);
    // alert(resultado);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){ //i é a variável; enquanto i < que quantidade, encrementa + 1. vai de 0 até quantidade.
        numero = numeroSorteado (de, ate); //função que vai ser executada de acordo com a quantidade
        sorteados.push(numero); //guarda os numeros sorteados no array
    }
    alert(sorteados);
}

function numeroSorteado (min, max) { //precisa passar o paramento, que são os valores "de" e "ate"
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //+1 para incluir o último número
}

function reiniciar (){

}