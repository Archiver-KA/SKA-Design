# Design system — ModulHouse Premium Architectural Landing Page Template

`SN-W03319` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark hero where a serif headline in off-white is paired with an italic word in gold (#d4af37), setting the key phrase apart by colour and style. Gold appears on the eyebrow label, the italic word, the primary button and the top-right inquiry button, and nothing else uses it. A dim photograph of a house sits behind the type, with its colour turned down so the gold reads clearly.

**Mood:** dark, luxurious, precise, restrained

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

- **Do:** Set the italic keyword in gold (#d4af37) beside an off-white serif headline.
- **Do:** Keep gold for the eyebrow, the primary button and the top inquiry button.
- **Do:** Use the outline play control beside the primary button, not a second filled button.
- **Don't:** Don't use gold for body copy; body text is light grey (#b0b0b0).
- **Don't:** Don't brighten the photograph behind the headline.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
