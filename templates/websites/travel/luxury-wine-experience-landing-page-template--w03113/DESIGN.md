# Design system — Luxury Wine Experience Landing Page Template

`SN-W03113` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A black cover with a large white serif headline set in capitals, CREEK STREET PRIVATE, and small tracked caps lines above and below it. The layout is minimal: a thin vertical rule and vertically set labels at the right edge, with no imagery. The page reads as a private, by-arrangement brand, with the type doing all the work.

**Mood:** minimal, private, austere, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#d4af37` · `#f5f0e8` · `#d4d4d4` · `#000000` · `#a3a3a3` · `#0a0a0a` · `#e5e5e5` · `#737373` · `#1a1a1a` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 14px · h3 24px · body 48px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-6`, `gap-10`, `gap-2`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #525252;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#525252',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the name in large serif capitals in white
- **Do:** Use small tracked uppercase for secondary lines, with generous space around them
- **Do:** Keep vertical labels and thin rules at the edge as the only decoration
- **Don't:** Don't add colour; the design is black and white
- **Don't:** Don't use the gold (#d4af37) as an accent
- **Don't:** Don't place imagery over the type without a dark overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
