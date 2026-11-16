# Design system — Architect Portfolio Landing Page Template

`SN-W01797` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Editorial and restrained: an off-white ground (#fdfcfb) with near-black Inter headlines set at 96px. Colour is almost absent, so the type and generous empty space carry the design. The signature move is the two-tone headline, where the second phrase drops to a light warm grey (#a8a29e). Small uppercase labels sit above the hero text, and the page stays calm without colour blocks.

**Mood:** editorial, restrained, airy, typographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcfb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#78716c` · `#a8a29e` · `#f5f5f4` · `#e7e5e4` · `#292524` · `#57534e` · `#44403c` · `#fdfcfb` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-y-16`, `gap-16`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Bento grid (`bento-grid`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcfb;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcfb',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large in near-black and drop the second phrase to light warm grey
- **Do:** Put a small uppercase label above the hero title
- **Do:** Keep the page on the off-white ground with no colour blocks
- **Don't:** Don't add a saturated accent colour to the hero
- **Don't:** Don't centre the hero text; it sits left-aligned
- **Don't:** Don't use heavy shadows or filled cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
