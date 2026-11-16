# Design system — Taxi Booking Landing Page Template

`SN-W03135` · travel · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A warm, friendly booking page on white and cream grounds, with a three-column grid of rounded photo and yellow panels. The yellow (#f59e0b) panel is the strongest colour on the page, and a dark ink (#1e293b) round arrow button carries the call to action. Headlines are bold sans in dark ink, and the large corner radii give it a soft, approachable character.

**Mood:** warm, friendly, rounded, urban, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fff7ed` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#000000` · `#64748b` · `#1e293b` · `#fef3c7` · `#f59e0b` · `#1c1917` · `#f3f4f6` · `#fde68a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 36px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-[1600px]`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 shadow-md transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fff7ed;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #f59e0b;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fff7ed',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#f59e0b) for the feature panel and one highlight per section
- **Do:** Keep card corners large and rounded, as in the grid
- **Do:** Set headlines in a bold sans in dark ink (#1e293b)
- **Don't:** Don't use the yellow for body text; it is a panel colour
- **Don't:** Don't use flat white cards without rounding
- **Don't:** Don't add a second saturated colour beside the yellow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
