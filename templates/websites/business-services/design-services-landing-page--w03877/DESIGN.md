# Design system — Design Services Landing Page

`SN-W03877` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, centred hero on white with a large bold dark sans-serif headline whose second word is set in saturated blue. Supporting copy is grey and short, and the two buttons are a solid blue primary and a white secondary with a thin border. Three service cards below each carry a small coloured icon tile, so blue, violet and indigo serve as the accents.

**Mood:** bright, clean, friendly, modern, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#10212b` | Headings and primary copy |
| Border | `#cdd5da` | Hairlines, dividers, outlines |
| Accent | `#1f5f8b` | Primary action and highlights |
| Second accent | `#ff7f36` | Supporting highlights |

Palette by frequency of use: `#4a5c68` · `#cdd5da` · `#ffffff` · `#10212b` · `#1f5f8b` · `#eef1f3` · `#c9d3d9` · `#ff7f36` · `#2a3f4d` · `#f26b1d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Barlow Condensed, Inter
- **Scale (largest breakpoint):** h1 120px · h2 60px · h3 24px · body 15px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center min-h-[48px] px-8 bg-ink text-white font-semibold w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #10212b;
  --color-border: #cdd5da;
  --color-accent: #1f5f8b;
  --color-accent-2: #ff7f36;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#10212b',
    line: '#cdd5da',
    accent: '#1f5f8b',
    accent2: '#ff7f36',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in large bold dark sans-serif with the second word in blue
- **Do:** Use the solid blue for the primary button only
- **Do:** Give each service card a small coloured icon tile at its top left
- **Don't:** Don't use the blue on large backgrounds; the page stays white
- **Don't:** Don't centre paragraphs longer than two lines
- **Don't:** Don't drop the coloured icon tiles from the service cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
