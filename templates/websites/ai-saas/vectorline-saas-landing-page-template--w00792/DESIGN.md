# Design system — Vectorline SaaS Landing Page Template

`SN-W00792` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark technical console for a mapping product. The page is near-black with thin white hairline frames around a framed hero panel, and the headline in Manrope has its key word in soft indigo (#818cf8). Small status labels and a sync-mesh bar widget give it the feel of a measurement tool, with panels that read like instrument readouts.

**Mood:** technical, precise, dark, instrumental

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#070707` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#e8c382` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d8` · `#71717a` · `#6366f1` · `#000000` · `#a1a1aa` · `#818cf8` · `#e4e4e7` · `#737373` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Gloock, Manrope, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(129,140,248,0.15)]`, `shadow-[0_0_1rem_rgba(129,140,248,0.65)]`, `shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Product grid (`product-grid`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #070707;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #e8c382;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#070707',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#e8c382',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in indigo (#818cf8)
- **Do:** Frame panels with 1px white hairlines on near-black
- **Do:** Use small uppercase labels for status and build numbers
- **Don't:** Don't add colour to the hairline borders
- **Don't:** Don't use indigo for large fills
- **Don't:** Don't add gradients behind the console panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
