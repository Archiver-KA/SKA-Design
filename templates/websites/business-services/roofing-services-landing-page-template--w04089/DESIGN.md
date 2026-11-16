# Design system — Roofing Services Landing Page Template

`SN-W04089` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy hero with a bold white sans headline and a solid blue primary button, set over a faded, dark photographic backdrop. A red button in the header marks the free estimate and is the only other strong colour. The closing phrase of the headline is set in pale grey, which keeps the tone trustworthy and direct.

**Mood:** trustworthy, direct, bold, regional, dependable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2c55a5` | Primary action and highlights |
| Second accent | `#e31e27` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2c55a5` · `#e31e27` · `#0f172a` · `#475569` · `#e2e8f0` · `#64748b` · `#f8fafc` · `#94a3b8` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-[#2c55a5] hover:bg-[#234485] transition-all shadow-lg shadow-[#2c55a5]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #2c55a5;
  --color-accent-2: #e31e27;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#2c55a5',
    accent2: '#e31e27',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on deep navy (#0f172a) with a bold white headline
- **Do:** Use blue (#2c55a5) for the primary button and red (#e31e27) for the header quote button only
- **Do:** Set the closing phrase of the headline in pale grey
- **Don't:** Don't use red for headlines or body text
- **Don't:** Don't add a second blue button beside the primary one
- **Don't:** Don't cover the backdrop photograph with a light panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
