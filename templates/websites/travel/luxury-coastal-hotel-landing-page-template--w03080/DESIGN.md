# Design system — Luxury Coastal Hotel Landing Page Template

`SN-W03080` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet hotel hero on a grey-white gradient with a centred white serif headline, where the first word is set in italic. The navigation is a light bar with a dark button at the right, and the hero copy and buttons sit low on the grey field. Contrast is soft and the layout is spacious, which suits a restrained coastal property.

**Mood:** quiet, airy, elegant, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#171717` · `#fafafa` · `#e5e5e5` · `#d4d4d4` · `#fef08a` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-luxury-900 text-white px-5 py-2.5 rounded-sm text-xs font-medium uppercase tracking-wide hover:bg-black transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #000000;
  --color-border: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#000000',
    line: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif with the first word in italic
- **Do:** Use a dark solid button for the navigation booking action
- **Do:** Keep the hero on a soft grey gradient rather than a photo
- **Don't:** Don't put white headline text on the lightest part of the grey field
- **Don't:** Don't use bright colours for the buttons
- **Don't:** Don't crowd the hero; leave the grey space open

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
