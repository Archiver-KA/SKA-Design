# Design system — Seqqaya Restaurant Landing Page Template

`SN-W02998` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black hero with no imagery: a centred bold Montserrat headline in white, where the second line, Leave Happy, is set in coral (#f25f4c). A filled coral pill is the primary View Menu action, with an outlined coral Book a Table beside it. The type and the single coral pair carry the page, so it reads as minimal and bold.

**Mood:** dark, bold, minimal, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f25f4c` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#f25f4c` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#a8a29e` · `#f5f5f4` · `#78716c` · `#d6d3d1` · `#f25f4c` · `#292524` · `#f9f8f6` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Montserrat Alternates
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-coral/20`, `shadow-lg`, `shadow-stone-900/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="flex items-center justify-center w-full px-6 py-4 bg-coral hover:bg-[#D94532] text-white text-sm font-semibold tracking-wide rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Testimonials (`testimonials`)
7. Booking form (`booking`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f25f4c;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #f5f5f4;
  --color-accent: #f25f4c;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f25f4c',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#f5f5f4',
    accent: '#f25f4c',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in coral (#f25f4c), and the first in white.
- **Do:** Use filled coral for the primary action and an outlined coral pill for the secondary.
- **Do:** Keep the hero free of imagery and let the centred type carry the page.
- **Don't:** Don't set body text in coral.
- **Don't:** Don't use black text on the near-black ground.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
