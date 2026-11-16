# Design system — UPSTAR Social Growth Landing Page Template

`SN-W00788` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A light, high-energy social-growth page. Its headline is dark navy, with the last word in an orange-to-pink gradient, and the primary button uses the same gradient. A soft off-white ground carries phone mockups and a green trust line, so colour is spent only on the call to action and the proof line.

**Mood:** energetic, light, bold, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafc` | Page ground |
| Surface | `#e8e8f0` | Cards, panels, raised areas |
| Text | `#4a4a68` | Headings and primary copy |
| Muted text | `#8a8aa3` | Secondary copy, captions |
| Border | `#e8e8f0` | Hairlines, dividers, outlines |
| Accent | `#e5484d` | Primary action and highlights |
| Second accent | `#1db77a` | Supporting highlights |

Palette by frequency of use: `#14142b` · `#e8e8f0` · `#8a8aa3` · `#ffffff` · `#4a4a68` · `#1db77a` · `#e5484d` · `#fafafc` · `#f1f1f6` · `#ef4d6f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-[14px]` (14px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Comparison (`comparison`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Cart / checkout (`cart-checkout`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafc;
  --color-surface: #e8e8f0;
  --color-text: #4a4a68;
  --color-muted: #8a8aa3;
  --color-border: #e8e8f0;
  --color-accent: #e5484d;
  --color-accent-2: #1db77a;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafc',
    surface: '#e8e8f0',
    ink: '#4a4a68',
    muted: '#8a8aa3',
    line: '#e8e8f0',
    accent: '#e5484d',
    accent2: '#1db77a',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the last word of the headline in the orange-to-pink gradient
- **Do:** Use the gradient for the primary button and nothing else in the hero
- **Do:** Keep body text in muted grey-blue (#4a4a68) on the off-white ground
- **Don't:** Don't use the gradient for body text
- **Don't:** Don't introduce green into the hero beyond the trust line
- **Don't:** Don't use a dark card for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
