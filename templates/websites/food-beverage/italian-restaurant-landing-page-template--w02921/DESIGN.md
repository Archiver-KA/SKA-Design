# Design system — Italian Restaurant Landing Page Template

`SN-W02921` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic hero with a white serif headline stacked on two lines over a photograph of a mountain and a hiker, darkened to near-black. Muted gold (#c6a75e) carries the tracked eyebrow, the filled reserve button and the nav outline, and a plain outlined button sits beside it. The stance is moody and industrial, with the gold kept to labels and one action.

**Mood:** moody, industrial, cinematic, dark, gilded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1b1b1b` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f5f1e8` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6a75e` | Primary action and highlights |
| Second accent | `#7a1e1e` | Supporting highlights |

Palette by frequency of use: `#c6a75e` · `#f5f1e8` · `#1b1b1b` · `#ffffff` · `#262626` · `#7a1e1e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 14px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_rgba(198,167,94,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-gold text-primary text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300 flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Timeline (`timeline`)
6. Booking form (`booking`)
7. Testimonials (`testimonials`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1b1b1b;
  --color-surface: #262626;
  --color-text: #f5f1e8;
  --color-border: #ffffff;
  --color-accent: #c6a75e;
  --color-accent-2: #7a1e1e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1b1b1b',
    surface: '#262626',
    ink: '#f5f1e8',
    line: '#ffffff',
    accent: '#c6a75e',
    accent2: '#7a1e1e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif over a darkened photograph, stacked on two lines.
- **Do:** Use muted gold (#c6a75e) for the eyebrow, the filled reserve button and the nav outline.
- **Do:** Pair the filled gold button with a plain outlined secondary button.
- **Don't:** Don't brighten the photo; the dark overlay is what keeps the type legible.
- **Don't:** Don't use gold for body copy; it is limited to labels and one action.
- **Don't:** Don't use a light page ground; the design is dark throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
