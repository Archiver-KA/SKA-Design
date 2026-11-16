# Design system — Aperture Design- Potential look!

`SN-W01791` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a large italic serif headline in pale warm stone ([#e6dcd3]), centred and set wide, with a spaced uppercase line below. Thin rust rules ([#b5533c]) frame the subtitle and mark the scroll cue. The italic display serif with rust hairlines gives an architectural, gallery-like calm.

**Mood:** calm, architectural, warm, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#161616` | Cards, panels, raised areas |
| Text | `#e6dcd3` | Headings and primary copy |
| Muted text | `#d4c5b9` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#b5533c` | Primary action and highlights |

Palette by frequency of use: `#b5533c` · `#ffffff` · `#d4c5b9` · `#888888` · `#111111` · `#e6dcd3` · `#2a2a2a` · `#161616` · `#000000` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Barlow Condensed
- **Loaded families:** Barlow Condensed, Cormorant Garamond
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 30px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1600px]`, `max-w-[1400px]`
- **Section padding:** `py-40`, `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. About (`about`)
7. Services (`services`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #161616;
  --color-text: #e6dcd3;
  --color-muted: #d4c5b9;
  --color-border: #2a2a2a;
  --color-accent: #b5533c;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Barlow Condensed", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#161616',
    ink: '#e6dcd3',
    muted: '#d4c5b9',
    line: '#2a2a2a',
    accent: '#b5533c',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Barlow Condensed'] },
} }
```

## Do and don't

- **Do:** Set the headline in an italic display serif, centred, in warm stone (#e6dcd3).
- **Do:** Use rust (#b5533c) for the thin rules and the scroll cue only.
- **Do:** Keep the subtitle in spaced uppercase, in muted beige (#d4c5b9).
- **Don't:** Don't use rust as a fill colour; it appears as hairlines.
- **Don't:** Don't set the headline in a sans; the serif is the signature.
- **Don't:** Don't add a light background; the page is dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
