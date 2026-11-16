# Design system — ModulHouse Premium Real Estate Landing Page Template

`SN-W03320` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The first screen is a near-black field with a serif headline in off-white, and the closing word 'Refined.' set in gold (#d4af37) italic as the single point of colour. A gold eyebrow line and a gold filled button in tracked caps carry the action, and grey body copy sits beneath. Without a photograph, the page is type and gold on black, with the navigation in small caps.

**Mood:** dark, luxurious, stark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#1e1e1e` | Cards, panels, raised areas |
| Text | `#b0b0b0` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#d4af37` · `#f2f2f2` · `#666666` · `#121212` · `#333333` · `#1e1e1e` · `#b0b0b0` · `#555555` · `#ffffff` · `#444444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2px]` (2px), `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-12`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #1e1e1e;
  --color-text: #b0b0b0;
  --color-muted: #666666;
  --color-border: #333333;
  --color-accent: #d4af37;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#1e1e1e',
    ink: '#b0b0b0',
    muted: '#666666',
    line: '#333333',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the closing word of the headline in gold italic (#d4af37).
- **Do:** Use a gold filled rectangle with tracked uppercase text for the primary action.
- **Do:** Keep the navigation small and widely spaced, with the inquiry button as the only filled item.
- **Don't:** Don't set body copy in gold; it stays light grey.
- **Don't:** Don't add a second accent colour.
- **Don't:** Don't add a light panel behind the headline; the field is black throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
