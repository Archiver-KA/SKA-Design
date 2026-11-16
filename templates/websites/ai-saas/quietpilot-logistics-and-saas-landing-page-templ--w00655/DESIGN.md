# Design system — QuietPilot Logistics and SaaS Landing Page Template

`SN-W00655` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark operations dashboard laid out as three numbered panels: an orbital event view, a card board and a command cockpit. Amber (#f59e0b) marks priorities and gauges, with green for on-track status, while the surfaces stay near-black. Panels are compact and dense, with small uppercase labels, and the set reads as an operational tool rather than a marketing page.

**Mood:** operational, dense, dark, data-first, amber-marked

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030508` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#737373` · `#fbbf24` · `#f59e0b` · `#d4d4d4` · `#6366f1` · `#34d399` · `#030508`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** ui-sans-serif
- **Body:** ui-sans-serif
- **Scale (largest breakpoint):** h2 20px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_30px_rgba(255,255,255,0.1)]`, `shadow-[0_0_30px_rgba(251,191,36,0.25)]`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="glass-card px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 hover:bg-white/10">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Spline 3D, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030508;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #6366f1;
  --font-display: "ui-sans-serif", serif;
  --font-body: "ui-sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030508',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['ui-sans-serif'], sans: ['ui-sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep surfaces near-black (#030508 and #000000) with compact cards
- **Do:** Use amber (#f59e0b) for priority markers, gauges and the High tags only
- **Do:** Set panel titles as small uppercase numbered labels above each panel
- **Don't:** Don't use amber for backgrounds or large fills
- **Don't:** Don't add decorative imagery; the panels are the content
- **Don't:** Don't enlarge the panel labels to display size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
