# Market Mojo - Quick Reference Guide

## 📂 File Structure Quick Reference

```
marketmojo/
├── app/
│   ├── layout.tsx           # Root layout (Navbar, Footer, SEO)
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles, theme colors
│   ├── about/page.tsx       # About Us page
│   ├── courses/page.tsx     # Courses listing page
│   └── contact/page.tsx     # Contact form page
│
├── components/
│   ├── Navbar.tsx           # Sticky navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Button.tsx           # Reusable button component
│   ├── CourseCard.tsx       # Course display cards
│   └── TestimonialCard.tsx  # Student testimonial cards
│
├── public/
│   └── favicon.svg          # Site favicon (navy chart icon)
│
└── Configuration files
    ├── package.json         # Dependencies & scripts
    ├── tsconfig.json        # TypeScript config
    ├── next.config.ts       # Next.js config
    ├── postcss.config.mjs   # PostCSS config
    └── eslint.config.mjs    # ESLint config
```

## 🎨 Theme Colors

```css
Primary (Navy):   #0A1E3D
Accent (Gold):    #F8B400
Navy Light:       #1a3a5f
Navy Dark:        #051426
Gold Light:       #ffcc33
Gold Dark:        #d99e00
```

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build           # Build for production
npm start               # Start production server
npm run export          # Build for static export

# Code Quality
npm run lint            # Run ESLint
```

## 📄 Page Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page with hero, features, courses |
| `/about` | `app/about/page.tsx` | About us, mission, vision, team |
| `/courses` | `app/courses/page.tsx` | All courses with filters |
| `/contact` | `app/contact/page.tsx` | Contact form and info |

## 🧩 Component Props

### Button
```tsx
<Button 
  variant="primary" | "secondary" | "outline"
  size="sm" | "md" | "lg"
  className="custom-classes"
>
  Text
</Button>
```

### CourseCard
```tsx
<CourseCard
  title="Course Title"
  description="Course description"
  price="₹9,999"
  duration="6 weeks"
  level="Beginner" | "Intermediate" | "Advanced"
  image="image-url"
/>
```

### TestimonialCard
```tsx
<TestimonialCard
  name="Student Name"
  role="Job Title"
  content="Testimonial text"
  rating={5}
  image="optional-image-url"
/>
```

## 📝 How to Edit Content

### Update Homepage Hero Text
**File:** `app/page.tsx`
**Line:** ~23
```tsx
<h1>Master the Art of <span>Stock Market Trading</span></h1>
```

### Change Color Theme
**File:** `app/globals.css`
**Line:** ~5-7
```css
:root {
  --primary-navy: #0A1E3D;
  --accent-gold: #F8B400;
}
```

### Modify Navigation Links
**File:** `components/Navbar.tsx`
**Line:** ~25-45
```tsx
<Link href="/courses">Courses</Link>
```

### Update Footer Information
**File:** `components/Footer.tsx`
**Line:** ~95-115
```tsx
<span>contact@marketmojo.com</span>
```

### Add/Remove Courses
**File:** `app/courses/page.tsx`
**Line:** ~7-80 (courses array)
```tsx
const courses = [
  { title: "...", description: "...", ... },
]
```

### Change Contact Info
**File:** `app/contact/page.tsx`
**Line:** ~70-120
```tsx
<a href="mailto:contact@marketmojo.com">...</a>
```

## 🎯 Common Customizations

### Add a New Page

1. Create folder: `app/newpage/`
2. Create file: `app/newpage/page.tsx`
3. Add content:
```tsx
export default function NewPage() {
  return <div>Content</div>;
}
```
4. Add to navigation in `components/Navbar.tsx`

### Change Font

**File:** `app/layout.tsx`
**Line:** ~7-11
```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
});
```

### Update Meta Tags (SEO)

**File:** `app/layout.tsx`
**Line:** ~13-30
```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ...
};
```

### Customize Button Styles

**File:** `components/Button.tsx`
**Line:** ~17-23
```tsx
const variants = {
  primary: 'bg-[#F8B400] text-[#0A1E3D]',
  // Add more variants
};
```

## 🔗 External Resources Used

- **Images:** Unsplash (CDN)
- **Icons:** Heroicons (inline SVG)
- **Fonts:** Google Fonts (Inter)
- **Maps:** Google Maps (iframe embed)

## 🐛 Common Issues & Fixes

### Issue: Page not found (404)
**Fix:** Ensure folder structure is correct
```
app/about/page.tsx  ✅ Correct
app/about.tsx       ❌ Wrong
```

### Issue: Styles not applying
**Fix:** Check Tailwind classes, rebuild
```bash
rm -rf .next
npm run dev
```

### Issue: Images not loading
**Fix:** Check image URLs are accessible
```tsx
// Use absolute URLs for external images
src="https://images.unsplash.com/..."
```

### Issue: Form not submitting
**Fix:** Current form logs to console. See DEPLOYMENT.md for integration options.

## 📊 Current Features

✅ Responsive design (mobile, tablet, desktop)
✅ 4 pages (Home, About, Courses, Contact)
✅ Interactive navigation with mobile menu
✅ Course catalog with 9 courses
✅ Contact form (frontend only)
✅ Google Maps integration
✅ SEO optimized
✅ Custom favicon
✅ Smooth scrolling
✅ Hover animations
✅ Social media links

## 🚀 Next Steps (Optional Enhancements)

- [ ] Add blog section
- [ ] Integrate payment gateway
- [ ] Add user authentication
- [ ] Connect contact form to email service
- [ ] Add course enrollment system
- [ ] Implement search functionality
- [ ] Add language switcher
- [ ] Create admin dashboard
- [ ] Add testimonial slider
- [ ] Implement course reviews

## 📱 Responsive Breakpoints

```css
Mobile:  < 768px   (sm: prefix)
Tablet:  768px+    (md: prefix)
Desktop: 1024px+   (lg: prefix)
Large:   1280px+   (xl: prefix)
XLarge:  1536px+   (2xl: prefix)
```

## 💡 Pro Tips

1. **Images:** Replace Unsplash URLs with self-hosted images for better performance
2. **Forms:** Integrate with backend or third-party service
3. **Analytics:** Add Google Analytics for tracking
4. **SEO:** Submit sitemap to Google Search Console
5. **Performance:** Use Next.js `<Image>` component
6. **Backup:** Keep regular backups of your code
7. **Testing:** Test on real devices before launch

## 📞 Quick Contacts

- Project: Market Mojo Trading Education
- Framework: Next.js 16.0.1
- Created: November 2025
- Status: Production Ready ✅

---

**Need help?** Check DEPLOYMENT.md for deployment instructions or README.md for setup guide.
