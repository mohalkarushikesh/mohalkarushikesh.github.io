// AI/ML Portfolio JavaScript

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initDarkMode();
    initMobileMenu();
    initSmoothScrolling();
    initBackToTop();
    initContactForm();
    initNavbarScroll();
    initProjectCards();
    initBlogManagement();
    // initNeuralNetwork(); // DISABLED - Neural network animation removed
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
}

// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    
    // Force light mode as default, only use dark if explicitly saved
    if (savedTheme === 'dark') {
        html.classList.add('dark');
        updateDarkModeIcon(true);
    } else {
        // Always ensure light mode is active by default
        html.classList.remove('dark');
        updateDarkModeIcon(false);
        localStorage.setItem('theme', 'light');
    }
    
    darkModeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateDarkModeIcon(isDark);
    });
}

// Update dark mode icon
function updateDarkModeIcon(isDark) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('svg');
    
    if (isDark) {
        // Moon icon (dark mode active)
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    } else {
        // Sun icon (light mode active)
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Update hamburger icon
            const icon = this.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                // Hamburger icon
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                // Close icon
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
    }
}

// Smooth scrolling for all internal links
function initSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Back to top button functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
                backToTopBtn.classList.remove('opacity-0', 'invisible');
            } else {
                backToTopBtn.classList.remove('visible');
                backToTopBtn.classList.add('opacity-0', 'invisible');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!validateForm(name, email, message)) {
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.classList.add('btn-loading');
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Reset form
                this.reset();
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.classList.remove('btn-loading');
                submitBtn.disabled = false;
            }, 2000);
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

// Form validation
function validateForm(name, email, message) {
    let isValid = true;
    
    // Name validation
    if (!name || name.trim().length < 2) {
        showFieldError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Message validation
    if (!message || message.trim().length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

// Show field error
function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    if (field) {
        field.classList.add('form-error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-600 dark:text-red-400 text-sm mt-1';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('form-error');
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    switch (fieldName) {
        case 'name':
            if (!value || value.length < 2) {
                showFieldError('name', 'Name must be at least 2 characters long');
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value || !emailRegex.test(value)) {
                showFieldError('email', 'Please enter a valid email address');
            }
            break;
        case 'message':
            if (!value || value.length < 10) {
                showFieldError('message', 'Message must be at least 10 characters long');
            }
            break;
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Set notification content based on type
    switch (type) {
        case 'success':
            notification.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white';
            break;
        default:
            notification.className += ' bg-blue-500 text-white';
    }
    
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('shadow-lg', 'bg-white/95', 'dark:bg-gray-900/95');
                navbar.classList.remove('bg-white/90', 'dark:bg-gray-900/90');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-white/95', 'dark:bg-gray-900/95');
                navbar.classList.add('bg-white/90', 'dark:bg-gray-900/90');
            }
        });
    }
}

// Project cards interaction
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add click handler for project links
        const projectLink = card.querySelector('a[href="#"]');
        if (projectLink) {
            projectLink.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('Project link clicked! (Replace with actual project URL)', 'info');
            });
        }
    });
}

// Skill tags animation
function initSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize skill tags
document.addEventListener('DOMContentLoaded', function() {
    initSkillTags();
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        }
    }
    
    // Ctrl/Cmd + K to toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.click();
        }
    }
});

// Intersection Observer for animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.project-card, .skill-tag');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize intersection observer
document.addEventListener('DOMContentLoaded', function() {
    initIntersectionObserver();
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll events here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Analytics tracking (replace with your analytics service)
function trackEvent(eventName, eventData = {}) {
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Example: Custom analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track form submissions
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            trackEvent('contact_form_submitted', {
                form_name: 'contact_form'
            });
        });
    }
    
    // Track project clicks
    const projectLinks = document.querySelectorAll('.project-card a');
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
            trackEvent('project_clicked', {
                project_title: projectTitle
            });
        });
    });
});

// Accessibility improvements
function initAccessibility() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('#home');
    if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('role', 'main');
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function() {
    initAccessibility();
});

// Blog management functionality
function initBlogManagement() {
    const addBlogBtn = document.getElementById('addBlogBtn');
    const editBlogBtn = document.getElementById('editBlogBtn');
    
    if (addBlogBtn) {
        addBlogBtn.addEventListener('click', function() {
            showBlogModal('add');
        });
    }
    
    if (editBlogBtn) {
        editBlogBtn.addEventListener('click', function() {
            showBlogModal('edit');
        });
    }
}

// Show blog modal for adding/editing blogs
function showBlogModal(action) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl mx-4">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    ${action === 'add' ? 'Add New Blog' : 'Edit Blog'}
                </h3>
                <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <form id="blogForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input type="text" id="blogTitle" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <select id="blogCategory" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                        <option value="">Select Category</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="NLP">NLP</option>
                        <option value="Deep Learning">Deep Learning</option>
                        <option value="Reinforcement Learning">Reinforcement Learning</option>
                        <option value="Computer Vision">Computer Vision</option>
                        <option value="Data Science">Data Science</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea id="blogDescription" rows="4" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Read Time (minutes)</label>
                        <input type="number" id="blogReadTime" min="1" max="60" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                        <input type="date" id="blogDate" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                    </div>
                </div>
                <div class="flex justify-end space-x-4 pt-4">
                    <button type="button" onclick="this.closest('.fixed').remove()" class="px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" class="btn-primary">
                        ${action === 'add' ? 'Add Blog' : 'Update Blog'}
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Set default date to today
    const dateInput = modal.querySelector('#blogDate');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
    
    // Handle form submission
    const form = modal.querySelector('#blogForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleBlogSubmission(action, form);
        modal.remove();
    });
}

// Handle blog form submission
function handleBlogSubmission(action, form) {
    const formData = new FormData(form);
    const blogData = {
        title: formData.get('blogTitle') || document.getElementById('blogTitle').value,
        category: formData.get('blogCategory') || document.getElementById('blogCategory').value,
        description: formData.get('blogDescription') || document.getElementById('blogDescription').value,
        readTime: formData.get('blogReadTime') || document.getElementById('blogReadTime').value,
        date: formData.get('blogDate') || document.getElementById('blogDate').value
    };
    
    // Here you would typically send this data to your backend
    // For now, we'll just show a success message
    showNotification(`Blog ${action === 'add' ? 'added' : 'updated'} successfully!`, 'success');
    
    // In a real application, you would:
    // 1. Send data to your backend API
    // 2. Update the DOM with the new blog post
    // 3. Store in localStorage or database
    console.log('Blog data:', blogData);
}

// Neural Network Background Animation
function initNeuralNetwork() {
    const neuralBg = document.getElementById('neuralNetworkBg');
    if (!neuralBg) return;
    
    // Create neural layers
    const layers = [
        { class: 'neural-layer-1', nodes: 4 },
        { class: 'neural-layer-2', nodes: 6 },
        { class: 'neural-layer-3', nodes: 8 },
        { class: 'neural-layer-4', nodes: 6 },
        { class: 'neural-layer-5', nodes: 4 }
    ];
    
    layers.forEach((layer, layerIndex) => {
        const layerElement = document.createElement('div');
        layerElement.className = `neural-layer ${layer.class}`;
        
        // Create nodes for this layer
        for (let i = 0; i < layer.nodes; i++) {
            const node = document.createElement('div');
            node.className = 'neural-node';
            node.style.animationDelay = `${Math.random() * 2}s`;
            layerElement.appendChild(node);
        }
        
        neuralBg.appendChild(layerElement);
    });
    
    // Create connections between layers
    createConnections();
    
    // Create data particles
    createDataParticles();
}

// Create connections between neural nodes
function createConnections() {
    const neuralBg = document.getElementById('neuralNetworkBg');
    const layers = neuralBg.querySelectorAll('.neural-layer');
    
    for (let i = 0; i < layers.length - 1; i++) {
        const currentLayer = layers[i];
        const nextLayer = layers[i + 1];
        const currentNodes = currentLayer.querySelectorAll('.neural-node');
        const nextNodes = nextLayer.querySelectorAll('.neural-node');
        
        // Create connections between nodes
        currentNodes.forEach((currentNode, currentIndex) => {
            nextNodes.forEach((nextNode, nextIndex) => {
                if (Math.random() > 0.7) { // 30% chance of connection
                    const connection = document.createElement('div');
                    connection.className = 'neural-connection';
                    
                    // Calculate connection position and angle
                    const currentRect = currentNode.getBoundingClientRect();
                    const nextRect = nextNode.getBoundingClientRect();
                    
                    const startX = currentRect.left + currentRect.width / 2;
                    const startY = currentRect.top + currentRect.height / 2;
                    const endX = nextRect.left + nextRect.width / 2;
                    const endY = nextRect.top + nextRect.height / 2;
                    
                    const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
                    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
                    
                    connection.style.width = `${length}px`;
                    connection.style.left = `${startX}px`;
                    connection.style.top = `${startY}px`;
                    connection.style.transform = `rotate(${angle}deg)`;
                    connection.style.transformOrigin = '0 0';
                    connection.style.animationDelay = `${Math.random() * 4}s`;
                    
                    neuralBg.appendChild(connection);
                }
            });
        });
    }
}

// Create animated data particles
function createDataParticles() {
    const neuralBg = document.getElementById('neuralNetworkBg');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        neuralBg.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }, 2000);
}

// Export functions for potential external use
window.PortfolioApp = {
    trackEvent,
    showNotification,
    validateForm,
    initDarkMode,
    initMobileMenu,
    showBlogModal,
    handleBlogSubmission,
    initNeuralNetwork
}; 