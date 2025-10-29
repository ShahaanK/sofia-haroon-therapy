# Sofia Haroon Therapy Website

Professional therapy practice website for Sofia Haroon, Humanistic Integrative Therapist based in London, UK.

## Features

- ✨ Modern, responsive design
- 📱 Mobile-first approach
- 🎨 Calming color palette (teal, blue, slate)
- 📧 Contact and booking forms
- ♿ Accessible navigation
- 🔒 GDPR compliant
- 🚀 Fast loading times

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/sofia-haroon-therapy.git
cd sofia-haroon-therapy
```

2. Install dependencies:
```bash
npm install
```

3. Add Sofia's profile image:
   - Place the image in `public/images/sofia-profile.jpg`

4. Run development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser

## Deployment to GitHub Pages

### Step 1: Update vite.config.js

Change the base URL to match your repository name:
```javascript
base: '/your-repo-name/',
```

### Step 2: Build and Deploy
```bash
npm run build
npm run deploy
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set Source to "gh-pages" branch
4. Save

Your site will be live at: `https://YOUR_USERNAME.github.io/your-repo-name/`

## Moving to Vercel (Later)

1. Create account at vercel.com
2. Import your GitHub repository
3. Vercel will auto-detect Vite
4. Click Deploy

## Customization

### Update Contact Information

Edit the contact info in `src/App.jsx`:
- Email: `sofiaharoon92@gmail.com`
- Phone: Update dummy number `+44 20 1234 5678`

### Add Form Backend (Recommended)

For production, integrate a form service:

#### Option 1: EmailJS
```bash
npm install @emailjs/browser
```

#### Option 2: Formspree
Simple form endpoint - just update form action

#### Option 3: Netlify Forms
If deploying to Netlify, use built-in forms

### Update Images

Replace placeholder images in:
- `/public/images/sofia-profile.jpg` - Main profile photo
- `/public/favicon.ico` - Browser tab icon

## Project Structure
├── public/              # Static files
│   ├── images/         # Images
│   └── index.html      # HTML template
├── src/                # Source files
│   ├── App.jsx         # Main component
│   ├── index.jsx       # Entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Sofia Haroon. All rights reserved.

## Support

For issues or questions, contact: sofiaharoon92@gmail.com