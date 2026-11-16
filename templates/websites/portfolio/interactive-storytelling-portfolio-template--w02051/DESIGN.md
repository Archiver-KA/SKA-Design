# Design system — Interactive Storytelling Portfolio Template

`SN-W02051` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cinematic, narrow-palette opener on a deep wine ground, darkest at the edges, with a soft glow lighting the centre. Cormorant Garamond is set in cream (#fff3e8) at a light, moderate size, and the only other elements are a small pale orb and one outlined pill button. The palette is warm cream on wine, so the mood is intimate rather than corporate.

**Mood:** intimate, cinematic, quiet, warm, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#140810` | Page ground |
| Surface | `#140810` | Cards, panels, raised areas |
| Text | `#fff3e8` | Headings and primary copy |
| Muted text | `#fff2e6` | Secondary copy, captions |
| Accent | `#f6d3c2` | Primary action and highlights |
| Second accent | `#e9d4f2` | Supporting highlights |

Palette by frequency of use: `#f6d3c2` · `#fff3e8` · `#ebc6bc` · `#fff1e4` · `#f0b7a6` · `#fff2e6` · `#fff0dc` · `#fff3ea` · `#ffd9c8` · `#fff6ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Manrope
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #140810;
  --color-surface: #140810;
  --color-text: #fff3e8;
  --color-muted: #fff2e6;
  --color-accent: #f6d3c2;
  --color-accent-2: #e9d4f2;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#140810',
    surface: '#140810',
    ink: '#fff3e8',
    muted: '#fff2e6',
    accent: '#f6d3c2',
    accent2: '#e9d4f2',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond with a cream (#fff3e8) text colour.
- **Do:** Keep the ground a deep wine (#140810) with a soft central glow.
- **Do:** Use one outlined, low-contrast pill button for the single call to action.
- **Don't:** Don't add bright colours; the palette stays cream on wine.
- **Don't:** Don't set headings in a sans-serif face; the type is serif throughout.
- **Don't:** Don't stack several buttons on one screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
