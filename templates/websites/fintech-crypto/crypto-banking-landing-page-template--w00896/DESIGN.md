# Design system — Crypto Banking Landing Page Template

`SN-W00896` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black hero with an orange glow spilling in from the right and a two-line uppercase headline: CLARITY in white and ONCHAIN in orange (#ff4f00) in a heavy sans. A phone mock shows a balance, an orange line chart and Send and Receive buttons. Orange is the only accent and appears on the headline, the chart and the primary action. The phone is the second focal point beside the copy.

**Mood:** dark, bold, urgent, product-led, orange-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff4f00` | Primary action and highlights |
| Second accent | `#581c87` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff4f00` · `#000000` · `#6b7280` · `#9ca3af` · `#374151` · `#d1d5db` · `#0a0a0a` · `#030303` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_#FF4F00]`, `shadow-lg`
- **Content width:** `max-w-[360px]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff4f00;
  --color-accent-2: #581c87;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff4f00',
    accent2: '#581c87',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline word in orange (#ff4f00) in heavy uppercase sans
- **Do:** Use the orange for the chart line and the primary button in the product mock
- **Do:** Keep the glow in the top-right corner, not behind the copy
- **Don't:** Don't use orange as a large background field; it is a glow and accent only
- **Don't:** Don't use purple (#581c87) in the hero
- **Don't:** Don't set body copy in orange

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
