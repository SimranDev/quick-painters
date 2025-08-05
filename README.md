# Quick Painters

![Quick Painters Logo](src/assets/logo.png)

A modern, responsive website for Quick Painters - a professional painting services company based in New Zealand. Built with Astro, TailwindCSS, and TypeScript for optimal performance and developer experience.

## 🚀 Project Overview

Quick Painters is a premium painting services website featuring:

- Professional service showcases
- Customer testimonials
- Contact forms for quotes
- Responsive design optimized for all devices
- Fast loading times with Astro's static site generation

## ✨ Features

- **Modern Design**: Clean, professional layout with engaging visuals
- **Responsive**: Mobile-first design that works perfectly on all screen sizes
- **Performance**: Built with Astro for lightning-fast page loads
- **SEO Optimized**: Structured for search engine visibility
- **Contact Integration**: Easy-to-use contact forms for customer inquiries
- **Service Portfolio**: Comprehensive showcase of painting services

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static Site Generator
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient

## 📁 Project Structure

```
quick-painters/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   ├── background.svg
│   │   └── logo.png
│   ├── components/
│   │   ├── About.astro
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Testimonials.astro
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── contact.astro
│   │   └── index.astro
│   └── styles/
│       ├── global.css
│       └── tailwind.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Navigate to the project directory**

   ```bash
   cd quick-painters
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to view the website

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm astro` - Run Astro CLI commands

## 🌐 Deployment

The site is optimized for static hosting platforms:

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Astro and configure build settings
3. Deploy with zero configuration

### Netlify

1. Connect your repository to Netlify
2. Build command: `pnpm build`
3. Publish directory: `dist/`

### Manual Deployment

```bash
pnpm build
# Upload the contents of dist/ to your hosting provider
```

## 📱 Pages

- **Home** (`/`) - Main landing page with hero, services, about, and testimonials
- **Contact** (`/contact`) - Contact form and business information

## 🎨 Customization

### Styling

- Primary styles are defined in `src/styles/global.css`
- TailwindCSS configuration in `tailwind.config.mjs`
- Custom color scheme using primary color variants

### Content

- Edit component files in `src/components/` to modify content
- Update business information in respective component files
- Replace images in `src/assets/` with your own

### Configuration

- Astro configuration: `astro.config.mjs`
- TypeScript settings: `tsconfig.json`
- TailwindCSS setup: `tailwind.config.mjs`

## 🔧 Development

### Component Structure

Each component is built using Astro's component syntax:

- `.astro` files contain both the component logic and template
- Styles are scoped to components
- TypeScript support throughout

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the Layout component for consistent structure
3. Import and use existing components as needed

## 📈 Performance

This website is optimized for performance:

- **Static Generation**: Pre-rendered HTML for fast loading
- **Optimized Images**: Proper image optimization and lazy loading
- **Minimal JavaScript**: Only essential JavaScript is shipped
- **CSS Optimization**: TailwindCSS purges unused styles

## 📄 Project Notes

This is a private project developed for Quick Painters, a professional painting services company in New Zealand. The website is custom-built to showcase their services and facilitate customer inquiries.

## 📞 Contact

**Quick Painters**

- Website: https://www.quickpainters.co.nz/
- Email: info@quickpainters.co.nz
- Phone: +64 224708620

---

**Developer**: [SimranDev](https://github.com/SimranDev)

---

_Built with ❤️ using Astro and TailwindCSS_
