// Variável global para armazenar os itens no carrinho
let carrinhoItens = [];

// Função para carregar os ingressos
function carregarIngressos() {
    fetch('http://localhost:3000/ingressos')
        .then(response => response.json())
        .then(ingressos => {
            const ingressoLista = document.getElementById('ingresso-lista');
            ingressoLista.innerHTML = '';

            ingressos.forEach(ingresso => {
                const card = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${ingresso.capa}" class="card-img-top" alt="Banner do Evento">
                            <div class="card-body">
                                <h5 class="card-title">${ingresso.nome}</h5>
                                <p class="card-text"><strong>Diretor:</strong> ${ingresso.diretor}</p>
                                <p class="card-text"><strong>Data:</strong> ${ingresso.data}</p>
                                <p class="card-text"><strong>Hora:</strong> ${ingresso.hora}</p>
                                <p class="card-text"><strong>Local:</strong> ${ingresso.local}</p>
                                <p class="card-text"><strong>Vagas disponíveis:</strong> ${ingresso.vagas}</p>
                                <button class="btn btn-primary comprar-ingresso-btn" data-bs-toggle="modal" data-bs-target="#comprarIngressoModal" data-ingresso-id="${ingresso.id}">Comprar Ingresso</button>
                            </div> 
                        </div>
                    </div>
                `;
                ingressoLista.innerHTML += card;
            });
        })
        .catch(error => console.log(error));
}

// Função para adicionar o ingresso ao carrinho
function adicionarAoCarrinho(ingressoId) {
    // Verifica se o ingresso já está no carrinho
    if (!carrinhoItens.includes(ingressoId)) {
        carrinhoItens.push(ingressoId);
    }
}

// Função para exibir o carrinho
function exibirCarrinho() {
    const carrinho = document.getElementById('carrinho');
    carrinho.innerHTML = '';

    if (carrinhoItens.length === 0) {
        carrinho.innerHTML = '<h3>Carrinho Vazio</h3>';
    } else {
        const listaCarrinho = document.createElement('ul');
        carrinhoItens.forEach(ingressoId => {
            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = `Ingresso ${ingressoId}`;
            listaCarrinho.appendChild(itemCarrinho);
        });
        carrinho.appendChild(listaCarrinho);
    }

    // Exibir o carrinho
    carrinho.style.display = 'block';
}

// Adiciona evento de clique ao botão "Adicionar ao Carrinho" dentro do modal
document.getElementById('adicionarAoCarrinhoBtn').addEventListener('click', () => {
    const ingressoId = document.getElementById('comprarIngressoModal').getAttribute('data-ingresso-id');
    adicionarAoCarrinho(ingressoId);
    exibirCarrinho();
});

// Carrega os ingressos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    carregarIngressos();
});

// Adiciona evento de clique ao botão "Comprar Ingresso" para exibir o modal
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('comprar-ingresso-btn')) {
        const ingressoId = event.target.getAttribute('data-ingresso-id');
        document.getElementById('comprarIngressoModal').setAttribute('data-ingresso-id', ingressoId);
    }
});

// Adiciona evento de clique ao botão "Adicionar ao Carrinho" dentro do modal
document.getElementById('adicionarAoCarrinhoBtn').addEventListener('click', () => {
    const ingressoId = document.getElementById('comprarIngressoModal').getAttribute('data-ingresso-id');
    adicionarAoCarrinho(ingressoId);
    exibirCarrinho();
    $('#comprarIngressoModal').modal('hide'); // Fecha o modal após adicionar ao carrinho
});