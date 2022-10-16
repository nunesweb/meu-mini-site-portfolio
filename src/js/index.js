/*
Objetivo - quando clicarmos na aba temps que mostrar 
o conteudo da aba que foi clicada pelo e esconder o contedo da aba anterior
passo 1 dar um jeito de pegar os elesmos que respresetam as abas no HTML
passo 2 - dar um jeito de identificar o clique no elemento da ababa
passo 3 - quando o usuario clicar, desmarcar a aba selecionada
passo 4 - marcar a aba clicada como selecionado
passo 5 - esconder o conteudo anterior
passo 6 - mostrar p conteudo da aba selescionada 
*/

//Passo 1 dar um jeito de pegar os elementos que respresetam as abas no HTML
const abas = document.querySelectorAll(".aba");
//passo 2 - dar um jeito de identificar o clique no elemento da ababa
abas.forEach(aba => {
    aba.addEventListener("click", function () {
        //Condição para parar a execução do codigo SE a aba selecionado ja estiver selecionado
        if (aba.classList.contains("selecionado")) {
            return;
        }
        selecionarAba(aba)
        mostrarinformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    //passo 3 - quando o usuario clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    //passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarinformacoesDaAba(aba) {
    //passo 5 - esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    //passo 6 - mostrar p conteudo da aba selescionada 
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}