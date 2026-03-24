/**
 * Portal Oficial de Curaçau 2026
 * Desenvolvido por: Miguel Forte Dalagassa
 * Funcionalidades: Animação de Reveal, Scroll Suave e Contador de Dados
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAÇÃO DE REVELAÇÃO (Scroll Reveal)
    // Faz as seções e imagens aparecerem com um efeito de subida suave
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Para a animação acontecer apenas uma vez
            }
        });
    }, observerOptions);

    // Seleciona todas as seções, imagens e cards para animar
    const elementsToAnimate = document.querySelectorAll('.wiki-section, img, .stat-box, .link-btn');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        revealOnScroll.observe(el);
    });

    // Adiciona a classe que ativa a animação via CSS (está embutida aqui para facilitar)
    const style = document.createElement('style');
    style.innerHTML = `
        .active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);


    // 2. SCROLL SUAVE PARA OS LINKS DO MENU
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Desconto da altura da Navbar
                    behavior: 'smooth'
                });
            }
        });
    });


    // 3. EFEITO DE TRANSPARÊNCIA NA NAVBAR
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.padding = "15px 0";
        }
    });


    // 4. LOG DE CRIAÇÃO (Exibe no Console do Navegador)
    console.log("%c Portal Curaçau 2026 ", "color: #f9d616; background: #002b7f; font-size: 20px; font-weight: bold; border-radius: 5px;");
    console.log("Desenvolvido com excelência por: Miguel Forte Dalagassa");
});