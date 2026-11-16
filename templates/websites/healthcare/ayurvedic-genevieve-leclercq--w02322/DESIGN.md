# Design system — Ayurvedic Genevieve Leclercq

`SN-W02322` · healthcare · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A warm, neutral wellness page on a cream ground (#f7f3ee) with white cards and near-black text (#2b2f36). Headlines are large and heavy in a system sans-serif, and the hero stacks short lines against a rounded photo card with white pill buttons. Mint (#2bd4a4) appears only as faint chip tints, so the page stays calm and the photography carries the colour.

**Mood:** warm, calm, neutral, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f3ee` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2b2f36` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2bd4a4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f0fdf4` · `#f7f3ee` · `#2b2f36` · `#d1d5db` · `#2bd4a4` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-forest/5`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2.5 bg-forest text-ivory rounded-full hover:bg-moss transition-colors shadow-lg shadow-forest/10 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f3ee;
  --color-surface: #ffffff;
  --color-text: #2b2f36;
  --color-border: #ffffff;
  --color-accent: #2bd4a4;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f3ee',
    surface: '#ffffff',
    ink: '#2b2f36',
    line: '#ffffff',
    accent: '#2bd4a4',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the page ground on the cream background (#f7f3ee) and put content on white cards.
- **Do:** Set headlines in the heavy system sans-serif at display size with tight leading.
- **Do:** Use white pill buttons for primary actions and keep the mint (#2bd4a4) to small chip tints.
- **Don't:** Don't use the mint as a large fill or button colour.
- **Don't:** Don't set headlines in a light weight; the style depends on the heavy display face.
- **Don't:** Don't place photos without a rounded frame; images sit inside rounded cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
