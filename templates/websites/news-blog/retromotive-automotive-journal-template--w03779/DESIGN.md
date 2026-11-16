# Design system — Retromotive Automotive Journal Template

`SN-W03779` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

An editorial magazine landing page on a near-black ground, with large high-contrast serif headlines in white and a grey italic second line. The hero pairs a tilted magazine cover with a plain outlined button, so colour comes from the photography rather than from the interface. The layout is wide and sparse, with generous space between sections and small, widely tracked uppercase navigation.

**Mood:** editorial, dark, dramatic, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#18181b` · `#27272a` · `#a1a1aa` · `#000000` · `#09090b` · `#f4f1ea` · `#52525b` · `#71717a` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, bold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center border border-white/30 bg-white text-zinc-950 px-8 py-4 text-xs font-semibold tracking-[0.2em] transition hover:bg-zinc-200 uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Articles (`blog-articles`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #52525b;
  --color-border: #27272a;
  --font-display: "a serif face", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#52525b',
    line: '#27272a',
  },
  fontFamily: { display: ['a serif face'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set display headlines in the serif face at a large size with tight leading, in white (#ffffff).
- **Do:** Use the grey italic for the second line of a headline, not a second colour.
- **Do:** Keep primary buttons as solid white rectangles with dark text.
- **Don't:** Don't add rounded corners to buttons or cards.
- **Don't:** Don't introduce a bright accent colour over the cover imagery.
- **Don't:** Don't set the navigation larger than its small tracked labels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
