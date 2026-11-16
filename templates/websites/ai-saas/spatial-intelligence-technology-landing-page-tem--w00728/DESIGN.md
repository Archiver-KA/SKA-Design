# Design system — Spatial Intelligence Technology Landing Page Template

`SN-W00728` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A sparse, dark technical hero with a black navigation bar and a near-black stage holding a faint navy glow at its centre. One small status pill reads Core Infrastructure v3.0 deployed. The palette is black and grey, with a white button and nothing bright on the stage.

**Mood:** sparse, dark, technical, quiet, staged

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#262626` · `#a3a3a3` · `#525252` · `#171717` · `#e5e5e5` · `#d4d4d4` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_10px_30px_rgba(0,0,0,0.5)]`, `shadow-2xl`, `shadow-[0_0_10px_#fff]`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-white border border-white rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #6366f1;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the stage black or near-black, with at most a faint centre glow.
- **Do:** Use a small status pill with a dot for system messages.
- **Do:** Keep the primary button white in the top bar.
- **Don't:** Don't fill the stage with bright colour; the frame is black and grey.
- **Don't:** Don't set the page on a light ground; it is dark.
- **Don't:** Don't place imagery on the stage; the stage stays clear.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
