# Design system — ALI MOBILE ZONE

`SN-W01079` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, data-led marketplace page on black, with a white display headline in tightly spaced sans and a live-feed panel that lists transactions. Green (#22c55e) marks money values and the one accent colour, and white pill buttons carry the calls to action. Trust signals are small and grey at the foot of the hero, so credibility sits beside the offer.

**Mood:** dark, data-led, direct, trustworthy, fast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#030303` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#60a5fa` · `#22c55e` · `#4ade80` · `#3b82f6` · `#eab308` · `#030303` · `#e5e5e5` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 10px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #030303;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#030303',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set prices and amounts in green (#22c55e) to mark value
- **Do:** Use white pill buttons for primary and secondary actions
- **Do:** Keep the headline tight and white on black
- **Don't:** Don't use light backgrounds behind the feed panel
- **Don't:** Don't use blue or yellow for prices
- **Don't:** Don't add glow effects behind the hero text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
