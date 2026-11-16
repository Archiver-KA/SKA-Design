# Design system — Interactive Globe with Project Stats

`SN-W04218` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white hero with a soft lavender glow on the right side, a large dark slate headline and a violet (#9333ea) accent. The first word of the headline is set in a violet-to-pink gradient, and a solid violet button sits beside an outlined secondary button. The layout is open and airy, with a short lead paragraph in muted grey.

**Mood:** airy, soft, modern, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#faf5ff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |

Palette by frequency of use: `#9333ea` · `#1f2937` · `#ffffff` · `#6b7280` · `#4b5563` · `#d1d5db` · `#faf5ff` · `#e5e7eb` · `#f3e8ff` · `#ec4899`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · body 36px
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px)
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-purple-600 text-white font-light rounded-md px-6 py-3 hover:bg-purple-700 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #faf5ff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #d1d5db;
  --color-accent: #9333ea;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#faf5ff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#d1d5db',
    accent: '#9333ea',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in a violet gradient
- **Do:** Use a solid violet button for the main action and an outlined one beside it
- **Do:** Keep the glow soft and behind the right side of the hero
- **Don't:** Don't set body copy in violet
- **Don't:** Don't use dark backgrounds in this light hero
- **Don't:** Don't add more than one gradient to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
