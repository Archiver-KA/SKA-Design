# Design system — Multi-Channel Visibility Landing Page Template

`SN-W01270` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A bright, product-led landing page built on white and light grey (#f3f4f6) with Inter at heavy weight for a large three-line headline. The hero is a loose arrangement of rounded white product cards and a curved arc of channel labels, so the diagram carries the message. Blue (#3b82f6) marks the single highlighted word, and the rest of the colour stays neutral.

**Mood:** bright, product-led, clean, bold, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f3f4f6` · `#000000` · `#cbd5e1` · `#0f172a` · `#64748b` · `#2563eb` · `#10b981` · `#3b82f6` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · body 20px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_4px_12px_rgba(0,0,0,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-1.5`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
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
    surface: '#f3f4f6',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at heavy weight, with one word in blue (#3b82f6)
- **Do:** Keep product cards white with soft rounded corners on the #f3f4f6 surface
- **Do:** Use the green (#10b981) only for secondary signals, never for headlines
- **Don't:** Don't use blue for body text or large background areas
- **Don't:** Don't add dark sections; the page stays on white and light grey
- **Don't:** Don't set the hero headline in a serif or a light weight; the look depends on heavy sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
