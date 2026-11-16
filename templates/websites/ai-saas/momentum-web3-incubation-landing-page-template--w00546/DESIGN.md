# Design system — Momentum Web3 Incubation Landing Page Template

`SN-W00546` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero on near-black with a saturated blue (#0038ff) announcement strip across the top, the only solid block of colour on the first screen. The large white headline ends in a gradient word that runs from peach to violet, over a faint purple glow. Blue fills the primary buttons, and the nav is a thin dark bar with pill buttons.

**Mood:** energetic, dark, bold, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#19191b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#c3c6cd` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b354fe` | Primary action and highlights |
| Second accent | `#77e7ff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0038ff` · `#c3c6cd` · `#19191b` · `#000000` · `#77e7ff` · `#f1b29e` · `#b354fe` · `#1b4dff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Axiforma
- **Body:** Axiforma
- **Loaded families:** Axiforma, InterCustom
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.125rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-[2rem]` (2rem)
- **Content width:** `max-w-[68rem]`, `max-w-[46rem]`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="gradient-button relative isolate overflow-hidden rounded-full bg-[#0038ff] px-6 py-4 text-xs font-semibold uppercase tracking-[0.08rem] text-white transition focus:outline-none focus:ring-2 focus:ring-[#0038ff]">…</a>
```

## Page structure

Blocks in page order:

1. Team (`team`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #19191b;
  --color-text: #f5f5f5;
  --color-muted: #c3c6cd;
  --color-border: #ffffff;
  --color-accent: #b354fe;
  --color-accent-2: #77e7ff;
  --font-display: "Axiforma", sans-serif;
  --font-body: "Axiforma", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#19191b',
    ink: '#f5f5f5',
    muted: '#c3c6cd',
    line: '#ffffff',
    accent: '#b354fe',
    accent2: '#77e7ff',
  },
  fontFamily: { display: ['Axiforma'], sans: ['Axiforma'] },
} }
```

## Do and don't

- **Do:** Use the saturated blue (#0038ff) for the announcement strip and primary buttons only
- **Do:** Set the gradient headline word at display size in a peach-to-violet range
- **Do:** Keep the nav as a thin dark bar with pill-shaped buttons
- **Don't:** Don't use the blue as a large background field
- **Don't:** Don't set body copy inside the gradient word
- **Don't:** Don't add a second gradient to the hero beyond the headline word

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
