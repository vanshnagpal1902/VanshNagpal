document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    toggleButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
        const icon = toggleButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
});

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}

// Function to handle fade effect
function handleFadeEffect() {
    const elements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right, #projects, .project-card');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        } else {
            // Only remove 'visible' class from project cards, not the entire projects section
            if (!element.id || element.id !== 'projects') {
                element.classList.remove('visible');
            }
        }
    });
}

// Add animation classes to elements
function addAnimationClasses() {
    document.querySelectorAll('.hero-text h2, .hero-text h1').forEach(el => el.classList.add('fade-in'));
    document.querySelector('.hero-image').classList.add('scale-in');
    
    document.querySelectorAll('.skill-box:nth-child(odd)').forEach(el => el.classList.add('slide-in-left'));
    document.querySelectorAll('.skill-box:nth-child(even)').forEach(el => el.classList.add('slide-in-right'));
    
    document.querySelectorAll('.project-card:nth-child(odd)').forEach(el => el.classList.add('slide-in-left'));
    document.querySelectorAll('.project-card:nth-child(even)').forEach(el => el.classList.add('slide-in-right'));
    
    document.querySelectorAll('.achievement-card:nth-child(odd)').forEach(el => el.classList.add('slide-in-left'));
    document.querySelectorAll('.achievement-card:nth-child(even)').forEach(el => el.classList.add('slide-in-right'));
    
    // Update project cards animation
    document.querySelectorAll('.project-card').forEach(el => {
        el.classList.remove('slide-in-left', 'slide-in-right');
        // Ensure the project-card class is applied
        el.classList.add('project-card');
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    addAnimationClasses();
    handleFadeEffect();
});

// Listen for scroll events
window.addEventListener('scroll', handleFadeEffect);

// Add stagger effect to elements
function addStaggerEffect(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.2}s`; // Increased delay for more noticeable stagger
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addStaggerEffect('.skill-box');
    addStaggerEffect('.project-card');
    addStaggerEffect('.achievement-card');
});
