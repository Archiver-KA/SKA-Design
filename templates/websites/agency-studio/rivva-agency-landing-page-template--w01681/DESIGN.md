# Design system — RIVVA Agency Landing Page Template

`SN-W01681` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A full-bleed orange hero (#ea4c24) carries the brand: oversized white letters for the wordmark run behind a black-and-white portrait cut into an arch. Body copy is small and white, set low-left. Imagery is monochrome against the orange, so the colour is the only thing added to the photography.

**Mood:** bold, minimal, graphic, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ea4c24` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea4c24` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ea4c24` · `#d4d4d4` · `#737373` · `#000000` · `#e5e5e5` · `#525252` · `#a3a3a3` · `#f4f4f4` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 72px · h3 30px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black rounded-full px-6 py-3 flex items-center gap-3 hover:bg-neutral-200 transition-colors w-max group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Case studies (`case-studies`)
4. Logo cloud (`logo-cloud`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ea4c24;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ea4c24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ea4c24',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ea4c24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ea4c24) as the full-bleed ground for the hero.
- **Do:** Set the oversized wordmark in white, cropped behind the image.
- **Do:** Keep photography black and white so it sits on the orange.
- **Don't:** Don't place the white body text on a light section below.
- **Don't:** Don't add a second brand colour; the hero is orange and monochrome.
- **Don't:** Don't add rounded cards; the arch crop is the one curved shape.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
