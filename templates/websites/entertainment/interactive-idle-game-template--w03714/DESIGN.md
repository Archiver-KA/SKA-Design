# Design system — Interactive Idle Game Template

`SN-W03714` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black page with a widely tracked wordmark and a large light-weight counter as the focal point. A red apple (#ef4444) sits centre-stage under a soft dark-red glow, and the upgrade list on the right is a quiet column of dark rows with grey labels and right-aligned values. Red appears only on the central object, which keeps the play area focused.

**Mood:** focused, playful, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#27272a` · `#09090b` · `#ef4444` · `#71717a` · `#a1a1aa` · `#18181b` · `#e4e4e7` · `#ffffff` · `#f4f4f5` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 14px · h2 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_15px_rgba(239,68,68,0.3)]`, `shadow-[-20px_0_40px_rgba(0,0,0,0.2)]`, `shadow-inner`
- **Content width:** `max-w-[500px]`
- **Common gaps:** `gap-4`, `gap-1.5`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the main counter in a large light sans, centred above the play area
- **Do:** Keep the upgrade list in dark rows with grey labels and right-aligned numbers
- **Do:** Use red (#ef4444) only for the central object
- **Don't:** Don't add colour to the upgrade rows
- **Don't:** Don't set the counter in a bold weight
- **Don't:** Don't put a second red element on screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
