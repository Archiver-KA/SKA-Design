# Design system — Cinematographer Portfolio Template

`SN-W01866` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep teal portfolio page (#0d2d34) where the photographer's name is set in two heavy white sans lines, with a short quoted line in lighter type beneath. The mustard yellow (#e1b62f) is the accent, used for the small uppercase section label and the contact button. The ground is a single dark tone, so the first screen relies on type scale rather than imagery.

**Mood:** moody, confident, minimal, warm-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d2d34` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e1b62f` | Primary action and highlights |
| Second accent | `#0d2d34` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e1b62f` · `#0d2d34` · `#000000` · `#0a2228` · `#efefef`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="text-sm font-medium text-[#0d2d34] bg-[#e1b62f] px-4 py-2 rounded hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Modal / overlay (`modal-overlay`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Bento grid (`bento-grid`)
7. Services (`services`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d2d34;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e1b62f;
  --color-accent-2: #0d2d34;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d2d34',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#e1b62f',
    accent2: '#0d2d34',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in heavy white sans, large, in two lines
- **Do:** Use mustard (#e1b62f) for the small section label and the contact button only
- **Do:** Keep the ground as the single dark teal (#0d2d34)
- **Don't:** Don't use the mustard as a page background
- **Don't:** Don't lighten the teal ground into a tint
- **Don't:** Don't add more than one accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
