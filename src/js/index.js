/*
O que precisamos fazer? - quando cliclar no botão do personagem na lista, temos que marcar o botão com selecionado e mostrar o personagem correspondente 

Objetivo 1 - Quando clicar no botão do personagem na lista, colocar botão como selecionado (dar classe selecionado para esse elemento da lista)
    passo 1 - pegar os botão no JS para pode verificar se o botão já tem a classe "selecionado
    passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
    passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
    
Objetivo 2 - quando clicar no botao do personagem, mostrar a informação do personagem
    passo 1 - pegar os personagens no JS
    passo 2 - dar a classe selecionado no personagem que o usuário selecionou
    passo 3 - verificar se já existe um personagem selecionado, se sim remover a classe selecionado da seleção anterior */

//objetivo 1 - passo 1
const botoes = document.querySelectorAll('.botao');

//objetivo 2 - passo 1

const personagens = document.querySelectorAll(".personagem");

//passo 2 e 3

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
    desselecionarBotao();
    botao.classList.add("selecionado");

    //O2 - passo 2 e 3
    desselecionarPersonagem();

    personagens[indice].classList.add("selecionado");

    });
});


    

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

