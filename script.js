let nomes = [];

    document.getElementById("nomeInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarNome();
    }
    });

function adicionarNome() {
    const input = document.getElementById("nomeInput");
    const nome = input.value.trim();
    
    if (nome === "" ) {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if(!nomes.includes(nome)) {
        nomes.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome já adicionado!");
    }
}

function atualizarLista() {
    const lista = document.getElementById("nomesLista");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 nomes para realizar o sorteio.");
        return;
    }
    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").textContent = `🎉 Sorteado: ${sorteado}! 🎉`;
}