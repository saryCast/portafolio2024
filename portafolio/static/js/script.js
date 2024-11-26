document.getElementById('clickHere').addEventListener('click', () => {
    gsap.to('#clickHere', {
        rotation: 360,
        scale: 1.2,
        duration: 0.5,
        onComplete: () => {
            alert('¡Bienvenido a mi portafolio!');
        }
    });
});


//Efectos para las tarjetas de stack tecnológico
document.addEventListener('DOMContentLoaded', () => {
    const skillsBtn = document.getElementById('skillsBtn');
    const stackSection = document.getElementById('stackSection');

    skillsBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Mostrar la sección con animación
        stackSection.style.display = 'block';
        setTimeout(() => {
            stackSection.style.opacity = 1;
            stackSection.style.transition = 'opacity 0.5s ease-in-out';
        }, 100);
        
        // Scroll suave
        stackSection.scrollIntoView({ behavior: 'smooth' });
    });
});