# Design system — Creative Studio Landing Page Template

`SN-W01496` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An off-white frame (#fafafa) surrounds a large black rounded panel that holds the hero, so the page reads as a stage inside a light gallery. The studio name sits in wide-tracked uppercase white sans, and the nav floats as a black rounded bar at the top. Most of the first screen is empty black, and colour is brought in by the content below the fold.

**Mood:** gallery-like, minimal, framed, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#3b82f6` · `#f5f5f5` · `#e5e5e5` · `#27272a` · `#f4f4f5` · `#18181b` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 72px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors font-geist border-white/10 bg-white/5 text-neutral-100 hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Stats band (`stats`)
3. Bento grid (`bento-grid`)
4. Timeline (`timeline`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-border: #ffffff;
  --color-accent: #000000;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#000000',
    line: '#ffffff',
    accent: '#000000',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Frame the hero in an off-white margin and place a large black rounded panel within it.
- **Do:** Set the wordmark in wide-tracked uppercase white sans.
- **Do:** Keep the nav as a black rounded bar, and use black for the primary button.
- **Don't:** Don't add blue; the hero uses only black and off-white.
- **Don't:** Don't remove the outer margin; the stage effect depends on it.
- **Don't:** Don't set body copy in an accent colour; keep it in greys.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
