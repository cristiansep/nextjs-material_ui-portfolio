# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server

No test runner or linter is configured.

## Architecture

Single-page portfolio site built with **Next.js 13 (Pages Router)** and **Material-UI v4**. All content renders on one page (`pages/index.js`).

### Page load flow
1. `pages/index.js` renders a 3D astronaut loader (Three.js via `@react-three/fiber`) using `next/dynamic` with `ssr: false`
2. After `LOADER_DURATION` (1500ms), the main content fades in: AppBar + Layout
3. `Layout` (`components/Layout/index.js`) composes all sections in order: Profile → About → Services → Portfolio → Contact → Footer

### Key directories
- `data/index.js` — Single file containing all portfolio content (about, skills, portfolio items, services, contact info, social links). Each entry uses `uuid` for keys.
- `components/` — Each section has its own folder with `index.js` (component) and `styles.js` (Material-UI `makeStyles`)
- `components/ThreeD/` — Three.js components (Astronaut3D, NoiseSphere, Loader3D) loaded dynamically to avoid SSR issues
- `components/widgets/` — Reusable UI pieces (AnimatedImage, ButtonSong, Skills, ProgressBar, Particulas, Title, Copyright)
- `themes/` — MUI theme definitions (light-theme.js, dark-theme.js); currently only `lightTheme` is used in `_app.js`

### Styling approach
- Material-UI v4 `makeStyles` for component-level styles (JSS)
- `styles/globals.css` for global styles
- Server-side JSS is removed on mount in `_app.js`

### Notable dependencies
- `react-three/fiber` + `three` — 3D rendering (loaded client-side only)
- `react-reveal` + `react-spring` — Animations
- `react-tsparticles` — Particle background effects
- `emailjs-com` — Contact form email sending (client-side)
- `sweetalert2` — Alert dialogs
- `use-sound` — Sound playback (music button)
- `react-scroll` — Smooth scrolling navigation

### Language
The portfolio content and code comments are in Spanish.
