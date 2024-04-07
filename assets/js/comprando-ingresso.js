// Ações ao adicionar ingresso ao carrinho
document.querySelector('#adicionar-carrinho').addEventListener('click', () => {
    const quantidade = parseInt(document.getElementById('quantidade-ingressos').value);

    // Aqui você pode obter os detalhes do ingresso selecionado do modal e adicionar ao carrinho
    // Por exemplo, você pode pegar o nome do ingresso do modal e adicionar ao carrinho:
    const nomeIngresso = 'Nome do Ingresso';

    // Adicionar ingresso ao carrinho
    adicionarAoCarrinho(nomeIngresso);

    // Fechar o modal de compra
    const modalCompra = new bootstrap.Modal(document.getElementById('modal-compra'));
    modalCompra.hide();
});
