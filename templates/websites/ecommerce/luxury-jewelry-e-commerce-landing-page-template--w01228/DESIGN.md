# Design system — Luxury Jewelry E-commerce Landing Page Template

`SN-W01228` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, refined jewellery stance: a near-black field with a close photograph of diamond jewellery fading into the dark, and a centred serif headline with the second word in italic. The eyebrow is small tracked uppercase in muted gold, and the primary action is a thin outlined button beside a plain text link. The sparkle comes from the jewels, and the interface stays restrained.

**Mood:** refined, dark, understated, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#b76e79` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#050505` · `#a3a3a3` · `#000000` · `#262626` · `#404040` · `#d4d4d4` · `#171717` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-x-6`

**Primary button**

```html
<a class="w-full py-4 bg-gold-400/90 text-black font-medium text-xs uppercase tracking-widest hover:bg-gold-300 transition-all mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Contact form (`contact-form`)
5. About (`about`)
6. Footer (`footer`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #b76e79;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#262626',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#b76e79',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, centred, with the second word in italic.
- **Do:** Use muted gold (#d4af37) only for the eyebrow label.
- **Do:** Pair an outlined primary button with a plain text link for the secondary action.
- **Don't:** Don't use a solid fill for the hero button; use outline only.
- **Don't:** Don't place body copy over the sparkling photograph without the dark gradient behind it.
- **Don't:** Don't use bright colours in the interface; the photograph is the only colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
