# Design system — Irismoon

`SN-W01190` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A quiet luxury stance: a near-white page, black type and a grey photographic hero carry the look, with no colour accent on the first screen. The headline is a large light serif set on one line across the full width, and it does most of the work. Thin hairline rules and small uppercase tracked navigation keep the chrome out of the way.

**Mood:** restrained, editorial, monochrome, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfcfc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#8c735a` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#0a0a0a` · `#f5f5f4` · `#fcfcfc` · `#fafaf9` · `#262626` · `#e5e5e5` · `#171717` · `#8c735a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 36px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1920px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)
3. Call to action (`cta`)
4. Articles (`blog-articles`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfcfc;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #8c735a;
  --color-border: #e5e5e5;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfcfc',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#8c735a',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond and keep the hero headline on one line.
- **Do:** Keep the palette to black, white and grey; the first screen uses no accent colour.
- **Do:** Use small uppercase, widely tracked labels for navigation and buttons.
- **Don't:** Don't add a saturated accent colour to buttons or links; the page relies on black and grey.
- **Don't:** Don't use heavy borders or drop shadows; separation comes from hairline rules.
- **Don't:** Don't break the hero headline into several lines or place it over a busy image.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
