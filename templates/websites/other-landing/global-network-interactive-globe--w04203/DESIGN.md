# Design system — Global Network Interactive Globe

`SN-W04203` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero (#111827) with a large white Quicksand headline, pairing a light weight with a bold word, and a lighter blue subhead beneath it. Blue primary and outlined secondary buttons sit side by side, and a small three-colour legend (pink, blue, green) explains the map markers. A compact location card in the lower right lists offices in small text on a dark panel.

**Mood:** calm, technical, dark, geographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#93c5fd` · `#d1d5db` · `#2563eb` · `#1d4ed8` · `#ec4899` · `#60a5fa` · `#4ade80` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Quicksand
- **Body:** Inter
- **Loaded families:** Nunito, Quicksand, Inter
- **Scale (largest breakpoint):** h1 72px · h2 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Common gaps:** `gap-3`

**Primary button**

```html
<a class="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-3 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #60a5fa;
  --font-display: "Quicksand", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Quicksand'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Quicksand at large size, mixing light and bold words
- **Do:** Use blue (#2563eb) for the primary button only
- **Do:** Keep map markers colour-coded and explained by a legend
- **Don't:** Don't use the pink marker colour for buttons
- **Don't:** Don't add a light background to the hero
- **Don't:** Don't crowd the location card; keep it to three or four offices

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
