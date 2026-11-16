# Design system — 3D Card Banking Landing Page Template

`SN-W00848` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black banking hero with a large white Inter headline and a soft indigo-to-lilac gradient on the second line. A three-dimensional debit card in indigo sits on the right, with small grey trust points under the buttons. Indigo is the only accent, and the glass panels stay faint, so the page feels sleek.

**Mood:** sleek, dark, modern, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d8` · `#71717a` · `#000000` · `#6366f1` · `#a1a1aa` · `#818cf8` · `#d946ef` · `#e4e4e7` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-indigo-500/20`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[90%]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="btn-shine btn-bounce text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the indigo (#818cf8) for the gradient highlight line only
- **Do:** Show the product as a dimensional card image on the right of the hero
- **Do:** Set the primary button in solid white with dark text
- **Don't:** Don't put the gradient on the card or the trust points
- **Don't:** Don't use bright green for the card or buttons
- **Don't:** Don't add a light background to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
