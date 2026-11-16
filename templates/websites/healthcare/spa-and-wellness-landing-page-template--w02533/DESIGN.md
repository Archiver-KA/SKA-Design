# Design system — Spa & Wellness Landing Page Template

`SN-W02533` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, spa-photographic hero: a blurred, cream-toned photograph of towels and pink flowers sits behind a dark serif headline in charcoal. The controls are charcoal rather than colour, with a solid dark navigation button and an outlined ghost button in the hero, and the tan from the tokens appears only as a faint wash. The stance is hushed and product-led, and the image carries the emotional weight.

**Mood:** hushed, soft, product-led, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f7f1eb` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#222222` | Primary action and highlights |

Palette by frequency of use: `#dcbfa6` · `#ffffff` · `#333333` · `#666666` · `#f7f1eb` · `#a0a0a0` · `#222222`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-[1400px]`, `max-w-[1600px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="w-full bg-[#dcbfa6] text-[#222222] px-6 py-3 text-xs uppercase tracking-widest font-normal hover:bg-white transition-colors duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f7f1eb;
  --color-text: #333333;
  --color-muted: #666666;
  --color-border: #ffffff;
  --color-accent: #222222;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f7f1eb',
    ink: '#333333',
    muted: '#666666',
    line: '#ffffff',
    accent: '#222222',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a dark serif in charcoal (#333333) over the blurred photograph
- **Do:** Use charcoal (#222222) for solid buttons and an outlined ghost button for the secondary action
- **Do:** Keep the hero photograph washed and blurred behind a cream overlay
- **Don't:** Don't use the tan accent as a button fill; the buttons are charcoal
- **Don't:** Don't put a crisp, sharp photograph behind the headline
- **Don't:** Don't add a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
