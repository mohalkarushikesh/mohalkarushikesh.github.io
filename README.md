# AI/ML Portfolio Website

A modern, responsive portfolio website designed specifically for AI/ML professionals. Built with HTML, CSS (Tailwind CSS), and vanilla JavaScript, this portfolio showcases projects, skills, and expertise in a clean, professional design.

## 🌟 Features

### Design & Layout
- **Modern, Clean Design**: Professional appearance with smooth animations
- **Responsive Layout**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Toggle between light and dark themes
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Accessibility**: WCAG compliant with keyboard navigation support

### Sections
- **Hero Section**: Eye-catching introduction with gradient background
- **About Section**: Professional bio with skills showcase
- **Projects Section**: Grid layout showcasing 6 AI/ML projects
- **Contact Section**: Functional contact form with validation
- **Footer**: Social links and professional branding

### Interactive Features
- **Smooth Scrolling Navigation**: Seamless section navigation
- **Mobile Menu**: Hamburger menu for mobile devices
- **Form Validation**: Client-side validation with user feedback
- **Back to Top Button**: Appears when scrolling down
- **Project Cards**: Hover effects and interactive elements
- **Dark Mode Toggle**: Keyboard shortcut (Ctrl/Cmd + K)

## 🚀 Quick Start

### Local Development

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Or** use a local server for better development experience:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

4. **Visit** `http://localhost:8000` in your browser

### File Structure

```
ai-ml-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Personal Information

1. **Update Personal Details** in `index.html`:
   - Replace "Alex Chen" with your name
   - Update the tagline and bio
   - Change contact information
   - Update social media links

2. **Profile Image**:
   - Replace the placeholder SVG in the About section
   - Add your actual profile image
   - Recommended size: 300x300px

### Projects

1. **Project Content** in `index.html`:
   - Update project titles and descriptions
   - Replace placeholder images with actual project screenshots
   - Update technology tags
   - Add real project URLs

2. **Project Structure**:
   ```html
   <div class="project-card">
       <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg">
           <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-600">
               <!-- Project image or icon -->
           </div>
           <div class="p-6">
               <h3>Project Title</h3>
               <p>Project description...</p>
               <div class="tech-tags">
                   <span class="tech-tag">Technology</span>
               </div>
               <a href="#" class="btn-primary">View Project</a>
           </div>
       </div>
   </div>
   ```

### Skills

Update the skills section in the About area:
```html
<div class="flex flex-wrap gap-2">
    <span class="skill-tag">Your Skill</span>
    <span class="skill-tag">Another Skill</span>
</div>
```

### Colors & Styling

1. **Primary Colors**: Modify in `css/styles.css`:
   - Blue theme: `blue-600`, `blue-400`
   - Purple accents: `purple-600`, `purple-400`
   - Gray tones: `gray-900`, `gray-700`, `gray-300`

2. **Custom CSS Classes**:
   - `.btn-primary`: Primary button styling
   - `.btn-secondary`: Secondary button styling
   - `.skill-tag`: Skill tag styling
   - `.project-card`: Project card styling

## 📱 Deployment

### GitHub Pages

1. **Create a GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Save

3. **Your site will be available at**:
   `https://yourusername.github.io/portfolio`

### Netlify

1. **Drag and Drop**:
   - Go to [netlify.com](https://netlify.com)
   - Drag your project folder to the deploy area
   - Your site will be live instantly

2. **Git Integration**:
   - Connect your GitHub repository
   - Automatic deployments on push

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

## 🔧 Advanced Customization

### Adding New Sections

1. **Create the HTML structure** in `index.html`
2. **Add navigation link** in the navbar
3. **Style with Tailwind classes** or custom CSS
4. **Add JavaScript functionality** if needed

### Custom Animations

The site uses AOS (Animate On Scroll) library:
```html
<div data-aos="fade-up" data-aos-delay="200">
    <!-- Your content -->
</div>
```

Available animations: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in`, `zoom-out`

### Form Integration

To connect the contact form to a backend:

1. **Update form action** in `index.html`:
   ```html
   <form action="your-backend-url" method="POST">
   ```

2. **Modify JavaScript** in `js/script.js`:
   ```javascript
   // Replace the setTimeout with actual form submission
   fetch('/api/contact', {
       method: 'POST',
       body: formData
   })
   ```

### Analytics Integration

Add Google Analytics or other tracking:

1. **Add tracking code** to `<head>` section
2. **Update tracking events** in `js/script.js`
3. **Customize event tracking** as needed

## 🎯 Performance Optimization

### Image Optimization

1. **Compress images** before adding
2. **Use WebP format** when possible
3. **Implement lazy loading** for large images
4. **Optimize SVG icons**

### Code Optimization

1. **Minify CSS and JS** for production
2. **Remove unused CSS** classes
3. **Optimize font loading**
4. **Enable gzip compression**

## 🔒 Security Considerations

1. **Form Validation**: Both client and server-side
2. **HTTPS**: Always use HTTPS in production
3. **Content Security Policy**: Add CSP headers
4. **Input Sanitization**: Sanitize all user inputs

## 📊 SEO Optimization

1. **Meta Tags**: Update in `<head>` section
2. **Structured Data**: Add JSON-LD markup
3. **Sitemap**: Generate sitemap.xml
4. **Robots.txt**: Add robots.txt file

## 🧪 Testing

### Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Different screen sizes and orientations

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Focus indicators

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you need help with customization or deployment:

1. **Check the documentation** above
2. **Review the code comments** in the files
3. **Search for similar issues** in the repository
4. **Create a new issue** with detailed information

## 🎨 Design Credits

- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)
- **CSS Framework**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)

## 📈 Analytics & Tracking

The portfolio includes basic analytics tracking:
- Form submissions
- Project clicks
- Page views (if analytics service is added)

To add Google Analytics:
1. Get your tracking ID
2. Add the gtag script to `<head>`
3. Update the `trackEvent` function in `js/script.js`

## 🔄 Updates & Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor for security vulnerabilities
- Update content regularly
- Test across different devices

### Performance Monitoring
- Use tools like Lighthouse
- Monitor Core Web Vitals
- Check loading times
- Optimize based on metrics

---

**Built with ❤️ for the AI/ML community**

This portfolio template is designed to showcase your AI/ML expertise in a professional, modern way. Customize it to reflect your unique skills and projects! 