# Design system — Apology to Madam jiiii

`SN-W01793` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale blush-white page with a centred serif heading in deep wine, and a grey body paragraph below it in the same serif family. Rounded corners and a soft cream panel give it a gentle, personal tone. Wine (#881337) carries the headings, while pale pink (#fecdd3) is used only as a tint behind them.

**Mood:** soft, personal, romantic, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#fff7ed` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Accent | `#881337` | Primary action and highlights |

Palette by frequency of use: `#881337` · `#fecdd3` · `#1c1917` · `#fff7ed` · `#fb7185` · `#4c0519` · `#ffe4e6` · `#fafaf9` · `#292524` · `#fbcfe8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 24px · body 30px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-rose-900/10`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-10`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #fff7ed;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-accent: #881337;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#fff7ed',
    ink: '#292524',
    muted: '#78716c',
    accent: '#881337',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headings in Cormorant Garamond in deep wine (#881337).
- **Do:** Use pale pink (#fecdd3) only as a background tint behind the heading.
- **Do:** Keep body text in Cormorant Garamond with generous line spacing.
- **Don't:** Don't use bright pink for text; it reduces contrast on the blush ground.
- **Don't:** Don't add a sans-serif display face; the page is serif throughout.
- **Don't:** Don't add a dark background; the blush ground is part of the mood.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
