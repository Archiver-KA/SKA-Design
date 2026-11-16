# Design system — Luxury Chauffeur Service Landing Page Template

`SN-W04010` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, formal chauffeur page with a centred high-contrast serif headline in white, set large over two lines. Gold (#c5a059) is the only colour, used on the eyebrow line and the main booking button, which pairs with an outlined secondary of equal height. The layout is symmetrical and quiet, giving the service a discreet, premium tone.

**Mood:** formal, discreet, premium, symmetrical, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#0a0a0a` · `#171717` · `#a3a3a3` · `#d4d4d4` · `#c5a059` · `#525252` · `#e5e5e5` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest bg-white text-neutral-950 hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Services (`services`)
6. Listings (`listings`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c5a059;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c5a059',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a high-contrast serif, centred, in white
- **Do:** Use gold (#c5a059) only for the booking button and the eyebrow line
- **Do:** Pair the main button with an outlined secondary button of equal height
- **Don't:** Don't set body text in gold
- **Don't:** Don't put a light background behind the hero
- **Don't:** Don't add busy imagery that competes with the centred headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
