# Design system — Indie Showcase Landing Page Template

`SN-W00457` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic, illustration-led game showcase: a full-bleed painted landscape fills the first screen, with a dark translucent navbar and small, widely spaced uppercase labels over the art. Manrope at very large size sets the headlines, and cyan (#8ceaf5) is used only for small labels and interface details. The art does the work while the chrome stays quiet and dark.

**Mood:** cinematic, illustrative, immersive, dark, quiet chrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#061014` | Page ground |
| Surface | `#09171b` | Cards, panels, raised areas |
| Text | `#f3f6f5` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8ceaf5` | Primary action and highlights |
| Second accent | `#f0a486` | Supporting highlights |

Palette by frequency of use: `#8ceaf5` · `#ffffff` · `#061014` · `#94a3b8` · `#f3f6f5` · `#64748b` · `#09171b` · `#80a8ff` · `#e2e8f0` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Space Mono
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 36px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[92rem]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-28`
- **Common gaps:** `gap-5`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="mt-7 inline-flex min-h-11 items-center gap-5 rounded-full bg-[#8ceaf5] px-6 text-xs font-medium uppercase tracking-[0.14em] text-[#061014] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Services (`services`)
5. Product detail (`product-detail`)
6. Feature grid (`features`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Newsletter signup (`newsletter`)
9. FAQ (`faq`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #061014;
  --color-surface: #09171b;
  --color-text: #f3f6f5;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #8ceaf5;
  --color-accent-2: #f0a486;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#061014',
    surface: '#09171b',
    ink: '#f3f6f5',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#8ceaf5',
    accent2: '#f0a486',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Let the full-bleed artwork fill the hero edge to edge
- **Do:** Set small labels in uppercase with wide letter spacing in cyan (#8ceaf5)
- **Do:** Keep the navbar dark and translucent over the image
- **Don't:** Don't place solid light panels over the artwork
- **Don't:** Don't set body copy on busy illustration without a dark scrim
- **Don't:** Don't use cyan for large headline text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
