# Design system — Cryptographic Trust Landing Page Template

`SN-W00910` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, technical signing hero on near-black [#0a0a0a]. Lime [#a3e635] marks the key word Cryptographic in the headline, and a faint perspective grid runs behind the hero at low contrast. A document card on the right shows a slide-to-sign control as the feature demo. The layout is left-aligned with generous space, and cards use thin borders instead of shadows.

**Mood:** technical, dark, precise, cryptographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#84cc16` · `#737373` · `#0a0a0a` · `#a3a3a3` · `#171717` · `#d9f99d` · `#22c55e` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 72px · body 18px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(163,230,53,0.5)]`, `shadow-[0_0_20px_rgba(255,255,255,0.15)]`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-neutral-100 text-neutral-900 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_15px_rgba(163,230,53,0.5)] text-sm font-medium px-4 py-2 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline word in lime (#a3e635)
- **Do:** Keep the faint grid behind the hero at low contrast
- **Do:** Use thin borders for document and wallet cards instead of shadows
- **Don't:** Don't use lime for body paragraphs
- **Don't:** Don't add light panels to the hero
- **Don't:** Don't replace the slide-to-sign control with a plain button; it is the feature demo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
