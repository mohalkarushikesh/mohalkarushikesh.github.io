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
    // initNeuralNetwork(); // Temporarily disabled neural network animation
    initEnhancedAnimations(); // Initialize enhanced animations
    initTypingEffect(); // Initialize typing effect
    initRoleAnimation(); // Initialize role animation
    initEnhancedInteractions(); // Initialize enhanced interactions
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const logoLink = document.querySelector('a[href="#home"]');
    
    // Handle all navigation links
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
    
    // Handle logo click to go to top
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const footerThemeToggle = document.getElementById('footerThemeToggle');
    const html = document.documentElement;
    
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    
    // Initialize theme - default to light mode unless dark is explicitly saved
    if (savedTheme === 'dark') {
        html.classList.add('dark');
        updateDarkModeIcon(true);
    } else {
        // Default to light mode
        html.classList.remove('dark');
        updateDarkModeIcon(false);
        // Only set light theme if no theme is saved
        if (!savedTheme) {
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Function to toggle theme
    function toggleTheme() {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateDarkModeIcon(isDark);
        
        // Show notification for theme change
        showNotification(`Switched to ${isDark ? 'dark' : 'light'} mode`, 'info');
    }
    
    // Add event listeners for both toggles
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }
    
    if (footerThemeToggle) {
        footerThemeToggle.addEventListener('click', toggleTheme);
    }
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
        // Character counter for message textarea
        const messageTextarea = contactForm.querySelector('#message');
        const charCount = document.getElementById('charCount');
        
        if (messageTextarea && charCount) {
            messageTextarea.addEventListener('input', function() {
                const length = this.value.length;
                charCount.textContent = `${length}/500`;
                
                // Change color based on length
                if (length < 10) {
                    charCount.className = 'text-xs text-red-400';
                } else if (length > 400) {
                    charCount.className = 'text-xs text-yellow-400';
                } else {
                    charCount.className = 'text-xs text-gray-400';
                }
            });
        }
        
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
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = `
                <span class="relative z-10 flex items-center justify-center">
                    <div class="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    Sending...
                </span>
            `;
            submitBtn.classList.add('btn-loading');
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Reset form
                this.reset();
                if (charCount) charCount.textContent = '0/500';
                
                // Show success message
                showEnhancedNotification('Message sent successfully! I\'ll get back to you soon!', 'success');
                
                // Reset button
                submitBtn.innerHTML = originalContent;
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
            
            // Enhanced focus effects
            input.addEventListener('focus', function() {
                this.parentNode.style.transform = 'scale(1.02)';
                this.parentNode.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            });
            
            input.addEventListener('blur', function() {
                this.parentNode.style.transform = 'scale(1)';
                this.parentNode.style.boxShadow = 'none';
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
    
    // Load and display blogs from localStorage
    loadAndDisplayBlogs();
    
    // Initialize with sample blogs if none exist
    initializeSampleBlogs();
}

// Load and display blogs from localStorage
function loadAndDisplayBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const blogGrid = document.querySelector('#blogs .grid');
    
    if (blogGrid && blogs.length > 0) {
        // Clear existing static blogs
        blogGrid.innerHTML = '';
        
        // Add dynamic blogs
        blogs.forEach(blog => {
            const blogCard = createBlogCard(blog);
            blogGrid.appendChild(blogCard);
        });
    }
}

// Create a blog card element
function createBlogCard(blog) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', '200');
    
    const categoryColor = getCategoryColor(blog.category);
    
    card.innerHTML = `
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br ${categoryColor} flex items-center justify-center">
                <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-sm ${categoryColor.replace('bg-gradient-to-br', 'text').replace('to-', '')} font-medium">${blog.category}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">${blog.readTime} min read</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    ${blog.title}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    ${blog.description}
                </p>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-400">${formatDate(blog.date)}</span>
                    <div class="flex space-x-2">
                        <button onclick="viewBlogContent(${blog.id})" class="text-blue-600 dark:text-blue-400 hover:underline">Read More</button>
                        <button onclick="deleteBlog(${blog.id})" class="text-red-600 dark:text-red-400 hover:underline">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Get category color based on category
function getCategoryColor(category) {
    const colors = {
        'AI/ML': 'from-blue-400 to-indigo-600',
        'NLP': 'from-green-400 to-teal-600',
        'Deep Learning': 'from-purple-400 to-pink-600',
        'Reinforcement Learning': 'from-yellow-400 to-orange-600',
        'Computer Vision': 'from-red-400 to-pink-600',
        'Data Science': 'from-indigo-400 to-purple-600',
        'Machine Learning': 'from-blue-400 to-cyan-600',
        'Neural Networks': 'from-purple-400 to-indigo-600',
        'Python': 'from-green-400 to-blue-600',
        'Tutorial': 'from-orange-400 to-red-600'
    };
    
    return colors[category] || 'from-gray-400 to-gray-600';
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// View blog content
function viewBlogContent(blogId) {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const blog = blogs.find(b => b.id === blogId);
    
    if (!blog) {
        showNotification('Blog not found', 'error');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">${blog.title}</h3>
                <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="space-y-4">
                <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>${blog.category}</span>
                    <span>•</span>
                    <span>${blog.readTime} min read</span>
                    <span>•</span>
                    <span>${formatDate(blog.date)}</span>
                </div>
                <div class="prose dark:prose-invert max-w-none">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${blog.description}</p>
                    ${blog.content ? `<div class="mt-6 text-gray-700 dark:text-gray-300">${blog.content}</div>` : ''}
                </div>
                ${blog.tags ? `
                <div class="mt-6">
                    <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-2">Tags:</h4>
                    <div class="flex flex-wrap gap-2">
                        ${blog.tags.split(',').map(tag => `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">${tag.trim()}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Show blog modal for adding/editing blogs
function showBlogModal(action) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
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
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title *</label>
                    <input type="text" id="blogTitle" name="blogTitle" required placeholder="Enter blog title" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category *</label>
                    <select id="blogCategory" name="blogCategory" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                        <option value="">Select Category</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="NLP">NLP</option>
                        <option value="Deep Learning">Deep Learning</option>
                        <option value="Reinforcement Learning">Reinforcement Learning</option>
                        <option value="Computer Vision">Computer Vision</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Neural Networks">Neural Networks</option>
                        <option value="Python">Python</option>
                        <option value="Tutorial">Tutorial</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description *</label>
                    <textarea id="blogDescription" name="blogDescription" rows="6" required placeholder="Write a detailed description of your blog post. This will be displayed on the blog card." class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"></textarea>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Minimum 50 characters recommended</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content (Optional)</label>
                    <textarea id="blogContent" name="blogContent" rows="8" placeholder="Write the full blog content here. This will be used when someone clicks 'Read More'." class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"></textarea>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Full blog content (optional)</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Read Time (minutes) *</label>
                        <input type="number" id="blogReadTime" name="blogReadTime" min="1" max="60" required placeholder="5" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date *</label>
                        <input type="date" id="blogDate" name="blogDate" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags (Optional)</label>
                    <input type="text" id="blogTags" name="blogTags" placeholder="Enter tags separated by commas (e.g., python, ml, tutorial)" class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
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
    
    // Set default read time
    const readTimeInput = modal.querySelector('#blogReadTime');
    if (readTimeInput) {
        readTimeInput.value = '5';
    }
    
    // Handle form submission
    const form = modal.querySelector('#blogForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleBlogSubmission(action, form);
        modal.remove();
    });
    
    // Add character counter for description
    const descriptionTextarea = modal.querySelector('#blogDescription');
    if (descriptionTextarea) {
        descriptionTextarea.addEventListener('input', function() {
            const charCount = this.value.length;
            const counter = this.parentNode.querySelector('.char-counter') || document.createElement('div');
            counter.className = 'text-sm text-gray-500 dark:text-gray-400 mt-1 char-counter';
            counter.textContent = `${charCount} characters`;
            if (!this.parentNode.querySelector('.char-counter')) {
                this.parentNode.appendChild(counter);
            }
        });
    }
}

// Handle blog form submission
function handleBlogSubmission(action, form) {
    const formData = new FormData(form);
    const blogData = {
        title: formData.get('blogTitle') || document.getElementById('blogTitle').value,
        category: formData.get('blogCategory') || document.getElementById('blogCategory').value,
        description: formData.get('blogDescription') || document.getElementById('blogDescription').value,
        content: formData.get('blogContent') || document.getElementById('blogContent').value,
        readTime: formData.get('blogReadTime') || document.getElementById('blogReadTime').value,
        date: formData.get('blogDate') || document.getElementById('blogDate').value,
        tags: formData.get('blogTags') || document.getElementById('blogTags').value
    };
    
    // Validate required fields
    if (!blogData.title || !blogData.category || !blogData.description || !blogData.readTime || !blogData.date) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate description length
    if (blogData.description.length < 50) {
        showNotification('Description should be at least 50 characters long', 'error');
        return;
    }
    
    // Store blog data in localStorage for demo purposes
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const newBlog = {
        id: Date.now(),
        ...blogData,
        createdAt: new Date().toISOString()
    };
    
    if (action === 'add') {
        blogs.unshift(newBlog); // Add to beginning
    } else {
        // For edit, you would find and update the existing blog
        const existingIndex = blogs.findIndex(blog => blog.id === newBlog.id);
        if (existingIndex !== -1) {
            blogs[existingIndex] = newBlog;
        } else {
            blogs.unshift(newBlog);
        }
    }
    
    localStorage.setItem('blogs', JSON.stringify(blogs));
    
    // Show success message
    showNotification(`Blog ${action === 'add' ? 'added' : 'updated'} successfully!`, 'success');
    
    // Optionally refresh the blog display
    setTimeout(() => {
        location.reload(); // Simple refresh for demo
    }, 1000);
    
    console.log('Blog data:', blogData);
}

// Neural Network Background Animation
function initNeuralNetwork() {
    const canvas = document.getElementById('neuralCanvas');
    const ctx = canvas.getContext('2d');
    
    if (!canvas || !ctx) return;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Neural network nodes
    const nodes = [];
    const connections = [];
    
    // Create nodes
    function createNodes() {
        nodes.length = 0;
        connections.length = 0;
        
        const layers = 5;
        const nodesPerLayer = [4, 6, 8, 6, 4];
        
        for (let layer = 0; layer < layers; layer++) {
            const layerNodes = [];
            const x = (canvas.width / (layers - 1)) * layer;
            const spacing = canvas.height / (nodesPerLayer[layer] + 1);
            
            for (let i = 0; i < nodesPerLayer[layer]; i++) {
                const y = spacing * (i + 1);
                const node = {
                    x: x,
                    y: y,
                    radius: 6, // Increased from 4
                    layer: layer,
                    connections: []
                };
                layerNodes.push(node);
                nodes.push(node);
            }
            
            // Create connections to next layer
            if (layer < layers - 1) {
                const nextLayerNodes = [];
                const nextX = (canvas.width / (layers - 1)) * (layer + 1);
                const nextSpacing = canvas.height / (nodesPerLayer[layer + 1] + 1);
                
                for (let i = 0; i < nodesPerLayer[layer + 1]; i++) {
                    const nextY = nextSpacing * (i + 1);
                    const nextNode = {
                        x: nextX,
                        y: nextY,
                        radius: 6, // Increased from 4
                        layer: layer + 1,
                        connections: []
                    };
                    nextLayerNodes.push(nextNode);
                    nodes.push(nextNode);
                }
                
                // Connect nodes between layers
                layerNodes.forEach(node => {
                    nextLayerNodes.forEach(nextNode => {
                        if (Math.random() > 0.7) { // 30% connection probability
                            const connection = {
                                from: node,
                                to: nextNode,
                                opacity: Math.random() * 0.7 + 0.3 // Increased opacity range
                            };
                            connections.push(connection);
                            node.connections.push(connection);
                }
            });
        });
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        connections.forEach(connection => {
            const gradient = ctx.createLinearGradient(
                connection.from.x, connection.from.y,
                connection.to.x, connection.to.y
            );
            gradient.addColorStop(0, `rgba(59, 130, 246, ${connection.opacity})`);
            gradient.addColorStop(0.5, `rgba(139, 92, 246, ${connection.opacity})`);
            gradient.addColorStop(1, `rgba(236, 72, 153, ${connection.opacity})`); // Added pink
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2; // Increased from 1
            ctx.beginPath();
            ctx.moveTo(connection.from.x, connection.from.y);
            ctx.lineTo(connection.to.x, connection.to.y);
            ctx.stroke();
        });
        
        // Draw nodes
        nodes.forEach(node => {
            const gradient = ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, node.radius
            );
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.9)'); // Increased opacity
            gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.7)');
            gradient.addColorStop(1, 'rgba(236, 72, 153, 0.5)'); // Added pink
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Add glow effect
            ctx.shadowColor = 'rgba(59, 130, 246, 0.8)'; // Increased opacity
            ctx.shadowBlur = 15; // Increased from 10
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        });
        
        // Animate data flow
        const time = Date.now() * 0.001;
        connections.forEach((connection, index) => {
            const progress = (time + index * 0.1) % 2;
            if (progress < 1) {
                const x = connection.from.x + (connection.to.x - connection.from.x) * progress;
                const y = connection.from.y + (connection.to.y - connection.from.y) * progress;
                
                ctx.fillStyle = 'rgba(16, 185, 129, 0.9)'; // Increased opacity
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2); // Increased size from 2
                ctx.fill();
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    // Initialize and start animation
    createNodes();
    animate();
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
    initNeuralNetwork,
    viewBlogContent,
    loadAndDisplayBlogs
};

// Delete blog function
function deleteBlog(blogId) {
    if (confirm('Are you sure you want to delete this blog post?')) {
        const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        const updatedBlogs = blogs.filter(blog => blog.id !== blogId);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
        
        showNotification('Blog deleted successfully!', 'success');
        
        // Reload the blog display
        setTimeout(() => {
            loadAndDisplayBlogs();
        }, 500);
    }
}

// Initialize sample blogs
function initializeSampleBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    
    if (blogs.length === 0) {
        const sampleBlogs = [
            {
                id: Date.now() - 3,
                title: "Understanding Restricted Boltzmann Machines (RBM)",
                category: "Deep Learning",
                description: "A comprehensive guide to understanding Restricted Boltzmann Machines, their architecture, and applications in recommendation systems. Learn how RBMs can learn latent factors from user-item interactions.",
                content: `# Understanding Restricted Boltzmann Machines (RBM)

                        ## Introduction
                        Restricted Boltzmann Machines (RBMs) are generative stochastic neural networks that can learn probability distributions over their inputs. They are particularly useful in recommendation systems and collaborative filtering.

                        ## Architecture
                        RBMs consist of two layers:
                        - **Visible Layer**: Represents the input data (e.g., user ratings)
                        - **Hidden Layer**: Learns latent features that capture underlying patterns

                        ## Key Features
                        1. **No Intra-layer Connections**: Unlike general Boltzmann Machines, RBMs have no connections within the same layer
                        2. **Bipartite Graph Structure**: Only connections between visible and hidden layers
                        3. **Energy-based Model**: Uses energy functions to model probability distributions

                        ## Applications in Recommendation Systems
                        RBMs excel in collaborative filtering because they can:
                        - Handle missing data naturally
                        - Learn latent factors from sparse user-item matrices
                        - Provide personalized recommendations

                        ## Training Process
                        The training involves Contrastive Divergence (CD):
                        1. **Positive Phase**: Update hidden layer based on visible layer
                        2. **Negative Phase**: Reconstruct visible layer from hidden layer
                        3. **Parameter Updates**: Adjust weights and biases based on the difference

                        ## Implementation Example

                        ```python
                        class RBM:
                            def __init__(self, nv, nh):
                                self.W = torch.randn(nh, nv)
                                self.a = torch.randn(1, nh)
                                self.b = torch.randn(1, nv)
                            
                            def sample_h(self, x):
                                wx = torch.mm(x, self.W.t())
                                activation = wx + self.a.expand_as(wx)
                                p_h_given_v = torch.sigmoid(activation)
                                return p_h_given_v, torch.bernoulli(p_h_given_v)
                        ```

## Results
In our movie recommendation system, we achieved:
- **Training MAE**: 0.2470
- **Test MAE**: 0.2544
- **Performance**: Excellent (MAE < 0.3)

## Conclusion
RBMs provide an elegant solution for collaborative filtering problems, offering both theoretical soundness and practical effectiveness.`,
                readTime: 8,
                date: "2024-01-15",
                tags: "rbm, deep learning, recommendation systems, collaborative filtering"
            },
            {
                id: Date.now() - 2,
                title: "Time Series Forecasting with LSTM Networks",
                category: "Deep Learning",
                description: "Explore how Long Short-Term Memory (LSTM) networks can be used for time series forecasting, specifically for stock price prediction. Learn about sequence modeling and temporal dependencies.",
                content: `# Time Series Forecasting with LSTM Networks

## Introduction
Long Short-Term Memory (LSTM) networks are a type of recurrent neural network designed to handle sequential data and long-term dependencies. They are particularly effective for time series forecasting tasks.

## Why LSTM for Time Series?
LSTM networks excel at time series forecasting because they can:
- **Remember Long-term Dependencies**: Unlike simple RNNs, LSTMs can maintain information over long sequences
- **Handle Variable Length Sequences**: Adapt to different input sequence lengths
- **Learn Complex Patterns**: Capture non-linear relationships in temporal data

## Architecture Overview
LSTM cells contain three gates:
1. **Input Gate**: Controls what new information to store
2. **Forget Gate**: Decides what information to discard
3. **Output Gate**: Determines what information to output

## Stock Price Prediction Implementation
For Google stock price prediction, we used:
- **Input Window**: 60 days of historical prices
- **Output**: Next day's predicted price
- **Architecture**: LSTM layers with dropout for regularization

## Data Preprocessing

```python
# Normalize the data
scaler = MinMaxScaler()
scaled_data = scaler.fit_transform(dataset)

# Create sequences
X, y = [], []
for i in range(60, len(scaled_data)):
    X.append(scaled_data[i-60:i, 0])
    y.append(scaled_data[i, 0])
```

## Model Architecture
```python
model = Sequential([
    LSTM(50, return_sequences=True, input_shape=(60, 1)),
    Dropout(0.2),
    LSTM(50, return_sequences=False),
    Dropout(0.2),
    Dense(1)
])
```

## Training Process
- **Loss Function**: Mean Squared Error (MSE)
- **Optimizer**: Adam
- **Batch Size**: 32
- **Epochs**: 50

## Results and Analysis
The model successfully captured:
- **Trend Patterns**: Long-term price movements
- **Seasonal Patterns**: Recurring price cycles
- **Volatility**: Price fluctuation patterns

## Challenges and Solutions
1. **Overfitting**: Addressed with dropout layers
2. **Data Sparsity**: Handled with proper normalization
3. **Non-stationarity**: Managed through window-based approach

## Future Improvements
- **Multi-variate Input**: Include volume, technical indicators
- **Attention Mechanisms**: Focus on relevant time steps
- **Ensemble Methods**: Combine multiple models for better predictions`,
                readTime: 12,
                date: "2024-01-10",
                tags: "lstm, time series, forecasting, stock prediction, deep learning"
            },
            {
                id: Date.now() - 1,
                title: "Medical Image Analysis with Convolutional Neural Networks",
                category: "Computer Vision",
                description: "Discover how CNN architectures are revolutionizing medical image analysis for disease detection. Learn about preprocessing techniques and model architectures for healthcare applications.",
                content: `# Medical Image Analysis with Convolutional Neural Networks

## Introduction
Convolutional Neural Networks (CNNs) have revolutionized medical image analysis, enabling automated detection and diagnosis of various diseases with high accuracy.

## Medical Imaging Challenges
Medical image analysis presents unique challenges:
- **Limited Data**: Medical datasets are often small
- **Class Imbalance**: Normal cases often outnumber disease cases
- **High Stakes**: Errors can have serious consequences
- **Variability**: Images vary in quality, orientation, and lighting

## CNN Architecture for Medical Images
### Key Components:
1. **Convolutional Layers**: Extract hierarchical features
2. **Pooling Layers**: Reduce spatial dimensions
3. **Fully Connected Layers**: Final classification
4. **Batch Normalization**: Stabilize training
5. **Dropout**: Prevent overfitting

## Disease Detection Applications

### 1. Lung Cancer Detection
- **Dataset**: CT scan images
- **Architecture**: ResNet-50 with transfer learning
- **Preprocessing**: Normalization, augmentation
- **Results**: High precision for early detection

### 2. Pneumonia Detection
- **Dataset**: Chest X-ray images
- **Architecture**: Custom CNN with attention
- **Challenge**: Binary classification (Normal vs Pneumonia)
- **Performance**: 95%+ accuracy

### 3. Cat vs Dog Classification
- **Dataset**: Pet images
- **Purpose**: Foundation for medical image analysis
- **Techniques**: Transfer learning, data augmentation

## Preprocessing Techniques
```python
# Image preprocessing pipeline
def preprocess_medical_image(image):
    # Resize to standard dimensions
    image = cv2.resize(image, (224, 224))
    
    # Normalize pixel values
    image = image / 255.0
    
    # Apply data augmentation
    image = apply_augmentation(image)
    
    return image
```

## Model Architecture
```python
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Conv2D(128, (3, 3), activation='relu'),
    GlobalAveragePooling2D(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(1, activation='sigmoid')
])
```

## Training Strategies
1. **Transfer Learning**: Use pre-trained models (ResNet, VGG)
2. **Data Augmentation**: Rotation, scaling, flipping
3. **Class Balancing**: Oversampling, weighted loss
4. **Cross-validation**: K-fold validation for robust evaluation

## Evaluation Metrics
- **Accuracy**: Overall correct predictions
- **Precision**: True positives / (True positives + False positives)
- **Recall**: True positives / (True positives + False negatives)
- **F1-Score**: Harmonic mean of precision and recall
- **AUC-ROC**: Area under the receiver operating characteristic curve

## Ethical Considerations
- **Patient Privacy**: Ensure data anonymization
- **Bias Detection**: Monitor for demographic biases
- **Transparency**: Explainable AI for medical decisions
- **Validation**: Extensive testing before deployment

## Future Directions
1. **Multi-modal Fusion**: Combine different imaging modalities
2. **3D CNNs**: Process volumetric data
3. **Attention Mechanisms**: Focus on relevant image regions
4. **Federated Learning**: Train across multiple institutions

## Conclusion
CNNs have become indispensable tools in medical image analysis, offering both high accuracy and interpretability for clinical applications.`,
                readTime: 15,
                date: "2024-01-05",
                tags: "cnn, medical imaging, computer vision, healthcare, deep learning"
            }
        ];
        
        localStorage.setItem('blogs', JSON.stringify(sampleBlogs));
        loadAndDisplayBlogs();
    }
}

// Make functions globally available
window.viewBlogContent = viewBlogContent;
window.deleteBlog = deleteBlog;

// Enhanced Animations and Interactions
function initEnhancedAnimations() {
    // Add intersection observer for enhanced animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                // Add staggered animations for project cards
                if (entry.target.classList.contains('project-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }, delay);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for enhanced animations
    const animateElements = document.querySelectorAll('.project-card, .blog-card, .skill-tag');
    animateElements.forEach(el => {
        el.style.transform = 'translateY(30px)';
        el.style.opacity = '0';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Typing Effect Animation
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const text = typingText.textContent;
    typingText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Role Animation Enhancement
function initRoleAnimation() {
    const roleContainer = document.querySelector('.role-animation');
    if (!roleContainer) return;
    
    // Add smooth transitions between roles
    const roleTexts = roleContainer.querySelectorAll('.role-text');
    roleTexts.forEach((text, index) => {
        text.style.transition = 'all 0.5s ease-in-out';
        text.style.opacity = index === 0 ? '1' : '0';
        text.style.transform = index === 0 ? 'translateY(0)' : 'translateY(20px)';
    });
}

// Enhanced Interactions
function initEnhancedInteractions() {
    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
            this.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Enhanced card interactions
    const cards = document.querySelectorAll('.project-card, .blog-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02) translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Enhanced skill tag interactions
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
            this.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Enhanced navigation link effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Enhanced form input effects
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.style.transform = 'scale(1)';
        });
    });
    
    // Enhanced social link effects
    const socialLinks = document.querySelectorAll('.social-link-hover');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Enhanced notification system
function showEnhancedNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full max-w-sm`;
    
    // Set notification content based on type
    switch (type) {
        case 'success':
            notification.className += ' bg-green-500 text-white border-l-4 border-green-600';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white border-l-4 border-red-600';
            break;
        case 'warning':
            notification.className += ' bg-yellow-500 text-white border-l-4 border-yellow-600';
            break;
        default:
            notification.className += ' bg-blue-500 text-white border-l-4 border-blue-600';
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <div class="flex-shrink-0">
                ${type === 'success' ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' :
                  type === 'error' ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>' :
                  '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>'}
            </div>
            <div class="ml-3">
                <p class="text-sm font-medium">${message}</p>
            </div>
            <div class="ml-auto pl-3">
                <button class="text-white hover:text-gray-200" onclick="this.parentNode.parentNode.parentNode.remove()">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after duration
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Enhanced scroll animations
function initEnhancedScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
                
                // Add progress bar animation for skills
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-progress') || '100%';
                    }, index * 200);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections for enhanced animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}

// Initialize enhanced scroll animations
document.addEventListener('DOMContentLoaded', function() {
    initEnhancedScrollAnimations();
}); 