# Design system — Finance Journal Blog Template

`SN-W00924` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet editorial journal masthead on off-white [#fafafa], centred on the page. The title is set large in a high-contrast serif in near-black, over a small letter-spaced grey tagline. Navigation is tiny uppercase text and the date sits between hairlines. The featured photograph below carries the colour, so the typography leads and the chrome stays neutral.

**Mood:** editorial, quiet, neutral, literary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#a1a1aa` · `#27272a` · `#e4e4e7` · `#f4f4f5` · `#18181b` · `#71717a` · `#d4d4d8` · `#52525b` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fira Sans
- **Body:** Fira Sans
- **Loaded families:** Fira Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 48px · body 16px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-x-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Fira Sans", sans-serif;
  --font-body: "Fira Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Fira Sans'], sans: ['Fira Sans'] },
} }
```

## Do and don't

- **Do:** Set page titles in a high-contrast serif at large size, centred
- **Do:** Use small letter-spaced grey uppercase for taglines and dates
- **Do:** Let the featured photograph carry colour and keep the chrome neutral
- **Don't:** Don't add a brand colour to the masthead; the page is neutral
- **Don't:** Don't add heavy borders; dividers are hairlines
- **Don't:** Don't put navigation beyond two or three short uppercase links in the masthead

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
