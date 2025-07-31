# Deployment Guide

This guide provides step-by-step instructions for deploying your AI/ML portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### 1. GitHub Pages (Recommended)

**Step 1: Create GitHub Repository**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

**Step 2: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Click "Save"

**Step 3: Access Your Site**
- Your site will be available at: `https://yourusername.github.io/portfolio`
- It may take a few minutes to deploy

### 2. Netlify (Drag & Drop)

**Step 1: Deploy**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder to the deploy area
3. Your site is live instantly!

**Step 2: Custom Domain (Optional)**
1. Go to "Site settings" → "Domain management"
2. Add your custom domain
3. Follow the DNS instructions

### 3. Vercel

**Step 1: Install Vercel CLI**
```bash
npm i -g vercel
```

**Step 2: Deploy**
```bash
vercel
```

**Step 3: Follow Prompts**
- Link to existing project or create new
- Choose project name
- Deploy!

## 🔧 Advanced Deployment

### Custom Domain Setup

1. **Purchase Domain** (if you don't have one)
2. **Configure DNS**:
   - Add CNAME record pointing to your hosting provider
   - For GitHub Pages: `yourusername.github.io`
   - For Netlify: `your-site.netlify.app`

### SSL Certificate

Most hosting providers automatically provide SSL certificates:
- **GitHub Pages**: Automatic HTTPS
- **Netlify**: Automatic HTTPS
- **Vercel**: Automatic HTTPS

### Environment Variables

If you add backend functionality later:
1. **Netlify**: Go to Site settings → Environment variables
2. **Vercel**: Use `vercel env add` command
3. **GitHub Pages**: Use GitHub Secrets for GitHub Actions

## 📊 Analytics Setup

### Google Analytics

1. **Create GA4 Property**
2. **Add Tracking Code** to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

3. **Replace `GA_MEASUREMENT_ID`** with your actual tracking ID

### Other Analytics

- **Plausible**: Privacy-focused analytics
- **Fathom**: Simple, privacy-friendly analytics
- **Matomo**: Self-hosted analytics

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] Form validation (client + server)
- [ ] Input sanitization
- [ ] Content Security Policy (CSP)
- [ ] Regular security updates

## 📈 Performance Optimization

### Before Deployment

1. **Optimize Images**:
   ```bash
   # Install image optimization tools
   npm install -g imagemin-cli
   imagemin images/* --out-dir=optimized/
   ```

2. **Minify Code** (optional):
   ```bash
   # Install minification tools
   npm install -g clean-css-cli uglify-js
   
   # Minify CSS
   cleancss -o css/styles.min.css css/styles.css
   
   # Minify JS
   uglifyjs js/script.js -o js/script.min.js
   ```

3. **Update HTML** to use minified files

### Performance Monitoring

- **Lighthouse**: Run audits regularly
- **Core Web Vitals**: Monitor in Google Search Console
- **PageSpeed Insights**: Check performance scores

## 🚨 Troubleshooting

### Common Issues

**1. Site Not Loading**
- Check file paths (case-sensitive)
- Verify `index.html` is in root directory
- Check for JavaScript errors in browser console

**2. Styling Issues**
- Ensure CSS files are loading correctly
- Check Tailwind CSS CDN link
- Verify custom CSS is being applied

**3. Form Not Working**
- Check browser console for errors
- Verify form validation is working
- Test with different browsers

**4. Mobile Issues**
- Test on actual devices
- Check viewport meta tag
- Verify responsive breakpoints

### Debug Steps

1. **Check Browser Console** for errors
2. **Validate HTML** at validator.w3.org
3. **Test Responsive Design** with browser dev tools
4. **Check Network Tab** for failed requests

## 📞 Support

If you encounter issues:

1. **Check the main README.md** for detailed instructions
2. **Review browser console** for error messages
3. **Test locally** before deploying
4. **Check hosting provider documentation**

## 🔄 Continuous Deployment

### GitHub Actions (GitHub Pages)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### Netlify Auto-Deploy

1. Connect your GitHub repository
2. Enable auto-deploy in Netlify settings
3. Every push to main branch will trigger deployment

---

**Your portfolio is now live! 🎉**

Remember to:
- Update your resume with the portfolio URL
- Share on LinkedIn and other professional networks
- Keep content fresh and updated
- Monitor analytics and performance 