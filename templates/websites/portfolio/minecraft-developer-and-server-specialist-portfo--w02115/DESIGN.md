# Design system — Minecraft Developer & Server Specialist Portfolio Template

`SN-W02115` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm-white developer page with a heavy black sans headline whose final phrase is set in solid orange, so the one colour moment sits in the headline itself. A white card on the right shows the results as large orange numerals with small grey captions. Green [#258143] marks availability, and pill-shaped orange and outlined buttons sit below the copy.

**Mood:** warm, bold, direct, energetic, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffaf7` | Page ground |
| Surface | `#fbfbfb` | Cards, panels, raised areas |
| Text | `#555555` | Headings and primary copy |
| Muted text | `#777777` | Secondary copy, captions |
| Border | `#e3e3e3` | Hairlines, dividers, outlines |
| Accent | `#ffd4b1` | Primary action and highlights |
| Second accent | `#258143` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ffd4b1` · `#777777` · `#aaaaaa` · `#8a8a8a` · `#999999` · `#7d7d7d` · `#fbfbfb` · `#ffd0aa` · `#fffaf7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Space Grotesk

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Integrations (`integrations`)
7. Timeline (`timeline`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fffaf7;
  --color-surface: #fbfbfb;
  --color-text: #555555;
  --color-muted: #777777;
  --color-border: #e3e3e3;
  --color-accent: #ffd4b1;
  --color-accent-2: #258143;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffaf7',
    surface: '#fbfbfb',
    ink: '#555555',
    muted: '#777777',
    line: '#e3e3e3',
    accent: '#ffd4b1',
    accent2: '#258143',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the final headline phrase in solid orange, leaving the rest in black.
- **Do:** Show results as large numerals in a white card with small grey captions.
- **Do:** Use green (#258143) only for availability and active-status dots.
- **Don't:** Don't use orange for body copy; it is for the headline and primary button.
- **Don't:** Don't add a second colour to the stats card.
- **Don't:** Don't set the headline in a light weight; the heavy black type is the voice.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
