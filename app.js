let listaDeNumerosSorteados = []; 
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let preencherCampo = document.querySelector(tag);
    preencherCampo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroMaximo}`);
}

exibirMensagemInicial();



function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Você acertou o número secreto com ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}



function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}



function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
