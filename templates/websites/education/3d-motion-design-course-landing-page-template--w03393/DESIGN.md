# Design system — 3D Motion Design Course Landing Page Template

`SN-W03393` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Stark, cinematic course page on pure black, with a large white sans headline set in tight leading and a small orange dot marking the cohort date. The right side is left nearly empty, with only thin hairline marks, so the typography carries the page. Navigation is small uppercase text and supporting copy is a muted grey.

**Mood:** stark, cinematic, minimal, typographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#fb923c` · `#f97316` · `#000000` · `#64748b` · `#cbd5e1` · `#1e293b` · `#475569` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-orange-500/30`, `shadow-white/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full py-4 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg bg-orange-600 hover:bg-orange-500 shadow-orange-600/20 hover:shadow-orange-600/40">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Bento grid (`bento-grid`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #fb923c;
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
    background: '#000000',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground at pure black (#000000) and headlines in white (#ffffff).
- **Do:** Use the orange (#fb923c) only for the small status dot and one highlight per section.
- **Do:** Set headlines in tight leading, left-aligned, with body copy in grey (#94a3b8).
- **Don't:** Don't fill the right side with a decorative block; the open space is part of the layout.
- **Don't:** Don't use the orange as a large fill.
- **Don't:** Don't add a tinted background behind sections.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
