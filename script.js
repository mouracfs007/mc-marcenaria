const carouselImages  = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const totalImages = document.querySelectorAll('.carousel-images img').length;

const images = document.querySelectorAll('.gallery-grid img');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');


let currentIndex = 0;

function updateCarousel () {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

setInterval(() => {
    nextBtn.click();
}, 9000);




// Abre o modal ao clicar na imagem
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = image.src; // Define a imagem clicada no modal
    });
});

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



// Exemplo simples de validação no formulário
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita envio real do formulário
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

