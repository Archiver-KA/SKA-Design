# Design system — Finance Video Editor Portfolio Template

`SN-W02015` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, sidebar-led layout: a column of plain text links on the left with one active item in a grey box marked by an orange rule, and a large white sans headline in the main column. The second headline line is orange (#f97316), the only accent, and a row of big white figures with small grey labels sits below the copy. A small green status card anchors the bottom left.

**Mood:** direct, data-led, dark, performance-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#f97316` · `#262626` · `#171717` · `#000000` · `#fb923c` · `#d4d4d4` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-orange-900/20`, `shadow-2xl`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="nav-link group flex items-center gap-3 py-2 px-4 text-sm font-medium rounded-r-lg border-l-2 border-transparent hover:text-white hover:bg-white/5 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for the second headline line and the active marker only
- **Do:** Set stat figures large and bold in white, with small grey uppercase labels
- **Do:** Keep the left navigation as plain text, with the active row marked by a rule
- **Don't:** Don't use orange for body copy or large fills
- **Don't:** Don't add accent colours beside the green status dot
- **Don't:** Don't drop the stats row; the figures carry the proof on the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
