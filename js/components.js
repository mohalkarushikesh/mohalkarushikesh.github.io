/* ===== COMPONENTS JS - Dynamic Content Loading ===== */

// Project data
const projects = [
    {
        id: 1,
        title: "Movie Recommender System (RBM)",
        description: "Built a sophisticated movie recommendation system using Restricted Boltzmann Machines (RBM) for collaborative filtering. Achieved excellent performance with MAE < 0.3 on MovieLens dataset.",
        technologies: ["RBM", "Collaborative Filtering", "PyTorch"],
        image: "assets/project1.jpg",
        github: "https://github.com/mohalkarushikesh/Movie-Recommender-System-RBM",
        featured: true,
        status: "completed"
    },
    {
        id: 2,
        title: "Google Stock Price Prediction (RNN-LSTM)",
        description: "Developed a Recurrent Neural Network with LSTM layers to predict Google stock prices. Implemented time series forecasting with 60-day lookback window for accurate predictions.",
        technologies: ["RNN", "LSTM", "TensorFlow"],
        image: "assets/project2.jpg",
        github: "https://github.com/mohalkarushikesh/Google-Stock-Price-Prediction-using-RNN-LSTM",
        featured: false,
        status: "completed"
    },
    {
        id: 3,
        title: "Cat vs Dog Classifier (CNN)",
        description: "Built a Convolutional Neural Network for binary image classification to distinguish between cats and dogs. Achieved high accuracy using transfer learning and data augmentation techniques.",
        technologies: ["CNN", "Image Classification", "TensorFlow"],
        image: "assets/project3.jpg",
        github: "https://github.com/mohalkarushikesh/Cat-vs.-Dog-classifier-using-CNN",
        featured: false,
        status: "completed"
    },
    {
        id: 4,
        title: "Lung Cancer Detection (CNN)",
        description: "Developed a deep learning model for early detection of lung cancer from CT scan images. Implemented medical image analysis with high precision for healthcare applications.",
        technologies: ["CNN", "Medical Imaging", "PyTorch"],
        image: "assets/project4.jpg",
        github: "https://github.com/mohalkarushikesh/Lung-Cancer-Detection-using-CNN",
        featured: false,
        status: "completed"
    },
    {
        id: 5,
        title: "Pneumonia Detection (Deep Learning)",
        description: "Created a deep learning system for detecting pneumonia from chest X-ray images. Implemented binary classification with high accuracy for medical diagnosis.",
        technologies: ["Deep Learning", "Medical Diagnosis", "TensorFlow"],
        image: "assets/project5.jpg",
        github: "https://github.com/mohalkarushikesh/Pneumonia-Detection-using-Deep-Learning",
        featured: false,
        status: "completed"
    },
    {
        id: 6,
        title: "Deep Learning Medical Diagnoser",
        description: "Built a comprehensive medical diagnosis system using deep learning for multiple disease detection. Integrated various medical imaging modalities for accurate diagnosis.",
        technologies: ["Deep Learning", "Medical AI", "Multi-class"],
        image: "assets/project6.jpg",
        github: "https://github.com/mohalkarushikesh/Deep-Learning-based-Medical-Diagnoser",
        featured: false,
        status: "completed"
    }
];

// Blog data
const blogs = [
    {
        id: 1,
        title: "Understanding Neural Networks",
        excerpt: "A comprehensive guide to understanding the fundamentals of neural networks, from perceptrons to deep learning architectures.",
        category: "AI/ML",
        readTime: "5 min read",
        date: "Jan 15, 2024",
        image: "assets/blog1.jpg",
        url: "#"
    },
    {
        id: 2,
        title: "Natural Language Processing Trends",
        excerpt: "Exploring the latest trends in NLP, from transformer models to large language models and their applications.",
        category: "NLP",
        readTime: "8 min read",
        date: "Jan 10, 2024",
        image: "assets/blog2.jpg",
        url: "#"
    },
    {
        id: 3,
        title: "Reinforcement Learning Basics",
        excerpt: "An introduction to reinforcement learning concepts, algorithms, and their applications in modern AI systems.",
        category: "Deep Learning",
        readTime: "12 min read",
        date: "Jan 5, 2024",
        image: "assets/blog3.jpg",
        url: "#"
    }
];

/* ===== PROJECT COMPONENT ===== */
function createProjectCard(project) {
    const statusColors = {
        completed: 'bg-green-500',
        inProgress: 'bg-yellow-500',
        planned: 'bg-blue-500'
    };
    
    const statusText = {
        completed: 'Completed',
        inProgress: 'In Progress',
        planned: 'Planned'
    };
    
    return `
        <div class="project-card group" data-aos="fade-up" data-aos-delay="${project.id * 200}">
            <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div class="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                    <svg class="w-20 h-20 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    ${project.featured ? `
                        <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
                            Featured
                        </div>
                    ` : ''}
                    <div class="absolute bottom-4 left-4 flex space-x-1">
                        <div class="w-2 h-2 ${statusColors[project.status]} rounded-full animate-pulse"></div>
                        <div class="w-2 h-2 ${statusColors[project.status]} rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
                        <div class="w-2 h-2 ${statusColors[project.status]} rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            ${project.title}
                        </h3>
                        <span class="text-xs text-gray-500 dark:text-gray-400">${statusText[project.status]}</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        ${project.description}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                            </svg>
                            <span>2 weeks ago</span>
                        </div>
                        <a href="${project.github}" target="_blank" class="btn-primary group-hover:bg-blue-700 transition-colors">
                            <span>View Project</span>
                            <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/* ===== BLOG COMPONENT ===== */
function createBlogCard(blog) {
    const categoryColors = {
        'AI/ML': 'text-blue-600 dark:text-blue-400',
        'NLP': 'text-green-600 dark:text-green-400',
        'Deep Learning': 'text-purple-600 dark:text-purple-400',
        'Computer Vision': 'text-orange-600 dark:text-orange-400',
        'Reinforcement Learning': 'text-pink-600 dark:text-pink-400'
    };
    
    return `
        <div class="blog-card" data-aos="fade-up" data-aos-delay="${blog.id * 200}">
            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-sm ${categoryColors[blog.category] || 'text-blue-600 dark:text-blue-400'} font-medium">${blog.category}</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">${blog.readTime}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        ${blog.title}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        ${blog.excerpt}
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-500 dark:text-gray-400">${blog.date}</span>
                        <a href="${blog.url}" class="text-blue-600 dark:text-blue-400 hover:underline">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/* ===== LOAD PROJECTS ===== */
function loadProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

/* ===== LOAD BLOGS ===== */
function loadBlogs() {
    const blogsContainer = document.querySelector('#blogs .grid');
    
    if (blogsContainer) {
        blogsContainer.innerHTML = blogs.map(blog => createBlogCard(blog)).join('');
    }
}

/* ===== MODAL COMPONENT ===== */
function createModal(id, title, content) {
    const modal = document.createElement('div');
    modal.id = id;
    modal.className = 'modal fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4';
    
    modal.innerHTML = `
        <div class="modal-content bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="modal-header flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">${title}</h3>
                <button class="modal-close text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="modal-body p-6">
                ${content}
            </div>
        </div>
    `;
    
    // Add event listeners
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => closeModal(id));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(id);
        }
    });
    
    return modal;
}

function showModal(id, title, content) {
    // Remove existing modal
    const existingModal = document.getElementById(id);
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create and show new modal
    const modal = createModal(id, title, content);
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.remove('hidden');
        modal.querySelector('.modal-content').classList.add('animate-scale-in');
    }, 10);
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        const content = modal.querySelector('.modal-content');
        content.classList.add('animate-scale-out');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.remove();
        }, 300);
    }
}

/* ===== TOOLTIP COMPONENT ===== */
function createTooltip(element, text, position = 'top') {
    const tooltip = document.createElement('div');
    tooltip.className = `tooltip tooltip-${position} absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg opacity-0 pointer-events-none transition-opacity duration-200`;
    tooltip.textContent = text;
    
    element.style.position = 'relative';
    element.appendChild(tooltip);
    
    element.addEventListener('mouseenter', () => {
        tooltip.classList.remove('opacity-0');
        tooltip.classList.add('opacity-100');
    });
    
    element.addEventListener('mouseleave', () => {
        tooltip.classList.add('opacity-0');
        tooltip.classList.remove('opacity-100');
    });
}

/* ===== LOADING COMPONENT ===== */
function showLoading(container) {
    const loading = document.createElement('div');
    loading.className = 'loading flex items-center justify-center p-8';
    loading.innerHTML = `
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span class="ml-3 text-gray-600 dark:text-gray-400">Loading...</span>
    `;
    
    container.appendChild(loading);
}

function hideLoading(container) {
    const loading = container.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

/* ===== SEARCH COMPONENT ===== */
function createSearchBar(container, items, renderFunction) {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'mb-6';
    searchContainer.innerHTML = `
        <div class="relative">
            <input type="text" 
                   class="search-input w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                   placeholder="Search...">
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </div>
    `;
    
    const searchInput = searchContainer.querySelector('.search-input');
    const itemsContainer = container.querySelector('.grid');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredItems = items.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.technologies?.some(tech => tech.toLowerCase().includes(query))
        );
        
        itemsContainer.innerHTML = filteredItems.map(item => renderFunction(item)).join('');
    });
    
    container.insertBefore(searchContainer, container.firstChild);
}

/* ===== FILTER COMPONENT ===== */
function createFilterButtons(container, items, renderFunction) {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'mb-6 flex flex-wrap gap-2';
    
    // Get unique categories/technologies
    const categories = [...new Set(items.flatMap(item => item.technologies || [item.category]))];
    
    filterContainer.innerHTML = `
        <button class="filter-btn active px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" data-filter="all">
            All
        </button>
        ${categories.map(category => `
            <button class="filter-btn px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" data-filter="${category}">
                ${category}
            </button>
        `).join('')}
    `;
    
    const filterButtons = filterContainer.querySelectorAll('.filter-btn');
    const itemsContainer = container.querySelector('.grid');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active', 'bg-blue-600', 'text-white'));
            btn.classList.add('active', 'bg-blue-600', 'text-white');
            
            const filter = btn.getAttribute('data-filter');
            const filteredItems = filter === 'all' ? items : items.filter(item => 
                item.technologies?.includes(filter) || item.category === filter
            );
            
            itemsContainer.innerHTML = filteredItems.map(item => renderFunction(item)).join('');
        });
    });
    
    container.insertBefore(filterContainer, container.firstChild);
}

/* ===== INITIALIZE COMPONENTS ===== */
document.addEventListener('DOMContentLoaded', function() {
    // Load projects and blogs
    loadProjects();
    loadBlogs();
    
    // Add search and filter functionality for projects only
    const projectsSection = document.getElementById('projects');
    
    if (projectsSection) {
        createSearchBar(projectsSection, projects, createProjectCard);
        createFilterButtons(projectsSection, projects, createProjectCard);
    }

    // Initialize blog manager (handles its own search/filter)
    blogManager = new BlogManager();
});

// Export for use in other modules
window.componentsJS = {
    createProjectCard,
    createBlogCard,
    createModal,
    showModal,
    closeModal,
    createTooltip,
    showLoading,
    hideLoading,
    createSearchBar,
    createFilterButtons,
    loadProjects,
    loadBlogs
}; 