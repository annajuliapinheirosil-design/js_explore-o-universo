//procure e selecione o elemento com a classe card-destino
// e guarde em uma variável chamada primeiroCard
let primeiroCard = document.querySelector('.card-destino');

//Procure e selecione o botão de curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade");

//Procure e selecione o parágrafo com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade");

//Monitore o clique no botão de curiosidade e, quando acontecer o clique, verifique SE a curiosidade está oculta. Se estiver, faça ficar visível, mude o aria-expanded para true e troque o texto do botão para "Ocultar curiosidade".
botaoCuriosidade.addEventListener("click", function () {
    if (curiosidade.hidden) {
        //faça-o aparecer
        curiosidade.hidden = false;

        //mude o atributo aria-expaded para true       
        botaoCuriosidade.setAttribute("aria-expanded", "true");

        //troque o texto do botão para Ocultar curiosidade
        botaoCuriosidade.textContent = "Ocultar curiosidade";
    } else{
        curiosidade.hidden = true;
        botaoCuriosidade.setAttribute("aria-expanded","false");
        botaoCuriosidade.textContent = "Ver curiosidade"
    }
});