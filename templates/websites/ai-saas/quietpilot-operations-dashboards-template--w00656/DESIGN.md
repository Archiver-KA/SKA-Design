# Design system — QuietPilot Operations Dashboards Template

`SN-W00656` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark dashboard in the same three-panel family as its sibling, but its status colours run green-first: mint (#34d399) marks on-track events and gauges, and amber (#fbbf24) marks watch states. Surfaces are black with thin dividers, and cards carry small tags, counts and mini progress bars. A status legend under the card grid explains the colours, so the page reads as a data wall for many events at once.

**Mood:** data-dense, dark, status-coded, legible, operational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030508` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#34d399` · `#fbbf24` · `#10b981` · `#f59e0b` · `#000000` · `#fb7185` · `#f43f5e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 20px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_6px_rgba(52,211,153,0.8)]`, `shadow-[0_0_8px_rgba(52,211,153,0.5)]`, `shadow-[0_0_10px_rgba(52,211,153,0.4)]`
- **Common gaps:** `gap-1`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="glass-card px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Stats band (`stats`)
2. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030508;
  --color-surface: #000000;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #fbbf24;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030508',
    surface: '#000000',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use mint (#34d399) for on-track status and amber (#fbbf24) for watch states only
- **Do:** Keep cards on black surfaces with thin dividers
- **Do:** Put a status legend under the card grid so the colour meanings are explicit
- **Don't:** Don't use the status colours as decoration
- **Don't:** Don't set panel titles at display size
- **Don't:** Don't drop the small count and progress details from the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
