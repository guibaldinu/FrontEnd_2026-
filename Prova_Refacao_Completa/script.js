function add() {

    const container = document.getElementById("jogadores");

    // Cria o card
    const card = document.createElement("div");
    card.className = "card";

    // Imagem do jogador
    const img = document.createElement("img");
    img.src = "_vinicius_junior.png";
    img.alt = "Vinícius Júnior";
    img.style.width = "100%";

    // Dados do jogador — cada campo é um elemento separado
    const nome = document.createElement("p");
    nome.innerHTML = "<strong>Nome:</strong> Vinícius José Paixão de Oliveira Júnior";

    const nascimento = document.createElement("p");
    nascimento.innerHTML = "<strong>Nascimento:</strong> 12/07/2000";

    const altura = document.createElement("p");
    altura.innerHTML = "<strong>Altura:</strong> 1,76m";

    const posicao = document.createElement("p");
    posicao.innerHTML = "<strong>Posição:</strong> Atacante";

    const rank = document.createElement("p");
    rank.innerHTML = "<strong>Rank:</strong> 9.8";

    // Monta o card
    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(nascimento);
    card.appendChild(altura);
    card.appendChild(posicao);
    card.appendChild(rank);

    // Insere na div#jogadores
    container.appendChild(card);
}
