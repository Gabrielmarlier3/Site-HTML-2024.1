function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
}

function resetBackground() {
    document.body.style.backgroundImage = "url('imagens/dd.jpg')";
}

// Função para rolar suavemente até uma seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Seleciona todos os links do menu
const links = document.querySelectorAll('nav ul li a');

// Adiciona um evento de clique a cada link
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        const sectionId = link.getAttribute('href').substring(1); // Obtém o ID da seção
        scrollToSection(sectionId); // Chama a função para rolar até a seção
    });
});

// Seleciona o link "Sobre nós" do menu
const linkSobreNos = document.querySelector('nav ul li a[href="#sobrenos"]');

// Adiciona um evento de clique ao link
linkSobreNos.addEventListener('click', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    const sectionId = linkSobreNos.getAttribute('href').substring(1); // Obtém o ID da seção
    scrollToSection(sectionId); // Chama a função para rolar até a seção
});



