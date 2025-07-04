# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "declined.lol" - a React-based website showcasing a Chrome extension for job seekers. The project features a dark/edgy theme with glitch animations, auto-rotating image gallery, and aggressive styling targeting frustrated job hunters.

## Tech Stack

- **React 19** with hooks for state management
- **Vite** for development server and building
- **Tailwind CSS v4** with custom theme configuration
- **ESLint** for code linting
- **PostCSS** for CSS processing

## Common Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:5173)
bun dev             # Alternative with Bun

# Building
npm run build       # Build for production
npm run preview     # Preview production build

# Code Quality
npm run lint        # Run ESLint
```

## Architecture

### Component Structure
- **App.jsx**: Main component containing all functionality
  - Gallery state management with auto-rotation
  - Theme switching (dark/light mode)
  - Screenshot carousel with glitch effects
  - Navigation controls and auto-play functionality

### Key Features
- **Auto-rotating gallery**: Images cycle every 5 seconds with glitch transitions
- **Theme toggle**: Dark mode (default) and light mode support
- **Responsive design**: Mobile-first approach with Tailwind breakpoints
- **Glitch animations**: CSS-based effects for cyberpunk aesthetic

### State Management
- Uses React hooks (useState, useEffect) for all state
- Key state variables:
  - `currentIndex`: Current screenshot index
  - `isAutoPlaying`: Auto-rotation control
  - `isDarkMode`: Theme state
  - `glitchActive`: Animation trigger

### Styling Approach
- Custom Tailwind configuration in `tailwind.config.js`
- Orbitron font family for headers
- Neon color palette (red, cyan, purple)
- Custom CSS animations in `src/index.css` and `src/App.css`

## Content Management

### Screenshot Configuration
Screenshots are configured in the `screenshots` array in `App.jsx`:
- Uses external Discord CDN URLs currently
- Each screenshot has: id, src, alt, title, description, mood
- Fallback placeholder generation for broken images

### Theme Configuration
Color scheme defined in Tailwind config:
- Primary: Red (#ff073a)
- Secondary: Cyan (#00f5ff) 
- Accent: Purple (#bf00ff)
- Background: Gray gradient variations

## Development Notes

- All content is hardcoded in App.jsx (no external data sources)
- Image optimization recommended for production
- Glitch effects use CSS animations with 200ms delays
- Auto-rotation can be paused/resumed via UI controls
- Responsive breakpoints: mobile, tablet (md), desktop (lg)