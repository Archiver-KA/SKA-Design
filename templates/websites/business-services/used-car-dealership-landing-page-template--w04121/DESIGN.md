# Design system — Used Car Dealership Landing Page Template

`SN-W04121` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page with a greyscale photograph framed in a rounded, glass-edged card and small translucent labels over its corners. Red (#ef4444) appears only in the logo and small highlights, so the photograph sets the colour of the page. The layout is restrained and cinematic.

**Mood:** cinematic, restrained, dark, monochrome, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#ef4444` · `#a3a3a3` · `#737373` · `#171717` · `#000000` · `#dc2626` · `#262626` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(220,38,38,0.1)]`, `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`, `shadow-[0_0_10px_rgba(220,38,38,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. About (`about`)
5. Listings (`listings`)
6. Services (`services`)
7. Testimonials (`testimonials`)
8. Feature grid (`features`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Frame the hero photograph in a rounded card with a translucent label
- **Do:** Keep the page near-black with grey text
- **Do:** Use red (#ef4444) only for the logo and small highlights
- **Don't:** Don't add colour to the hero photograph
- **Don't:** Don't use yellow for large fills
- **Don't:** Don't put a bright red background behind the content

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
