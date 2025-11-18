// for the dropdown menu nav bar
const bars = document.getElementById("menuBar");
const navLinks = document.querySelector('.nav-links');
const navButtons = document.querySelector('.nav-buttons');

bars.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    navButtons.classList.toggle("show");
})

const dropBtn = document.querySelector('.drop-btn');

dropBtn.addEventListener("click", (e)=> {
    if (window.innerWidth <= 900) {
       e.preventDefault();
       document.querySelector('.dropdown-content').classList.toggle("show");
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe metric cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate numbers on scroll
    /** 
    const animateNumbers = () => {
        const metrics = [
            { element: document.querySelectorAll('.metric-number')[0], target: 10000, suffix: '+' },
            { element: document.querySelectorAll('.metric-number')[1], target: 2500, suffix: '+' },
            { element: document.querySelectorAll('.metric-number')[2], target: 50, suffix: '+' }
        ];

        metrics.forEach(({ element, target, suffix }) => {
            if (!element) return;
            
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            let hasAnimated = false;

            const metricObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            element.textContent = Math.floor(current).toLocaleString() + suffix;
                        }, 16);
                    }
                });
            }, { threshold: 0.5 });

            metricObserver.observe(element);
        });
    };
    */

    animateNumbers();

    // Add hover effect to hero buttons (not navbar buttons - preserving collaborator's work)
    const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.style.transform.includes('translateY')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (this.style.transform.includes('translateY(-2px)')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Add parallax effect to hero image
    /** 
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.3;
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
    */

    // REMOVED: Floating animation for hero badge (now stable as requested)

    // Add ripple effect to hero buttons only
    const addRippleEffect = (e) => {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    // Only add ripple to hero buttons, not navbar buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.addEventListener('click', addRippleEffect);
    });

    // Add CSS for ripple effect dynamically
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Navbar scroll effect (subtle enhancement without changing collaborator's work)
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Success card entrance animation trigger
    const successCard = document.querySelector('.success-card');
    if (successCard) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    successCard.style.animation = 'slideUp 0.6s ease-out';
                }
            });
        }, { threshold: 0.3 });

        cardObserver.observe(successCard);
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any position-dependent elements
        console.log('Window resized');
    }, 250);
});

// Log page load for analytics (placeholder)
window.addEventListener('load', () => {
    console.log('HerMentor landing page loaded successfully');
});

// For the dynamic text content
const quotes = [
    "“Behind every successful person is a mentor who believed in them.”",
    "“When you light another’s candle, yours doesn’t dim.”",
    "“Mentorship turns potential into performance.”"
];

const container = document.querySelector('.dynamic-quote-container');
let currentIndex = 0;

function slideQuote() {
    const currentQuote = container.querySelector('.dynamic-quote');
    
    // Create new quote element
    const nextQuote = document.createElement('p');
    nextQuote.className = 'dynamic-quote';
    nextQuote.textContent = quotes[(currentIndex + 1) % quotes.length];
    container.appendChild(nextQuote);
    
    // Trigger sliding
    setTimeout(() => {
        currentQuote.classList.add('exit'); // slide current left
        nextQuote.classList.add('active'); // slide next into view
    }, 50); // slight delay to allow DOM to register
    
    // Remove old quote after animation
    setTimeout(() => {
        currentQuote.remove();
        currentIndex = (currentIndex + 1) % quotes.length;
    }, 1050); // 1s + small buffer
}

// Start rotating every 4 seconds
setInterval(slideQuote, 4000);