// ===== 1. Mobile Menu Logic =====
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

btn.addEventListener('click', () => menu.classList.toggle('hidden'));
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
});

// ===== 2. Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.replace('bg-white/95', 'glass-panel');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// ===== 3. Form Submission Modal Logic =====
const form = document.getElementById('contact-form');
const modal = document.getElementById('success-modal');
const modalContent = document.getElementById('modal-content');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
    }, 10);
    form.reset();
});

function closeModal() {
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// ===== 4. Scroll Animation Logic (Intersection Observer) =====
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .fade-in-left').forEach((el) => {
        // Check if element is already in viewport on page load
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top < window.innerHeight && rect.bottom >= 0);
        
        if (isVisible) {
            // Trigger animation immediately for visible elements
            setTimeout(() => {
                el.classList.add('visible');
            }, 100);
        } else {
            // Observe elements not yet visible
            observer.observe(el);
        }
    });
});
