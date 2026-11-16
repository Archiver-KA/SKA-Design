# Design system — Kitchen Renovation Landing Page Template

`SN-W02924` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold, sans-led renovation hero on a warm off-white ground, with a heavy uppercase headline set in three tight lines in near-black. The page is almost wholly black and cream: a filled black button leads the actions, an outlined pill sits beside it, and a round black chat button floats in the bottom-right. The stance is confident and trade-like, with type doing the heavy lifting.

**Mood:** confident, trade-like, bold, flat, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f2ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#57534e` · `#d6d3d1` · `#44403c` · `#78716c` · `#fafaf9` · `#292524` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm bg-stone-900 hover:bg-stone-800 text-white inline-block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Product grid (`product-grid`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f2ef;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #1c1917;
  --color-accent: #1c1917;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f2ef',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#1c1917',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans, tight leading, in near-black (#1c1917).
- **Do:** Use a filled black button for the main action and an outlined pill beside it.
- **Do:** Keep the ground warm off-white (#f5f2ef) and avoid colour in the hero.
- **Don't:** Don't add the WhatsApp green (#25d366); the page uses no green.
- **Don't:** Don't use soft shadows on the buttons; the controls are flat.
- **Don't:** Don't set the headline in a serif; it is a bold sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
