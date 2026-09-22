# Creative Events & Wedding Planners

> **Every dreams begins with a wish**  
> Luxury wedding planning, bespoke stage architecture, and event decoration website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

---

## 🌟 Key Highlights

- **Complete Brand Customization**: Configured for **Creative Events & Wedding Planners** (Kanjirappilly, Kottayam, Kerala).
- **8 Core Services**: Dedicated showcases for Wedding Planning, Wedding Decorations, Engagement & Reception, Stage & Mandap Decoration, Birthday & Private Events, Corporate & Special Events, Floral & Venue Styling, and Lighting & Special Effects.
- **Glassmorphic Aesthetic**: Modern translucent cards, gold shimmer buttons, fluid typography (`Playfair Display`, `Plus Jakarta Sans`, `Cormorant Garamond`), and dark luxury palette (`#C9A24D`, `#0B1220`, `#7C5CFF`).
- **Media Showcase & Video Reels**: Integrated video reels (`Reel-1.mp4`, `Reel-2.mp4`), interactive before/after transformation slider, and high-definition lightbox.
- **Interactive Price Estimator**: Real-time event budget and decoration calculator with direct WhatsApp quote inquiry generation.
- **Contact System**: Multi-number phone support (`+91 99619 03826`, `+91 97471 77132`, `+91 77366 85828`, `+91 81119 62360`), interactive contact form with Zod validation, and Google Maps embed.
- **Full SEO & JSON-LD**: Dynamic metadata, OpenGraph tags, sitemap.xml, robots.txt, and LocalBusiness structured schema.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scroll**: Lenis
- **Form Management**: React Hook Form + Zod Validation

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## ⚙️ Updating Content & Business Details

All business details, contact information, services, portfolio items, and testimonials are centralized in a single typed configuration file:

📁 **`src/config/site.ts`**

You can easily modify:
- Business name, tagline, description, UVP, years of experience
- Contact numbers, WhatsApp link, email, business hours
- Location and Google Maps embed URL
- 8 services (names, descriptions, features, pricing, images)
- Portfolio projects and case studies
- Gallery images and video reels
- Client testimonials and partner venues

---

## 🎨 Changing Brand Colors

Brand colors can be customized in:
- `tailwind.config.ts` under `theme.extend.colors.brand`
- `src/styles/globals.css` under `:root` and `.light` CSS variables

---

## 🌐 Deployment

This project is fully optimized for one-click deployment on **Vercel** or any standard Node.js hosting platform.
