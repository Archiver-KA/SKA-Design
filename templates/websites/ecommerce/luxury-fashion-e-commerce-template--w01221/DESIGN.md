# Design system — Luxury Fashion E-commerce Template

`SN-W01221` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A high-contrast, dramatic stance: a black-and-white portrait darkened to near-black, with a bold, widely set uppercase sans-serif headline in white on two lines. The announcement bar is black with a small amber dot, and the two buttons are a solid white and an outline. Contrast, not colour, makes the look; the only warm note is the amber dot.

**Mood:** dramatic, high-contrast, minimal, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f59e0b` · `#a3a3a3` · `#171717` · `#737373` · `#d4d4d4` · `#0a0a0a` · `#e5e5e5` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 14px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[100rem]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full bg-white text-black py-4 text-sm font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Call to action (`cta`)
4. Hero (`hero`)
5. Marquee (`marquee`)
6. Product grid (`product-grid`)
7. About (`about`)
8. Logo cloud (`logo-cloud`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#fafafa',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase sans-serif in white, on two lines.
- **Do:** Keep the hero photograph black and white and darkened under the type.
- **Do:** Use the amber (#f59e0b) only for the dot in the announcement bar and similar small marks.
- **Don't:** Don't add colour to the portrait; the photograph is monochrome.
- **Don't:** Don't set the headline in a serif; keep it sans-serif.
- **Don't:** Don't place the outline button on a light area; it reads only on the dark image.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
