// index.js

// Gestión del Tema
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Verificar preferencia de tema guardada o preferencia del sistema
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Aplicar tema
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Inicializar tema
function initializeTheme() {
    const theme = getPreferredTheme();
    applyTheme(theme);
}

// Alternar tema
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}

// Escuchar cambios en el tema del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// Inicializar tema al cargar
initializeTheme();

// Agregar evento de clic para el toggle
themeToggle.addEventListener('click', toggleTheme);

// Navegación
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

function setActiveSection(sectionId) {
    // Ocultar todas las secciones
    sections.forEach(section => {
        section.classList.remove('active');
    });
    // Desactivar todos los enlaces de navegación
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Mostrar la sección activa
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Activar el enlace correspondiente
    const activeLink = Array.from(navLinks).find(link => link.getAttribute('data-section') === sectionId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Evento para los enlaces de navegación
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const sectionId = link.getAttribute('data-section');
        setActiveSection(sectionId);
    });
});

// Navegación Inferior
const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');

// Evento para los enlaces de navegación inferior
bottomNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        const sectionId = link.getAttribute('data-section');
        setActiveSection(sectionId);
    });
});

// Ejemplo de datos para proyectos (reemplaza con tus datos)
const projects = [
    { title: 'Proyecto 1', description: 'Descripción del Proyecto 1', image: 'ruta_imagen1.jpg', tech: ['HTML', 'CSS'] },
    { title: 'Proyecto 2', description: 'Descripción del Proyecto 2', image: 'ruta_imagen2.jpg', tech: ['JavaScript', 'React'] },
];

// Poblar Proyectos
const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="#" class="project-link">
                Ver Proyecto <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
    projectsContainer.appendChild(projectCard);
});

// Ejemplo de datos para habilidades (reemplaza con tus datos)
const skills = [
    { category: 'Lenguajes de Programación', items: ['JavaScript', 'Python', 'Java'] },
    { category: 'Frameworks', items: ['React', 'Angular', 'Vue'] },
];

// Poblar Habilidades
const skillsContainer = document.getElementById('skills-container');
skills.forEach(skillGroup => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `
        <h3 class="skill-category">${skillGroup.category}</h3>
        <ul class="skill-list">
            ${skillGroup.items.map(skill => `
                <li class="skill-item">
                    <i class="fas fa-chevron-right"></i>
                    ${skill}
                </li>
            `).join('')}
        </ul>
    `;
    skillsContainer.appendChild(skillCard);
});
