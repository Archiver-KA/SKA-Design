# Design system — AI DeFi Crypto Landing Page Template

`SN-W00861` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page (#020617) with a large white sans headline where the word Money is set in violet (#8b5cf6). The hero pairs copy with a product mock of a chat transcript and a transaction card on a translucent panel, so the interface is the illustration. Violet marks the brand and the user's messages, while green (#4ade80) marks live status and the fee.

**Mood:** dark, product-led, conversational, clean, violet-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#8b5cf6` · `#a78bfa` · `#64748b` · `#22d3ee` · `#cbd5e1` · `#4ade80` · `#e2e8f0` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-violet-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 rounded-full bg-slate-50 text-slate-950 font-semibold hover:bg-white hover:scale-105 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Bento grid (`bento-grid`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #8b5cf6;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#8b5cf6',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the one accent word in the headline in violet (#8b5cf6)
- **Do:** Show the product as a chat or transaction card in the hero, not an abstract graphic
- **Do:** Use green (#4ade80) only for live status dots and positive values
- **Don't:** Don't use cyan for accents
- **Don't:** Don't put more than one violet headline phrase in a section
- **Don't:** Don't lighten the page ground above the deep navy (#020617)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
