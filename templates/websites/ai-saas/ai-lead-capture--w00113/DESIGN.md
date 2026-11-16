# Design system — AI Lead Capture 

`SN-W00113` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Vertex is a dark, glowing lead-capture page on a near-black navy ground, with a large white sans headline whose second line is a blue-to-lavender gradient. A solid blue primary button sits beside a small stat chip, and three dark demo cards in a row sit below the hero. Blue carries the emphasis, and soft radial light behind the title gives the first screen its depth.

**Mood:** dark, glowing, confident, clean, conversion-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050508` | Page ground |
| Surface | `#0f1115` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#050508` · `#60a5fa` · `#e2e8f0` · `#94a3b8` · `#64748b` · `#a855f7` · `#10b981` · `#0f1115`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · body 20px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(59,130,246,0.15)]`, `shadow-[0_0_40px_rgba(37,99,235,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-x-3`

**Primary button**

```html
<a class="hover:bg-white/10 transition-all text-xs font-medium text-white font-geist bg-white/5 border border-white/10 rounded-full py-2 px-4 shadow-lg backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050508;
  --color-surface: #0f1115;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050508',
    surface: '#0f1115',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans, with the second line in the blue-to-lavender gradient
- **Do:** Use the solid blue button for the primary action and keep the secondary as a dark chip
- **Do:** Put the demo cards in a row of dark, bordered tiles below the hero
- **Don't:** Don't use purple (#a855f7) as a button colour; it sits only in the gradient
- **Don't:** Don't place the gradient on body copy
- **Don't:** Don't add a light background behind the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
