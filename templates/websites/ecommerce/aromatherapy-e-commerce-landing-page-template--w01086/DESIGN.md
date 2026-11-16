# Design system — Aromatherapy E-commerce Landing Page Template

`SN-W01086` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft, editorial holiday page on white with a faint lavender glow along the top edge. Headlines are set in a high-contrast serif at large size, and one italic word in violet (#7c5cfc) carries the emotional emphasis. Body copy is plain grey sans, and the diffuser product sits in a tall framed photograph.

**Mood:** soft, editorial, calm, festive, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eef7fc` | Cards, panels, raised areas |
| Text | `#222222` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7c5cfc` | Primary action and highlights |
| Second accent | `#e3d5ca` | Supporting highlights |

Palette by frequency of use: `#222222` · `#ffffff` · `#7c5cfc` · `#4b5563` · `#9ca3af` · `#e3d5ca` · `#eef7fc` · `#6b7280` · `#f3f4f6` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display, Geist, Roboto, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 18px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-28`
- **Common gaps:** `gap-4`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="inline-flex justify-center items-center bg-[#7C5CFC] text-white text-xl font-normal px-10 py-4 rounded-full shadow-lg shadow-[#7C5CFC]/30 btn-hover-scale">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eef7fc;
  --color-text: #222222;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #7c5cfc;
  --color-accent-2: #e3d5ca;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eef7fc',
    ink: '#222222',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#7c5cfc',
    accent2: '#e3d5ca',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display and italicise one word in violet (#7c5cfc)
- **Do:** Keep the lavender glow faint and along the top edge only
- **Do:** Use a dark solid button for the header action
- **Don't:** Don't use violet for body text
- **Don't:** Don't italicise more than one word per headline
- **Don't:** Don't show product imagery without a frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
