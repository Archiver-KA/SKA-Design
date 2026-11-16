# Design system — Drafio Design Portfolio Landing Page Template

`SN-W01999` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal portfolio landing on a warm off-white ground (#f9f8f4) with a single soft radial glow behind the headline, moving from a grey-green centre (#1a3c34) into a faint peach edge. The large serif wordmark in near-black (#222222) carries the page, supported by a small, widely tracked uppercase tagline and a sparse top nav. Depth comes from the blurred gradient, not from cards or borders.

**Mood:** airy, editorial, quiet, soft-gradient

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f4` | Page ground |
| Text | `#222222` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1a3c34` | Primary action and highlights |
| Second accent | `#c5a368` | Supporting highlights |

Palette by frequency of use: `#c5a368` · `#222222` · `#f9f8f4` · `#1a3c34` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="group inline-flex items-center gap-4 border border-gold px-8 py-4 text-cream hover:bg-gold hover:text-charcoal transition-all duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9f8f4;
  --color-text: #222222;
  --color-border: #ffffff;
  --color-accent: #1a3c34;
  --color-accent-2: #c5a368;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f4',
    ink: '#222222',
    line: '#ffffff',
    accent: '#1a3c34',
    accent2: '#c5a368',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the large serif headline in dark ink on the warm off-white ground
- **Do:** Use blurred radial glows as the only background decoration
- **Do:** Set taglines in small uppercase with wide letter-spacing
- **Don't:** Don't put hard-edged shapes behind the headline
- **Don't:** Don't use saturated colour; the palette stays near-neutral
- **Don't:** Don't set the headline in the Inter body face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
