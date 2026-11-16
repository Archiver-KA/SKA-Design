# Design system — Luxury Furniture Atelier Landing Page Template

`SN-W02085` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An interior-led atelier template in which a full-bleed interior photograph carries the hero, with a serif headline set over a darkened image and its last phrase in italic. The nav is small, widely tracked caps in white over the picture. Warm neutrals dominate the imagery and the type, with beige (#d4c5b0) as the only accent, so the page reads as a room rather than a brand colour.

**Mood:** warm, tactile, refined, natural, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f2eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#8c7a63` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4c5b0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#8c7a63` · `#000000` · `#f5f2eb` · `#1c1c1c` · `#666666` · `#1a1a1a` · `#d4c5b0` · `#ebe9e4` · `#121212`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 12px · body 10px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-screen-xl`, `max-w-[1920px]`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="px-10 py-5 bg-[#F5F2EB] text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8C7A63] hover:text-white transition-colors duration-300 min-w-[200px]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f2eb;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #8c7a63;
  --color-border: #ffffff;
  --color-accent: #d4c5b0;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f2eb',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#8c7a63',
    line: '#ffffff',
    accent: '#d4c5b0',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Cormorant Garamond with the final phrase in italic.
- **Do:** Place white headline type over a darkened interior photograph, never over pale areas.
- **Do:** Keep nav labels small, uppercase and widely tracked, in white or light tones.
- **Don't:** Don't put saturated colour in the hero; the photography supplies the colour.
- **Don't:** Don't use the serif display face for small nav or button labels.
- **Don't:** Don't set the hero text in a sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
