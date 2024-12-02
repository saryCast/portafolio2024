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
    let isVisible = false;

    // Alternar visibilidad
    skillsBtn.addEventListener('click', () => {
        isVisible = !isVisible;

        if (isVisible) {
            // Mostrar con animación
            stackSection.style.display = 'block';
            setTimeout(() => {
                stackSection.style.opacity = 1;
                stackSection.style.transition = 'opacity 0.5s ease-in-out';
            }, 50);
        } else {
            // Ocultar con animación
            stackSection.style.opacity = 0;
            stackSection.style.transition = 'opacity 0.5s ease-in-out';
            setTimeout(() => {
                stackSection.style.display = 'none';
            }, 500);
        }
    });
});