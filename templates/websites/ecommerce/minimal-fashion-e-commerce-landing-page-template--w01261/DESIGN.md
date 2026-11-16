# Design system — Minimal Fashion E-commerce Landing Page Template

`SN-W01261` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A stark black hero with a huge, heavy white sans wordmark, VELLMORE, centred over a widely tracked grey tagline. A solid white button and an outlined button sit side by side below, and the nav is small tracked caps on a black bar. The page is strictly monochrome, and the wordmark carries the brand, so no imagery is needed on the first screen.

**Mood:** stark, bold, monochrome, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#171717` · `#737373` · `#a3a3a3` · `#404040` · `#0a0a0a` · `#050505` · `#fafafa` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 14px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#fafafa',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a heavy, tight sans, centred and very large
- **Do:** Track the tagline widely in uppercase grey
- **Do:** Pair a solid white button with an outlined one
- **Don't:** Don't add colour to the hero
- **Don't:** Don't add imagery above the fold; the wordmark is the visual
- **Don't:** Don't use a light background for the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
