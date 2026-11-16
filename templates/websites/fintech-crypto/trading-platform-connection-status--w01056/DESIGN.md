# Design system — Trading Platform Connection Status

`SN-W01056` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black dashboard panel in which a column of small semicircular gauges sits on a dark card, each with a platform name, a value and a latency label. Status colour does the signalling: green (#4ade80) for healthy connections and red (#f87171) for slow ones, with everything else in greyscale. The gauges are small and evenly spaced, so the colour and value can be scanned at a glance.

**Mood:** technical, scannable, status-led, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#4ade80` · `#a1a1aa` · `#71717a` · `#27272a` · `#3f3f46` · `#f87171` · `#d4d4d8` · `#16a34a` · `#ffffff` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 18px · body 14px
- **Weights in use:** medium, bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-innerBorder`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-accent: #4ade80;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#a1a1aa',
    accent: '#4ade80',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#4ade80) only for healthy status and red (#f87171) only for slow or failed status
- **Do:** Put the latency value in small type under each gauge
- **Do:** Keep the surrounding panels in greyscale, with #27272a surfaces and #a1a1aa text
- **Don't:** Don't use green or red as decoration; they carry status only
- **Don't:** Don't enlarge the gauges; the row is meant to be scanned at its small size
- **Don't:** Don't add gradient fills to the gauges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
