# 🎬 Video Editor Portfolio — Next.js

A cinematic, dark-themed portfolio website for video editors built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Cinematic dark theme** with film grain overlay
- **Custom cursor** with smooth follower animation
- **Animated hero** with staggered character reveal
- **Gold ticker marquee** showcasing skills
- **Filterable work grid** with hover effects
- **Skill bars** and tools section
- **Interactive services grid**
- **Testimonials slider**
- **Contact form** with project type selector
- Fully **responsive** (mobile, tablet, desktop)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 🎨 Customization

### Change your name & info
Edit `app/layout.tsx` for metadata and `app/components/Hero.tsx` for the hero content.

### Add your projects
Edit the `projects` array in `app/components/Work.tsx`.

### Update services & pricing
Edit the `services` array in `app/components/Services.tsx`.

### Change testimonials
Edit the `testimonials` array in `app/components/Testimonials.tsx`.

### Update contact info
Edit `app/components/Contact.tsx` with your email and social links.

### Add your photo
Replace the placeholder in `app/components/About.tsx` with an `<Image>` component:
```tsx
import Image from "next/image";
// Replace the placeholder div with:
<Image src="/your-photo.jpg" alt="Your name" fill className="object-cover" />
```

## 📁 Project Structure

```
video-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        # Fixed navigation
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Marquee.tsx       # Skills ticker
│   │   ├── Work.tsx          # Portfolio grid
│   │   ├── About.tsx         # About + skills
│   │   ├── Services.tsx      # Services grid
│   │   ├── Testimonials.tsx  # Client reviews
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Footer.tsx        # Footer
│   │   └── Cursor.tsx        # Custom cursor
│   ├── globals.css           # Global styles + animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── tailwind.config.ts        # Tailwind + custom tokens
├── next.config.js
└── package.json
```

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Google Fonts** (Bebas Neue, DM Sans, JetBrains Mono)
