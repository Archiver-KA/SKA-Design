# Design system — Luxury Yacht & Maritime Brokerage Template

`SN-W02101` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome editorial yacht page on a warm grey ground [#f4f3f0], with very large black display headlines that run across a black-and-white photograph of a yacht. The headline breaks over the image edge, and a dark numbered slide counter sits at the right edge. The first screen has no colour; scale and overlap carry the design.

**Mood:** monochrome, editorial, bold, maritime, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f3f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#111111` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111111` · `#f4f3f0` · `#ffffff` · `#000000` · `#e5e4df` · `#e8e7e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** h1 208px · h2 96px · h3 30px · body 16px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full h-full min-h-[100px] bg-[#f4f3f0] text-[#111] flex flex-col justify-between p-5 group hover:bg-white transition-colors relative overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Services (`services`)
7. Marquee (`marquee`)
8. Case studies (`case-studies`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f4f3f0;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #111111;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f3f0',
    surface: '#ffffff',
    ink: '#111111',
    line: '#111111',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Set headlines at very large size in black, letting them overlap the photograph.
- **Do:** Keep photography black and white so it matches the warm grey ground.
- **Do:** Place a numbered slide counter in a dark block at the edge of the hero.
- **Don't:** Don't introduce colour into the hero; the page is strictly monochrome.
- **Don't:** Don't shrink the headline to fit the photograph; the overlap is the design.
- **Don't:** Don't add a second typeface to the headline set.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
