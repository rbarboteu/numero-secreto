let listaDeNumerosSorteados = [];
let numeroLimiteNaLista= 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Função para exibir a resposta após o chute
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}        
//Função para exibir a mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
    
}

// Funcão para verificar o chute nas 3 condições
function verificarChute() {
    let chute = document.querySelector('input').value;
    if( numeroSecreto == chute){
        //Especificando a palavra "Tentativa" no texto de resposta (plural, singular)7q
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        exibirTextoNaTela('h1', 'Você acertou!')
        //Especificando a mensagem de acerto com as variáveis do numero de tentativas e da palavra tentativas
        let mensagemTentativa = (`Você acertou com ${tentativas} ${palavraTentativa}!`)
        exibirTextoNaTela('p', mensagemTentativa);
        //Função para desabilitar o botão de reinicio 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto ) {
            exibirTextoNaTela('h1','O número secreto é menor')
            exibirTextoNaTela('p', `Tente um número menor que ${chute}`)
    } else {
        exibirTextoNaTela('h1','O número secreto é maior')
        exibirTextoNaTela('p', `Tente um número maior que ${chute}`)
    }
    } tentativas++; //tentativas = tentativas + 1
    limparCampo();
}

// Função de gerar o número secreto e não repetir o número sorteado anteriormente
function gerarNumeroAleatorio(){ 
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteNaLista + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimiteNaLista){
        listaDeNumerosSorteados = []
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
} else {
    console.log(listaDeNumerosSorteados)
    listaDeNumerosSorteados.push(numeroEscolhido)
    return numeroEscolhido
}}
//Função para reinicar o campo do chute após o acerto
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Função de reiniciar o jogo
function reiniciarJogo() {
    limparCampo()
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio()
    exibirMensagemInicial()
    //Função para habilitar novamente o botão de reinicio 
    document.getElementById('reiniciar').setAttribute('disabled', true)
}












