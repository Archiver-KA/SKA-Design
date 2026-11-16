# Design system — Vietnamese Restaurant Menu 

`SN-W03007` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet takeout page on warm cream (#fdfcf8) with dark chocolate-brown type (#3e2723). The headline is a large centred serif, with small spaced uppercase eyebrow labels above it. Buttons are soft pills, and the primary action is a solid dark brown button rather than a bright colour.

**Mood:** warm, understated, editorial, homely

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Text | `#3e2723` | Headings and primary copy |
| Muted text | `#5d4037` | Secondary copy, captions |
| Border | `#3e2723` | Hairlines, dividers, outlines |
| Accent | `#3e2723` | Primary action and highlights |

Palette by frequency of use: `#3e2723` · `#5d4037` · `#8d6e63` · `#fdfcf8` · `#bcaaa4` · `#ffffff` · `#d84315`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 16px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-5`, `gap-2`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#3E2723] text-[#FDFCF8] px-5 py-2.5 rounded-full text-lg font-normal hover:bg-[#5D4037] transition-all shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-text: #3e2723;
  --color-muted: #5d4037;
  --color-border: #3e2723;
  --color-accent: #3e2723;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    ink: '#3e2723',
    muted: '#5d4037',
    line: '#3e2723',
    accent: '#3e2723',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in the large serif, centred, with light weight
- **Do:** Use dark brown (#3e2723) for primary buttons and key text
- **Do:** Keep section labels uppercase with wide letter spacing
- **Don't:** Don't use bright orange or red for the primary action; it is dark brown.
- **Don't:** Don't set the headline in a sans-serif.
- **Don't:** Don't replace the cream ground with pure white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
