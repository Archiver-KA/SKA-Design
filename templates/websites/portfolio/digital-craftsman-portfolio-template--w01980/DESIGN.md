# Design system — Digital Craftsman Portfolio Template

`SN-W01980` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Stark black poster: a near-black ground with a huge centred white sans headline in two lines, DIGITAL above REALITY. The nav is tiny and grey, and a single scroll cue sits at the foot of the screen. There is no accent colour; the page works through scale, emptiness and a pair of words.

**Mood:** stark, minimal, poster, monochrome, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#27272a` · `#a1a1aa` · `#ffffff` · `#18181b` · `#000000` · `#71717a` · `#3f3f46` · `#f4f4f5` · `#d4d4d8` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 128px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Content width:** `max-w-screen-xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero words in large white uppercase grotesque, centred on the screen
- **Do:** Keep the nav text tiny and grey at the top edge
- **Do:** Leave the empty space around the headline as part of the design
- **Don't:** Don't add a second colour; the page is black and white
- **Don't:** Don't set the nav in bold; it stays faint
- **Don't:** Don't fill the hero with images or cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
