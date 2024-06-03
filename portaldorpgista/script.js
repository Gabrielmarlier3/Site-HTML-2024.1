function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
}

function resetBackground() {
    document.body.style.backgroundImage = "url('imagens/dd.jpg')";
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}


const links = document.querySelectorAll('nav ul li a');


links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});


const linkSobreNos = document.querySelector('nav ul li a[href="#sobrenos"]');


linkSobreNos.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = linkSobreNos.getAttribute('href').substring(1);
    scrollToSection(sectionId);
});



