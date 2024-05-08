// Carregar dados e renderizar na página

// Função para carregar e exibir os filmes inseridos
function loadFilmesInseridos() {
    fetch('http://localhost:3000/filmes') // Rota para buscar os filmes inseridos
        .then(response => response.json())
        .then(data => {
            const filmesList = document.getElementById('filmes-inseridos-list'); // Elemento HTML onde os filmes serão exibidos
            filmesList.innerHTML = ''; // Limpa o conteúdo atual da lista de filmes
            data.forEach(filme => {
                const filmeItem = document.createElement('div'); // Cria um elemento div para cada filme
                filmeItem.classList.add('filme-item'); // Adiciona uma classe ao elemento div

                // Cria o conteúdo HTML para exibir informações do filme
                filmeItem.innerHTML = `
                    <img src="${filme.capa}" alt="${filme.titulo}">
                    <h3>${filme.titulo}</h3>
                    <p><strong>Diretor:</strong> ${filme.diretor}</p>
                    <p><strong>Gênero:</strong> ${filme.genero}</p>
                    <p><strong>Duração:</strong> ${filme.duracao} minutos</p>
                    <p><strong>Data de Lançamento:</strong> ${filme.data_lancamento}</p>
                    <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
                    <p><strong>Classificação Indicativa:</strong> ${filme.classificacao_indicativa}</p>
                    <button type="button" class="btn btn-primary" onclick="openEditDeleteModal('${filme.id}')">Editar</button>
                    <button type="button" class="btn btn-danger" onclick="openEditDeleteModal('${filme.id}')">Excluir</button>
                `;

                filmesList.appendChild(filmeItem); // Adiciona o elemento div à lista de filmes
            });
        })
        .catch(error => console.error('Erro ao carregar filmes inseridos:', error));
}

// Função para carregar e exibir os filmes avaliados
function loadFilmesAvaliados() {
    fetch('http://localhost:3000/filmes-avaliados')
        .then(response => response.json())
        .then(data => {
            const filmesList = document.getElementById('filmes-avaliados-list');
            filmesList.innerHTML = ''; // Limpar a lista antes de adicionar os filmes
            data.forEach(filme => {
                const filmeItem = document.createElement('div');
                filmeItem.innerHTML = `
                    <div>
                        <img src="${filme.capa}" alt="${filme.titulo}" width="100">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.comentario_tecnico}</p>
                        <button type="button" class="btn btn-primary" onclick="openEditDeleteModal('${filme.id}')">Editar</button>
                        <button type="button" class="btn btn-danger" onclick="openEditDeleteModal('${filme.id}')">Excluir</button>
                    </div>
                `;
                filmesList.appendChild(filmeItem);
            });
        })
        .catch(error => console.error('Erro ao carregar filmes avaliados:', error));
}

// Função para carregar e exibir as programações
function loadProgramacoes() {
    fetch('http://localhost:3000/programacao')
        .then(response => response.json())
        .then(data => {
            const programacoesList = document.getElementById('programacoes-list');
            programacoesList.innerHTML = ''; // Limpar a lista antes de adicionar as programações
            data.forEach(programacao => {
                const programacaoItem = document.createElement('div');
                programacaoItem.innerHTML = `
                    <div>
                        <h3>${programacao.titulo}</h3>
                        <p>Data: ${programacao.data}, Horário: ${programacao.horario}, Local: ${programacao.local}</p>
                        <button type="button" class="btn btn-primary" onclick="openEditDeleteModal('${programacao.id}')">Editar</button>
                        <button type="button" class="btn btn-danger" onclick="openEditDeleteModal('${programacao.id}')">Excluir</button>
                    </div>
                `;
                programacoesList.appendChild(programacaoItem);
            });
        })
        .catch(error => console.error('Erro ao carregar programações:', error));
}

// Função para carregar e exibir os ingressos disponíveis
function loadIngressos() {
    fetch('http://localhost:3000/ingressos')
        .then(response => response.json())
        .then(data => {
            const ingressosList = document.getElementById('ingressos-list');
            ingressosList.innerHTML = ''; // Limpar a lista antes de adicionar os ingressos
            data.forEach(ingresso => {
                const ingressoItem = document.createElement('div');
                ingressoItem.innerHTML = `
                    <div>
                        <h3>${ingresso.nome}</h3>
                        <p>Data: ${ingresso.data}, Horário: ${ingresso.hora}, Local: ${ingresso.local}, Vagas: ${ingresso.vagas}</p>
                        <button type="button" class="btn btn-primary" onclick="openEditDeleteModal('${ingresso.id}')">Editar</button>
                        <button type="button" class="btn btn-danger" onclick="openEditDeleteModal('${ingresso.id}')">Excluir</button>
                    </div>
                `;
                ingressosList.appendChild(ingressoItem);
            });
        })
        .catch(error => console.error('Erro ao carregar ingressos:', error));
}

// Função para carregar e exibir os eventos paralelos
function loadEventosParalelos() {
    fetch('http://localhost:3000/eventos')
        .then(response => response.json())
        .then(data => {
            const eventosList = document.getElementById('eventos-paralelos-list');
            eventosList.innerHTML = ''; // Limpar a lista antes de adicionar os eventos
            data.forEach(evento => {
                const eventoItem = document.createElement('div');
                eventoItem.innerHTML = `
                    <div>
                        <h3>${evento.nome}</h3>
                        <p>Data: ${evento.data}, Horário: ${evento.hora}, Local: ${evento.local}</p>
                        <button type="button" class="btn btn-primary" onclick="openEditDeleteModal('${evento.id}')">Editar</button>
                        <button type="button" class="btn btn-danger" onclick="openEditDeleteModal('${evento.id}')">Excluir</button>
                    </div>
                `;
                eventosList.appendChild(eventoItem);
            });
        })
        .catch(error => console.error('Erro ao carregar eventos paralelos:', error));
}


// Chamar as funções para carregar e exibir os dados ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    loadFilmesInseridos();
    loadFilmesAvaliados();
    loadProgramacoes();
    loadIngressos();
    loadEventosParalelos();
});

// Variável para armazenar o ID do item selecionado
let selectedItemId;

// Função para abrir o modal de edição
function openEditDeleteModal(id) {
    selectedItemId = id;
    $('#editModal').modal('show'); // Abrir o modal
    // Carregar os dados do item selecionado no modal
    fetch(`http://localhost:3000/filmes/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('editTitle').value = data.titulo;
            document.getElementById('editDiretor').value = data.diretor;
            document.getElementById('editGenero').value = data.genero;
            document.getElementById('editDuracao').value = data.duracao;
            document.getElementById('editData').value = data.data_lancamento;
            document.getElementById('editSinopse').value = data.sinopse;
            document.getElementById('editClassificacao').value = data.classificacao_indicativa;
        })
        .catch(error => console.error('Erro ao carregar o item:', error));

    // Adicionar evento de clique ao botão de excluir
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.onclick = function() {
        deleteItem(id);
        $('#editModal').modal('hide'); // Fechar o modal após a exclusão
    };

    // Adicionar evento de clique ao botão de salvar alterações
    const saveButton = document.getElementById('saveButton');
    saveButton.onclick = saveChanges;
}

// Função para salvar as alterações feitas no modal de edição
function saveChanges() {
    // Verifica se um item foi selecionado antes de salvar as alterações
    if (selectedItemId) {
        const newTitle = document.getElementById('editTitle').value;
        const newDiretor = document.getElementById('editDiretor').value;
        const newGenero = document.getElementById('editGenero').value;
        const newDuracao = document.getElementById('editDuracao').value;
        const newLancamento = document.getElementById('editData').value; // Corrigido para 'editData'
        const newSinopse = document.getElementById('editSinopse').value;
        const newClassificacao = document.getElementById('editClassificacao').value;
        const newData = { 
            titulo: newTitle,
            diretor: newDiretor,
            genero: newGenero,
            duracao: newDuracao,
            data_lancamento: newLancamento, // Corrigido para 'data_lancamento'
            sinopse: newSinopse,
            classificacao_indicativa: newClassificacao
        };

        // Atualizar os dados do item no servidor
        updateItem(selectedItemId, newData);
    } else {
        console.error('Nenhum item selecionado para salvar as alterações.');
    }
}

// Função para atualizar um item
function updateItem(id, newData) {
    fetch(`http://localhost:3000/filmes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(response => {
        if (response.ok) {
            $('#editModal').modal('hide'); // Fechar o modal após a atualização
            loadFilmesInseridos(); // Recarregar a lista de filmes após a atualização
        } else {
            // Se a resposta não estiver OK, lança um erro com a mensagem da resposta
            response.json().then(data => {
                throw new Error(data.message);
            });
        }
    })
    .catch(error => console.error('Erro ao atualizar o item:', error.message));
}



// Função para excluir um item
function deleteItem(id) {
    fetch(`http://localhost:3000/filmes/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao excluir o item');
        }
        // Atualize a página ou a lista após a exclusão
        loadItems();
    })
    .catch(error => console.error('Erro ao excluir o item:', error));
}