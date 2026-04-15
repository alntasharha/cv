// Language switching function
function switchLang(lang) {
    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('btn-' + lang).classList.add('active');
    
    // Show/hide content based on language
    document.querySelectorAll('.lang-fr').forEach(el => {
        el.style.display = lang === 'fr' ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = lang === 'en' ? '' : 'none';
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    
    // Save preference to localStorage
    localStorage.setItem('preferred-lang', lang);
}

// Animation au scroll pour les sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.sidebar-section, .main-section, .experience-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Animation des compétences au chargement
    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }, 300);
    
    // Check for saved language preference or default to French
    const savedLang = localStorage.getItem('preferred-lang') || 'fr';
    switchLang(savedLang);
});

// Smooth scroll pour les ancres (si ajoutées plus tard)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
