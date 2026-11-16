# Design system — Product Designer Portfolio Landing Page Template

`SN-W02186` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark centred hero: a very large white Inter headline reading Product Designer sits over a soft purple glow at the right edge. A circular avatar with a thin grey ring sits above, and a green availability pill and a stats row hold the lower band. The palette is black, white and grey, with green (#4ade80) and lavender (#a5b4fc) used as small highlights.

**Mood:** dark, centred, bold, clean, tech

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#a5b4fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d1d5db` · `#9ca3af` · `#000000` · `#4ade80` · `#262626` · `#171717` · `#a5b4fc` · `#6b7280` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 rounded-full bg-white/90 text-black px-5 py-2.5 text-sm font-semibold hover:bg-white transition-all duration-200 hover:scale-105 backdrop-blur-md shadow-lg font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Case studies (`case-studies`)
6. About (`about`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #a5b4fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#a5b4fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero, with the headline in white Inter at very large size
- **Do:** Use green (#4ade80) only for the availability dot
- **Do:** Keep the purple glow at the edge, away from the text
- **Don't:** Don't put text on the glow
- **Don't:** Don't add more than one highlight colour per hero
- **Don't:** Don't reorder the avatar, pill and headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
