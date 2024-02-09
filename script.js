const botaoPlayPause = document.getElementById('play-pause');
const audioFaixa = document.getElementById('audio-faixa');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeFaixa = document.getElementById('faixa');

const numeroFaixas = 6;
let taTocando = 0;
let faixaAtual = 1;

function tocarFaixa() {
    audioFaixa.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioFaixa.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaFaixa() {
    if (faixaAtual === numeroFaixas) {
        faixaAtual = 1;
    } else {
        faixaAtual = faixaAtual + 1;
    }

    audioFaixa.src = "./faixas/All Eyez On Me/" + faixaAtual + ".mp3";  
        tocarFaixa();
        taTocando = 1;
        trocarNomeFaixa();
}

function trocarNomeFaixa() {
    nomeFaixa.innerText = 'Faixa ' + faixaAtual;
}


function voltarFaixa() {
    if (faixaAtual === 1) {
        faixaAtual = numeroFaixas;
    } else {
        faixaAtual = faixaAtual - 1;
    }

    audioFaixa.src = "./faixas/All Eyez On Me/" + faixaAtual + ".mp3";  
        tocarFaixa();
        taTocando = 1;
        trocarNomeFaixa();
}
       

    botaoPlayPause.addEventListener('click', tocarOuPausar);
    botaoAvancar.addEventListener('click', proximaFaixa);
    botaoVoltar.addEventListener('click', voltarFaixa);


