# Market Mojo - Deployment Guide

## 📋 Pre-Deployment Checklist

- ✅ All pages created and tested
- ✅ Responsive design verified
- ✅ Forms working properly
- ✅ Navigation functional
- ✅ SEO metadata configured
- ✅ Favicon added

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic deployments
- Free SSL certificate
- Global CDN
- Perfect for Next.js

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial Market Mojo website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✨

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - Wait for SSL certificate (automatic)

---

### Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

---

### Option 3: Hostinger (Static Export)

**Important:** Next.js by default uses server-side features. For static hosting:

1. **Update next.config.ts**
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build Static Site**
   ```bash
   npm run build
   ```
   This creates an `out` folder with static files.

3. **Upload to Hostinger**
   - Via FTP:
     - Use FileZilla or any FTP client
     - Upload contents of `out` folder to `public_html`
   
   - Via cPanel File Manager:
     - Zip the `out` folder contents
     - Upload to cPanel
     - Extract in `public_html`

**Note:** Contact form won't work without backend. Need to:
- Use Formspree, Form submit, or similar service
- Or set up API endpoint separately

---

### Option 4: AWS Amplify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy on AWS Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect GitHub repository
   - Configure build settings (auto-detected for Next.js)
   - Deploy

---

### Option 5: Railway / Render

Both platforms work similar to Vercel:

**Railway:**
- Go to [railway.app](https://railway.app)
- Connect GitHub
- Deploy

**Render:**
- Go to [render.com](https://render.com)
- New → Web Service
- Connect GitHub
- Deploy

---

## 🔧 Environment Variables

If you add API keys or secrets later:

**Vercel/Netlify:**
- Go to Project Settings → Environment Variables
- Add key-value pairs

**Next.js (.env.local):**
```env
NEXT_PUBLIC_API_URL=https://your-api.com
CONTACT_EMAIL_API_KEY=your-key-here
```

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Get tracking ID** from Google Analytics

2. **Add to app/layout.tsx:**
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     `}
   </Script>
   ```

---

## 📧 Contact Form Integration

The current form logs to console. To make it functional:

### Option A: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create new form
3. Update `app/contact/page.tsx`:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: EmailJS

1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Configure email template
4. Update form submission handler

### Option C: Custom API

Create `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Send email using Nodemailer, SendGrid, etc.
  return NextResponse.json({ success: true });
}
```

---

## 🎨 Custom Domain Setup

### For Vercel/Netlify:

1. **Buy domain** (GoDaddy, Namecheap, etc.)
2. **Add to platform** (Project Settings → Domains)
3. **Update DNS records:**
   - Type: A Record
   - Name: @
   - Value: (provided by platform)
   
   - Type: CNAME
   - Name: www
   - Value: (provided by platform)

4. **Wait 24-48 hours** for propagation

---

## 🔒 SSL Certificate

- **Vercel/Netlify/Render:** Automatic ✅
- **Hostinger:** Enable in cPanel → SSL/TLS
- **Custom:** Use Let's Encrypt (free)

---

## 📈 Performance Optimization

1. **Enable Image Optimization**
   - Use Next.js `<Image />` component
   - Self-host images instead of Unsplash

2. **Add Caching**
   ```typescript
   // next.config.ts
   const nextConfig = {
     headers: async () => [
       {
         source: '/:all*(svg|jpg|png)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
         ],
       },
     ],
   };
   ```

3. **Compress Assets**
   - Images: TinyPNG, ImageOptim
   - Already handled by Next.js for code

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Pages Not Loading

- Check file names (must be lowercase)
- Verify all imports are correct
- Check console for errors

### Styles Not Working

- Ensure Tailwind CSS is installed
- Check `globals.css` import in layout

---

## 📱 Testing Before Deploy

```bash
# Test production build locally
npm run build
npm start

# Open http://localhost:3000
```

Test on:
- Desktop (Chrome, Firefox, Safari)
- Mobile (iOS Safari, Chrome)
- Tablet
- Different screen sizes

---

## 🎯 Post-Deployment

1. **Test all pages** on live URL
2. **Verify forms** work
3. **Check mobile responsiveness**
4. **Test navigation**
5. **Validate SEO** (Google Search Console)
6. **Set up monitoring** (Sentry, LogRocket)
7. **Add to Google Search Console**
8. **Submit sitemap**

---

## 💰 Cost Estimates

| Platform | Cost | Best For |
|----------|------|----------|
| Vercel | Free (Hobby) | Next.js sites |
| Netlify | Free (Starter) | Static sites |
| Hostinger | $2-5/month | Shared hosting |
| Railway | ~$5/month | Simple apps |
| AWS Amplify | Pay as you go | AWS ecosystem |

---

## 📞 Support

If you need help:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Community: [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Recommended: Deploy to Vercel for best Next.js experience!**

Good luck with your deployment! 🚀
