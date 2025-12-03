# 🚀 Deployment Guide

## Quick Start
1. Double-click `launch.bat` to open the portfolio locally
2. Or open `index.html` directly in any modern web browser

## 🌐 Deploy to Web

### Option 1: GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload all portfolio files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" > "main" > "/ (root)"
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get instant deployment with custom URL
4. Optional: Connect to GitHub for automatic updates

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import from GitHub or upload files
3. Zero-configuration deployment
4. Get custom domain and analytics

### Option 4: Traditional Web Hosting
1. Purchase hosting from any provider (Hostinger, Bluehost, etc.)
2. Upload files via FTP/cPanel File Manager
3. Point domain to hosting directory

## 📝 Before Deployment Checklist

- [ ] Replace `assets/resume.pdf` with your actual resume
- [ ] Update contact links in `index.html` (email, GitHub, LinkedIn)
- [ ] Add your actual project GitHub links in `js/config.js`
- [ ] Test all links and forms locally
- [ ] Optimize images (if you add any to `images/` folder)
- [ ] Update meta tags for SEO (title, description)

## 🔧 Custom Domain Setup

### For GitHub Pages:
1. Add `CNAME` file with your domain name
2. Configure DNS with your domain provider
3. Enable HTTPS in repository settings

### For Netlify/Vercel:
1. Add custom domain in dashboard
2. Follow DNS configuration instructions
3. SSL certificate is automatic

## 📊 Analytics Setup (Optional)

### Google Analytics:
Add this code before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 SEO Optimization

Add these meta tags to `<head>` section:

```html
<meta name="description" content="Haresh R - AI Student & Future Entrepreneur. B.Tech AI & Data Science portfolio showcasing projects, skills, and achievements.">
<meta name="keywords" content="AI, Data Science, Python, Machine Learning, Portfolio, Haresh R">
<meta name="author" content="Harish R">

<!-- Open Graph for social sharing -->
<meta property="og:title" content="Haresh R Portfolio">
<meta property="og:description" content="AI Student & Future Entrepreneur Portfolio">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourwebsite.com">
```

## 🔒 Security Best Practices

1. **Never commit sensitive data** to public repositories
2. **Use environment variables** for API keys (if you add backend features)
3. **Enable HTTPS** on your domain
4. **Regular updates** of dependencies (if you add any)

## 📱 Testing Checklist

Before going live, test on:
- [ ] Chrome (Desktop & Mobile)
- [ ] Firefox (Desktop & Mobile)
- [ ] Safari (Desktop & Mobile)
- [ ] Edge (Desktop)
- [ ] Different screen sizes (320px to 1920px)

## 🚀 Performance Tips

1. **Optimize images**: Use WebP format, compress images
2. **Minify CSS/JS**: Use online tools to reduce file sizes
3. **Enable caching**: Configure proper cache headers
4. **Use CDN**: For faster global loading

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Validate HTML/CSS using online validators
3. Test locally before deploying
4. Check hosting provider documentation

---

**Ready to launch your portfolio? Choose your deployment method and go live! 🚀**