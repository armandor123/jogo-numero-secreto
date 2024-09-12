let listaDeNumerosSorteados = []
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1; 

function exibirTextoNatela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInical() {
exibirTextoNatela ('h1','Jogo do número secreto');
exibirTextoNatela('p','Escolha um número entre 1 e 1000');
}
 
exibirMensagemInical();
function verificarChute() {
let chute = document.querySelector('input').value
    
if (chute == numeroSecreto){
    exibirTextoNatela('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentavivas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNatela('p', mensagemTentavivas)
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if (chute > numeroSecreto) {
        exibirTextoNatela('p', 'O numero secretoé menor');
    } else {
        exibirTextoNatela('p', 'O numero secreto é maior')
    }
    tentativas++;
    limparCampo();
}
}

function geraNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * 1000 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 3 ) {

    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio;
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido
    }
}
function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInical();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
    
}