# Design system — Stalen Onderstel E-commerce Landing Page Template

`SN-W01325` · ecommerce · light mode · Sinera Atlas theme `market` · language `nl`

## Direction

A furniture landing page that opens on a full-bleed photograph of a timber table and steel legs, darkened with an overlay so the white, heavy sans-serif headline reads across the top left. The only solid interface colour is the dark navy announcement strip, and the buttons are a pale filled pill and a muted outlined pill.

**Mood:** material, restrained, photographic, industrial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#f97316` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#475569` · `#94a3b8` · `#1e293b` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[80vw]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hover:text-white transition-colors hover:bg-white/10 font-bold rounded-full px-4 py-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Product grid (`product-grid`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
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
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Open the hero on a full-bleed interior photograph with a dark overlay, and set white heavy sans-serif on top
- **Do:** Keep the announcement strip in dark navy (#0f172a) with small white text
- **Do:** Use a pale filled pill for the main action and a muted outlined pill for the second
- **Don't:** Don't add a bright accent colour to the hero; the page stays neutral over photography
- **Don't:** Don't use bright colour in buttons placed over the photograph
- **Don't:** Don't place headline text over the busiest part of the image; keep it on the darker left side

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
