# Design system — Luxury Jewelry E-commerce Landing Page Template

`SN-W01229` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, dark customisation stance: a near-black hero with a soft brown glow, a large sans-serif headline in white whose second line is gold, and a short grey intro paragraph. A solid white button leads, with an outline beside it, and a strip of product thumbnails runs along the bottom edge to show the personalised range. Gold is the single accent, used for the headline line and a small dot.

**Mood:** warm, dark, personal, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#71717a` · `#a1a1aa` · `#09090b` · `#ca8a04` · `#0a0a0a` · `#18181b` · `#fef08a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #09090b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #f87171;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#09090b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#f87171',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in gold (#eab308) and the first line in white.
- **Do:** Use a solid white primary button with dark text, and an outline for the secondary.
- **Do:** Show a strip of product thumbnails with captions along the bottom of the hero.
- **Don't:** Don't use the gold as a fill on buttons; the buttons are white or outlined.
- **Don't:** Don't add a second accent colour; use gold and neutrals only.
- **Don't:** Don't let the brown glow fill whole sections; it sits behind the hero copy only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
