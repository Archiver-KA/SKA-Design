# Design system — Clinical Luxury Skincare E-commerce Landing Page Template

`SN-W01123` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A skincare page leads with a full-bleed portrait under a dark warm overlay, with a large white serif headline whose second line is italic. The text sits centred over the photograph, and a bracketed uppercase button sits below the body copy. The navigation is small, spaced and low in contrast, so the photography and the serif voice carry the luxury rather than colour.

**Mood:** refined, clinical, intimate, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#e7e5e4` · `#52525b` · `#71717a` · `#a1a1aa` · `#1c1917` · `#fafaf9` · `#d4d4d8` · `#27272a` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-x-8`, `gap-3`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #e7e5e4;
  --color-text: #18181b;
  --color-muted: #52525b;
  --color-border: #e7e5e4;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#e7e5e4',
    ink: '#18181b',
    muted: '#52525b',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Lead with a full-bleed portrait under a dark warm overlay
- **Do:** Set the headline in a large white serif, with the second line in italic
- **Do:** Use bracketed uppercase labels for the button.
- **Don't:** Don't place the headline over a light part of the photo without the overlay
- **Don't:** Don't introduce bright accent colours; the palette stays neutral
- **Don't:** Don't enlarge the navigation; it stays small and spaced

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
