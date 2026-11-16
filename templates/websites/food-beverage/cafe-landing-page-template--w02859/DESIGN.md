# Design system — Cafe Landing Page Template

`SN-W02859` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark, candle-lit and luxurious. A deep brown ground (#1a110a) sits under a dim photograph, and a heavy white sans headline carries the first line, with the second line set in gold (#d4af37) that fades toward cream. The primary action is a solid gold pill and the secondary is a dark outlined pill, so gold marks what matters. Small caps labels and generous spacing keep it upmarket.

**Mood:** luxurious, dark, warm, bold headline

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a110a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#1a110a` · `#ffffff` · `#d4af37` · `#2c1e16` · `#fdfbf7` · `#000000` · `#4a3320` · `#5c3a21` · `#c29f2f` · `#f5f0e6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 36px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_8px_30px_rgb(44,30,22,0.04)]`, `shadow-[0_20px_40px_rgb(44,30,22,0.1)]`, `shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-[#1A110A] bg-[#D4AF37] rounded-full hover:bg-[#c29f2f] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Booking form (`booking`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a110a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a110a',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in gold (#d4af37) and the first in white
- **Do:** Use a solid gold pill for the primary action and a dark outlined pill for secondary
- **Do:** Keep the hero ground dark brown (#1a110a) with a dimmed photograph behind
- **Don't:** Don't use gold for body text or long lines
- **Don't:** Don't place the gold action on a light backdrop
- **Don't:** Don't add extra colours; gold and brown carry the palette

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
