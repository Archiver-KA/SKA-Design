# Design system — Casino Gaming Luck Wheel Template

`SN-W03675` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A plain, text-first page with a bold black sans-serif headline, grey body copy and no accent colour. Section headings use the same family at a smaller size, with generous line spacing for long reading. The first screen carries no imagery, so the page reads as an article rather than a promotion.

**Mood:** plain, readable, neutral, text-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#404040` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#404040` · `#737373` · `#ffffff` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 36px · h2 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-4xl`
- **Section padding:** `py-12`, `py-16`

## Page structure

Blocks in page order:

1. Timeline (`timeline`)
2. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #171717;
  --color-muted: #404040;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#171717',
    muted: '#404040',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold black sans-serif, and section heads in the same family at a smaller size
- **Do:** Keep body text in grey with generous line spacing for reading
- **Do:** Use no accent colour on text; separate sections with space
- **Don't:** Don't add decorative accents or coloured buttons
- **Don't:** Don't set long lines of body copy at full page width
- **Don't:** Don't add imagery to the opening screen without a clear break from the text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
