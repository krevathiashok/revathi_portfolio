# Revathi — Premium Personal Portfolio

A complete, production-ready personal portfolio website for Revathi — UI/UX Designer, AI Creative Designer & Web App Builder.

Built with **React 18** + **Vite 6** + **Lucide React** icons.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
f:/webi/web2/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── data/
│   │   ├── projects.js       ← Add your project details here
│   │   ├── skills.js         ← Skill groups configuration
│   │   └── experience.js     ← Work experience timeline
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── FeaturedProject.jsx
│   │   ├── Portfolio.jsx
│   │   ├── GraphicDesign.jsx
│   │   ├── PrintBranding.jsx
│   │   ├── ContentCreation.jsx
│   │   ├── AIVideo.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       ├── ProjectCard.jsx
│   │       ├── SkillGroup.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── Modal.jsx
│   │       └── CategoryFilter.jsx
│   └── styles/
│       ├── variables.css
│       └── animations.css
```

---

## ✏️ Customization Guide

### Adding Project Images

In `src/data/projects.js`, set the `imageUrl` field for any project to show a real image instead of the gradient placeholder:

```js
{
  id: 'my-project',
  title: 'My Project',
  imageUrl: '/images/my-project.jpg',  // Place in public/images/
  gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563EB 100%)',
  // ...
}
```

### Adding YouTube Videos

In `src/data/projects.js`, find `aiVideoItems` and add your YouTube video ID:

```js
{
  id: 'ai-motivation',
  youtubeId: 'dQw4w9WgXcQ',  // ← Add your YouTube video ID here
  // ...
}
```

### Enabling Contact Form Email

The contact form is a frontend demo by default. To enable real email delivery:

1. **Using Formspree:** Sign up at [formspree.io](https://formspree.io), create a form, and replace the `handleSubmit` function in `Contact.jsx` with a fetch POST to your Formspree endpoint.

2. **Using EmailJS:** Sign up at [emailjs.com](https://www.emailjs.com), install the SDK, and add your service/template IDs.

### Updating Personal Info

- **Name & bio:** Edit `src/components/About.jsx`
- **Contact details:** Edit `src/components/Contact.jsx` (contactCards array)
- **Experience:** Edit `src/data/experience.js`
- **Skills:** Edit `src/data/skills.js`
- **Hero text:** Edit `src/components/Hero.jsx`

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#111827` | Main background |
| `--navy-light` | `#1E293B` | Card backgrounds |
| `--blue` | `#2563EB` | Primary accent |
| `--blue-light` | `#3B82F6` | Links, hover states |
| `--off-white` | `#F8FAFC` | Primary text |
| `--gray-text` | `#94A3B8` | Secondary text |

Fonts: **Plus Jakarta Sans** (headings) · **Inter** (body)

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | DOM rendering |
| lucide-react | ^0.462.0 | Icons |
| vite | ^6.0.1 | Build tool |
| @vitejs/plugin-react | ^4.3.4 | React plugin for Vite |

---

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

---

## 📄 License

Built for Revathi's personal use. All rights reserved.
