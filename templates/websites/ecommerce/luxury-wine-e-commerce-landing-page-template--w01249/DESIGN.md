# Design system — Luxury Wine E-commerce Landing Page Template

`SN-W01249` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark wine-house hero on a warm near-black ground with a faint red-brown glow at the top. The headline is a centred serif in white, with the middle phrase set in grey italic, and small letter-spaced caps mark the nav and the eyebrow. A single outlined button sits below the subhead. Colour is almost absent; the amber eyebrow and the warm tint of the ground are the only hints.

**Mood:** dark, classic, restrained, prestigious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#f59e0b` · `#0c0a09` · `#ffffff` · `#78716c` · `#f5f5f4` · `#d6d3d1` · `#a8a29e` · `#e7e5e4` · `#78350f` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Cinzel, Geist, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 10px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="group relative px-10 py-4 bg-transparent border border-stone-600 hover:border-amber-600 text-stone-200 transition-all duration-500 overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, white, with the middle phrase in grey italic
- **Do:** Keep the eyebrow in small amber caps above the headline
- **Do:** Use one thin outlined button under the subhead
- **Don't:** Don't use a light background; the hero is near-black
- **Don't:** Don't add more than the single amber accent
- **Don't:** Don't use solid filled buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
