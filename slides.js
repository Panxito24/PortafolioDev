// slides.js

// Importar datos de los slides
const slides = [
    {
        title: "Desarrollador Full Stack",
        subtitle: "Transformando ideas en soluciones elegantes y escalables",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800&h=600",
        cta: {
            primary: "Contáctame",
            links: [
                { icon: "fab fa-github", url: "#" },
                { icon: "fab fa-linkedin", url: "#" }
            ]
        }
    },
    {
        title: "Experto en React",
        subtitle: "Creando experiencias web modernas y responsivas",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800&h=600",
        cta: {
            primary: "Ver Proyectos",
            links: [
                { icon: "fab fa-github", url: "#" },
                { icon: "fab fa-linkedin", url: "#" }
            ]
        }
    },
    {
        title: "Soluciones Innovadoras",
        subtitle: "Desarrollando aplicaciones web de última generación",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
        cta: {
            primary: "Explorar Más",
            links: [
                { icon: "fab fa-github", url: "#" },
                { icon: "fab fa-linkedin", url: "#" }
            ]
        }
    }
];

// Slider
let currentSlide = 0;
const slider = document.getElementById('slider');
const sliderDots = document.getElementById('sliderDots');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');

// Crear slides
function createSlides() {
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
        slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}" class="slide-image">
            <div class="slide-content">
                <div class="slide-text">
                    <h1 class="slide-title">${slide.title}</h1>
                    <p class="slide-subtitle">${slide.subtitle}</p>
                    <div class="slide-buttons">
                        <a href="#" class="btn primary">
                            ${slide.cta.primary} <i class="fas fa-arrow-right"></i>
                        </a>
                        <div class="social-links">
                            ${slide.cta.links.map(link => `
                                <a href="${link.url}" class="btn secondary">
                                    <i class="${link.icon}"></i>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        slider.appendChild(slideElement);

        // Crear dots
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
}

// Cambiar slide
function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Siguiente slide
function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

// Slide anterior
function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Eventos de botones
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Autoplay
let slideInterval = setInterval(nextSlide, 5000);

// Pausar autoplay al hover
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
});

// Inicializar slides
createSlides();
goToSlide(currentSlide);
