# Design system — 3D Tech Landing Page UI

`SN-W00004` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page carries a large white sans headline, and one phrase is set in a blue-to-violet gradient (#60a5fa into #a855f7). The primary button is solid blue beside a thin outlined secondary, and the feature cards below use small tinted icon squares rather than photos. The single gradient phrase is the device that makes the page recognisable.

**Mood:** confident, dark, clean, techy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#000000` · `#c084fc` · `#2563eb` · `#1d4ed8` · `#3b82f6` · `#a855f7` · `#14b8a6` · `#2dd4bf`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 14px
- **Weights in use:** light, medium

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px)
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-sm border border-white/20 rounded px-4 py-2 hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #a855f7;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set one phrase of the headline in the blue-to-violet gradient, no more
- **Do:** Use a solid blue primary button with a thin outlined secondary button beside it
- **Do:** Put feature icons in small tinted squares above each card title
- **Don't:** Don't apply the gradient to whole headlines or body text
- **Don't:** Don't use the purple (#a855f7) for buttons
- **Don't:** Don't add background photography behind the feature cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
