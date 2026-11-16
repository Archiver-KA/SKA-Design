# Design system — Crypto Banking Hero Landing Page Template

`SN-W00895` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, warm hero on a pale peach ground (#ffedd5) with a two-line headline: the first line in near-black and the second in an orange gradient (#ff5500). The copy is centred above a phone mock showing a balance and a latency card, so the product sits inside the hero. Orange is the single accent, and the headline is set in a serif.

**Mood:** light, warm, product-led, clean, orange-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffedd5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ff5500` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#e5e5e5` · `#737373` · `#fafafa` · `#ff5500` · `#a3a3a3` · `#525252` · `#f5f5f5` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, JetBrains Mono, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 20px
- **Weights in use:** bold, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-mono uppercase px-4 py-2 rounded transition-colors bg-neutral-900 text-white hover:bg-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffedd5;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #ff5500;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffedd5',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#ff5500',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black with the second line in an orange gradient (#ff5500)
- **Do:** Use the peach ground (#ffedd5) as a page tint, not as a fill for cards
- **Do:** Show the product as a phone mock with balance and latency cards beside the copy
- **Don't:** Don't use orange for body copy or for a second button
- **Don't:** Don't add more than one gradient to the hero
- **Don't:** Don't set the headline in a bold weight; it reads best at regular weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
