document.addEventListener('DOMContentLoaded', function () {
    // Array de capas de filmes
    const capasFilmes = [
        'assets/img/nature/image1.jpg',
        'assets/img/nature/image2.jpg',
        'assets/img/nature/image3.jpg',
        'assets/img/nature/image4.jpg',
        'assets/img/nature/image5.jpg',
        'assets/img/nature/image6.jpg',
        // Adicione mais capas conforme necessário
    ];

    // Adiciona os itens do carrossel para cada carrossel na página
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const carouselInner = carousel.querySelector('.carousel-inner');
        capasFilmes.forEach((capa, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselInner.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${capa}" class="d-block w-100" style="max-height: 300px;" alt="Capa do Filme">
                </div>
            `;
        });
    });

    // Inicializa todos os carrosséis na página
    const carouselList = document.querySelectorAll('.carousel');
    carouselList.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true
        });
    });
});
