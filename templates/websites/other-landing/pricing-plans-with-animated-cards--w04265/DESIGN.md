# Design system — Pricing Plans with Animated Cards

`SN-W04265` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark pricing section with soft violet glow behind the cards and a violet gradient heading. The featured middle plan is lifted with a brighter purple fill and a solid purple button, while the outer plans stay as translucent panels with thin borders. A monthly and annual toggle sits above the cards, with the savings note in purple, so the accent carries the whole section.

**Mood:** glowing, dark, modern, purple

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#a855f7` | Primary action and highlights |

Palette by frequency of use: `#a855f7` · `#d1d5db` · `#9ca3af` · `#ffffff` · `#581c87` · `#9333ea` · `#c084fc` · `#6b7280` · `#d8b4fe` · `#e9d5ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 36px · h3 20px · body 20px
- **Weights in use:** light, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-purple-500/10`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-8`

**Primary button**

```html
<a class="w-full py-3 px-4 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-900/20 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-muted: #6b7280;
  --color-accent: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    muted: '#6b7280',
    accent: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet accent (#a855f7) for the featured plan's button and the billing toggle only
- **Do:** Keep plan cards as translucent dark panels with thin borders so the glow shows through
- **Do:** Set the main heading as a violet gradient at large size
- **Don't:** Don't use flat white cards on the dark ground
- **Don't:** Don't put the purple accent on every plan's button
- **Don't:** Don't remove the soft glow behind the featured plan

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
