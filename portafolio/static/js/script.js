// Función para manejar las animaciones de las secciones
const handleSectionToggle = (sectionId, displayStyle = 'flex') => {
    const section = document.getElementById(sectionId);
    const isHidden = section.style.display === 'none' || section.style.opacity === '0';

    if (isHidden) {
        // Mostrar sección
        section.style.display = displayStyle;
        section.classList.add('section-enter');
        setTimeout(() => {
            section.style.opacity = '1';
        }, 50);
    } else {
        // Ocultar sección
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.display = 'none';
            section.classList.remove('section-enter');
        }, 500);
    }
};

// Inicializar los event listeners cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Botón "Acerca de"
    const aboutButton = document.getElementById('clickHere');
    if (aboutButton) {
        aboutButton.addEventListener('click', () => {
            handleSectionToggle('aboutSection', 'flex');
        });
    }

    // Botón "Stack Tecnológico"
    const stackButton = document.getElementById('skillsBtn');
    if (stackButton) {
        stackButton.addEventListener('click', () => {
            handleSectionToggle('stackSection', 'block');
        });
    }

    // Inicializar estado de las secciones
    const sections = ['aboutSection', 'stackSection'];
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
            section.style.opacity = '0';
        }
    });
});

// Manejar cambios de tamaño de ventana para responsividad
window.addEventListener('resize', () => {
    const sections = ['aboutSection', 'stackSection'];
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section && section.style.opacity === '1') {
            // Ajustar display style basado en el tamaño de la ventana
            const displayStyle = sectionId === 'stackSection' ? 'block' : 'flex';
            section.style.display = displayStyle;
        }
    });
});