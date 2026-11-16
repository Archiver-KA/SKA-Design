# Design system — Heritage Mithai & Bakery E-commerce Landing Page Template

`SN-W01182` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A premium sweets-and-bakery page on a warm cream ground (#fdfbf7), with a large serif headline in near-black and a deep maroon italic second line that carries the brand colour. Buttons are dark near-black pills, and small white cards float around the product photograph. A full-width dark maroon ticker of uppercase announcements runs across the top, which sets a festive tone.

**Mood:** festive, premium, warm, traditional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#f5f5f4` · `#78716c` · `#000000` · `#e7e5e4` · `#fdfbf7` · `#a8a29e` · `#57534e` · `#ffedd5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-stone-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-brand-900 transition-all shadow-lg shadow-stone-900/20 flex items-center gap-3 group">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Bento grid (`bento-grid`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Playfair Display, with the second line in italic deep maroon.
- **Do:** Use near-black (#1c1917) for primary buttons, with a small round icon inside each.
- **Do:** Keep the cream ground (#fdfbf7) and use white only for floating cards.
- **Don't:** Don't set body copy in serif; Inter is the body face.
- **Don't:** Don't use the pale peach (#ffedd5) as an accent; it is a tint for surfaces, not an action colour.
- **Don't:** Don't remove the top announcement ticker; it sets the festive tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
