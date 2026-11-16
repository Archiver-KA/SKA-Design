# Design system — JFA IN PROGRESS

`SN-W02062` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal architecture page where a large sans headline sits directly over a grey photograph of an interior, set in near-black with tight spacing. Project details live on a frosted dark card on the right with small labels above values, and a single lime-green (#bbe075) square marks the slide control at the edge. The translucent card and the lime tab are the recognisable parts.

**Mood:** architectural, minimal, gallery-like, clean, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bbe075` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d1d5db` · `#000000` · `#52525b` · `#bbe075` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 11px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Common gaps:** `gap-12`, `gap-6`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. About (`about`)
5. Team (`team`)
6. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #bbe075;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#bbe075',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large sans with tight spacing, directly over the photograph.
- **Do:** Use the lime (#bbe075) only for the small control square on the slide edge.
- **Do:** Place project details on a frosted dark card with small labels above values.
- **Don't:** Don't use lime for text or large fills.
- **Don't:** Don't put a fill behind the headline; it sits on the image in plain type.
- **Don't:** Don't round the card corners heavily; they are nearly square.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
