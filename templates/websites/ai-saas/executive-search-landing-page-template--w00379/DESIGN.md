# Design system — Executive Search Landing Page Template

`SN-W00379` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white editorial page with a very large dark grey headline set in Inter, tightly spaced and left-aligned against faint vertical hairline rules. The one accent is a deep brick red (#9b1b1b), used on the key statistic inside the headline and on the solid call-to-action button, so colour is spent sparingly. The layout is asymmetric, with a small caps eyebrow, a short grey paragraph and the red button set on the opposite side of the paragraph.

**Mood:** editorial, sparse, serious, gridded, flat

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eae6df` | Cards, panels, raised areas |
| Text | `#222222` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#eae6df` | Hairlines, dividers, outlines |
| Accent | `#9b1b1b` | Primary action and highlights |

Palette by frequency of use: `#222222` · `#9b1b1b` · `#555555` · `#ffffff` · `#eae6df` · `#f9f6f0` · `#7a1515`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 16px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[88rem]`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-12`, `gap-5`

**Primary button**

```html
<a class="btn-sharp inline-flex items-center justify-center bg-[#9B1B1B] text-[#FFFFFF] px-8 py-4 text-xs leading-[1.4] font-medium overline-style hover:bg-[#7A1515]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eae6df;
  --color-text: #222222;
  --color-muted: #555555;
  --color-border: #eae6df;
  --color-accent: #9b1b1b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eae6df',
    ink: '#222222',
    muted: '#555555',
    line: '#eae6df',
    accent: '#9b1b1b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key statistic in the headline in deep red (#9b1b1b) and the rest of the headline in dark grey (#222222).
- **Do:** Use the red only for the primary button and that statistic.
- **Do:** Keep the hairline grid rules visible in the hero and align all text to the left column.
- **Don't:** Don't add a second accent colour; the page is black, white and red.
- **Don't:** Don't centre the hero copy; the layout is left-aligned.
- **Don't:** Don't add gradients or shadows; the design is flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
