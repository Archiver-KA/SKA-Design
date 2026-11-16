# Design system — 3D Interactive Room Template

`SN-W01755` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy welcome card for an immersive room, centred on a near-black blue ground with a 3D scene behind it. The card holds a bold white heading, a short grey explanation and two small control tiles, and the primary action is a full-width white button. The card is the only element on the first screen, so it sets the tone of a guided, instructional interface.

**Mood:** dark, instructional, calm, focused, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#67e8f9` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#67e8f9` · `#000000` · `#94a3b8` · `#cbd5e1` · `#34d399` · `#cffafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 36px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black/20`, `shadow-lg`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100 active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #67e8f9;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#67e8f9',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the card heading in bold white sans and the explanation in grey
- **Do:** Use a full-width white button as the primary action
- **Do:** Keep control hints in small dark tiles with short labels
- **Don't:** Don't add more than one primary button to the card
- **Don't:** Don't use bright colour on the card surface
- **Don't:** Don't set the page on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
