function sortear () {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // let resultado = numeroSorteado (de, ate);
    // alert(resultado);

    if (de > ate) {
        Swal.fire("O número inicial não pode ser maior que o final!");
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){ //i é a variável; enquanto i < que quantidade, encrementa + 1. vai de 0 até quantidade.
        numero = numeroSorteado (de, ate); //função que vai ser executada de acordo com a quantidade

        while (sorteados.includes(numero)) {//enquanto o array tiver o numero sorteado, repetir a função
        numero = numeroSorteado (de, ate);
        }

        sorteados.push(numero); //guarda os numeros sorteados no array
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: <span class="container__numero-sorteado"> ${sorteados}</span></label>`; 
    //innerHTML insere uma tag no documento HTML.
    alterarStatusBotao ();
}

function numeroSorteado (min, max) { //precisa passar o paramento, que são os valores "de" e "ate"
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //+1 para incluir o último número
}

function alterarStatusBotao (){
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}

function reiniciar () {
    window.location.reload(true);

}