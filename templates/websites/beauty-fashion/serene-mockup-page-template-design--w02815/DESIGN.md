# Design system — Serene_Mockup_Page_Template_Design

`SN-W02815` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cinematic resort hero on a near-black brown ground (#1c1917), with a very large white headline whose second word is set in an italic serif. The orange (#ea580c) appears on one phone-number pill in the navigation, and the booking search is a single white pill with a black Search button. Small uppercase captions and a thin navigation keep the frame calm, so the page reads as hospitality rather than tech.

**Mood:** cinematic, hospitable, warm-dark, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ea580c` · `#1c1917` · `#a8a29e` · `#78716c` · `#f5f5f4` · `#e7e5e4` · `#fb923c` · `#f97316` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Syne, Inter, Caveat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full text-xs font-semibold transition-all tracking-widest uppercase shadow-lg shadow-orange-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on the dark brown ground (#1c1917) with white headline text
- **Do:** Use the orange (#ea580c) for the one contact pill and key highlights
- **Do:** Keep the booking search as one white pill with a black action button
- **Don't:** Don't treat the light tag as the page ground; the hero is dark
- **Don't:** Don't stack several orange elements in one view
- **Don't:** Don't set the italic accent word in sans-serif; the serif gives the headline its character

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
