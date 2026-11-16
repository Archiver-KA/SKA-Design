# Design system — Ina Beauty Studio Plovdiv

`SN-W02760` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `bg`

## Direction

Warm cream landing page with a centred serif headline set in antique gold, over an italic dark-brown subline. Gold fills the primary booking button, and a quieter beige outlined button sits beside it, so the palette stays in one warm family from ground to action. The white floating header and round chat button give the page a gentle, boutique finish.

**Mood:** warm, boutique, gentle, golden

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f0e8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c2416` | Headings and primary copy |
| Muted text | `#7a6a4f` | Secondary copy, captions |
| Border | `#f5f0e8` | Hairlines, dividers, outlines |
| Accent | `#a8832a` | Primary action and highlights |
| Second accent | `#c4527a` | Supporting highlights |

Palette by frequency of use: `#a8832a` · `#2c2416` · `#f5f0e8` · `#c9a84c` · `#ffffff` · `#7a6a4f` · `#6f624a` · `#e6ddcf` · `#e4d8c8` · `#f8f4ec`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, DM Sans, Dancing Script
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[24px]` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_18px_40px_rgba(44,36,22,0.10)]`, `shadow-[0_8px_30px_rgba(44,36,22,0.06)]`, `shadow-[0_10px_30px_rgba(44,36,22,0.05)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#A8832A] px-6 py-3.5 text-center text-xs font-medium uppercase tracking-[0.20em] text-white shadow-[0_8px_24px_rgba(168,131,42,0.28)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(168,131,42,0.38)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. About (`about`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f0e8;
  --color-surface: #ffffff;
  --color-text: #2c2416;
  --color-muted: #7a6a4f;
  --color-border: #f5f0e8;
  --color-accent: #a8832a;
  --color-accent-2: #c4527a;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f0e8',
    surface: '#ffffff',
    ink: '#2c2416',
    muted: '#7a6a4f',
    line: '#f5f0e8',
    accent: '#a8832a',
    accent2: '#c4527a',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond in antique gold (#a8832a), with italic dark-brown sublines
- **Do:** Use gold (#a8832a) for the primary booking button and a beige outline for secondary
- **Do:** Keep the page on the warm cream ground (#f5f0e8) with a white floating header
- **Don't:** Don't introduce pink or other bright colours; the palette stays in gold, brown and cream
- **Don't:** Don't set the headline in a sans serif; the serif is the identity
- **Don't:** Don't give the round floating button a second accent; it follows the gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
