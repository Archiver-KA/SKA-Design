# Design system — Minimal Architecture Studio Landing Page Template

`SN-W03316` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm off-white page with a large serif headline in near-black, where the second line is italic and set in warm grey (#8a8580), so the two lines contrast by style and colour. Navigation is small, grey and widely tracked, and a grey paragraph sits under the headline with generous space around it. Nothing else competes with the type on the first screen.

**Mood:** quiet, editorial, warm, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#f7f6f2` | Cards, panels, raised areas |
| Text | `#121212` | Headings and primary copy |
| Muted text | `#8a8580` | Secondary copy, captions |
| Border | `#eae8e3` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#121212` · `#8a8580` · `#fdfcf8` · `#9e7a5a` · `#eae8e3` · `#f7f6f2` · `#f0f0f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 12px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-12`, `gap-8`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #f7f6f2;
  --color-text: #121212;
  --color-muted: #8a8580;
  --color-border: #eae8e3;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#f7f6f2',
    ink: '#121212',
    muted: '#8a8580',
    line: '#eae8e3',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif at large size, with the second line in grey italic.
- **Do:** Keep navigation small, grey and widely tracked in uppercase.
- **Do:** Use warm off-white (#fdfcf8) as the page ground with near-black text.
- **Don't:** Don't add a saturated accent; the page is grey and near-black.
- **Don't:** Don't set the italic line in black; its grey carries the contrast.
- **Don't:** Don't crowd the headline with imagery; the first screen is type-led.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
