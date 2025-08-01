// Theme Management JavaScript

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

// Export for use in main script
window.ThemeManager = {
    initDarkMode,
    updateDarkModeIcon
}; 