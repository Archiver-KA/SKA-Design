# Design system — Team Analytics Sidebar Navigation

`SN-W04302` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark analytics dashboard in neutral charcoal, with cards on a slightly lighter grey surface and small coloured metrics. Blue (#3b82f6) carries the primary progress and chart fills, green (#22c55e) marks positive status, and purple and yellow appear only in small bars. Large numerals with small grey labels keep each figure readable.

**Mood:** neutral, data-dense, dark, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#d4d4d4` · `#a3a3a3` · `#171717` · `#3b82f6` · `#22c55e` · `#404040` · `#a855f7` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-6`, `gap-3`

**Primary button**

```html
<a class="flex-1 py-2 px-3 border border-neutral-700 rounded-lg text-sm font-medium text-neutral-300 hover:bg-neutral-800 transition-colors font-nunito">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #f5f5f5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #3b82f6;
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
    background: '#171717',
    surface: '#262626',
    ink: '#f5f5f5',
    muted: '#737373',
    line: '#262626',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for primary progress and chart fills
- **Do:** Set key metrics as large numerals with small grey labels above them
- **Do:** Use green (#22c55e) for positive status and keep the other status colours for their own metrics
- **Don't:** Don't use coloured fills for the card backgrounds
- **Don't:** Don't set metric labels in the accent colour
- **Don't:** Don't add more than one accent colour to a single chart

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
