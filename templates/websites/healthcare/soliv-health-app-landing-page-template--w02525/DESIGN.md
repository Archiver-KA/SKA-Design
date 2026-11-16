# Design system — Soliv Health App Landing Page Template

`SN-W02525` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A full-bleed photographic hero under a dark overlay, with white display type over the image and one saturated orange (#ea580c) button carrying the action. The stance is energetic but controlled: orange is the only strong colour and it is kept for the primary call to action, set against a translucent dark pill navigation. Headlines are large, heavy and tightly set.

**Mood:** energetic, controlled, photographic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#111827` · `#9ca3af` · `#f3f4f6` · `#6b7280` · `#1f2937` · `#ea580c` · `#fff7ed` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-black/5`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-brand-orange text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-orange-600 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --color-accent-2: #22c55e;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f3f4f6',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use orange (#ea580c) only for the primary call to action
- **Do:** Place the hero headline over a darkened photograph, never over a flat colour
- **Do:** Keep the navigation a translucent dark pill with the orange button on the right
- **Don't:** Don't use the orange for body text or large background fills
- **Don't:** Don't set the headline in a light weight; it is heavy
- **Don't:** Don't put more than one orange button in a single view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
