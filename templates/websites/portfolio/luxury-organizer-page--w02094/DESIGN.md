# Design system — Luxury Organizer Page

`SN-W02094` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A light, editorial organizer page on a warm off-white ground [#fafaf9], with very large, tightly set black sans headlines wrapped over three lines. The only control shape is a solid black pill button with an arrow, and the nav uses a black outlined pill on the right. Body copy is short, and the layout gives most of the width to the headline.

**Mood:** clean, editorial, bold, airy, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#fafaf9` · `#d6d3d1` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2.5 text-xs font-semibold tracking-wide uppercase border border-brand-black rounded-full hover:bg-brand-black hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-text: #000000;
  --color-border: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    ink: '#000000',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large in tight black sans, wrapped over three lines.
- **Do:** Use a solid black pill button with an arrow as the primary action.
- **Do:** Keep the background warm off-white (#fafaf9) and avoid tinted panels.
- **Don't:** Don't put the page on a dark background; the hero is off-white.
- **Don't:** Don't add a second accent colour; the page is black on off-white.
- **Don't:** Don't reduce the headline scale to close to body size; the contrast in scale is the design.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
