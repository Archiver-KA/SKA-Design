# Design system — Chess Tactics Trainer App Template

`SN-W00277` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, game-like chess trainer screen: a deep navy ground (#192d3b) with a high-contrast board in pale and dark squares, set beside a sidebar of stats and a puzzle card. Bright yellow (#ffd30e) is the one colour, used for the primary Check Solution button and the active move highlight. Type is plain sans in white and light grey, so the board and the yellow action carry the screen.

**Mood:** bold, focused, game-like, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#192d3b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#192d3b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffd30e` | Primary action and highlights |
| Second accent | `#192d3b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ffd30e` · `#192d3b` · `#94a3b8` · `#cbd5e1` · `#64748b` · `#2c4c61` · `#13232e` · `#e2e8f0` · `#e3e7ed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-md`, `shadow-inner`, `shadow-[0_0_10px_rgba(255,211,14,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[600px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="w-full flex items-center justify-center gap-2 rounded-lg bg-[#FFD30E] px-4 py-2.5 text-sm font-bold text-[#192d3b] hover:bg-[#ffe15c] focus:outline-none focus:ring-2 focus:ring-[#FFD30E] focus:ring-offset-2 focus:ring-offset-[#192d3b] transition-all shadow-[0_4px_14px_rgba(255,211,14,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #192d3b;
  --color-surface: #ffffff;
  --color-text: #192d3b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #ffd30e;
  --color-accent-2: #192d3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#192d3b',
    surface: '#ffffff',
    ink: '#192d3b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#ffd30e',
    accent2: '#192d3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#ffd30e) only for the primary solution button and the active move
- **Do:** Keep the board in the high-contrast light and dark squares with piece sets on top
- **Do:** Set the stat tiles and move history in white on the deep navy (#192d3b)
- **Don't:** Don't use yellow for body text or large fills beyond the one action
- **Don't:** Don't tint the board squares in other colours; the contrast is the design
- **Don't:** Don't put a light background behind the sidebar stats

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
