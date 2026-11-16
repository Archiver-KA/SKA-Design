# Design system — Fitness Performance Landing Page Template

`SN-W02605` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A minimal dark protocol page. A pure black ground (#0a0a0a) holds a centred stack of white headline text, with the second line in muted grey, and small monospace labels frame the content. There is one white button and almost no colour, so the page relies on spacing and type scale rather than accent colour, while the thin mono tags add a technical note.

**Mood:** minimal, technical, restrained, monochrome, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#0a0a0a` · `#a3a3a3` · `#525252` · `#171717` · `#10b981` · `#e5e5e5` · `#ef4444` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-black/50`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #10b981;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#10b981',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero and set the headline in white with the second line in muted grey.
- **Do:** Set small labels, tags and the stats line in the monospace face.
- **Do:** Keep the primary button white on black, with no added colour.
- **Don't:** Don't add coloured backgrounds; the page stays black.
- **Don't:** Don't use more than one accent colour in a section.
- **Don't:** Don't set labels in the sans body face; they belong in monospace.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
