// Efeito de rolagem suave para os links da navegação
const smoothAnchors = document.querySelectorAll('a[href^="#"]');
smoothAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensagem de boas-vindas no console (opcional para debug)
console.log("Site da TH Ar-Condicionado carregado com sucesso!");

// Menu Mobile (Simples toggle)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        const isExpanded = navLinks.classList.toggle('active');
        mobileMenu.setAttribute('aria-expanded', isExpanded);
        navLinks.setAttribute('aria-hidden', String(!isExpanded));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.setAttribute('aria-expanded', 'false');
                navLinks.setAttribute('aria-hidden', 'true');
            }
        });
    });
}