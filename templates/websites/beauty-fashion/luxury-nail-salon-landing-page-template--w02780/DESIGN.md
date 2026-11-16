# Design system — Luxury Nail Salon Landing Page Template

`SN-W02780` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

An elegant nail-studio hero built on a darkened photograph of manicured hands that fills the frame. A centred white serif headline sits over the image with a short hairline divider beneath it, and a tracked uppercase subline follows. The gold (#c9a96e) primary button is the only saturated colour, so the image and type carry the mood.

**Mood:** elegant, photographic, warm, polished, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5ede3` | Cards, panels, raised areas |
| Text | `#1c1c1c` | Headings and primary copy |
| Border | `#1c1c1c` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |

Palette by frequency of use: `#1c1c1c` · `#ffffff` · `#c9a96e` · `#f5ede3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 text-xs font-medium text-[#1C1C1C] bg-[#C9A96E] uppercase tracking-widest hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5ede3;
  --color-text: #1c1c1c;
  --color-border: #1c1c1c;
  --color-accent: #c9a96e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5ede3',
    ink: '#1c1c1c',
    line: '#1c1c1c',
    accent: '#c9a96e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#c9a96e) for the primary button only.
- **Do:** Set the headline in a centred white serif with a short hairline divider beneath.
- **Do:** Darken the photograph under the hero text so white type stays legible.
- **Don't:** Don't set text in gold over the photograph.
- **Don't:** Don't introduce a second accent colour.
- **Don't:** Don't place the centred headline over a light part of the image.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
