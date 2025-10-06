// /* ===== MAIN JS - Core Functionality ===== */

// // DOM Content Loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize all components
//     initTheme();
//     initNavigation();
//     initScrollEffects();
//     initContactForm();
//     initBackToTop();
    
//     // Initialize AOS
//     if (typeof AOS !== 'undefined') {
//         AOS.init({
//             duration: 1000,
//             easing: 'ease-in-out',
//             once: true,
//             mirror: false
//         });
//     }
// });

// /* ===== THEME MANAGEMENT ===== */
// function initTheme() {
//     const darkModeToggle = document.getElementById('darkModeToggle');
//     const savedTheme = localStorage.getItem('theme');
    
//     // Set initial theme
//     if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//         document.documentElement.classList.add('dark');
//     } else {
//         document.documentElement.classList.remove('dark');
//     }
    
//     // Theme toggle functionality
//     if (darkModeToggle) {
//         darkModeToggle.addEventListener('click', function() {
//             const isDark = document.documentElement.classList.contains('dark');
            
//             if (isDark) {
//                 document.documentElement.classList.remove('dark');
//                 localStorage.setItem('theme', 'light');
//             } else {
//                 document.documentElement.classList.add('dark');
//                 localStorage.setItem('theme', 'dark');
//             }
            
//             // Trigger custom event for theme change
//             document.dispatchEvent(new CustomEvent('themeChanged', {
//                 detail: { theme: isDark ? 'light' : 'dark' }
//             }));
//         });
//     }
// }

// /* ===== NAVIGATION ===== */
// function initNavigation() {
//     const navbar = document.getElementById('navbar');
//     const mobileMenuBtn = document.getElementById('mobileMenuBtn');
//     const mobileMenu = document.getElementById('mobileMenu');
//     const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
//     // Mobile menu toggle
//     if (mobileMenuBtn && mobileMenu) {
//         mobileMenuBtn.addEventListener('click', function() {
//             const isHidden = mobileMenu.classList.contains('hidden');
            
//             if (isHidden) {
//                 mobileMenu.classList.remove('hidden');
//                 mobileMenuBtn.setAttribute('aria-expanded', 'true');
//             } else {
//                 mobileMenu.classList.add('hidden');
//                 mobileMenuBtn.setAttribute('aria-expanded', 'false');
//             }
//         });
//     }
    
//     // Smooth scrolling for navigation links
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             const href = this.getAttribute('href');
            
//             if (href.startsWith('#')) {
//                 e.preventDefault();
//                 const targetId = href.substring(1);
//                 const targetElement = document.getElementById(targetId);
                
//                 if (targetElement) {
//                     const navbarHeight = navbar ? navbar.offsetHeight : 0;
//                     const targetPosition = targetElement.offsetTop - navbarHeight;
                    
//                     window.scrollTo({
//                         top: targetPosition,
//                         behavior: 'smooth'
//                     });
                    
//                     // Close mobile menu if open
//                     if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
//                         mobileMenu.classList.add('hidden');
//                         mobileMenuBtn.setAttribute('aria-expanded', 'false');
//                     }
//                 }
//             }
//         });
//     });
    
//     // Navbar scroll effect
//     let lastScrollTop = 0;
    
//     window.addEventListener('scroll', function() {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//         if (navbar) {
//             if (scrollTop > lastScrollTop && scrollTop > 100) {
//                 // Scrolling down
//                 navbar.style.transform = 'translateY(-100%)';
//             } else {
//                 // Scrolling up
//                 navbar.style.transform = 'translateY(0)';
//             }
//         }
        
//         lastScrollTop = scrollTop;
//     });
// }

// /* ===== SCROLL EFFECTS ===== */
// function initScrollEffects() {
//     // Active navigation link highlighting
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.nav-link');
    
//     function updateActiveNavLink() {
//         const scrollPosition = window.scrollY + 100;
        
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.offsetHeight;
//             const sectionId = section.getAttribute('id');
            
//             if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//                 navLinks.forEach(link => {
//                     link.classList.remove('active');
//                     if (link.getAttribute('href') === `#${sectionId}`) {
//                         link.classList.add('active');
//                     }
//                 });
//             }
//         });
//     }
    
//     window.addEventListener('scroll', updateActiveNavLink);
//     updateActiveNavLink(); // Initial call
// }

// /* ===== CONTACT FORM ===== */
// function initContactForm() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const formData = new FormData(this);
//             const name = formData.get('name');
//             const email = formData.get('email');
//             const message = formData.get('message');
            
//             // Basic validation
//             if (!name || !email || !message) {
//                 showNotification('Please fill in all fields.', 'error');
//                 return;
//             }
            
//             if (!isValidEmail(email)) {
//                 showNotification('Please enter a valid email address.', 'error');
//                 return;
//             }
            
//             // Simulate form submission
//             showNotification('Sending message...', 'info');
            
//             setTimeout(() => {
//                 showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
//                 contactForm.reset();
//             }, 2000);
//         });
//     }
// }

// /* ===== BACK TO TOP BUTTON ===== */
// function initBackToTop() {
//     const backToTopBtn = document.getElementById('backToTop');
    
//     if (backToTopBtn) {
//         // Show/hide button based on scroll position
//         window.addEventListener('scroll', function() {
//             if (window.pageYOffset > 300) {
//                 backToTopBtn.classList.remove('opacity-0', 'invisible');
//                 backToTopBtn.classList.add('opacity-100', 'visible');
//             } else {
//                 backToTopBtn.classList.add('opacity-0', 'invisible');
//                 backToTopBtn.classList.remove('opacity-100', 'visible');
//             }
//         });
        
//         // Smooth scroll to top
//         backToTopBtn.addEventListener('click', function() {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         });
//     }
// }

// /* ===== UTILITY FUNCTIONS ===== */

// // Email validation
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Notification system
// function showNotification(message, type = 'info') {
//     // Remove existing notifications
//     const existingNotifications = document.querySelectorAll('.notification');
//     existingNotifications.forEach(notification => notification.remove());
    
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type} fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`;
    
//     // Set notification content based on type
//     let icon, bgColor, textColor;
    
//     switch (type) {
//         case 'success':
//             icon = '✓';
//             bgColor = 'bg-green-500';
//             textColor = 'text-white';
//             break;
//         case 'error':
//             icon = '✕';
//             bgColor = 'bg-red-500';
//             textColor = 'text-white';
//             break;
//         case 'warning':
//             icon = '⚠';
//             bgColor = 'bg-yellow-500';
//             textColor = 'text-white';
//             break;
//         default:
//             icon = 'ℹ';
//             bgColor = 'bg-blue-500';
//             textColor = 'text-white';
//     }
    
//     notification.innerHTML = `
//         <div class="flex items-center space-x-2">
//             <span class="text-lg">${icon}</span>
//             <span class="${textColor}">${message}</span>
//         </div>
//     `;
    
//     notification.classList.add(bgColor);
    
//     // Add to DOM
//     document.body.appendChild(notification);
    
//     // Animate in
//     setTimeout(() => {
//         notification.classList.remove('translate-x-full');
//     }, 100);
    
//     // Auto remove after 5 seconds
//     setTimeout(() => {
//         notification.classList.add('translate-x-full');
//         setTimeout(() => {
//             if (notification.parentNode) {
//                 notification.parentNode.removeChild(notification);
//             }
//         }, 300);
//     }, 5000);
// }

// // Debounce function
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// // Throttle function
// function throttle(func, limit) {
//     let inThrottle;
//     return function() {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => inThrottle = false, limit);
//         }
//     };
// }

// // Local storage utilities
// const storage = {
//     get: function(key) {
//         try {
//             return JSON.parse(localStorage.getItem(key));
//         } catch (e) {
//             return localStorage.getItem(key);
//         }
//     },
    
//     set: function(key, value) {
//         try {
//             localStorage.setItem(key, JSON.stringify(value));
//         } catch (e) {
//             localStorage.setItem(key, value);
//         }
//     },
    
//     remove: function(key) {
//         localStorage.removeItem(key);
//     },
    
//     clear: function() {
//         localStorage.clear();
//     }
// };

// // Export for use in other modules
// window.mainJS = {
//     showNotification,
//     debounce,
//     throttle,
//     storage,
//     isValidEmail
// }; 