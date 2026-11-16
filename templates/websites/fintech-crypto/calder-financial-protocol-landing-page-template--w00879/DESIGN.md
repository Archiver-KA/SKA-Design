# Design system — Calder Financial Protocol Landing Page Template

`SN-W00879` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page (#020617) with a large serif headline in two lines: the first in italic mint green (#34d399) and the second in white. The primary button is a deep green fill and the secondary a quiet outline, and a node-and-line diagram with small tag labels fills the right side. Green marks the voice and the action, while the diagram stays in thin lines on the dark ground.

**Mood:** dark, editorial, fintech, calm, green-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#94a3b8` · `#10b981` · `#020617` · `#1e293b` · `#334155` · `#0f172a` · `#0b1120` · `#064e3b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 16px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-emerald-500/20`
- **Content width:** `max-w-7xl`, `max-w-[300px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="ml-2 bg-white text-slate-950 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors flex items-center gap-1 shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Marquee (`marquee`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #1e293b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in italic mint green (#34d399) and the second in white
- **Do:** Pair a solid deep green primary button with an outline secondary
- **Do:** Draw the hero diagram as thin green lines with small tag labels
- **Don't:** Don't use the dark green (#064e3b) as the page ground; the ground is near-black
- **Don't:** Don't set the headline in sans-serif
- **Don't:** Don't fill diagram nodes with bright colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
