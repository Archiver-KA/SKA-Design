# Design system — AI Video Side-Income Landing Page Template

`SN-W00183` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark, quiet landing page on near-black with a heavy white Inter headline set in two centred lines. The primary button is solid white with dark text and the secondary is a dark pill with a thin border; orange (#fb923c) appears only as a tiny dot in the status pill. The hero ends in a dark mock window, and depth comes from tone shifts rather than shadows.

**Mood:** dark, centred, plain, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#292524` · `#1c1917` · `#a8a29e` · `#78716c` · `#44403c` · `#d6d3d1` · `#0c0a09` · `#57534e` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black hover:bg-stone-200 text-sm font-medium px-4 py-2 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #1c1917;
  --color-text: #d4d4d8;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #fb923c;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#1c1917',
    ink: '#d4d4d8',
    muted: '#78716c',
    line: '#292524',
    accent: '#fb923c',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter, white, in two centred lines
- **Do:** Use the solid white button as the primary action and a dark pill as the secondary
- **Do:** Keep the orange (#fb923c) to the small status dot and nothing larger
- **Don't:** Don't colour the headline or buttons orange; the accent is a dot only
- **Don't:** Don't add drop shadows to the mock window; separation comes from the dark tone
- **Don't:** Don't use a light ground for the hero; the page stays near-black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
