# GTA VI Countdown Timer 🌴

An aesthetic web-based countdown timer for GTA VI release, featuring a Miami Vice / synthwave theme with neon pink and teal colors.

## Features

- **Real-time countdown** to November 19, 2026 (GTA VI release date)
- **GTA VI aesthetic**: Neon pink (#ff006e), teal (#00f5d4), purple (#8338ec), orange (#ff9f1c)
- **Miami Vice vibes**: Gradient orbs, scanlines, grid overlay, palm silhouettes, animated sun
- **Smooth animations**: 60fps countdown with millisecond precision
- **Glitch effects**: Periodic visual glitches on the VI logo
- **Celebration mode**: Infinite confetti animation when countdown reaches zero
- **Responsive design**: Works on desktop and mobile
- **Offline support**: Service worker caches assets for offline viewing
- **Accessibility**: Respects `prefers-reduced-motion`

## Project Structure

```
compteur/
├── index.html      # Main HTML structure
├── style.css       # GTA VI themed styling
├── script.js       # Countdown logic & animations
├── sw.js           # Service worker for offline support
├── launch.bat      # Windows batch launcher
├── launch.py       # Python launcher (cross-platform)
└── README.md       # This file
```

## Quick Start

### Windows (Batch)
```cmd
launch.bat
```

### Cross-platform (Python)
```bash
python launch.py
```

### Direct Browser
Open `index.html` directly in any modern browser.

## Screenshots

The countdown features:
- Animated gradient background orbs
- CRT scanline overlay
- Perspective grid floor
- Palm tree silhouettes swaying
- Pulsing neon sun
- Glitching "VI" logo
- Smooth number transitions
- Millisecond counter

## Customization

### Change Release Date
Edit `RELEASE_DATE` in `script.js`:
```javascript
const RELEASE_DATE = new Date('2026-11-19T00:00:00').getTime();
```

### Modify Colors
Update CSS custom properties in `style.css`:
```css
:root {
    --neon-pink: #ff006e;
    --neon-teal: #00f5d4;
    --neon-purple: #8338ec;
    --neon-orange: #ff9f1c;
}
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 14+
- Edge 80+

Requires ES6 modules, CSS custom properties, `requestAnimationFrame`, and Service Worker support.

## Credits

- Fonts: [Orbitron](https://fonts.google.com/specimen/Orbitron) & [Rajdhani](https://fonts.google.com/specimen/Rajdhani) via Google Fonts
- Confetti: [canvas-confetti](https://github.com/catdad/canvas-confetti)
- Inspired by GTA VI trailer aesthetic & Miami Vice visual style

## Disclaimer

> **NOT AFFILIATED WITH ROCKSTAR GAMES**
>
> This is a fan-made project created out of excitement for GTA VI. All Grand Theft Auto trademarks belong to Rockstar Games / Take-Two Interactive.

---

**Vice City awaits...** 🌴🌊🌅