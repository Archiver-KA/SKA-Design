# Design system — EV Mobility Kiosk Landing Page Template

`SN-W00375` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light grey dashboard-style hero with three floating panels: a car specification card on the left, a large rounded image in the centre with a white headline, and an AI assistant chat panel on the right. Green (#0a8765) marks the primary action and sits on white or grey. Panels are rounded and borderless, so the page reads as a clean product interface rather than a marketing site.

**Mood:** clean, product-led, soft, rounded, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f4f7` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f9fafb` | Hairlines, dividers, outlines |
| Accent | `#0a8765` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f9fafb` · `#9ca3af` · `#111827` · `#f3f4f6` · `#1f2937` · `#6b7280` · `#374151` · `#0a8765` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 64px · h2 24px · h3 20px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[48px]` (48px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_40px_-10px_rgba(0,0,0,0.03)]`, `shadow-none`
- **Content width:** `max-w-[1500px]`, `max-w-[90%]`
- **Common gaps:** `gap-4`, `gap-6`, `gap-7`

**Primary button**

```html
<a class="w-full bg-[#0A8765] hover:bg-[#087355] text-white rounded-full py-4 text-base font-medium transition-colors mt-8 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. About (`about`)
2. Hero (`hero`)
3. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f2f4f7;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f9fafb;
  --color-accent: #0a8765;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f4f7',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f9fafb',
    accent: '#0a8765',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#0a8765) only for primary buttons and the active state.
- **Do:** Keep panels rounded with large radii and place them on the light grey ground (#f2f4f7).
- **Do:** Set specs as small label-over-value pairs, with the value in dark ink (#111827).
- **Don't:** Don't add a second accent colour to the panels.
- **Don't:** Don't switch to a dark theme; the page is light grey with white panels.
- **Don't:** Don't crop the central image into a rectangle; it sits in a rounded shape.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
