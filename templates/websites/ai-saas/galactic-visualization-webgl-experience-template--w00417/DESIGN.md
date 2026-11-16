# Design system — Galactic Visualization WebGL Experience Template

`SN-W00417` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A tool-style interface rather than a marketing page: a black viewport on the left with a small title and status line, and a dark right-hand panel of grouped parameter sliders with white knobs. Blue (#3b82f6) is the single accent, shown in the colour swatches and the active-state dot. Labels are muted grey and numeric values sit right-aligned beside each slider, so the page reads as a control surface.

**Mood:** utilitarian, dark, precise, instrument-like, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#3b82f6` · `#000000` · `#737373` · `#d4d4d4` · `#525252` · `#050505` · `#a3a3a3` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="group relative w-full py-2.5 bg-white text-black text-xs font-semibold rounded-md hover:bg-neutral-200 transition-all overflow-hidden flex items-center justify-center gap-2 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Group sliders under small uppercase section headings
- **Do:** Right-align each numeric value beside its slider
- **Do:** Use blue (#3b82f6) for the active state and the outer colour swatch
- **Don't:** Don't add decorative cards around the viewport; the canvas is the focus
- **Don't:** Don't add a hero section or large headline; the page is the tool
- **Don't:** Don't use the grey (#262626) as the page ground; it is near-black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
