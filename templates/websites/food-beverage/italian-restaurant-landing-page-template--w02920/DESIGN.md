# Design system — Italian Restaurant Landing Page Template

`SN-W02920` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A rounded, photo-filled hero on a warm beige page, with a plate of pasta filling the panel behind a white serif headline. Terracotta (#c65d3b) is the single accent, filled on the menu button and the reservation nav button, with the second button an outlined ghost. The copy sits over a darkened photo, and the cream frame around it keeps the composition soft and traditional.

**Mood:** soft, traditional, warm, photo-filled, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8e4db` | Page ground |
| Surface | `#f8f5ef` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#c65d3b` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#ffffff` · `#c65d3b` · `#f8f5ef` · `#2f3a2f` · `#000000` · `#b05335` · `#e8e4db` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-6 py-2.5 rounded-full bg-[#C65D3B] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#b05335] transition shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Booking form (`booking`)
5. Testimonials (`testimonials`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8e4db;
  --color-surface: #f8f5ef;
  --color-text: #1a1a1a;
  --color-border: #1a1a1a;
  --color-accent: #c65d3b;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8e4db',
    surface: '#f8f5ef',
    ink: '#1a1a1a',
    line: '#1a1a1a',
    accent: '#c65d3b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Keep the hero as a rounded photo panel inset on the beige page.
- **Do:** Use terracotta (#c65d3b) for the primary menu button and the nav reservation button.
- **Do:** Set the headline in a white serif over a darkened photo, with a small tracked eyebrow above.
- **Don't:** Don't use terracotta for body copy; it is limited to buttons.
- **Don't:** Don't drop the cream frame; the hero sits inset, not full bleed to the page edge.
- **Don't:** Don't set the headline in a sans; it is a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
