# Design system — Living Culture Studios Retreat Template

`SN-W03076` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A moody hospitality hero: a photograph of a bar and a sunset is covered by a warm orange-brown wash, so the image reads as amber. The headline is a large white sans in three lines, with the middle line set in bright orange (#f97316) to mark the key phrase. A small white pill and a short side caption complete the hero, and the overall stance is atmospheric and editorial.

**Mood:** atmospheric, warm, editorial, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#431407` · `#fb923c` · `#f97316` · `#7c2d12` · `#fed7aa` · `#ea580c` · `#000000` · `#fff7ed` · `#9a3412`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Fraunces, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-[800px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full px-6 py-4 rounded-lg text-sm font-medium transition-colors mt-4 bg-orange-950 text-white hover:bg-orange-800 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Logo cloud (`logo-cloud`)
5. About (`about`)
6. Listings (`listings`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f97316) only for the highlighted headline line
- **Do:** Keep the photo under a warm overlay so white type stays readable
- **Do:** Set the headline in large white sans, broken into short lines
- **Don't:** Don't use the deep brown (#431407) as a button colour; it is a surface tone
- **Don't:** Don't place the side caption over the brightest part of the photo
- **Don't:** Don't use more than one orange highlight in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
