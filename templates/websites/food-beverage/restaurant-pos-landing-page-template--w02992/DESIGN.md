# Design system — Restaurant POS Landing Page Template

`SN-W02992` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, product-led hero on a white ground with a soft yellow glow behind the mock-up. The headline is a dark serif in two lines, with the middle phrase set in italic and the final word roman again, so the italic is the only emphasis. Pastel stat cards in pale pink and blue float over the product mock-up, which keeps the page airy and soft.

**Mood:** product-led, airy, elegant, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#fecaca` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#94a3b8` · `#475569` · `#f8fafc` · `#cbd5e1` · `#f1f5f9` · `#e2e8f0` · `#fecaca`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-x-3`, `gap-x-1`, `gap-x-8`

**Primary button**

```html
<a class="mt-6 block rounded-full bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-100">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #fecaca;
  --color-accent-2: #1e293b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#fecaca',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the middle phrase of the headline in italic serif.
- **Do:** Keep the stat cards in soft pastel tints over the product mock-up.
- **Do:** Use a dark filled button for Get Started and an outline pill for Request a Demo.
- **Don't:** Don't put the italic on the first line of the headline.
- **Don't:** Don't use the pastel tints as button colours.
- **Don't:** Don't add dark backgrounds to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
