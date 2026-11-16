# Design system — Recycling & Metal Scrap Landing Page Template

`SN-W00664` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A bold, dark industrial service page with a large white sans headline over two or three lines, and the key phrase set on a solid green block (#16a34a) behind the text. A light grey header bar sits above the hero and is the only light area on the first screen. The headline and the green block do the work, with a short white paragraph below and no decorative imagery.

**Mood:** bold, industrial, direct, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |
| Second accent | `#fe4c00` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#e4e4e7` · `#52525b` · `#16a34a` · `#000000` · `#27272a` · `#22c55e` · `#fe4c00` · `#15803d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Space Mono, Inter, Montserrat, Plus Jakarta Sans, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-x-6`, `gap-y-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center text-sm font-semibold text-white bg-green-600 hover:bg-green-700 shadow-md rounded-full py-3.5 px-8 mt-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Marquee (`marquee`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #e4e4e7;
  --color-accent: #16a34a;
  --color-accent-2: #fe4c00;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#e4e4e7',
    accent: '#16a34a',
    accent2: '#fe4c00',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline on a solid green block (#16a34a) with white type
- **Do:** Keep headlines large and sans-serif, stacked across two or three lines
- **Do:** Keep the page body dark and use the light header bar only at the top
- **Don't:** Don't use gradients on the green block; it is flat
- **Don't:** Don't leave the logo as a broken image; replace it before use
- **Don't:** Don't add photographs to the hero; the first screen is type and colour only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
