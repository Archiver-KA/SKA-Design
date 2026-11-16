# Design system — Wedding Photography Portfolio Template

`SN-W02297` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A darkened full-bleed photograph behind a centred cream serif headline set in capitals, with a softer line of text below it. The type is the only element on the hero, and small coordinate and city labels sit in the corners like film edge marks. The photograph's tones are held low so the cream lettering stays legible.

**Mood:** cinematic, romantic, quiet, editorial, warm dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141414` | Page ground |
| Surface | `#2a2825` | Cards, panels, raised areas |
| Text | `#fbf7ef` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eee9df` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#fbf7ef` · `#141414` · `#f8fafc` · `#2a2825` · `#eee9df`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Sans
- **Loaded families:** Instrument Sans, Instrument Serif
- **Scale (largest breakpoint):** h1 112px · h2 72px · body 20px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #141414;
  --color-surface: #2a2825;
  --color-text: #fbf7ef;
  --color-border: #ffffff;
  --color-accent: #eee9df;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Sans", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141414',
    surface: '#2a2825',
    ink: '#fbf7ef',
    line: '#ffffff',
    accent: '#eee9df',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in cream (#eee9df) serif capitals over a darkened photo
- **Do:** Keep hero captions small and placed in the corners
- **Do:** Use cream for type and keep pure white out of the headline
- **Don't:** Don't leave the photograph at full brightness behind the headline
- **Don't:** Don't place solid colour blocks over the photograph
- **Don't:** Don't set the headline in sans; the serif is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
