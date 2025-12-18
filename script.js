// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Smooth scroll with offset for fixed navbar
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enquiry Form WhatsApp Integration
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('enquiry-name').value;
        const phone = document.getElementById('enquiry-phone').value;
        const email = document.getElementById('enquiry-email').value;
        const roomType = document.getElementById('enquiry-room-type').value;
        const roomSharing = document.getElementById('enquiry-sharing').value;
        
        // Format WhatsApp message
        let whatsappMessage = `*New Enquiry - Dakshit Luxury PG*\n\n`;
        whatsappMessage += `*Name:* ${name}\n`;
        whatsappMessage += `*Phone:* ${phone}\n`;
        if (email) {
            whatsappMessage += `*Email:* ${email}\n`;
        }
        whatsappMessage += `*Room Type:* ${roomType.charAt(0).toUpperCase() + roomType.slice(1)} Sharing\n`;
        whatsappMessage += `*Room Preference:* ${roomSharing === 'ac' ? 'AC Room' : 'Non-AC Room'}\n`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp number (7702051836)
        const whatsappNumber = '917702051836';
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Reset form
        this.reset();
    });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.amenity-card, .room-card, .testimonial-card, .contact-info-card');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroPattern = document.querySelector('.hero-pattern');
    if (heroPattern) {
        heroPattern.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active class to navbar links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    revealOnScroll();
});

// Performance optimization - Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll event listener with debounce
window.addEventListener('scroll', debounce(revealOnScroll, 10));

// Testimonials Slider - Auto Sliding
let currentTestimonial = 0;
const testimonialSlider = document.querySelector('.testimonials-slider');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let testimonialInterval;
let isUserInteracting = false;

function showTestimonial(index) {
    if (!testimonialSlider || testimonialSlides.length === 0) return;
    
    if (index >= testimonialSlides.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonialSlides.length - 1;
    } else {
        currentTestimonial = index;
    }
    
    testimonialSlider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    testimonialDots.forEach((dot, i) => {
        if (i === currentTestimonial) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextTestimonial() {
    showTestimonial(currentTestimonial + 1);
}

function prevTestimonial() {
    showTestimonial(currentTestimonial - 1);
}

function startTestimonialAutoplay() {
    if (testimonialInterval) {
        clearInterval(testimonialInterval);
    }
    testimonialInterval = setInterval(() => {
        if (!isUserInteracting) {
            nextTestimonial();
        }
    }, 4000);
}

function stopTestimonialAutoplay() {
    clearInterval(testimonialInterval);
}

if (testimonialSlider) {
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            isUserInteracting = true;
            showTestimonial(index);
            setTimeout(() => {
                isUserInteracting = false;
            }, 8000);
        });
    });
    
    testimonialSlider.parentElement.addEventListener('mouseenter', () => {
        isUserInteracting = true;
    });
    
    testimonialSlider.parentElement.addEventListener('mouseleave', () => {
        isUserInteracting = false;
    });
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    testimonialSlider.parentElement.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isUserInteracting = true;
    }, { passive: true });
    
    testimonialSlider.parentElement.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        setTimeout(() => {
            isUserInteracting = false;
        }, 8000);
    }, { passive: true });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextTestimonial();
        }
        if (touchEndX > touchStartX + 50) {
            prevTestimonial();
        }
    }
    
    startTestimonialAutoplay();
}

// Counter Animation for Stats
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

function animateCounter(counter) {
    const target = parseFloat(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    const isDecimal = target % 1 !== 0;
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = isDecimal ? target.toFixed(1) : target;
        }
    };
    
    updateCounter();
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            counters.forEach(counter => {
                animateCounter(counter);
            });
        }
    });
}, {
    threshold: 0.5
});

const statsSection = document.querySelector('.counter');
if (statsSection && statsSection.parentElement) {
    statsObserver.observe(statsSection.closest('section'));
}

// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    // Initial reveal check
    revealOnScroll();
    
    // Add loading animation complete class
    document.body.classList.add('loaded');
});