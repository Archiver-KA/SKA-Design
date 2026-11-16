# Design system — Meridian SaaS Landing Page Template

`SN-W00226` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black product page with a single warm focal point: a tall rounded card with an orange-to-deep-red gradient that holds a short sans title and a ring icon. The gold (#e8c382) is the only UI accent, used on the top-right button, and small monospace labels run along the bottom edge. The page is quiet, with the card providing the visual weight.

**Mood:** dark, focused, warm, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#070707` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e8c382` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#e8c382` · `#351e10` · `#070707` · `#a3a3a3` · `#525252` · `#404040` · `#ededec`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Gloock, Manrope
- **Scale (largest breakpoint):** h2 30px · h3 20px · body 12px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-[inherit]` (inherit)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[200px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#e8c382] text-[#351e10] text-xs uppercase tracking-widest px-6 py-3 font-medium hover:bg-white hover:text-black transition-colors rounded-none hidden md:inline-block font-manrope">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. About (`about`)
4. 3D / canvas scene (`3d-canvas`)
5. Call to action (`cta`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Process / steps (`how-it-works`)
8. Stats band (`stats`)
9. FAQ (`faq`)
10. Pricing (`pricing`)
11. Testimonials (`testimonials`)
12. Bento grid (`bento-grid`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #070707;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #e8c382;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#070707',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#e8c382',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the gold (#e8c382) for the primary button only
- **Do:** Frame the hero visual as a rounded gradient card centred on the black ground
- **Do:** Set status labels in small uppercase monospace along the bottom edge
- **Don't:** Don't add a second warm accent beside the gold
- **Don't:** Don't use gradient fills on buttons
- **Don't:** Don't put body copy on the gradient card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
