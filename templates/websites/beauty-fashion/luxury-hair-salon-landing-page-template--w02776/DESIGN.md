# Design system — Luxury Hair Salon Landing Page Template

`SN-W02776` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

A warm editorial salon page: a cream ground with a large light serif headline in dark brown (#3a302b), and a dark brown primary button beside an outlined secondary one. The right half is a large photograph with blue tones and a warm orange highlight, which supplies the only saturated colour. The UI stays in cream and brown, so the photograph does the emotional work.

**Mood:** warm, editorial, quiet, luxurious, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#3a302b` | Headings and primary copy |
| Muted text | `#7a6b63` | Secondary copy, captions |
| Border | `#3a302b` | Hairlines, dividers, outlines |
| Accent | `#3a302b` | Primary action and highlights |

Palette by frequency of use: `#3a302b` · `#7a6b63` · `#e8dccb` · `#fdfbf7` · `#c5b39b` · `#f5f5f4` · `#f5efe6` · `#ffffff` · `#52453f` · `#a89f96`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant
- **Body:** Cormorant
- **Loaded families:** Cormorant, Jost
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`, `shadow-[#3A302B]/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-0`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center border border-[#3A302B] text-[#3A302B] hover:bg-[#3A302B] hover:text-[#FDFBF7] transition-colors duration-500 px-6 py-2.5 text-xs uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #f5f5f4;
  --color-text: #3a302b;
  --color-muted: #7a6b63;
  --color-border: #3a302b;
  --color-accent: #3a302b;
  --font-display: "Cormorant", serif;
  --font-body: "Cormorant", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#f5f5f4',
    ink: '#3a302b',
    muted: '#7a6b63',
    line: '#3a302b',
    accent: '#3a302b',
  },
  fontFamily: { display: ['Cormorant'], sans: ['Cormorant'] },
} }
```

## Do and don't

- **Do:** Set the headline in large Cormorant in dark brown (#3a302b).
- **Do:** Use dark brown (#3a302b) for the primary button and an outlined button for the secondary action.
- **Do:** Let the photograph carry saturated colour; keep the interface in cream and brown.
- **Don't:** Don't add saturated colours to the interface.
- **Don't:** Don't use the cream (#e8dccb) for text or buttons on the cream ground; contrast is too low.
- **Don't:** Don't set body copy in pure black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
