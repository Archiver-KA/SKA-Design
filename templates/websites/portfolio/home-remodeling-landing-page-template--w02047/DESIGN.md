# Design system — Home Remodeling Landing Page Template

`SN-W02047` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm, light editorial page on an off-white ground with a large Instrument Serif headline in near-black (#181512). The headline is two-tone: one phrase is set in the deep green (#2f5d50) and the rest in black, with the hero photograph taking the right half. The green is the only accent, and the serif headline does the work of a logo.

**Mood:** editorial, craftsmanlike, calm, natural, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#181512` | Headings and primary copy |
| Muted text | `#8a8178` | Secondary copy, captions |
| Border | `#d9d1c5` | Hairlines, dividers, outlines |
| Accent | `#2f5d50` | Primary action and highlights |
| Second accent | `#e7dfd4` | Supporting highlights |

Palette by frequency of use: `#2f5d50` · `#181512` · `#ffffff` · `#d9d1c5` · `#8a8178` · `#5f5851` · `#1f1b18` · `#6f675f` · `#1d1a17` · `#e9e2d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Plus Jakarta Sans
- **Loaded families:** Instrument Serif, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 91px · h2 72px · h3 25px · body 10px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-[-0.03em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-[0_20px_50px_rgba(25,20,16,0.10)]`, `shadow-md`, `shadow-[0_10px_24px_rgba(23,18,14,0.10)]`
- **Content width:** `max-w-[1380px]`, `max-w-[15rem]`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-3`, `gap-10`, `gap-8`

**Primary button**

```html
<a class="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. 3D / canvas scene (`3d-canvas`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #181512;
  --color-muted: #8a8178;
  --color-border: #d9d1c5;
  --color-accent: #2f5d50;
  --color-accent-2: #e7dfd4;
  --font-display: "Instrument Serif", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#181512',
    muted: '#8a8178',
    line: '#d9d1c5',
    accent: '#2f5d50',
    accent2: '#e7dfd4',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in Instrument Serif at display size, with one phrase in green (#2f5d50).
- **Do:** Keep the page off-white and use the green only for the headline accent and primary button.
- **Do:** Use Plus Jakarta Sans for body copy and navigation labels.
- **Don't:** Don't add a second accent colour; the palette is green and warm neutrals.
- **Don't:** Don't set the headline in a sans-serif face.
- **Don't:** Don't add gradient overlays to the photography.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
