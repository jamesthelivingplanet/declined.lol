# DECLINED.LOL - Chrome Extension Showcase

> **FOR THE BROKEN, BY THE BROKEN**

A brutally honest, edgy website template for showcasing Chrome extension screenshots with an auto-rotating image gallery. Built for job seekers who've lost all hope and want to weaponize their pain into code.

## 🔥 Features

- **Auto-rotating image gallery** - Images automatically cycle every 5 seconds with glitch transitions
- **Aggressive manual navigation** - Previous/next buttons and dot indicators with brutal styling
- **Fully responsive design** - Works on desktop, tablet, and mobile with optimized dark theme
- **Glitch animations** - CSS animations including text glitch effects and neon pulse
- **Edgy customization** - Easy to modify with Tailwind CSS utility classes
- **Fallback system** - Automatic placeholder generation for missing screenshots
- **Dark scrollbars** - Custom webkit scrollbars with red accent colors

## 🎨 Design Philosophy

This isn't your typical corporate showcase. The design embraces:
- **Neon cyber aesthetics** with harsh red/cyan/purple color palette
- **Brutal typography** using Orbitron and monospace fonts
- **Sarcastic messaging** that speaks to job search frustration
- **Glitch effects** and aggressive animations
- **Dark patterns** with subtle texture overlays

## ⚡ Tech Stack

- **React 19** with hooks for state management
- **Tailwind CSS v4** with custom theme configuration
- **Vite** for blazing fast development and building
- **Modern CSS** with custom keyframe animations
- **PostCSS** for advanced CSS processing

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   # or
   bun dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## 🎯 Customization

### Adding Your Screenshots

1. **Add your extension screenshots** to the `public/screenshots/` directory:
   - `extension-1.jpg` - Main interface screenshot
   - `extension-2.jpg` - Settings panel screenshot
   - `extension-3.jpg` - Features overview screenshot
   - `extension-4.jpg` - Extension in action screenshot

2. **Update the screenshots array** in `src/App.jsx`:
   ```javascript
   const screenshots = [
     {
       id: 1,
       src: '/screenshots/your-screenshot-1.jpg',
       alt: 'Your Extension - Feature Description',
       title: 'YOUR EDGY TITLE HERE',
       description: 'Brutally honest description of this feature.',
       mood: 'RAGE LEVEL: CUSTOM'
     },
     // Add more screenshots as needed
   ]
   ```

### Customizing Content

**Extension Title and Messaging:**
Update the header section in `src/App.jsx`:
```javascript
<h1>YOUR EXTENSION NAME</h1>
<p>Your edgy tagline here</p>
```

**About Section:**
Modify the about section with your extension's story:
```javascript
<h2>ABOUT THIS DIGITAL WASTELAND</h2>
<p>Your origin story of pain and coding...</p>
```

**Call-to-Action Buttons:**
Update the CTA buttons with your actual links:
```javascript
<a href="https://chrome.google.com/webstore/detail/your-extension-id">
  INSTALL & EMBRACE THE VOID
</a>
```

### Styling Customization

**Colors in Tailwind Config:**
Edit `tailwind.config.js` to customize the color palette:
```javascript
@theme {
  --color-neon-red: #ff073a;     // Primary accent color
  --color-neon-blue: #00f5ff;    // Secondary accent
  --color-neon-purple: #bf00ff;  // Tertiary accent
  // Add your custom colors here
}
```

**Animation Timing:**
Change the rotation interval in `src/App.jsx`:
```javascript
const interval = setInterval(() => {
  // Your custom timing logic
}, 5000) // Change 5000 to your desired milliseconds
```

## 🗂️ File Structure

```
declined.lol/
├── public/
│   ├── screenshots/          # Your extension screenshots go here
│   └── vite.svg
├── src/
│   ├── App.jsx              # Main component with gallery logic and edgy content
│   ├── App.css              # Minimal custom CSS for glitch effects
│   ├── index.css            # Tailwind imports and custom animations
│   └── main.jsx             # React entry point
├── tailwind.config.js       # Tailwind v4 configuration with custom theme
├── vite.config.js          # Vite setup with Tailwind plugin
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎮 Gallery Features

### Auto-rotation System
- Images automatically cycle every 5 seconds
- Glitch transition effects between slides
- Can be paused/resumed with the "AUTO-DESTRUCTION" button
- Automatic pause when user manually navigates

### Navigation Controls
- **Previous/Next buttons**: Aggressive red square buttons with hover effects
- **Dot indicators**: Click any dot to jump to a specific image
- **Auto-play control**: Brutal toggle button with cyber styling

### Responsive Behavior
- **Desktop**: Full-size gallery with hover effects and animations
- **Tablet**: Adjusted spacing and optimized button sizes
- **Mobile**: Compact layout with touch-friendly controls

## 🌐 Browser Support

- Chrome (recommended for the irony)
- Firefox
- Safari
- Edge

All modern browsers with CSS Grid and Flexbox support.

## 📦 Deployment

### Build for Production
```bash
npm run build
# or
bun run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to GitHub Pages
```bash
npm run build
# Upload the 'dist' folder contents to your gh-pages branch
```

## 🚀 Performance Tips

1. **Optimize images**: Compress your screenshots to reduce load times
2. **Use WebP format**: Convert screenshots to WebP for better compression
3. **Lazy loading**: Images load with proper fallbacks
4. **CSS animations**: Hardware-accelerated transitions for smooth performance

## 🎨 Customization Examples

### Adding More Screenshots
```javascript
const screenshots = [
  // ... existing screenshots
  {
    id: 5,
    src: '/screenshots/extension-5.jpg',
    alt: 'Chrome Extension - New Feature',
    title: 'ANOTHER BROKEN DREAM',
    description: 'Yet another feature that promises to fix everything.',
    mood: 'DESPAIR INTENSIFIES'
  }
]
```

### Custom Color Schemes
```css
/* In src/index.css */
@theme {
  --color-neon-red: #ff6b6b;     /* Softer red */
  --color-neon-blue: #4ecdc4;    /* Softer cyan */
  --color-neon-purple: #ffe66d;  /* Yellow accent */
}
```

### Different Animation Speeds
```javascript
// Faster rotation (3 seconds)
}, 3000)

// Slower rotation (8 seconds)
}, 8000)
```

## 💀 Easter Eggs

- Hover over the main title for extra glitch effects
- The error message section includes a "TRANSLATION" feature
- Custom scrollbars match the theme
- Selection highlighting uses the neon red theme

## 📝 License

This template is free to use for personal and commercial projects. Built with the tears of the rejected and the rage of the overqualified.

## 💬 Support

If you encounter issues:
1. Check the browser console for error messages
2. Ensure all image paths are correct
3. Verify Tailwind CSS is building properly
4. Remember: We're all just trying to survive in this digital wasteland

---

**REMEMBER: YOU'RE NOT UNEMPLOYED, YOU'RE STRATEGICALLY UNENCUMBERED**

*Side effects may include: existential dread, uncontrollable laughter, and sudden urges to start your own company*
