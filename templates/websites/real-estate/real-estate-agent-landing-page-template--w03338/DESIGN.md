# Design system — Real Estate Agent Landing Page Template

`SN-W03338` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome hero where an oversized lowercase wordmark in heavy white sans-serif fills the screen over a soft grey gradient that lightens toward the middle. The brand name is the whole hero, and an underscore after 'brand' acts as a cursor motif. Navigation is small uppercase text and the single primary button is outlined. There is no accent colour anywhere on the page.

**Mood:** monochrome, bold, minimal, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#1c1c1c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 18px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1800px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-12`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="mt-8 px-8 py-4 border border-brand-black/20 text-brand-black rounded-full font-medium text-sm hover:bg-brand-black transition-all w-fit hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Listings (`listings`)
5. Benefits (`benefits`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the hero wordmark in very large lowercase white type
- **Do:** Keep the palette to black, white and grey with no accent colour
- **Do:** Keep the trailing underscore on the headline as the signature mark
- **Don't:** Don't add a brand colour; the design depends on greyscale
- **Don't:** Don't set small body copy on the grey gradient without checking contrast
- **Don't:** Don't add a second headline typeface

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
