# Design system — ChickenAI Professional Services Template

`SN-W03862` · business-services · light mode · Sinera Atlas theme `route` · language `es`

## Direction

A light, airy hero on a near-white ground with dark sans-serif headlines and a grey italic serif for the second half of the statement. Small rounded pills and soft white cards carry the proof points, and the product is shown through a floating chat-style card. Colour is almost absent; contrast comes from the black type and pale grey shapes.

**Mood:** airy, minimal, editorial, light, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#f9f9f9` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111111` · `#cbd5e1` · `#3b82f6` · `#e2e8ff` · `#1e293b` · `#0f172a` · `#0a0a0a` · `#333333` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[280px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-6 h-14 bg-white/5 border border-white/10 rounded-full text-white/80 font-normal hover:bg-white/10 hover:text-white flex items-center justify-center gap-2 transition-colors text-base whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. Product grid (`product-grid`)
6. Services (`services`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #333333;
  --color-text: #111111;
  --color-muted: #f9f9f9;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #ef4444;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#333333',
    ink: '#111111',
    muted: '#f9f9f9',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the main headline in heavy black sans-serif and the second phrase in grey italic serif
- **Do:** Use a dark card for the key case study so it stands out on the light page
- **Do:** Keep the palette to black, white and greys
- **Don't:** Don't add a second accent colour; the page works in black and greys
- **Don't:** Don't remove the italic line; the contrast between the two styles sets the tone
- **Don't:** Don't put the hero on a dark background; the light ground is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
