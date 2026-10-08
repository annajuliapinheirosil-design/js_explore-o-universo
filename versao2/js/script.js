//Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");

/*Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e o botão favoritos) */

cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector(  '.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');

    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidade";
        }else{
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "Ver curiosidade";
        }
    });/*fechamento do código do botaoCuriosidade*/
    botaoFavorito.addEventListener("click",function(){
        //Aplicar/remover a classe 'favoritado'
        let favoritado = card.classList.toggle('favoritado');

        //Atualizar o estado do botão(aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);

        //Atualizar o texto do botão(☆ Favorito ou ★ Favoritado)
        if(favoritado){
        botaoFavorito.textContent="★ Favoritado";
        } else{
            botaoFavorito.textContent="☆ Favorito";
        }
    });
});


/*V2: programação para o recurso de filtragem de destinos */

//procurar e selecionar os botões de filtro

const botoesFiltro = document.querySelectorAll("[data-filtro]");


// percorrer cada botao dentro do botoesFiltro

botoesFiltro.forEach(function(botaoFiltro){
    
    //descobrir qual filtro foi escolhido
   botaoFiltro.addEventListener("click",function(){

    // ... acessamos e guardamos o filtro escolhido
    const filtro = botaoFiltro.dataset.filtro;
    
    cards.forEach(function(card){
        //... e guardando a categoria de cada um 
        const categoria = card.dataset.categoria;

        //Mostrar todos os cards OU apenas os cards da categoria filtrada

        if(filtro === "todos" || categoria === filtro){
            card.hidden = false;
        }else{
            card.hidden = true;
        }

        });// fechamento do forEach dos cards

        botoesFiltro.forEach(function(botaoFiltro){
            // verificamos se o botao atual que foi clicado é o mesmo do filtro
            if(botaoFiltro.dataset.filtro === filtro){

                //se for, adicionamos a classe nele
                botaoFiltro.classList.add("filtro-ativo");

                //e mudamos o estado para pressionado (true)
                botaoFiltro.setAttribute("aria-pressed" , "true");
            }else{
                // senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo");

                // e mudamos o estado para não pressionado (false)
                botaoFiltro.setAttribute("aria-pressed" , "false");
            }
        })

   });// fechamento event listener

});// fechamento forEach e dos botões


