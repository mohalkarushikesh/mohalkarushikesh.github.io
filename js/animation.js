// Animation Management JavaScript

// Neural Network Animation
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

// Enhanced Animations
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

// Export for use in main script
window.AnimationManager = {
    initNeuralNetwork,
    initEnhancedAnimations,
    initTypingEffect,
    initRoleAnimation
}; 