# Design system — TurfCity Services Landing Page Template

`SN-W04119` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark green hero with a bold white sans headline and a two-column layout: copy and a short benefit list on the left, a white quote form card on the right. The primary button is amber (#f59e0b) with dark text, and the green ground carries the page. The form card is the brightest element, so its rounded white surface is the clear focus.

**Mood:** confident, local, fresh, direct, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#15803d` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#15803d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#e7e5e4` · `#16a34a` · `#15803d` · `#86efac` · `#44403c` · `#78716c` · `#fafaf9` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-3`, `gap-2.5`, `gap-1.5`

**Primary button**

```html
<a class="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-3 sm:px-4 py-2 rounded-lg transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Logo cloud (`logo-cloud`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #15803d;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #44403c;
  --color-border: #e7e5e4;
  --color-accent: #f59e0b;
  --color-accent-2: #15803d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#15803d',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#44403c',
    line: '#e7e5e4',
    accent: '#f59e0b',
    accent2: '#15803d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the form card white with rounded corners on the green ground
- **Do:** Use amber (#f59e0b) for the primary call to action only
- **Do:** Set the headline in bold white sans-serif with short line breaks
- **Don't:** Don't use amber for the form card or large fills
- **Don't:** Don't add more than one accent colour to the hero
- **Don't:** Don't place light text on light green panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
