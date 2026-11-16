# Design system — Stryke Markets Trading Landing Page Template

`SN-W01038` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black trading landing page has a white pill primary button and a dark outlined secondary, under a very large two-line headline in a grotesk where the second line drops to muted grey. A small dark pill labels the product above the headline. The product window sits below the fold with traffic-light dots, so the hero stays monochrome and lets the platform image carry the colour.

**Mood:** monochrome, sleek, technical, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#2a2e39` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2a2e39` · `#71717a` · `#000000` · `#d4d4d8` · `#2962ff` · `#a1a1aa` · `#18181b` · `#26a69a` · `#ef5350`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-blue-900/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-4 py-1.5 bg-[#2962ff] hover:bg-[#1e4bd8] text-white text-xs font-semibold rounded transition-colors shadow-lg shadow-blue-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #2a2e39;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#2a2e39',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero monochrome: black ground (#050505), white and grey type
- **Do:** Use a white pill for the primary button and a dark outlined pill for the secondary
- **Do:** Set the second headline line in muted grey (#71717a) for contrast
- **Don't:** Don't add a blue brand colour to the hero.
- **Don't:** Don't put gradient fills on buttons
- **Don't:** Don't show product images without the dark window frame.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
