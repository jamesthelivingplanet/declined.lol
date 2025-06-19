# Chrome Extension Showcase Website

A beautiful, responsive website template for showcasing Chrome extension screenshots with an auto-rotating image gallery.

## Features

- **Auto-rotating image gallery** - Images automatically rotate every 4 seconds
- **Manual navigation** - Previous/next buttons and dot indicators for manual control
- **Responsive design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth animations** - Elegant transitions and hover effects
- **Customizable** - Easy to modify colors, content, and layout
- **Fallback images** - Automatic placeholder generation if screenshots are missing

## Quick Start

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

## Customization

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
       title: 'Feature Title',
       description: 'Description of this feature or view.'
     },
     // Add more screenshots as needed
   ]
   ```

### Customizing Content

**Extension Title and Subtitle:**
Update the header section in `src/App.jsx`:
```javascript
<h1>Your Extension Name</h1>
<p className="subtitle">Your extension description</p>
```

**About Section:**
Modify the extension info section:
```javascript
<h2>About This Extension</h2>
<p>Your detailed extension description...</p>
```

**Call-to-Action Buttons:**
Update the CTA buttons with your actual links:
```javascript
<a href="https://chrome.google.com/webstore/detail/your-extension-id" className="cta-btn primary">
  Install Extension
</a>
<a href="https://your-website.com" className="cta-btn secondary">
  Learn More
</a>
```

### Styling Customization

**Colors:**
Edit the CSS variables in `src/App.css`:
- Primary color: `#646cff` (used for buttons and accents)
- Background gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Text colors: `#333` (dark), `#666` (medium), `white` (light)

**Auto-rotation Timing:**
Change the rotation interval in `src/App.jsx`:
```javascript
const interval = setInterval(() => {
  setCurrentIndex(prev => (prev + 1) % screenshots.length)
}, 4000) // Change 4000 to your desired milliseconds
```

## File Structure

```
├── public/
│   ├── screenshots/          # Your extension screenshots go here
│   └── vite.svg
├── src/
│   ├── App.jsx              # Main component with gallery logic
│   ├── App.css              # Styling for the gallery and layout
│   ├── index.css            # Base styles
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Gallery Features

### Auto-rotation
- Images automatically cycle every 4 seconds
- Can be paused/resumed with the control button
- Automatically pauses when user manually navigates

### Navigation
- **Previous/Next buttons**: Click the arrow buttons on the sides
- **Dot indicators**: Click any dot to jump to a specific image
- **Keyboard support**: Use arrow keys for navigation (can be added)

### Responsive Behavior
- **Desktop**: Full-size gallery with hover effects
- **Tablet**: Adjusted spacing and button sizes
- **Mobile**: Optimized layout with smaller controls

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Deployment

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

## Performance Tips

1. **Optimize images**: Compress your screenshots to reduce load times
2. **Use WebP format**: Convert screenshots to WebP for better compression
3. **Preload images**: Add `<link rel="preload">` tags for critical images
4. **Lazy loading**: Implement lazy loading for better performance with many images

## Customization Examples

### Adding More Screenshots
```javascript
const screenshots = [
  // ... existing screenshots
  {
    id: 5,
    src: '/screenshots/extension-5.jpg',
    alt: 'Chrome Extension - New Feature',
    title: 'New Feature',
    description: 'Description of the new feature.'
  }
]
```

### Changing Animation Speed
```javascript
// Faster rotation (2 seconds)
}, 2000)

// Slower rotation (6 seconds)
}, 6000)
```

### Custom Color Scheme
```css
/* In src/App.css */
.app {
  background: linear-gradient(135deg, #ff7b7b 0%, #667eea 100%);
}

.cta-btn.primary {
  background: #ff7b7b;
  color: white;
}
```

## License

This template is free to use for personal and commercial projects.

## Support

If you encounter any issues or have questions, please check the browser console for error messages and ensure all image paths are correct.
