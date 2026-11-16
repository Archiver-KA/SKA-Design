# Design system — AI Automation Cohort Landing Page Template

`SN-W00046` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light page on a pale blue-grey grid, with a single white card holding a large dark sans headline and a lighter grey second line. The palette is near-monochrome: navy-black (#1e293b) for the button and grey for supporting copy, with no accent colour on the first screen. The card is the only container, and the grid behind it gives depth without heavy shadows.

**Mood:** minimal, light, monochrome, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#0f172a` · `#475569` · `#94a3b8` · `#64748b` · `#f1f5f9` · `#1e293b` · `#f8fafc` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08),0_10px_20px_-10px_rgba(0,0,0,0.04)]`, `shadow-lg`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#475569',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use navy (#1e293b) for the primary button and headline emphasis
- **Do:** Set the second headline line in a lighter grey
- **Do:** Place the hero copy inside one white card on the grid
- **Don't:** Don't add saturated colours to the first screen
- **Don't:** Don't use the grid as a dark background
- **Don't:** Don't put more than one card in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
