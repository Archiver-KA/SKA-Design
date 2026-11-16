# Design system — MMA Gym Franchise Landing Page Template

`SN-W02654` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, aggressive franchise page on near-black (#09090b) with heavy white sans-serif headlines in capitals. Red (#dc2626) marks the key phrase of the headline, the logo mark and the primary buttons, so the colour reads as a brand signal. The hero sits over a grey, textured photograph with a dark overlay. Panels and inputs use the slightly lighter #18181b, which keeps the layers separated without borders.

**Mood:** aggressive, dark, franchise, high-impact, gritty

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#dc2626` · `#ef4444` · `#d4d4d8` · `#09090b` · `#18181b` · `#000000` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(220,38,38,0.3)]`, `shadow-[0_0_30px_rgba(220,38,38,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Map / location (`map-location`)
4. Services (`services`)
5. Call to action (`cta`)
6. Product grid (`product-grid`)
7. Logo cloud (`logo-cloud`)
8. Team (`team`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in #dc2626.
- **Do:** Use #09090b for the page ground and #18181b for cards and panels.
- **Do:** Darken hero photographs with an overlay before placing white headlines on them.
- **Don't:** Don't use red for body text or as a large background fill.
- **Don't:** Don't introduce the green (#22c55e) outside small status markers.
- **Don't:** Don't use light grey text on top of the photograph without an overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
