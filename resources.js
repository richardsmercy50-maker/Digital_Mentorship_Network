// Category Filtering
const categoryCards = document.querySelectorAll('.category-card');
const resourceCards = document.querySelectorAll('.resource-card');

categoryCards.forEach(card => {
  card.addEventListener('click', function() {
    // Remove active class from all cards
    categoryCards.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked card
    this.classList.add('active');
    
    // Get selected category
    const selectedCategory = this.getAttribute('data-category');
    
    // Filter resources
    resourceCards.forEach(resource => {
      const resourceCategory = resource.getAttribute('data-category');
      
      if (selectedCategory === 'all') {
        // Show all resources
        resource.style.display = 'block';
        setTimeout(() => {
          resource.style.opacity = '1';
          resource.style.transform = 'translateY(0)';
        }, 10);
      } else if (resourceCategory === selectedCategory) {
        // Show matching resources
        resource.style.display = 'block';
        setTimeout(() => {
          resource.style.opacity = '1';
          resource.style.transform = 'translateY(0)';
        }, 10);
      } else {
        // Hide non-matching resources
        resource.style.opacity = '0';
        resource.style.transform = 'translateY(20px)';
        setTimeout(() => {
          resource.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Add transition styles for smooth filtering
resourceCards.forEach(card => {
  card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// CTA Button functionality
const ctaBtn = document.querySelector('.cta-btn');

if (ctaBtn) {
  ctaBtn.addEventListener('click', function() {
    alert('Thank you for your interest! We will add a resource request form soon.');
    // In a real application, this would open a modal or redirect to a form page
  });
}

// Resource button click tracking (optional)
const resourceButtons = document.querySelectorAll('.resource-btn');

resourceButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const resourceTitle = this.closest('.resource-card').querySelector('h3').textContent;
    console.log(`User clicked: ${resourceTitle}`);
    
    // Show a message (in real app, this would download or open the resource)
    alert(`Opening: ${resourceTitle}`);
    
    // In a real application, you might track this click or initiate a download
  });
});

// Smooth scroll for navigation links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// Add animation on scroll (optional)
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

// Observe all resource cards for scroll animation
resourceCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  observer.observe(card);
});