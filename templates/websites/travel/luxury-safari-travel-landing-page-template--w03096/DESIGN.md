# Design system — Luxury Safari Travel Landing Page Template

`SN-W03096` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A hero that runs from dark teal (#083344) on the left to a pale grey-white on the right, with a white sans-serif headline. The phrase Meets the Blue. is set in italic pale yellow (#fde68a), the single accent, and the same yellow fills the primary button. The gradient reads as water meeting sky, which suits the safari and coast subject.

**Mood:** airy, coastal, confident, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#083344` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fde68a` | Primary action and highlights |
| Second accent | `#083344` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fde68a` · `#083344` · `#164e63` · `#22d3ee` · `#155e75` · `#000000` · `#475569` · `#f8fafc` · `#ecfeff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-cyan-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-amber-200 text-cyan-950 px-6 py-3 rounded-full text-base font-medium hover:bg-white transition-colors text-center w-full">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Bento grid (`bento-grid`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #083344;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #fde68a;
  --color-accent-2: #083344;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#083344',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#fde68a',
    accent2: '#083344',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Run the hero background as a gradient from dark teal (#083344) to pale grey
- **Do:** Set the italic second phrase of the headline in pale yellow (#fde68a)
- **Do:** Use the yellow fill for the primary button with dark teal text
- **Don't:** Don't put the pale yellow on the light side of the gradient, where it loses contrast
- **Don't:** Don't set the headline in a serif; use the system sans-serif
- **Don't:** Don't add a second accent beyond the yellow and the teal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
