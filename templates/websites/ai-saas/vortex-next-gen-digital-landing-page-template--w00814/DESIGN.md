# Design system — Vortex Next Gen Digital Landing Page Template

`SN-W00814` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, colour-blocked landing page. The first screen is split into large diagonal planes of blue, violet and red rather than a dark ground, with a huge white wordmark across them. Cyan (#48cae4) marks the first wordmark letter and the Explore button, and red (#e63946) is the second colour, so the page reads as poster-like and loud.

**Mood:** poster-like, bold, loud, geometric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#48cae4` | Primary action and highlights |
| Second accent | `#e63946` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#48cae4` · `#a1a1aa` · `#27272a` · `#e63946` · `#000000` · `#18181b` · `#1f1f23` · `#800000` · `#023e8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono
- **Scale (largest breakpoint):** h1 160px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[100%]` (100%)
- **Shadows:** `shadow-[inset_-50px_0_100px_rgba(0,0,0,0.8),_50px_0_100px_rgba(0,0,0,0.5)]`, `shadow-[20px_20px_50px_rgba(0,0,0,0.5)]`, `shadow-[0_0_20px_rgba(230,57,70,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-[80vw]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-x-3`, `gap-x-6`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-x-2 text-xs font-semibold uppercase tracking-[0.15em] text-black bg-[#48cae4] px-5 py-3 rounded-full hover:bg-white transition-colors w-fit">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Services (`services`)
3. Testimonials (`testimonials`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #48cae4;
  --color-accent-2: #e63946;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#48cae4',
    accent2: '#e63946',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Use cyan (#48cae4) for the Explore button and the first wordmark letter
- **Do:** Split the hero into diagonal colour planes
- **Do:** Keep white type on the saturated planes at large size
- **Don't:** Don't use dark grey panels in the hero
- **Don't:** Don't put cyan and red together in body text
- **Don't:** Don't add gradient transitions between the planes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
