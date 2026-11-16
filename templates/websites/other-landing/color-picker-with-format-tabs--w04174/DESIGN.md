# Design system — Color Picker with Format Tabs

`SN-W04174` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A compact dark tool panel on a near-black ground (#09090b), built around a large colour preview that fills the top of the panel. Neutral zinc tones carry the interface, and the swatches supply all of the colour. The active format tab is marked by a blue underline (#3b82f6), and small rounded chips keep the layout tidy.

**Mood:** precise, neutral, tool-like, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#a1a1aa` · `#3b82f6` · `#27272a` · `#000000` · `#e4e4e7` · `#ffffff` · `#ef4444` · `#818cf8` · `#22c55e` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 18px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-lg`
- **Common gaps:** `gap-1`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #e4e4e7;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #3b82f6;
  --color-accent-2: #ef4444;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#e4e4e7',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#3b82f6',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the interface in zinc neutrals and let the swatches carry the colour.
- **Do:** Mark the active tab with a blue (#3b82f6) underline.
- **Do:** Set the colour preview at full panel width with its hex label in one corner.
- **Don't:** Don't add colour to the panel chrome.
- **Don't:** Don't use filled coloured tabs.
- **Don't:** Don't round the preview swatch with a large radius.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
