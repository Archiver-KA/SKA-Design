# Design system — Restaurant Case Study Landing Page Template

`SN-W02974` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cream editorial page for a brand studio: the ground is warm off-white (#fdfcf8) and the headline is a large serif with a grey italic second line, which reads like a print magazine. The eyebrow label is small monospaced type in rust (#9a3412), and the single near-black button carries the primary action. Layout is sparse, so the type does most of the work.

**Mood:** editorial, warm, sparse, print-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#9a3412` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#737373` · `#9a3412` · `#a3a3a3` · `#e5e5e5` · `#fdfcf8` · `#525252` · `#ffffff` · `#262626` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="font-serif italic text-base px-5 py-1 border border-neutral-200 hover:border-neutral-800 hover:bg-paper transition-all text-ink rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Testimonials (`testimonials`)
5. Menu list (`menu-list`)
6. Process / steps (`how-it-works`)
7. Services (`services`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #9a3412;
  --color-accent-2: #22c55e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#9a3412',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at a large size, with the second line in grey italic.
- **Do:** Use the rust (#9a3412) only for the small monospaced eyebrow labels.
- **Do:** Keep the cream ground and use the near-black button as the only primary action.
- **Don't:** Don't set headlines in sans-serif; the serif is the signature.
- **Don't:** Don't use rust for large fills or backgrounds.
- **Don't:** Don't add dark blocks to the ground; the page stays cream.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
