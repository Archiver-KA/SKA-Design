# Design system — Luxury Watch E-commerce Landing Page Template

`SN-W01242` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A product-led watch hero: a dark, desaturated chronograph photograph fills the screen, with a serif wordmark top left and a centred serif headline over the dial. The eyebrow, headline and grey lede sit on the darkened photo, with one solid white pill and one outlined button. The watch is the only colour.

**Mood:** cinematic, dark, product-led, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#a3a3a3` · `#080808` · `#d4d4d4` · `#0a0a0a` · `#0f0f0f` · `#525252` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, &quot
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Dashboard preview (`dashboard-preview`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #080808;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#080808',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Darken the product photograph so the headline reads over the dial
- **Do:** Set the headline in a light serif, centred, with a small caps eyebrow above
- **Do:** Pair one solid white button with one outlined button
- **Don't:** Don't add colour to the interface; the watch is the only colour
- **Don't:** Don't left-align the hero text over the photo
- **Don't:** Don't use a bright photo without a dark overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
