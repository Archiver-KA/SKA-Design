# Design system — Fashion Brand Guidelines Page Template

`SN-W02741` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A plain, centred cover built from type alone: a very large black serif wordmark sits on a warm cream field, with a small tracked-out subline and a hairline rule beneath. Small grey text sits in the corners, like a printed identity sheet. The restraint is the point; the cover lets the wordmark stand alone.

**Mood:** minimal, print-like, restrained, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f3ee` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#991b1b` | Primary action and highlights |

Palette by frequency of use: `#c6b8a6` · `#111111` · `#ffffff` · `#a8a29e` · `#78716c` · `#f6f3ee` · `#f5f5f4` · `#e7e5e4` · `#57534e` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 128px · h3 30px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-16`, `gap-24`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Listings (`listings`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f6f3ee;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #991b1b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f3ee',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#991b1b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the wordmark in a large black serif with generous space around it
- **Do:** Set small tracked uppercase text in grey in the corners
- **Do:** Divide the cover with one thin grey hairline rule
- **Don't:** Don't add imagery to the cover; it relies on type and rules
- **Don't:** Don't use the deep red on the cover; the cover is black, cream and grey
- **Don't:** Don't set the wordmark in a bold sans; the cover uses a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
