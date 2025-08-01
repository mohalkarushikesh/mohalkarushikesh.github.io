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
    
    // Initialize resume manager
    resumeManager = new ResumeManager();
    
    // Initialize project manager
    projectManager = new ProjectManager();
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

// Blog Management System
class BlogManager {
    constructor() {
        this.blogs = this.loadBlogsFromStorage();
        this.currentBlogId = null;
        this.isAdmin = false; // Start with admin mode disabled
        this.adminPassword = "perceptron"; // Hardcoded password
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadBlogs();
        this.toggleAdminControls();
        this.checkAdminStatus();
    }

    checkAdminStatus() {
        // Check if admin is already authenticated
        const isAuthenticated = sessionStorage.getItem('blogAdminAuthenticated');
        if (isAuthenticated === 'true') {
            this.isAdmin = true;
            this.toggleAdminControls();
        }
    }

    authenticateAdmin() {
        const password = prompt("Enter admin password:");
        if (password === this.adminPassword) {
            this.isAdmin = true;
            sessionStorage.setItem('blogAdminAuthenticated', 'true');
            this.toggleAdminControls();
            this.showNotification('Admin access granted!', 'success');
        } else {
            this.showNotification('Incorrect password!', 'error');
        }
    }

    setupEventListeners() {
        // Admin controls
        const addBlogBtn = document.getElementById('addBlogBtn');
        const editBlogBtn = document.getElementById('editBlogBtn');
        const deleteBlogBtn = document.getElementById('deleteBlogBtn');
        const blogModal = document.getElementById('blogModal');
        const blogForm = document.getElementById('blogForm');
        const closeBlogModal = document.getElementById('closeBlogModal');
        const cancelBlogBtn = document.getElementById('cancelBlogBtn');
        const blogViewModal = document.getElementById('blogViewModal');
        const closeBlogViewModal = document.getElementById('closeBlogViewModal');

        // Search and filter
        const blogSearch = document.getElementById('blogSearch');
        const blogCategoryFilter = document.getElementById('blogCategoryFilter');
        const blogSortBy = document.getElementById('blogSortBy');
        const loadMoreBlogs = document.getElementById('loadMoreBlogs');

        if (addBlogBtn) addBlogBtn.addEventListener('click', () => this.openBlogModal());
        if (editBlogBtn) editBlogBtn.addEventListener('click', () => this.showBlogSelectionModal('edit'));
        if (deleteBlogBtn) deleteBlogBtn.addEventListener('click', () => this.deleteSelectedBlog());
        if (closeBlogModal) closeBlogModal.addEventListener('click', () => this.closeBlogModal());
        if (cancelBlogBtn) cancelBlogBtn.addEventListener('click', () => this.closeBlogModal());
        if (closeBlogViewModal) closeBlogViewModal.addEventListener('click', () => this.closeBlogViewModal());
        if (blogForm) blogForm.addEventListener('submit', (e) => this.handleBlogSubmit(e));
        if (loadMoreBlogs) loadMoreBlogs.addEventListener('click', () => this.loadMoreBlogs());

        // Search and filter events
        if (blogSearch) blogSearch.addEventListener('input', (e) => this.filterBlogs());
        if (blogCategoryFilter) blogCategoryFilter.addEventListener('change', () => this.filterBlogs());
        if (blogSortBy) blogSortBy.addEventListener('change', () => this.filterBlogs());

        // Close modals on outside click
        if (blogModal) blogModal.addEventListener('click', (e) => {
            if (e.target === blogModal) this.closeBlogModal();
        });
        if (blogViewModal) blogViewModal.addEventListener('click', (e) => {
            if (e.target === blogViewModal) this.closeBlogViewModal();
        });

        // Add admin authentication button
        this.addAdminAuthButton();
    }

    addAdminAuthButton() {
        const adminControls = document.getElementById('blogAdminControls');
        if (adminControls) {
            // Always show the admin controls section, but hide other buttons when not authenticated
            adminControls.classList.remove('hidden');
            
            if (!adminControls.querySelector('#adminAuthBtn')) {
                const authBtn = document.createElement('button');
                authBtn.id = 'adminAuthBtn';
                authBtn.className = 'btn-ghost text-blue-600 hover:text-blue-700 mx-auto block';
                authBtn.innerHTML = `
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    ${this.isAdmin ? 'Admin Mode Active' : 'Login as Admin'}
                `;
                authBtn.addEventListener('click', () => this.authenticateAdmin());
                
                // Create a centered container for the login button
                const loginContainer = document.createElement('div');
                loginContainer.className = 'flex justify-center mb-4';
                loginContainer.appendChild(authBtn);
                
                adminControls.insertBefore(loginContainer, adminControls.firstChild);
            }
            
            // Show/hide other admin buttons based on authentication status
            const addBlogBtn = document.getElementById('addBlogBtn');
            const editBlogBtn = document.getElementById('editBlogBtn');
            const deleteBlogBtn = document.getElementById('deleteBlogBtn');
            
            if (addBlogBtn) addBlogBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
            if (editBlogBtn) editBlogBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
            if (deleteBlogBtn) deleteBlogBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
        }
    }

    toggleAdminControls() {
        const adminControls = document.getElementById('blogAdminControls');
        if (adminControls) {
            // Always show the admin controls section
            adminControls.classList.remove('hidden');
            this.addAdminAuthButton();
        }
    }

    loadBlogsFromStorage() {
        const stored = localStorage.getItem('blogs');
        if (stored) {
            return JSON.parse(stored);
        }
        // Default blogs
        return [
            {
                id: 1,
                title: "Introduction to Machine Learning",
                description: "A comprehensive guide to understanding the basics of machine learning algorithms and their applications in modern technology.",
                content: "Machine Learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed. This field has revolutionized how we approach problem-solving in various domains, from healthcare to finance to entertainment.\n\nIn this comprehensive guide, we'll explore the fundamental concepts of machine learning, including supervised learning, unsupervised learning, and reinforcement learning. We'll also dive into popular algorithms like linear regression, decision trees, and neural networks.\n\nMachine learning has become an essential tool in modern technology, powering everything from recommendation systems to autonomous vehicles. Understanding these concepts is crucial for anyone interested in artificial intelligence and data science.\n\nKey Topics Covered:\n• Supervised vs Unsupervised Learning\n• Linear Regression and Classification\n• Decision Trees and Random Forests\n• Neural Networks Fundamentals\n• Model Evaluation and Validation\n• Feature Engineering Techniques\n• Overfitting and Underfitting\n• Cross-Validation Methods\n\nReal-world applications include:\n• Netflix's recommendation system\n• Google's search algorithms\n• Medical diagnosis systems\n• Financial fraud detection\n• Autonomous vehicle navigation\n\nMachine learning continues to evolve rapidly, with new algorithms and techniques being developed constantly. Staying updated with the latest trends and technologies is essential for anyone working in this field.",
                category: "Machine Learning",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500",
                tags: ["AI", "Machine Learning", "Python", "Algorithms", "Data Science", "Supervised Learning", "Unsupervised Learning"],
                date: "2024-01-15",
                views: 1250,
                likes: 89
            },
            {
                id: 2,
                title: "Deep Learning with Neural Networks",
                description: "Exploring the power of neural networks and deep learning techniques for complex problem solving and pattern recognition.",
                content: "Deep Learning represents the cutting edge of artificial intelligence, using neural networks with multiple layers to process complex patterns in data. This revolutionary approach has transformed fields like computer vision, natural language processing, and speech recognition.\n\nNeural networks are inspired by the human brain's structure, with interconnected nodes (neurons) that process information. Deep learning takes this concept further by using multiple layers of neurons, allowing the system to learn increasingly complex representations of data.\n\nIn this article, we'll explore the architecture of neural networks, including convolutional neural networks (CNNs) for image processing and recurrent neural networks (RNNs) for sequential data. We'll also discuss popular frameworks like TensorFlow and PyTorch that make deep learning accessible to developers worldwide.\n\nDeep Learning Architecture:\n• Input Layer: Receives raw data\n• Hidden Layers: Process and transform data\n• Output Layer: Produces final predictions\n• Activation Functions: Introduce non-linearity\n• Backpropagation: Updates weights and biases\n\nPopular Neural Network Types:\n• Convolutional Neural Networks (CNNs)\n• Recurrent Neural Networks (RNNs)\n• Long Short-Term Memory (LSTM)\n• Generative Adversarial Networks (GANs)\n• Transformer Networks\n\nTraining Deep Learning Models:\n• Gradient Descent Optimization\n• Learning Rate Scheduling\n• Batch Normalization\n• Dropout Regularization\n• Early Stopping Techniques\n\nApplications in Real World:\n• Image and Video Recognition\n• Natural Language Processing\n• Speech Recognition and Synthesis\n• Autonomous Systems\n• Medical Image Analysis\n• Financial Market Prediction\n• Supply Chain Optimization\n\nChallenges and Considerations:\n• Computational Requirements\n• Data Quality and Quantity\n• Interpretability Issues\n• Ethical Considerations\n• Model Deployment Strategies\n\nDeep learning continues to push the boundaries of what's possible in AI, with new architectures and techniques being developed constantly.",
                category: "Deep Learning",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500",
                tags: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch", "CNN", "RNN", "LSTM", "Computer Vision"],
                date: "2024-01-20",
                views: 980,
                likes: 67
            },
            {
                id: 3,
                title: "Computer Vision Applications",
                description: "Real-world applications of computer vision in modern technology and industry, from medical imaging to autonomous vehicles.",
                content: "Computer Vision is revolutionizing how machines perceive and understand the visual world around us. From facial recognition systems to autonomous vehicles, computer vision technologies are becoming increasingly sophisticated and widespread.\n\nThis field combines techniques from image processing, machine learning, and artificial intelligence to enable computers to interpret and analyze visual information. Applications range from medical imaging and quality control in manufacturing to augmented reality and security systems.\n\nIn this exploration, we'll examine key computer vision techniques including image preprocessing, feature extraction, object detection, and image segmentation. We'll also look at real-world applications that demonstrate the power and potential of computer vision technology.\n\nCore Computer Vision Techniques:\n• Image Preprocessing and Enhancement\n• Feature Detection and Extraction\n• Object Detection and Recognition\n• Image Segmentation and Classification\n• Motion Analysis and Tracking\n• 3D Reconstruction and Depth Estimation\n\nPopular Algorithms and Methods:\n• SIFT and SURF Feature Detection\n• HOG (Histogram of Oriented Gradients)\n• Haar Cascades for Face Detection\n• YOLO (You Only Look Once)\n• R-CNN Family of Algorithms\n• U-Net for Medical Image Segmentation\n\nIndustry Applications:\n• Healthcare and Medical Imaging\n• Autonomous Vehicles and Robotics\n• Manufacturing Quality Control\n• Security and Surveillance\n• Retail and E-commerce\n• Agriculture and Precision Farming\n• Entertainment and Gaming\n• Augmented and Virtual Reality\n\nMedical Imaging Applications:\n• X-ray and CT Scan Analysis\n• MRI and Ultrasound Processing\n• Pathology and Microscopy\n• Dermatology and Skin Cancer Detection\n• Ophthalmology and Retinal Analysis\n• Surgical Planning and Navigation\n\nAutonomous Systems:\n• Self-driving Cars and Navigation\n• Drone and UAV Applications\n• Industrial Robotics\n• Agricultural Automation\n• Warehouse and Logistics\n• Service and Domestic Robots\n\nChallenges and Future Directions:\n• Real-time Processing Requirements\n• Robustness to Environmental Conditions\n• Privacy and Ethical Concerns\n• Integration with Edge Computing\n• Multi-modal Vision Systems\n• Explainable AI in Computer Vision\n\nComputer vision continues to evolve rapidly, with new applications being discovered and developed across various industries.",
                category: "Computer Vision",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
                tags: ["Computer Vision", "Image Processing", "OpenCV", "AI", "Medical Imaging", "Autonomous Vehicles", "Object Detection"],
                date: "2024-01-25",
                views: 756,
                likes: 45
            },
            {
                id: 4,
                title: "Natural Language Processing Revolution",
                description: "Exploring the latest breakthroughs in NLP, from transformer models to large language models and their transformative impact on AI.",
                content: "Natural Language Processing (NLP) has undergone a revolutionary transformation in recent years, driven by the development of transformer architectures and large language models. This field is now at the forefront of artificial intelligence innovation.\n\nFrom simple text classification to complex language understanding and generation, NLP technologies are reshaping how we interact with computers and process human language. The emergence of models like GPT, BERT, and their successors has opened new possibilities in language processing.\n\nKey Components of Modern NLP:\n• Tokenization and Text Preprocessing\n• Word Embeddings and Vector Representations\n• Attention Mechanisms and Transformers\n• Sequence-to-Sequence Models\n• Named Entity Recognition (NER)\n• Sentiment Analysis and Text Classification\n• Machine Translation Systems\n• Question Answering and Chatbots\n\nTransformer Architecture Revolution:\n• Self-Attention Mechanisms\n• Multi-Head Attention\n• Positional Encoding\n• Encoder-Decoder Architecture\n• Pre-training and Fine-tuning\n• Transfer Learning in NLP\n\nLarge Language Models (LLMs):\n• GPT Family and Generative Models\n• BERT and Bidirectional Models\n• T5 and Text-to-Text Transfer\n• RoBERTa and Optimized BERT\n• DistilBERT and Model Compression\n• Domain-Specific Language Models\n\nReal-world Applications:\n• Virtual Assistants and Chatbots\n• Machine Translation Services\n• Content Generation and Summarization\n• Sentiment Analysis for Business\n• Information Extraction and Retrieval\n• Language Learning and Education\n• Healthcare Documentation\n• Legal Document Analysis\n\nNLP in Business and Industry:\n• Customer Service Automation\n• Market Research and Analysis\n• Social Media Monitoring\n• Content Moderation\n• Email Classification and Routing\n• Voice Search and Recognition\n• Multilingual Support Systems\n• Accessibility and Assistive Technology\n\nChallenges and Ethical Considerations:\n• Bias and Fairness in Language Models\n• Privacy and Data Protection\n• Computational Resource Requirements\n• Interpretability and Explainability\n• Multilingual and Cross-cultural Issues\n• Misinformation and Content Generation\n\nFuture Trends in NLP:\n• Multimodal Language Models\n• Few-shot and Zero-shot Learning\n• Conversational AI and Dialogue Systems\n• Real-time Language Processing\n• Edge Computing for NLP\n• Specialized Domain Models\n\nNLP continues to evolve rapidly, with new models and applications being developed constantly. The field is moving towards more human-like language understanding and generation capabilities.",
                category: "NLP",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
                tags: ["NLP", "Transformers", "BERT", "GPT", "Language Models", "Text Processing", "AI"],
                date: "2024-01-30",
                views: 892,
                likes: 78
            },
            {
                id: 5,
                title: "Reinforcement Learning Fundamentals",
                description: "A comprehensive introduction to reinforcement learning concepts, algorithms, and their applications in modern AI systems.",
                content: "Reinforcement Learning (RL) represents a paradigm of machine learning where agents learn to make decisions by interacting with an environment and receiving feedback in the form of rewards or penalties. This approach has been fundamental to many breakthroughs in artificial intelligence.\n\nUnlike supervised learning, where the model learns from labeled examples, or unsupervised learning, where patterns are discovered without explicit guidance, reinforcement learning operates through trial and error, learning optimal strategies through experience.\n\nCore Concepts in Reinforcement Learning:\n• Agent: The learning entity that makes decisions\n• Environment: The world in which the agent operates\n• State: The current situation or configuration\n• Action: The decision made by the agent\n• Reward: Feedback signal indicating success or failure\n• Policy: Strategy for selecting actions\n• Value Function: Expected long-term reward\n• Q-Function: Action-value function\n\nKey Algorithms and Methods:\n• Q-Learning and Deep Q-Networks (DQN)\n• Policy Gradient Methods\n• Actor-Critic Algorithms\n• Proximal Policy Optimization (PPO)\n• Trust Region Policy Optimization (TRPO)\n• Soft Actor-Critic (SAC)\n• Multi-Agent Reinforcement Learning\n• Hierarchical Reinforcement Learning\n\nApplications in Real World:\n• Game Playing and Strategy Games\n• Robotics and Autonomous Systems\n• Autonomous Vehicles and Navigation\n• Resource Management and Optimization\n• Financial Trading and Portfolio Management\n• Healthcare Treatment Planning\n• Energy Management and Smart Grids\n• Supply Chain Optimization\n\nGaming and Entertainment:\n• AlphaGo and Game AI\n• Video Game NPCs and Opponents\n• Procedural Content Generation\n• Player Behavior Modeling\n• Dynamic Difficulty Adjustment\n• Multiplayer Game Balancing\n\nRobotics and Control Systems:\n• Robot Navigation and Path Planning\n• Manipulation and Grasping\n• Human-Robot Interaction\n• Swarm Robotics\n• Autonomous Drones\n• Industrial Automation\n\nChallenges and Research Areas:\n• Sample Efficiency and Data Requirements\n• Exploration vs Exploitation Trade-off\n• Reward Function Design\n• Multi-objective Optimization\n• Safety and Constraint Satisfaction\n• Transfer Learning and Generalization\n• Interpretability and Explainability\n• Real-world Deployment Challenges\n\nFuture Directions:\n• Meta-Learning and Few-shot RL\n• Multi-agent Systems and Cooperation\n• Hierarchical and Compositional Learning\n• Inverse Reinforcement Learning\n• Imitation Learning and Human Feedback\n• Safe and Robust RL Systems\n\nReinforcement learning continues to be a rapidly evolving field, with new algorithms and applications being developed constantly. It represents one of the most promising approaches for developing truly intelligent autonomous systems.",
                category: "Reinforcement Learning",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
                tags: ["Reinforcement Learning", "Q-Learning", "Policy Gradient", "Robotics", "Game AI", "Autonomous Systems"],
                date: "2024-02-05",
                views: 634,
                likes: 52
            }
        ];
    }

    saveBlogsToStorage() {
        localStorage.setItem('blogs', JSON.stringify(this.blogs));
    }

    createBlogCard(blog) {
        return `
            <div class="blog-card bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" data-blog-id="${blog.id}">
                <div class="relative">
                    <img src="${blog.image || 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500'}" 
                         alt="${blog.title}" 
                         class="w-full h-48 object-cover">
                    <div class="absolute top-4 left-4">
                        <span class="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">${blog.category}</span>
                    </div>
                    <div class="absolute top-4 right-4 flex gap-2">
                        <span class="px-2 py-1 bg-black/50 text-white rounded text-xs">👁️ ${blog.views}</span>
                        <span class="px-2 py-1 bg-red-500 text-white rounded text-xs">❤️ ${blog.likes}</span>
                    </div>
                    ${this.isAdmin ? `
                        <div class="absolute bottom-4 right-4 flex gap-2">
                            <button onclick="blogManager.selectBlogForEdit(${blog.id})" class="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">
                                Edit
                            </button>
                            <button onclick="blogManager.deleteBlog(${blog.id})" class="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    ` : ''}
                </div>
                
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">${blog.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">${blog.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${blog.tags.map(tag => `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">${tag}</span>`).join('')}
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500 dark:text-gray-400">${new Date(blog.date).toLocaleDateString()}</span>
                        <button class="btn-primary text-sm" onclick="blogManager.viewBlog(${blog.id})">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    loadBlogs() {
        const blogGrid = document.getElementById('blogGrid');
        if (!blogGrid) return;

        const filteredBlogs = this.getFilteredBlogs();
        blogGrid.innerHTML = filteredBlogs.map(blog => this.createBlogCard(blog)).join('');
    }

    getFilteredBlogs() {
        let filtered = [...this.blogs];
        
        // Search filter
        const searchTerm = document.getElementById('blogSearch')?.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(blog => 
                blog.title.toLowerCase().includes(searchTerm) ||
                blog.description.toLowerCase().includes(searchTerm) ||
                blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        // Category filter
        const categoryFilter = document.getElementById('blogCategoryFilter')?.value;
        if (categoryFilter) {
            filtered = filtered.filter(blog => blog.category === categoryFilter);
        }
        
        // Sort
        const sortBy = document.getElementById('blogSortBy')?.value;
        switch (sortBy) {
            case 'title':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'category':
                filtered.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case 'popularity':
                filtered.sort((a, b) => b.views - a.views);
                break;
            default: // date
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        
        return filtered;
    }

    filterBlogs() {
        this.loadBlogs();
    }

    selectBlogForEdit(blogId) {
        this.currentBlogId = blogId;
        this.openBlogModal('edit', blogId);
    }

    openBlogModal(mode = 'add', blogId = null) {
        const modal = document.getElementById('blogModal');
        const modalTitle = document.getElementById('blogModalTitle');
        const form = document.getElementById('blogForm');
        
        if (mode === 'edit' && blogId) {
            const blog = this.blogs.find(b => b.id === blogId);
            if (blog) {
                this.currentBlogId = blogId;
                modalTitle.textContent = 'Edit Blog';
                this.populateBlogForm(blog);
            }
        } else {
            this.currentBlogId = null;
            modalTitle.textContent = 'Add New Blog';
            form.reset();
        }
        
        modal.classList.remove('hidden');
    }

    populateBlogForm(blog) {
        document.getElementById('blogTitle').value = blog.title;
        document.getElementById('blogCategory').value = blog.category;
        document.getElementById('blogDescription').value = blog.description;
        document.getElementById('blogContent').value = blog.content;
        document.getElementById('blogImage').value = blog.image || '';
        document.getElementById('blogTags').value = blog.tags.join(', ');
    }

    closeBlogModal() {
        const modal = document.getElementById('blogModal');
        modal.classList.add('hidden');
        this.currentBlogId = null;
    }

    handleBlogSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const blogData = {
            title: formData.get('title'),
            category: formData.get('category'),
            description: formData.get('description'),
            content: formData.get('content'),
            image: formData.get('image'),
            tags: formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag),
            date: new Date().toISOString().split('T')[0],
            views: 0,
            likes: 0
        };
        
        if (this.currentBlogId) {
            // Edit existing blog
            const index = this.blogs.findIndex(b => b.id === this.currentBlogId);
            if (index !== -1) {
                // Preserve existing views and likes
                blogData.views = this.blogs[index].views;
                blogData.likes = this.blogs[index].likes;
                this.blogs[index] = { ...this.blogs[index], ...blogData };
            }
        } else {
            // Add new blog
            blogData.id = Math.max(...this.blogs.map(b => b.id), 0) + 1;
            this.blogs.unshift(blogData);
        }
        
        this.saveBlogsToStorage();
        this.loadBlogs();
        this.closeBlogModal();
        this.showNotification('Blog saved successfully!', 'success');
    }

    deleteSelectedBlog() {
        this.showBlogSelectionModal('delete');
    }

    showBlogSelectionModal(action) {
        // Create modal for blog selection
        const modal = document.createElement('div');
        modal.id = 'blogSelectionModal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto';
        
        const actionText = action === 'delete' ? 'Delete' : 'Edit';
        const actionColor = action === 'delete' ? 'text-red-600' : 'text-blue-600';
        
        modalContent.innerHTML = `
            <div class="p-8">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Select Blog to ${actionText}</h3>
                    <button id="closeBlogSelectionModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="space-y-4">
                    ${this.blogs.map(blog => `
                        <div class="blog-selection-item border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors" data-blog-id="${blog.id}">
                            <div class="flex items-center justify-between">
                                <div class="flex-1">
                                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${blog.title}</h4>
                                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">${blog.description}</p>
                                    <div class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                        <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">${blog.category}</span>
                                        <span>👁️ ${blog.views} views</span>
                                        <span>❤️ ${blog.likes} likes</span>
                                        <span>${new Date(blog.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <button class="ml-4 px-4 py-2 bg-${action === 'delete' ? 'red' : 'blue'}-500 text-white rounded-lg hover:bg-${action === 'delete' ? 'red' : 'blue'}-600 transition-colors">
                                    ${actionText}
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-6 text-center">
                    <button id="cancelBlogSelection" class="btn-ghost">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Add event listeners
        const closeBtn = modal.querySelector('#closeBlogSelectionModal');
        const cancelBtn = modal.querySelector('#cancelBlogSelection');
        const blogItems = modal.querySelectorAll('.blog-selection-item');
        
        closeBtn.addEventListener('click', () => this.closeBlogSelectionModal());
        cancelBtn.addEventListener('click', () => this.closeBlogSelectionModal());
        
        blogItems.forEach(item => {
            const blogId = parseInt(item.getAttribute('data-blog-id'));
            const actionBtn = item.querySelector('button');
            
            actionBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (action === 'delete') {
                    this.deleteBlog(blogId);
                } else {
                    this.selectBlogForEdit(blogId);
                }
                this.closeBlogSelectionModal();
            });
        });
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeBlogSelectionModal();
            }
        });
    }

    closeBlogSelectionModal() {
        const modal = document.getElementById('blogSelectionModal');
        if (modal) {
            modal.remove();
        }
    }

    deleteBlog(blogId) {
        const blog = this.blogs.find(b => b.id === blogId);
        if (!blog) return;
        
        if (confirm(`Are you sure you want to delete "${blog.title}"?\n\nThis action cannot be undone.`)) {
            this.blogs = this.blogs.filter(b => b.id !== blogId);
            this.saveBlogsToStorage();
            this.loadBlogs();
            this.currentBlogId = null;
            this.showNotification(`Blog "${blog.title}" deleted successfully!`, 'success');
        }
    }

    viewBlog(blogId) {
        const blog = this.blogs.find(b => b.id === blogId);
        if (!blog) return;
        
        // Increment views
        blog.views++;
        this.saveBlogsToStorage();
        
        const modal = document.getElementById('blogViewModal');
        const title = document.getElementById('blogViewTitle');
        const content = document.getElementById('blogViewContent');
        const category = document.getElementById('blogViewCategory');
        const date = document.getElementById('blogViewDate');
        const tags = document.getElementById('blogViewTags');
        
        title.textContent = blog.title;
        
        // Format content with proper line breaks and paragraphs
        const formattedContent = blog.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
        
        content.innerHTML = `
            <div class="mb-6">
                <img src="${blog.image || 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500'}" 
                     alt="${blog.title}" 
                     class="w-full h-64 object-cover rounded-lg mb-4">
                <div class="prose prose-lg max-w-none dark:prose-invert">
                    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">${formattedContent}</p>
                </div>
            </div>
        `;
        
        category.textContent = blog.category;
        date.textContent = new Date(blog.date).toLocaleDateString();
        tags.innerHTML = blog.tags.map(tag => 
            `<span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">${tag}</span>`
        ).join('');
        
        modal.classList.remove('hidden');
    }

    closeBlogViewModal() {
        const modal = document.getElementById('blogViewModal');
        modal.classList.add('hidden');
    }

    loadMoreBlogs() {
        // Implement pagination logic here
        this.showNotification('Load more functionality coming soon!', 'info');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        // Set colors based on type
        switch (type) {
            case 'success':
                notification.className += ' bg-green-500 text-white';
                break;
            case 'error':
                notification.className += ' bg-red-500 text-white';
                break;
            case 'warning':
                notification.className += ' bg-yellow-500 text-white';
                break;
            default:
                notification.className += ' bg-blue-500 text-white';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// Resume Management System
class ResumeManager {
    constructor() {
        this.resumes = this.loadResumesFromStorage();
        this.currentResumeId = null;
        this.isAdmin = false; // Start with admin mode disabled
        this.adminPassword = "perceptron"; // Same password as blog system
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadResume();
        this.toggleAdminControls();
        this.checkAdminStatus();
    }

    checkAdminStatus() {
        // Check if admin is already authenticated
        const isAuthenticated = sessionStorage.getItem('resumeAdminAuthenticated');
        if (isAuthenticated === 'true') {
            this.isAdmin = true;
            this.toggleAdminControls();
        }
    }

    authenticateAdmin() {
        const password = prompt("Enter admin password:");
        if (password === this.adminPassword) {
            this.isAdmin = true;
            sessionStorage.setItem('resumeAdminAuthenticated', 'true');
            this.toggleAdminControls();
            this.showNotification('Admin access granted!', 'success');
        } else {
            this.showNotification('Incorrect password!', 'error');
        }
    }

    setupEventListeners() {
        // Admin controls
        const uploadResumeBtn = document.getElementById('uploadResumeBtn');
        const updateResumeBtn = document.getElementById('updateResumeBtn');
        const deleteResumeBtn = document.getElementById('deleteResumeBtn');
        const resumeModal = document.getElementById('resumeModal');
        const resumeForm = document.getElementById('resumeForm');
        const closeResumeModal = document.getElementById('closeResumeModal');
        const cancelResumeBtn = document.getElementById('cancelResumeBtn');
        const downloadResumeBtn = document.getElementById('downloadResumeBtn');

        if (uploadResumeBtn) uploadResumeBtn.addEventListener('click', () => this.openResumeModal());
        if (updateResumeBtn) updateResumeBtn.addEventListener('click', () => this.showResumeSelectionModal('update'));
        if (deleteResumeBtn) deleteResumeBtn.addEventListener('click', () => this.deleteSelectedResume());
        if (closeResumeModal) closeResumeModal.addEventListener('click', () => this.closeResumeModal());
        if (cancelResumeBtn) cancelResumeBtn.addEventListener('click', () => this.closeResumeModal());
        if (resumeForm) resumeForm.addEventListener('submit', (e) => this.handleResumeSubmit(e));
        if (downloadResumeBtn) downloadResumeBtn.addEventListener('click', () => this.downloadResume());

        // Close modal on outside click
        if (resumeModal) resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) this.closeResumeModal();
        });

        // Add admin authentication button
        this.addAdminAuthButton();
    }

                    addAdminAuthButton() {
                    const adminControls = document.getElementById('resumeAdminControls');
                    if (adminControls) {
                        // Always show the admin controls section, but hide other buttons when not authenticated
                        adminControls.classList.remove('hidden');
                        
                        if (!adminControls.querySelector('#resumeAdminAuthBtn')) {
                            const authBtn = document.createElement('button');
                            authBtn.id = 'resumeAdminAuthBtn';
                            authBtn.className = 'btn-ghost text-blue-600 hover:text-blue-700 mx-auto block';
                            authBtn.innerHTML = `
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                                ${this.isAdmin ? 'Admin Mode Active' : 'Login as Admin'}
                            `;
                            authBtn.addEventListener('click', () => this.authenticateAdmin());
                            
                            // Create a centered container for the login button
                            const loginContainer = document.createElement('div');
                            loginContainer.className = 'flex justify-center mb-4';
                            loginContainer.appendChild(authBtn);
                            
                            adminControls.insertBefore(loginContainer, adminControls.firstChild);
                        }
                        
                        // Show/hide other admin buttons based on authentication status
                        const uploadResumeBtn = document.getElementById('uploadResumeBtn');
                        const updateResumeBtn = document.getElementById('updateResumeBtn');
                        const deleteResumeBtn = document.getElementById('deleteResumeBtn');
                        
                        if (uploadResumeBtn) uploadResumeBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
                        if (updateResumeBtn) updateResumeBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
                        if (deleteResumeBtn) deleteResumeBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
                    }
                }

    toggleAdminControls() {
        const adminControls = document.getElementById('resumeAdminControls');
        if (adminControls) {
            // Always show the admin controls section
            adminControls.classList.remove('hidden');
            this.addAdminAuthButton();
        }
    }

    loadResumesFromStorage() {
        const stored = localStorage.getItem('resumes');
        if (stored) {
            return JSON.parse(stored);
        }
        // Default resume
        return [
            {
                id: 1,
                title: "Rushikesh Mohalkar - AI/ML Engineer Resume",
                description: "Passionate AI/ML Engineer with expertise in deep learning, computer vision, and natural language processing. Dedicated to developing innovative solutions and pushing the boundaries of artificial intelligence.",
                version: "v3.0",
                date: "2024-12-19",
                fileUrl: null, // Will be set when file is uploaded
                content: {
                    experience: [
                        {
                            title: "QA Engineer",
                            company: "Cognizant",
                            period: "2023 - Present",
                            description: "Working as a QA Engineer at Cognizant, responsible for quality assurance and testing processes. Gained experience in software testing methodologies and quality control procedures."
                        },
                        {
                            title: "Programmer Analyst",
                            company: "Previous Company",
                            period: "2022 - 2023",
                            description: "Started as Intern, progressed to PA Trainee, and then promoted to Programmer Analyst. Developed programming skills and gained hands-on experience in software development."
                        },
                        {
                            title: "PA Trainee",
                            company: "Previous Company",
                            period: "2021 - 2022",
                            description: "Trained as Programmer Analyst, learning software development practices and programming fundamentals."
                        },
                        {
                            title: "Intern",
                            company: "Previous Company",
                            period: "2020 - 2021",
                            description: "Started career as an intern, learning basic programming concepts and software development lifecycle."
                        }
                    ],
                    education: [
                        {
                            degree: "Bachelor's in Computer Science",
                            school: "University of Mumbai",
                            period: "2020 - 2024",
                            description: "Focused on artificial intelligence, machine learning, and software engineering. Completed projects in computer vision and deep learning."
                        },
                        {
                            degree: "AI/ML Certifications",
                            school: "Online Platforms (Coursera, Udemy)",
                            period: "2022 - 2024",
                            description: "Completed multiple certifications in deep learning, computer vision, and natural language processing. Specialized in TensorFlow and PyTorch frameworks."
                        }
                    ],
                                                    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning", "Neural Networks", "Machine Learning", "Data Analysis", "Git", "Docker", "AWS", "Flask", "Django"],
                                interests: [
                                    "Build projects (chatbots, models)",
                                    "Join Kaggle competitions", 
                                    "Read papers & take online courses",
                                    "Write blogs or tutorials",
                                    "Playing cricket"
                                ]
                }
            }
        ];
    }

    saveResumesToStorage() {
        localStorage.setItem('resumes', JSON.stringify(this.resumes));
    }

    loadResume() {
        const currentResume = this.resumes[0]; // Display the first resume
        if (!currentResume) return;

        const versionDisplay = document.getElementById('resumeVersionDisplay');
        const dateDisplay = document.getElementById('resumeDateDisplay');
        const content = document.getElementById('resumeContent');

        if (versionDisplay) versionDisplay.textContent = currentResume.version;
        if (dateDisplay) dateDisplay.textContent = `Updated: ${new Date(currentResume.date).toLocaleDateString()}`;

        if (content) {
            content.innerHTML = this.createResumeContent(currentResume);
        }
    }

    createResumeContent(resume) {
        return `
            <p class="text-gray-600 dark:text-gray-300 mb-6">
                ${resume.description}
            </p>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h4>
                    <div class="space-y-4">
                        ${resume.content.experience.map((exp, index) => `
                            <div class="border-l-4 border-${index === 0 ? 'blue' : 'green'}-500 pl-4">
                                <h5 class="font-semibold text-gray-900 dark:text-white">${exp.title}</h5>
                                <p class="text-sm text-gray-600 dark:text-gray-400">${exp.company} • ${exp.period}</p>
                                <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                    ${exp.description}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h4>
                    <div class="space-y-4">
                        ${resume.content.education.map((edu, index) => `
                            <div class="border-l-4 border-${index === 0 ? 'purple' : 'orange'}-500 pl-4">
                                <h5 class="font-semibold text-gray-900 dark:text-white">${edu.degree}</h5>
                                <p class="text-sm text-gray-600 dark:text-gray-400">${edu.school} • ${edu.period}</p>
                                <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                    ${edu.description}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
                                    <div class="mt-8">
                            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h4>
                            <div class="flex flex-wrap gap-2">
                                ${resume.content.skills.map(skill => `
                                    <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">${skill}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interests</h4>
                            <div class="flex flex-wrap gap-2">
                                ${resume.content.interests.map(interest => `
                                    <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">${interest}</span>
                                `).join('')}
                            </div>
                        </div>
        `;
    }

    openResumeModal(mode = 'add', resumeId = null) {
        const modal = document.getElementById('resumeModal');
        const modalTitle = document.getElementById('resumeModalTitle');
        const form = document.getElementById('resumeForm');
        
        if (mode === 'update' && resumeId) {
            const resume = this.resumes.find(r => r.id === resumeId);
            if (resume) {
                this.currentResumeId = resumeId;
                modalTitle.textContent = 'Update Resume';
                this.populateResumeForm(resume);
            }
        } else {
            this.currentResumeId = null;
            modalTitle.textContent = 'Upload Resume';
            form.reset();
        }
        
        modal.classList.remove('hidden');
    }

    populateResumeForm(resume) {
        document.getElementById('resumeTitle').value = resume.title;
        document.getElementById('resumeDescription').value = resume.description;
        document.getElementById('resumeVersion').value = resume.version;
    }

    closeResumeModal() {
        const modal = document.getElementById('resumeModal');
        modal.classList.add('hidden');
        this.currentResumeId = null;
    }

    handleResumeSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const fileInput = document.getElementById('resumeFile');
        const file = fileInput.files[0];
        
        if (!file && !this.currentResumeId) {
            this.showNotification('Please select a PDF file to upload', 'error');
            return;
        }
        
        const resumeData = {
            title: formData.get('title'),
            description: formData.get('description'),
            version: formData.get('version'),
            date: new Date().toISOString().split('T')[0]
        };
        
        if (this.currentResumeId) {
            // Update existing resume
            const index = this.resumes.findIndex(r => r.id === this.currentResumeId);
            if (index !== -1) {
                this.resumes[index] = { ...this.resumes[index], ...resumeData };
            }
        } else {
            // Add new resume
            resumeData.id = Math.max(...this.resumes.map(r => r.id), 0) + 1;
            resumeData.content = this.resumes[0].content; // Use default content structure
            this.resumes.unshift(resumeData);
        }
        
        this.saveResumesToStorage();
        this.loadResume();
        this.closeResumeModal();
        this.showNotification('Resume saved successfully!', 'success');
    }

    deleteSelectedResume() {
        this.showResumeSelectionModal('delete');
    }

    showResumeSelectionModal(action) {
        // Create modal for resume selection
        const modal = document.createElement('div');
        modal.id = 'resumeSelectionModal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto';
        
        const actionText = action === 'delete' ? 'Delete' : 'Update';
        
        modalContent.innerHTML = `
            <div class="p-8">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Select Resume to ${actionText}</h3>
                    <button id="closeResumeSelectionModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="space-y-4">
                    ${this.resumes.map(resume => `
                        <div class="resume-selection-item border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors" data-resume-id="${resume.id}">
                            <div class="flex items-center justify-between">
                                <div class="flex-1">
                                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${resume.title}</h4>
                                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">${resume.description}</p>
                                    <div class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                        <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">${resume.version}</span>
                                        <span>${new Date(resume.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <button class="ml-4 px-4 py-2 bg-${action === 'delete' ? 'red' : 'blue'}-500 text-white rounded-lg hover:bg-${action === 'delete' ? 'red' : 'blue'}-600 transition-colors">
                                    ${actionText}
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-6 text-center">
                    <button id="cancelResumeSelection" class="btn-ghost">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Add event listeners
        const closeBtn = modal.querySelector('#closeResumeSelectionModal');
        const cancelBtn = modal.querySelector('#cancelResumeSelection');
        const resumeItems = modal.querySelectorAll('.resume-selection-item');
        
        closeBtn.addEventListener('click', () => this.closeResumeSelectionModal());
        cancelBtn.addEventListener('click', () => this.closeResumeSelectionModal());
        
        resumeItems.forEach(item => {
            const resumeId = parseInt(item.getAttribute('data-resume-id'));
            const actionBtn = item.querySelector('button');
            
            actionBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (action === 'delete') {
                    this.deleteResume(resumeId);
                } else {
                    this.selectResumeForUpdate(resumeId);
                }
                this.closeResumeSelectionModal();
            });
        });
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeResumeSelectionModal();
            }
        });
    }

    closeResumeSelectionModal() {
        const modal = document.getElementById('resumeSelectionModal');
        if (modal) {
            modal.remove();
        }
    }

    selectResumeForUpdate(resumeId) {
        this.currentResumeId = resumeId;
        this.openResumeModal('update', resumeId);
    }

    deleteResume(resumeId) {
        const resume = this.resumes.find(r => r.id === resumeId);
        if (!resume) return;
        
        if (confirm(`Are you sure you want to delete "${resume.title}"?\n\nThis action cannot be undone.`)) {
            this.resumes = this.resumes.filter(r => r.id !== resumeId);
            this.saveResumesToStorage();
            this.loadResume();
            this.currentResumeId = null;
            this.showNotification(`Resume "${resume.title}" deleted successfully!`, 'success');
        }
    }

    downloadResume() {
        const currentResume = this.resumes[0];
        if (!currentResume) {
            this.showNotification('No resume available for download', 'error');
            return;
        }
        
        // Create a simple text-based resume for download
        const resumeText = this.createResumeText(currentResume);
        const blob = new Blob([resumeText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${currentResume.title.replace(/\s+/g, '_')}_${currentResume.version}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('Resume downloaded successfully!', 'success');
    }

    createResumeText(resume) {
        return `
${resume.title.toUpperCase()}
Version: ${resume.version}
Last Updated: ${new Date(resume.date).toLocaleDateString()}

${resume.description}

EXPERIENCE
${resume.content.experience.map(exp => `
${exp.title}
${exp.company} • ${exp.period}
${exp.description}
`).join('')}

EDUCATION
${resume.content.education.map(edu => `
${edu.degree}
${edu.school} • ${edu.period}
${edu.description}
`).join('')}

SKILLS
${resume.content.skills.join(', ')}

INTERESTS
${resume.content.interests.join(', ')}

---
Generated from Rushikesh Mohalkar's Portfolio
        `.trim();
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        // Set colors based on type
        switch (type) {
            case 'success':
                notification.className += ' bg-green-500 text-white';
                break;
            case 'error':
                notification.className += ' bg-red-500 text-white';
                break;
            case 'warning':
                notification.className += ' bg-yellow-500 text-white';
                break;
            default:
                notification.className += ' bg-blue-500 text-white';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// Project Management System
class ProjectManager {
    constructor() {
        this.projects = this.loadProjectsFromStorage();
        this.currentProjectId = null;
        this.isAdmin = false; // Start with admin mode disabled
        this.adminPassword = "perceptron"; // Same password as other systems
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadProjects();
        this.toggleAdminControls();
        this.checkAdminStatus();
    }

    checkAdminStatus() {
        // Check if admin is already authenticated
        const isAuthenticated = sessionStorage.getItem('projectAdminAuthenticated');
        if (isAuthenticated === 'true') {
            this.isAdmin = true;
            this.toggleAdminControls();
        }
    }

    authenticateAdmin() {
        const password = prompt("Enter admin password:");
        if (password === this.adminPassword) {
            this.isAdmin = true;
            sessionStorage.setItem('projectAdminAuthenticated', 'true');
            this.toggleAdminControls();
            this.showNotification('Admin access granted!', 'success');
        } else {
            this.showNotification('Incorrect password!', 'error');
        }
    }

    setupEventListeners() {
        // Admin controls
        const addProjectBtn = document.getElementById('addProjectBtn');
        const editProjectBtn = document.getElementById('editProjectBtn');
        const deleteProjectBtn = document.getElementById('deleteProjectBtn');
        const projectModal = document.getElementById('projectModal');
        const projectForm = document.getElementById('projectForm');
        const closeProjectModal = document.getElementById('closeProjectModal');
        const cancelProjectBtn = document.getElementById('cancelProjectBtn');

        if (addProjectBtn) addProjectBtn.addEventListener('click', () => this.openProjectModal());
        if (editProjectBtn) editProjectBtn.addEventListener('click', () => this.showProjectSelectionModal('edit'));
        if (deleteProjectBtn) deleteProjectBtn.addEventListener('click', () => this.deleteSelectedProject());
        if (closeProjectModal) closeProjectModal.addEventListener('click', () => this.closeProjectModal());
        if (cancelProjectBtn) cancelProjectBtn.addEventListener('click', () => this.closeProjectModal());
        if (projectForm) projectForm.addEventListener('submit', (e) => this.handleProjectSubmit(e));

        // Close modal on outside click
        if (projectModal) projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) this.closeProjectModal();
        });

        // Search and filter
        const projectSearch = document.getElementById('projectSearch');
        const projectCategoryFilter = document.getElementById('projectCategoryFilter');
        const projectSortBy = document.getElementById('projectSortBy');

        if (projectSearch) projectSearch.addEventListener('input', () => this.filterProjects());
        if (projectCategoryFilter) projectCategoryFilter.addEventListener('change', () => this.filterProjects());
        if (projectSortBy) projectSortBy.addEventListener('change', () => this.filterProjects());

        // Add admin authentication button
        this.addAdminAuthButton();
    }

    addAdminAuthButton() {
        const adminControls = document.getElementById('projectAdminControls');
        if (adminControls) {
            // Always show the admin controls section, but hide other buttons when not authenticated
            adminControls.classList.remove('hidden');
            
            if (!adminControls.querySelector('#projectAdminAuthBtn')) {
                const authBtn = document.createElement('button');
                authBtn.id = 'projectAdminAuthBtn';
                authBtn.className = 'btn-ghost text-blue-600 hover:text-blue-700 mx-auto block';
                authBtn.innerHTML = `
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    ${this.isAdmin ? 'Admin Mode Active' : 'Login as Admin'}
                `;
                authBtn.addEventListener('click', () => this.authenticateAdmin());
                
                // Create a centered container for the login button
                const loginContainer = document.createElement('div');
                loginContainer.className = 'flex justify-center mb-4';
                loginContainer.appendChild(authBtn);
                
                adminControls.insertBefore(loginContainer, adminControls.firstChild);
            }
            
            // Show/hide other admin buttons based on authentication status
            const addProjectBtn = document.getElementById('addProjectBtn');
            const editProjectBtn = document.getElementById('editProjectBtn');
            const deleteProjectBtn = document.getElementById('deleteProjectBtn');
            
            if (addProjectBtn) addProjectBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
            if (editProjectBtn) editProjectBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
            if (deleteProjectBtn) deleteProjectBtn.style.display = this.isAdmin ? 'inline-flex' : 'none';
        }
    }

    toggleAdminControls() {
        const adminControls = document.getElementById('projectAdminControls');
        if (adminControls) {
            // Always show the admin controls section
            adminControls.classList.remove('hidden');
            this.addAdminAuthButton();
        }
    }

    loadProjectsFromStorage() {
        const stored = localStorage.getItem('projects');
        if (stored) {
            return JSON.parse(stored);
        }
        // Default projects
        return [
            {
                id: 1,
                title: "Image Classification with CNN",
                description: "A deep learning project using Convolutional Neural Networks for image classification.",
                category: "Computer Vision",
                content: "This project implements a CNN architecture for image classification using TensorFlow and Keras. The model achieves high accuracy on various datasets and can be used for real-world applications.",
                image: "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=CNN+Project",
                tags: ["CNN", "Image Classification", "TensorFlow", "Deep Learning"],
                link: "https://github.com/username/image-classification",
                demo: "https://demo.example.com/image-classification",
                date: "2024-01-15"
            },
            {
                id: 2,
                title: "Natural Language Processing Pipeline",
                description: "An NLP pipeline for text processing and sentiment analysis.",
                category: "NLP",
                content: "This project builds a comprehensive NLP pipeline that includes text preprocessing, tokenization, and sentiment analysis. It uses state-of-the-art transformer models for better accuracy.",
                image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=NLP+Project",
                tags: ["NLP", "Sentiment Analysis", "Transformers", "Python"],
                link: "https://github.com/username/nlp-pipeline",
                demo: "https://demo.example.com/nlp-pipeline",
                date: "2024-02-20"
            },
            {
                id: 3,
                title: "Reinforcement Learning Agent",
                description: "A reinforcement learning agent for game playing and decision making.",
                category: "Deep Learning",
                content: "This project implements a reinforcement learning agent using Q-learning and Deep Q-Networks. The agent learns to play games and make optimal decisions in various environments.",
                image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=RL+Project",
                tags: ["Reinforcement Learning", "Q-Learning", "PyTorch", "Gym"],
                link: "https://github.com/username/rl-agent",
                demo: "https://demo.example.com/rl-agent",
                date: "2024-03-10"
            }
        ];
    }

    saveProjectsToStorage() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    loadProjects() {
        const projectGrid = document.querySelector('#projects .grid');
        if (!projectGrid) return;

        projectGrid.innerHTML = '';
        this.projects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectGrid.appendChild(projectCard);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300';
        card.setAttribute('data-aos', 'fade-up');
        
        card.innerHTML = `
            <div class="relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">${project.category}</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">${tag}</span>`).join('')}
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-400">${new Date(project.date).toLocaleDateString()}</span>
                    <div class="flex gap-2">
                        ${project.link ? `<a href="${project.link}" target="_blank" class="text-blue-500 hover:text-blue-700 text-sm">Code</a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="text-green-500 hover:text-green-700 text-sm">Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }

    filterProjects() {
        const searchTerm = document.getElementById('projectSearch')?.value.toLowerCase() || '';
        const categoryFilter = document.getElementById('projectCategoryFilter')?.value || '';
        const sortBy = document.getElementById('projectSortBy')?.value || 'date';

        let filteredProjects = this.projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm) ||
                                project.description.toLowerCase().includes(searchTerm) ||
                                project.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            const matchesCategory = !categoryFilter || project.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });

        // Sort projects
        filteredProjects.sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'category':
                    return a.category.localeCompare(b.category);
                case 'date':
                    return new Date(b.date) - new Date(a.date);
                default:
                    return 0;
            }
        });

        // Update display
        const projectGrid = document.querySelector('#projects .grid');
        if (projectGrid) {
            projectGrid.innerHTML = '';
            filteredProjects.forEach(project => {
                const projectCard = this.createProjectCard(project);
                projectGrid.appendChild(projectCard);
            });
        }
    }

    openProjectModal(mode = 'add', projectId = null) {
        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('projectModalTitle');
        const form = document.getElementById('projectForm');
        
        if (mode === 'edit' && projectId) {
            const project = this.projects.find(p => p.id === projectId);
            if (project) {
                this.currentProjectId = projectId;
                modalTitle.textContent = 'Edit Project';
                this.populateProjectForm(project);
            }
        } else {
            this.currentProjectId = null;
            modalTitle.textContent = 'Add New Project';
            form.reset();
        }
        
        modal.classList.remove('hidden');
    }

    populateProjectForm(project) {
        document.getElementById('projectTitle').value = project.title;
        document.getElementById('projectCategory').value = project.category;
        document.getElementById('projectDescription').value = project.description;
        document.getElementById('projectContent').value = project.content;
        document.getElementById('projectImage').value = project.image || '';
        document.getElementById('projectTags').value = project.tags.join(', ');
        document.getElementById('projectLink').value = project.link || '';
        document.getElementById('projectDemo').value = project.demo || '';
    }

    closeProjectModal() {
        const modal = document.getElementById('projectModal');
        modal.classList.add('hidden');
        this.currentProjectId = null;
    }

    handleProjectSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const projectData = {
            title: formData.get('title'),
            category: formData.get('category'),
            description: formData.get('description'),
            content: formData.get('content'),
            image: formData.get('image'),
            tags: formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag),
            link: formData.get('link'),
            demo: formData.get('demo'),
            date: new Date().toISOString().split('T')[0]
        };
        
        if (this.currentProjectId) {
            // Update existing project
            const index = this.projects.findIndex(p => p.id === this.currentProjectId);
            if (index !== -1) {
                this.projects[index] = { ...this.projects[index], ...projectData };
            }
        } else {
            // Add new project
            projectData.id = Math.max(...this.projects.map(p => p.id), 0) + 1;
            this.projects.unshift(projectData);
        }
        
        this.saveProjectsToStorage();
        this.loadProjects();
        this.closeProjectModal();
        this.showNotification('Project saved successfully!', 'success');
    }

    deleteSelectedProject() {
        this.showProjectSelectionModal('delete');
    }

    showProjectSelectionModal(action) {
        // Create modal for project selection
        const modal = document.createElement('div');
        modal.id = 'projectSelectionModal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto';
        
        const actionText = action === 'delete' ? 'Delete' : 'Edit';
        
        modalContent.innerHTML = `
            <div class="p-8">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Select Project to ${actionText}</h3>
                    <button id="closeProjectSelectionModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="space-y-4">
                    ${this.projects.map(project => `
                        <div class="project-selection-item border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors" data-project-id="${project.id}">
                            <div class="flex items-center justify-between">
                                <div class="flex-1">
                                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${project.title}</h4>
                                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">${project.description}</p>
                                    <div class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                        <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">${project.category}</span>
                                        <span>${new Date(project.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <button class="ml-4 px-4 py-2 bg-${action === 'delete' ? 'red' : 'blue'}-500 text-white rounded-lg hover:bg-${action === 'delete' ? 'red' : 'blue'}-600 transition-colors">
                                    ${actionText}
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-6 text-center">
                    <button id="cancelProjectSelection" class="btn-ghost">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Add event listeners
        const closeBtn = modal.querySelector('#closeProjectSelectionModal');
        const cancelBtn = modal.querySelector('#cancelProjectSelection');
        const projectItems = modal.querySelectorAll('.project-selection-item');
        
        closeBtn.addEventListener('click', () => this.closeProjectSelectionModal());
        cancelBtn.addEventListener('click', () => this.closeProjectSelectionModal());
        
        projectItems.forEach(item => {
            const projectId = parseInt(item.getAttribute('data-project-id'));
            const actionBtn = item.querySelector('button');
            
            actionBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (action === 'delete') {
                    this.deleteProject(projectId);
                } else {
                    this.selectProjectForEdit(projectId);
                }
                this.closeProjectSelectionModal();
            });
        });
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeProjectSelectionModal();
            }
        });
    }

    closeProjectSelectionModal() {
        const modal = document.getElementById('projectSelectionModal');
        if (modal) {
            modal.remove();
        }
    }

    selectProjectForEdit(projectId) {
        this.currentProjectId = projectId;
        this.openProjectModal('edit', projectId);
    }

    deleteProject(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;
        
        if (confirm(`Are you sure you want to delete "${project.title}"?\n\nThis action cannot be undone.`)) {
            this.projects = this.projects.filter(p => p.id !== projectId);
            this.saveProjectsToStorage();
            this.loadProjects();
            this.currentProjectId = null;
            this.showNotification(`Project "${project.title}" deleted successfully!`, 'success');
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        // Set colors based on type
        switch (type) {
            case 'success':
                notification.className += ' bg-green-500 text-white';
                break;
            case 'error':
                notification.className += ' bg-red-500 text-white';
                break;
            case 'warning':
                notification.className += ' bg-yellow-500 text-white';
                break;
            default:
                notification.className += ' bg-blue-500 text-white';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
} 