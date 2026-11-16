# Design system — Visual Director Portfolio Website Template

`SN-W02289` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-monochrome page on a warm off-white ground, with a very large lowercase black sans headline set right-aligned. The second line drops to light grey so the phrase reads as two tones, and the supporting copy is small and tucked into the bottom-left corner. Whitespace and tonal contrast do the work, and the hero carries no accent colour.

**Mood:** minimal, quiet, bold type, monochrome, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#a3a3a3` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#737373` · `#a3a3a3` · `#e5e5e5` · `#ffffff` · `#f5f5f5` · `#fcfbf9` · `#262626` · `#404040` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[4px]` (4px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-16`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Logo cloud (`logo-cloud`)
6. 3D / canvas scene (`3d-canvas`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #a3a3a3;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#a3a3a3',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy lowercase sans at 128px, right-aligned
- **Do:** Set the second headline line in light grey (#a3a3a3)
- **Do:** Keep supporting copy small in the bottom-left corner
- **Don't:** Don't add an indigo or other accent to the hero; none is visible
- **Don't:** Don't centre the headline
- **Don't:** Don't put imagery in the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
