function alterarStatus(numeroDoJogo){
    let gameClicado = document.getElementById(`game-${numeroDoJogo}`);

    // O Ponto(.) esta dizendo para o querySelector que é uma classe
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let nomeDoJogo = gameClicado.querySelector(".dashboard__item__name");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    // Confirma se o usuário tem certeza da ação
    var userConfirmed = confirm(`Você tem certeza que deseja ${botao.textContent.toLowerCase()} o jogo ${nomeDoJogo.textContent}?`);

    //Valida se a imagem tiver uma classe especifica
    if (userConfirmed) {
        if (imagem.classList.contains("dashboard__item__img--rented")){
            botao.classList.remove("dashboard__item__button--return");
            imagem.classList.remove("dashboard__item__img--rented");

            //Altera o texto do botão
            botao.textContent = "Alugar";
        } else {
            botao.classList.add("dashboard__item__button--return");
            imagem.classList.add("dashboard__item__img--rented");

            botao.textContent = "Devolver";
        }
    } else {
        // Usuário clicou em Cancelar
        alert("Ação cancelada!");
    }

    //joga no console a quantidade de jogos alugados
    const contagemDeJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Total de jogos alugados: ${contagemDeJogosAlugados}`);
}