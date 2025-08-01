/* ===== ANIMATIONS JS - Advanced Animations and Effects ===== */

// Animation utilities
const AnimationUtils = {
    // Easing functions
    easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeIn: t => t * t,
    easeOut: t => t * (2 - t),
    linear: t => t,
    
    // Animate element
    animate: function(element, properties, duration = 1000, easing = 'easeInOut', callback) {
        const startTime = performance.now();
        const startValues = {};
        const endValues = {};
        
        // Get start values
        for (let prop in properties) {
            startValues[prop] = parseFloat(getComputedStyle(element)[prop]) || 0;
            endValues[prop] = properties[prop];
        }
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = this[easing](progress);
            
            // Update properties
            for (let prop in properties) {
                const start = startValues[prop];
                const end = endValues[prop];
                const current = start + (end - start) * easedProgress;
                element.style[prop] = current + (prop === 'opacity' ? '' : 'px');
            }
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else if (callback) {
                callback();
            }
        }
        
        requestAnimationFrame(update.bind(this));
    },
    
    // Parallax effect
    parallax: function(element, speed = 0.5) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * speed;
            element.style.transform = `translateY(${rate}px)`;
        });
    },
    
    // Fade in on scroll
    fadeInOnScroll: function(elements, threshold = 0.1) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }
};

/* ===== TYPING ANIMATION ===== */
class TypingAnimation {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentIndex = 0;
        this.isTyping = false;
    }
    
    start() {
        if (this.isTyping) return;
        
        this.isTyping = true;
        this.currentIndex = 0;
        this.element.textContent = '';
        this.type();
    }
    
    type() {
        if (this.currentIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.currentIndex);
            this.currentIndex++;
            setTimeout(() => this.type(), this.speed);
        } else {
            this.isTyping = false;
        }
    }
    
    stop() {
        this.isTyping = false;
    }
    
    reset() {
        this.stop();
        this.element.textContent = '';
        this.currentIndex = 0;
    }
}

/* ===== PARTICLE SYSTEM ===== */
class ParticleSystem {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.options = {
            particleCount: options.particleCount || 50,
            particleSize: options.particleSize || 2,
            particleSpeed: options.particleSpeed || 1,
            particleColor: options.particleColor || '#3b82f6',
            connectionDistance: options.connectionDistance || 100,
            connectionColor: options.connectionColor || '#3b82f6',
            connectionOpacity: options.connectionOpacity || 0.3,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        for (let i = 0; i < this.options.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.options.particleSpeed,
                vy: (Math.random() - 0.5) * this.options.particleSpeed,
                size: Math.random() * this.options.particleSize + 1
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.options.particleColor;
            this.ctx.fill();
        });
        
        // Draw connections
        this.drawConnections();
        
        requestAnimationFrame(() => this.animate());
    }
    
    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.options.connectionDistance) {
                    const opacity = (this.options.connectionDistance - distance) / this.options.connectionDistance * this.options.connectionOpacity;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `${this.options.connectionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
    }
}

/* ===== SCROLL ANIMATIONS ===== */
class ScrollAnimations {
    constructor() {
        this.animatedElements = [];
        this.init();
    }
    
    init() {
        // Find elements with animation attributes
        const elements = document.querySelectorAll('[data-scroll-animation]');
        elements.forEach(element => {
            this.animatedElements.push({
                element: element,
                animation: element.getAttribute('data-scroll-animation'),
                threshold: parseFloat(element.getAttribute('data-scroll-threshold')) || 0.1,
                delay: parseInt(element.getAttribute('data-scroll-delay')) || 0
            });
        });
        
        this.setupObserver();
    }
    
    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animatedElement = this.animatedElements.find(item => item.element === entry.target);
                    if (animatedElement) {
                        setTimeout(() => {
                            this.triggerAnimation(animatedElement);
                        }, animatedElement.delay);
                    }
                }
            });
        }, { threshold: 0.1 });
        
        this.animatedElements.forEach(item => {
            observer.observe(item.element);
        });
    }
    
    triggerAnimation(animatedElement) {
        const { element, animation } = animatedElement;
        
        switch (animation) {
            case 'fade-in':
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 50);
                break;
                
            case 'slide-in-left':
                element.style.opacity = '0';
                element.style.transform = 'translateX(-50px)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                }, 50);
                break;
                
            case 'slide-in-right':
                element.style.opacity = '0';
                element.style.transform = 'translateX(50px)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                }, 50);
                break;
                
            case 'scale-in':
                element.style.opacity = '0';
                element.style.transform = 'scale(0.8)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1)';
                }, 50);
                break;
                
            case 'rotate-in':
                element.style.opacity = '0';
                element.style.transform = 'rotate(-180deg) scale(0.8)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'rotate(0deg) scale(1)';
                }, 50);
                break;
        }
    }
}

/* ===== HOVER EFFECTS ===== */
class HoverEffects {
    constructor() {
        this.init();
    }
    
    init() {
        // Magnetic effect for buttons
        const magneticButtons = document.querySelectorAll('[data-magnetic]');
        magneticButtons.forEach(button => this.addMagneticEffect(button));
        
        // Tilt effect for cards
        const tiltCards = document.querySelectorAll('[data-tilt]');
        tiltCards.forEach(card => this.addTiltEffect(card));
        
        // Glow effect
        const glowElements = document.querySelectorAll('[data-glow]');
        glowElements.forEach(element => this.addGlowEffect(element));
    }
    
    addMagneticEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    }
    
    addTiltEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 10;
            const rotateY = (centerX - x) / centerX * 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }
    
    addGlowEffect(element) {
        element.addEventListener('mouseenter', () => {
            element.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.boxShadow = '';
        });
    }
}

/* ===== CURSOR EFFECTS ===== */
class CursorEffects {
    constructor() {
        this.cursor = null;
        this.init();
    }
    
    init() {
        // Create custom cursor
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor fixed pointer-events-none z-50 w-6 h-6 bg-blue-500 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200';
        document.body.appendChild(this.cursor);
        
        // Hide default cursor
        document.body.style.cursor = 'none';
        
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
        });
        
        // Add hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                this.cursor.style.opacity = '0.8';
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                this.cursor.style.opacity = '0.5';
            });
        });
    }
}

/* ===== TEXT ANIMATIONS ===== */
class TextAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        // Animate text on scroll
        const textElements = document.querySelectorAll('[data-text-animation]');
        textElements.forEach(element => {
            this.animateTextOnScroll(element);
        });
        
        // Typing animation for role text
        const roleTexts = document.querySelectorAll('.role-text');
        if (roleTexts.length > 0) {
            this.initRoleAnimation(roleTexts);
        }
    }
    
    animateTextOnScroll(element) {
        const text = element.textContent;
        element.textContent = '';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.typeText(element, text);
                }
            });
        });
        
        observer.observe(element);
    }
    
    typeText(element, text, speed = 50) {
        let index = 0;
        const timer = setInterval(() => {
            element.textContent += text[index];
            index++;
            
            if (index >= text.length) {
                clearInterval(timer);
            }
        }, speed);
    }
    
    initRoleAnimation(roleTexts) {
        let currentIndex = 0;
        
        setInterval(() => {
            roleTexts.forEach((text, index) => {
                if (index === currentIndex) {
                    text.style.opacity = '1';
                    text.style.transform = 'translateY(0)';
                } else {
                    text.style.opacity = '0';
                    text.style.transform = 'translateY(20px)';
                }
            });
            
            currentIndex = (currentIndex + 1) % roleTexts.length;
        }, 2000);
    }
}

/* ===== INITIALIZE ANIMATIONS ===== */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Initialize hover effects
    new HoverEffects();
    
    // Initialize cursor effects (optional - can be disabled)
    // new CursorEffects();
    
    // Initialize text animations
    new TextAnimations();
    
    // Initialize particle system for background (optional)
    const particleCanvas = document.getElementById('particleCanvas');
    if (particleCanvas) {
        new ParticleSystem(particleCanvas, {
            particleCount: 30,
            particleSize: 2,
            particleSpeed: 0.5,
            connectionDistance: 150
        });
    }
    
    // Add smooth reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    AnimationUtils.fadeInOnScroll(revealElements);
});

// Export for use in other modules
window.AnimationUtils = AnimationUtils;
window.TypingAnimation = TypingAnimation;
window.ParticleSystem = ParticleSystem;
window.ScrollAnimations = ScrollAnimations;
window.HoverEffects = HoverEffects;
window.CursorEffects = CursorEffects;
window.TextAnimations = TextAnimations; 