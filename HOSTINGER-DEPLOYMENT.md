# 🚀 Hostinger Deployment Guide

## Overview
This Next.js project is configured for **static HTML export**, making it compatible with Hostinger's shared hosting.

---

## ✅ Configuration Complete

Your project is now configured with:
- ✅ `output: 'export'` in `next.config.ts`
- ✅ `images: { unoptimized: true }` for static image handling
- ✅ `trailingSlash: true` for better hosting compatibility

---

## 📦 Build Your Site

Run this command to generate static HTML files:

```bash
npm run build
```

This will create an `/out` folder with all your static files.

---

## 📁 What Gets Generated

After running `npm run build`, you'll have:

```
/out
├── index.html          # Home page
├── about.html          # About page
├── courses.html        # Courses page
├── contact.html        # Contact page
├── _next/              # JS, CSS, and assets
│   ├── static/
│   └── ...
└── ...
```

---

## 🌐 Deploy to Hostinger

### Step 1: Access File Manager
1. Log in to your Hostinger account
2. Go to **Hosting** → **File Manager**
3. Navigate to `public_html` (or your domain's root folder)

### Step 2: Clear Existing Files (if any)
- Delete default `index.html` and other files in `public_html`
- Keep `.htaccess` if it exists

### Step 3: Upload Your Site
1. Upload **ALL contents** from the `/out` folder to `public_html`
2. Make sure you upload:
   - All HTML files
   - The `_next` folder
   - Any other assets

### Step 4: Create .htaccess File
Create a `.htaccess` file in `public_html` with this content:

```apache
# Enable rewrite engine
RewriteEngine On

# Force HTTPS (optional but recommended)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1/ [L,R=301]

# Serve HTML files without extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)/$ $1.html [NC,L]

# Handle 404 errors
ErrorDocument 404 /404.html

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/x-javascript "access plus 1 month"
</IfModule>
</IfModule>

# Compress files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Step 5: Set Permissions
- Files: 644
- Folders: 755

### Step 6: Test Your Site
Visit your domain: `https://yourdomain.com`

---

## 🔄 Update Your Site

Whenever you make changes:

1. Make your code changes locally
2. Run `npm run build`
3. Delete old files from `public_html` (except `.htaccess`)
4. Upload new `/out` folder contents
5. Clear browser cache and test

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All links work correctly
- [ ] Images are loading
- [ ] Forms are validated (note: contact form needs backend integration)
- [ ] Mobile responsive design works
- [ ] Run `npm run build` successfully
- [ ] Check `/out` folder is generated
- [ ] Test locally by serving `/out` folder

---

## 🔧 Alternative: Use FTP/SFTP

If File Manager is slow, use an FTP client:

1. **Download FileZilla** (free FTP client)
2. Get FTP credentials from Hostinger:
   - Go to **Hosting** → **FTP Accounts**
   - Note: Host, Username, Password, Port
3. Connect via FileZilla
4. Upload `/out` folder contents to `public_html`

---

## ⚠️ Important Notes

### Current Limitations (Static Export)
- ❌ No server-side rendering (SSR)
- ❌ No API routes
- ❌ Contact form won't send emails (needs backend)
- ❌ No real-time data

### What Works
- ✅ All pages load fast
- ✅ SEO-friendly HTML
- ✅ Client-side navigation
- ✅ Responsive design
- ✅ All styling and animations

### Contact Form Integration
To make the contact form functional, you'll need:

1. **Backend API** (separate service)
2. **Email service** (e.g., EmailJS, Formspree, SendGrid)
3. Or use **Hostinger's PHP** to handle form submissions

---

## 🎯 Quick Deploy Script (Optional)

Create `deploy.sh` for easy deployment:

```bash
#!/bin/bash
echo "Building site..."
npm run build

echo "Build complete! Upload the /out folder to Hostinger."
echo "Location: $(pwd)/out"
```

Make it executable: `chmod +x deploy.sh`

Run: `./deploy.sh`

---

## 🆘 Troubleshooting

### Issue: Pages show 404
- Check `.htaccess` is properly configured
- Verify all HTML files are uploaded

### Issue: Styles not loading
- Check `_next` folder is uploaded
- Clear browser cache
- Verify file permissions (644 for files)

### Issue: Images not displaying
- Check image URLs in code
- Verify images are in `/out` folder
- Images from external URLs (Unsplash) need internet connection

### Issue: Links broken
- Make sure `trailingSlash: true` is in config
- Update internal links to include trailing slash

---

## 📞 Need Help?

- **Hostinger Support**: Available 24/7 via chat
- **Next.js Docs**: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
- **File permissions**: Contact Hostinger support

---

## ✨ Success!

Once deployed, your Market Dojo website will be:
- ⚡ Fast loading
- 🔍 SEO optimized
- 📱 Mobile friendly
- 🌍 Accessible worldwide

Visit your site and enjoy! 🎉
