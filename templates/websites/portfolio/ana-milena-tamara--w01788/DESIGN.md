# Design system — Ana Milena Tamara

`SN-W01788` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light page where a full-bleed, colourful abstract painting sits behind a large, widely spaced name in dark grey. The nav is white and small, and a thin line with a small uppercase label sits under the name. The painting supplies all the colour, so the type stays neutral and the image does the expressive work.

**Mood:** expressive, neutral, image-led, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#111111` · `#9ca3af` · `#f2f2f2` · `#020617` · `#6b7280` · `#fafafa` · `#4b5563` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 60px · h3 36px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-4`, `gap-x-1`, `gap-y-1`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #0a0a0a;
  --color-text: #111111;
  --color-muted: #9ca3af;
  --color-border: #000000;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#0a0a0a',
    ink: '#111111',
    muted: '#9ca3af',
    line: '#000000',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the name in widely spaced uppercase, dark grey, over the painting.
- **Do:** Let the artwork carry the colour and keep the type neutral.
- **Do:** Set the small label and nav in uppercase with a light weight.
- **Don't:** Don't add colour to the type; it competes with the artwork.
- **Don't:** Don't use a dark ground here; the page is light.
- **Don't:** Don't place body text on the painting without a backing panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
