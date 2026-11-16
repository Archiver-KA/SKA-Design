# Design system — Brutalist Design System Layout

`SN-W04163` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark black-and-white layout set entirely in IBM Plex Mono. Headlines are heavy, uppercase and very large, and every container is outlined with a thick black border, with a solid bar under the main heading. Colour is absent; the structure comes from the rules, the blocky boxes and the oversized type.

**Mood:** raw, stark, structural, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#1f2937` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Mono
- **Body:** IBM Plex Mono
- **Loaded families:** IBM Plex Mono
- **Scale (largest breakpoint):** h1 96px · h2 24px · body 18px
- **Weights in use:** bold
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-8`, `gap-0`

**Primary button**

```html
<a class="inline-block bg-black text-white py-3 px-8 text-lg font-bold uppercase hover:bg-gray-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #000000;
  --color-border: #000000;
  --font-display: "IBM Plex Mono", sans-serif;
  --font-body: "IBM Plex Mono", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f3f4f6',
    ink: '#000000',
    line: '#000000',
  },
  fontFamily: { display: ['IBM Plex Mono'], sans: ['IBM Plex Mono'] },
} }
```

## Do and don't

- **Do:** Set all headings in IBM Plex Mono, bold and uppercase.
- **Do:** Outline every block with a thick black border and square corners.
- **Do:** Use a solid black rule under the main headline.
- **Don't:** Don't add rounded corners or soft shadows.
- **Don't:** Don't introduce colour into the interface.
- **Don't:** Don't use thin hairline borders; the rules are heavy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
