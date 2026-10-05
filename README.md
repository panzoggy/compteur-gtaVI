# GTA VI Countdown Timer 🌴

An aesthetic web-based countdown timer for GTA VI release, featuring a Miami Vice / synthwave theme with neon pink and teal colors.

## Features

- **Real-time countdown** to November 19, 2026 at 00:00 **Paris time** (GTA VI release date)
- **DST-aware**: computed in Europe/Paris wall-clock time, so it always matches the clocks in Paris (no "extra hour" around the October/March clock changes)
- **GTA VI aesthetic**: Neon pink (#ff006e), teal (#00f5d4), purple (#8338ec), orange (#ff9f1c)
- **Miami Vice vibes**: Gradient orbs, scanlines, grid overlay, palm silhouettes, animated sun
- **Smooth animations**: 60fps countdown with millisecond precision
- **Glitch effects**: Periodic visual glitches on the VI logo
- **Celebration mode**: Infinite confetti animation when countdown reaches zero
- **Responsive design**: Works on desktop and mobile
- **Offline support**: Service worker caches assets for offline viewing (requires `http(s)://` or `localhost`, not `file://`)
- **Accessibility**: Respects `prefers-reduced-motion`

## Project Structure

```
compteur-gtaVI/
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
Edit the two constants at the top of `script.js`. Both must describe the **same moment**:
```javascript
// Absolute instant (UTC). Paris midnight in winter (CET, UTC+1) = 23:00 UTC the day before;
// in summer (CEST, UTC+2) it would be 22:00 UTC the day before.
const RELEASE_DATE = Date.UTC(2026, 10, 18, 23, 0, 0);

// Same moment as Paris wall-clock time (month is 0-indexed)
const RELEASE_WALL = Date.UTC(2026, 10, 19, 0, 0, 0);
```
Then update the displayed date in `index.html` (`.date-value`).

### Change Time Zone
The countdown uses `Europe/Paris`. To use another zone, change `timeZone` in `PARIS_FORMAT` (`script.js`) and adjust `RELEASE_DATE` / `RELEASE_WALL` accordingly.

> **Updating the page after a change:** the service worker serves cached files first. Bump `CACHE_NAME` in `sw.js` (e.g. `gta6-countdown-v3`) whenever you change assets, or visitors may keep seeing the old version until they hard-refresh (Ctrl+Shift+R).

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

Requires CSS custom properties, `requestAnimationFrame`, `Intl.DateTimeFormat` (with `timeZone` support) and Service Worker support.

## Changelog

### v1.1.0
- Fix: countdown showed one hour too many while Paris was still on summer time (CEST); it is now computed in Paris wall-clock time (DST-aware)
- Service worker: relative paths (works on GitHub Pages sub-paths) and cache bumped to `v3`
- Removed unused `<audio>` element
- Release time shown on the page (00:00 Paris)
- README updated

### v1.0.0
- Initial release

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