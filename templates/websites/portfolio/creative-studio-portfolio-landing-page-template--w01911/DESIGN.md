# Design system — Creative Studio Portfolio Landing Page Template

`SN-W01911` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white page with a centred double-ring monogram, 'DD', above a large dark serif headline on two lines, with the second line in italic grey. Navigation is tiny, tracked and uppercase at the top, and a single scroll cue sits at the bottom. Everything is centred and symmetrical, so the page reads as quiet, formal and gallery-like.

**Mood:** quiet, formal, symmetrical, gallery-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfdfb` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#d4d4d8` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#71717a` · `#d4d4d8` · `#a1a1aa` · `#f4f4f5` · `#fdfdfb` · `#e4e4e7` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h2 36px · h3 24px · body 12px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-x-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfdfb;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #d4d4d8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfdfb',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#d4d4d8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the monogram as a thin double ring centred above the headline.
- **Do:** Set the headline in a serif, with the second line in italic grey (#71717a).
- **Do:** Keep navigation tiny, tracked and uppercase at the top.
- **Don't:** Don't add colour; the page is black, grey and off-white.
- **Don't:** Don't set the headline in a bold sans; the serif is the voice.
- **Don't:** Don't add a hero image; the monogram is the only graphic.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
