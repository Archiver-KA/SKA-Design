# Design system — Luxury AI Image Editing Landing Page Template

`SN-W00514` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black product page on #050505 where the brand mark does the work: a large metallic VIZENTA wordmark sits under a yellow and violet logo, with a dark glow behind it. Navigation is small and quiet in grey, and the only colour comes from the logo itself. The page is built around the logo as a poster-like hero, which suits a premium image-editing product.

**Mood:** premium, cinematic, dark, logo-led, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#713f12` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#94a3b8` · `#050505` · `#64748b` · `#1e293b` · `#ec4899` · `#22d3ee` · `#713f12` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(6,182,212,0.3)]`, `shadow-[0_0_25px_rgba(251,191,36,0.3)]`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[calc(100vw-3rem)]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-xs font-medium transition-all border border-white/5 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Comparison (`comparison`)
5. Testimonials (`testimonials`)
6. Dashboard preview (`dashboard-preview`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #713f12;
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
    surface: '#000000',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#713f12',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Let the logo lead the hero and keep the surrounding page black.
- **Do:** Keep navigation small and grey so the logo is the only bright element.
- **Do:** Use the yellow and violet of the mark only where the brand appears.
- **Don't:** Don't add extra accent colours beyond the logo's yellow and violet.
- **Don't:** Don't place body copy over the logo glow.
- **Don't:** Don't use the grey slate (#1e293b) as an accent; it is a surface colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
