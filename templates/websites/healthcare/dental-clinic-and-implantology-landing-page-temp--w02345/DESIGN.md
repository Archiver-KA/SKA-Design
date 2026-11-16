# Design system — Dental Clinic & Implantology Landing Page Template

`SN-W02345` · healthcare · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A serious periodontology page whose first screen is a dimmed slate-and-navy photograph with a large, centred, bold white sans headline and one white pill button. The hero is high-contrast and sparse, which suits a clinical specialist. The page reads as clinical and premium.

**Mood:** serious, clinical, high-contrast, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0b132b` · `#cbd5e1` · `#94a3b8` · `#0f172a` · `#facc15` · `#475569` · `#f8fafc` · `#60a5fa` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 30px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[#0B132B]/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0B132B] rounded-full hover:bg-slate-100 transition-all font-medium text-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #60a5fa;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
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
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large bold white sans, centred over the dimmed photo.
- **Do:** Make the primary button a solid white pill with dark text.
- **Do:** Keep the photo dimmed with a slate overlay so the white text stays readable.
- **Don't:** Don't use the yellow (#facc15) on the first screen.
- **Don't:** Don't use a serif for headlines.
- **Don't:** Don't place body text over the photo without a dark overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
