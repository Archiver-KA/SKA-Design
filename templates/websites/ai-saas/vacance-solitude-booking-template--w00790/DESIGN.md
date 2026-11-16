# Design system — Vacance Solitude Booking Template

`SN-W00790` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The page sits on a deep navy ground (#0b2030) with warm cream text (#f5ede2) and a terracotta red (#c64a32) reserved for emphasis, set in Archivo. The overall stance is cinematic and quiet, with generous line spacing across headlines.

**Mood:** cinematic, quiet, warm, exclusive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b2030` | Page ground |
| Text | `#f5ede2` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#78716c` | Hairlines, dividers, outlines |
| Accent | `#f0e5d4` | Primary action and highlights |

Palette by frequency of use: `#f5ede2` · `#0b2030` · `#33291e` · `#78716c` · `#c64a32` · `#e2705a` · `#f0e5d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo, IBM Plex Mono, Google Sans, Quicksand, Aboreto, Gloock
- **Scale (largest breakpoint):** body 12px
- **Weights in use:** normal, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. 3D / canvas scene (`3d-canvas`)
5. Video / media (`video-media`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0b2030;
  --color-text: #f5ede2;
  --color-muted: #78716c;
  --color-border: #78716c;
  --color-accent: #f0e5d4;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b2030',
    ink: '#f5ede2',
    muted: '#78716c',
    line: '#78716c',
    accent: '#f0e5d4',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set text in warm cream (#f5ede2) on the navy ground (#0b2030)
- **Do:** Use terracotta (#c64a32) sparingly, for one emphasis per section
- **Do:** Set headlines in Archivo with generous line spacing
- **Don't:** Don't use pure white for text
- **Don't:** Don't use terracotta for large fills
- **Don't:** Don't add bright UI colours; the palette stays warm

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
