# Design system — Developer Portfolio Website Template

`SN-W01969` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dense bento grid of dark tiles: a charcoal ground with slightly lighter rounded tiles, each holding one item such as a profile, a featured project, a stat or a code sample. Green (#4ade80) marks status and live signal bars, and white is the only solid button colour. Hairline borders and equal-weight tiles carry the layout, and the code tile adds a monospace, syntax-coloured note of technical tone.

**Mood:** modular, technical, dense, dark, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#1da1f2` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#404040` · `#262626` · `#737373` · `#171717` · `#525252` · `#d4d4d4` · `#000000` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-sm`
- **Content width:** `max-w-[1600px]`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full group/btn relative flex items-center justify-between bg-white text-black px-5 py-3 rounded-xl font-medium text-sm overflow-hidden transition-all hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #1da1f2;
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
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#1da1f2',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Build each module as a rounded tile with a hairline border on the charcoal ground
- **Do:** Use the green (#4ade80) for status indicators and live figures only
- **Do:** Keep one solid white button per tile, as in the Contact Me button
- **Don't:** Don't use the blue (#1da1f2) in the layout.
- **Don't:** Don't let one tile dominate; the grid works through equal weighting
- **Don't:** Don't remove the monospace code tile, which carries the technical tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
