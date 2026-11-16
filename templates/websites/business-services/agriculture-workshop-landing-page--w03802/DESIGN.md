# Design system — Agriculture Workshop Landing Page

`SN-W03802` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A workshop landing page with a large rounded hero panel in a teal-green gradient, carrying centred white sans-serif headlines and a pale mint year. A white pill and an outlined pill sit beneath the copy, and the page around the panel is a plain light ground. Deep teal (#0e6f57) is the brand colour, used through the hero panel and the logo mark.

**Mood:** event-driven, clear, fresh, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0e6f57` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0e6f57` · `#64748b` · `#1e293b` · `#f1f5f9` · `#94a3b8` · `#e7f3ef` · `#475569` · `#e2e8f0` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito Sans
- **Body:** Nunito Sans
- **Loaded families:** Nunito Sans, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-[0_4px_20px_rgb(0,0,0,0.03)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-4 rounded-full bg-[#0E6F57]/30 backdrop-blur-md border border-white/40 text-white text-base font-medium hover:bg-[#0E6F57]/50 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Schedule (`schedule-agenda`)
6. Logo cloud (`logo-cloud`)
7. About (`about`)
8. Sign-in form (`auth-form`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #0e6f57;
  --color-accent-2: #1e293b;
  --font-display: "Nunito Sans", sans-serif;
  --font-body: "Nunito Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#0e6f57',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Nunito Sans'], sans: ['Nunito Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero as a rounded panel in teal-green (#0e6f57) with centred white headlines.
- **Do:** Highlight the year in a pale mint tone, not in white.
- **Do:** Pair one solid white pill with one outlined pill for the hero actions.
- **Don't:** Don't set the hero panel edge to edge without rounded corners.
- **Don't:** Don't use navy as a second hero colour.
- **Don't:** Don't break the centred headline with left-aligned lines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
