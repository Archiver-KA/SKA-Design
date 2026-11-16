# Design system — Furniture Design Studio Landing Page Template

`SN-W01576` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale neutral ground with a large serif headline in deep slate (#0f172a), where the middle word 'Silence' is set in a lighter grey italic. A small teal (#06b6d4) eyebrow line and a black pill button give the hero its accents, with one product photograph on the right in a plain frame. The result is calm and gallery-like, with type and white space doing the work.

**Mood:** calm, gallery-like, serene, editorial, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |

Palette by frequency of use: `#06b6d4` · `#0f172a` · `#64748b` · `#ffffff` · `#94a3b8` · `#f1f5f9` · `#e2e8f0` · `#f8fafc` · `#1e293b` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-cyan-500/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-cyan-500 px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-cyan-500/20 text-white hover:bg-cyan-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #06b6d4;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#06b6d4',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at display size, with one phrase in lighter italic
- **Do:** Use the teal (#06b6d4) for the small eyebrow label only
- **Do:** Frame product photography plainly with generous white space around it
- **Don't:** Don't tint the ground indigo; the page is neutral and pale
- **Don't:** Don't use teal for buttons; the black pill is the action
- **Don't:** Don't crowd the hero with extra text or badges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
