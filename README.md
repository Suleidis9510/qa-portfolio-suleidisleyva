# QA Portfolio - Suleidis Leyva

A modern, minimal, interactive portfolio website for a QA Functional + QA Automation professional.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Device mockups with animated QA terms
- Interactive skill cards and badges
- Mini CV section with document preview
- Contact section with direct links

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Suleidis9510/qa-portfolio-suleidis-leyva.git

# Navigate to the project
cd qa-portfolio-suleidis-leyva

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
# Build for production
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Deployment to GitHub Pages

### Automatic Deployment

```bash
# Deploy to GitHub Pages
pnpm deploy
```

This will:
1. Build the project
2. Push to the `gh-pages` branch
3. GitHub will automatically serve the site

### Manual Setup

1. Go to your GitHub repository settings
2. Navigate to Pages
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch and `/ (root)` folder
5. Save

### Expected URL

https://Suleidis9510.github.io/qa-portfolio-suleidis-leyva/

## Project Structure

```
├── public/
│   ├── Suleidis-Leyva-CV.pdf    # CV file for download
│   └── icon.svg                  # Favicon
├── src/
│   ├── components/
│   │   ├── hooks/
│   │   │   └── useInView.ts     # Intersection Observer hook
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── DefectExamples.tsx
│   │   ├── DeviceMockups.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Impact.tsx
│   │   ├── MiniCV.tsx
│   │   └── Skills.tsx
│   ├── lib/
│   │   └── utils.ts             # Utility functions (cn)
│   ├── App.tsx                  # Main App component
│   ├── index.css                # Global styles + Tailwind
│   └── main.tsx                 # Entry point
├── index.html                   # HTML template
├── package.json
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript config
└── README.md
```

## Customization

### Update CV

Replace `public/Suleidis-Leyva-CV.pdf` with your updated CV file.

### Modify Content

- Edit component files in `src/components/` to update text and data
- Modify `src/index.css` to change colors and theme

### Update Colors

The color scheme uses CSS custom properties in `src/index.css`. Key colors:
- `--primary`: Main brand color (emerald/teal)
- `--foreground`: Text color
- `--background`: Page background
- `--card`: Card backgrounds

## License

MIT License - Feel free to use this template for your own portfolio.

---

**Suleidis Leyva** - QA Functional | QA Automation | AI-Assisted Testing
