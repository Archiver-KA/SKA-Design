# Design system — Online English Course Landing Page Template

`SN-W03516` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A confident hero on a dark slate-blue ground (#475569) with white Inter headlines and a pale blue-grey (#cbd5e1) line for the emphasis phrase. The primary action is a warm coral pill, the only saturated colour in the upper section, and a dark translucent secondary button sits beside it. Pale text and rounded panels continue below, keeping the page measured and approachable.

**Mood:** confident, measured, approachable, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#475569` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#cbd5e1` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#f8fafc` · `#475569` · `#e2e8f0` · `#f1f5f9` · `#cbd5e1` · `#22c55e` · `#334155` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="bg-coral hover:bg-coral-hover text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-coral/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Stats band (`stats`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)
11. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #475569;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #cbd5e1;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#475569',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#cbd5e1',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter in white, with the emphasis phrase in pale blue-grey (#cbd5e1)
- **Do:** Use the coral primary button as the only saturated colour in the hero
- **Do:** Pair each primary button with a dark translucent secondary button
- **Don't:** Don't place dark text on the slate hero
- **Don't:** Don't add a second saturated colour to the hero
- **Don't:** Don't use the pale blue-grey for body text on the light sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
