# Design system — Virtual Reality Features & Pricing

`SN-W04332` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark slate section with a row of four feature cards, each with a green line icon, a bold white title and a short grey description. A wide top panel sits above the grid with a centred heading and a thin green [#4ade80] outline, which gives the green a single job of marking emphasis. The cards use subtle fills and rounded corners, with no imagery.

**Mood:** techy, dark, clear, measured, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |

Palette by frequency of use: `#4ade80` · `#1f2937` · `#d1d5db` · `#374151` · `#f8fafc` · `#f1f5f9` · `#22c55e` · `#000000` · `#bbf7d0` · `#86efac`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Mono, IBM Plex Serif
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 14px
- **Weights in use:** bold, extrabold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-6`, `gap-8`

**Primary button**

```html
<a class="btn-glow bg-green-400 hover:bg-green-300 text-black font-bold px-8 py-3 rounded-lg text-lg transition-shadow duration-300 w-full">…</a>
```

## Page structure

Blocks in page order:

1. Process / steps (`how-it-works`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #d1d5db;
  --color-border: #374151;
  --color-accent: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#d1d5db',
    line: '#374151',
    accent: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#4ade80) for icons and the outline of the top panel only
- **Do:** Set feature titles in bold white with grey descriptions beneath
- **Do:** Keep feature cards in an even four-column grid with rounded corners
- **Don't:** Don't fill the top panel with green
- **Don't:** Don't add imagery inside the feature cards
- **Don't:** Don't use a light background for the section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
