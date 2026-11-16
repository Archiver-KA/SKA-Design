# Design system — Pet Breeder Contact & Application Landing Page Template

`SN-W02499` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm, editorial site on cream (#f7f1e8) with deep brown ink (#2b2118) and a bronze accent (#b08d57). Large DM Sans display type is set at very large sizes with tight leading. A dark brown menu overlay in the same family of browns, with numbered links and thin gold labels, gives the site a catalogue-like, premium tone.

**Mood:** editorial, premium, warm, catalogue-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f1e8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2b2118` | Headings and primary copy |
| Border | `#f7f1e8` | Hairlines, dividers, outlines |
| Accent | `#b08d57` | Primary action and highlights |

Palette by frequency of use: `#b08d57` · `#2b2118` · `#f7f1e8` · `#ffffff` · `#332818` · `#efe6d8` · `#221a12` · `#3a2d1f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Fraunces, DM Sans
- **Scale (largest breakpoint):** h1 104px · h2 60px · h3 30px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_20px_60px_-40px_rgba(43,33,24,0.3)]`, `shadow-xl`, `shadow-[0_20px_60px_-30px_rgba(43,33,24,0.25)]`
- **Content width:** `max-w-[90rem]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group inline-flex items-center gap-4 bg-[#2B2118] text-[#F7F1E8] rounded-full pl-8 pr-2 py-2 text-base font-light hover:bg-[#B08D57] transition-colors duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Timeline (`timeline`)
5. Product grid (`product-grid`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Bento grid (`bento-grid`)
9. FAQ (`faq`)
10. Footer (`footer`)
11. Map / location (`map-location`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f1e8;
  --color-surface: #ffffff;
  --color-text: #2b2118;
  --color-border: #f7f1e8;
  --color-accent: #b08d57;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f1e8',
    surface: '#ffffff',
    ink: '#2b2118',
    line: '#f7f1e8',
    accent: '#b08d57',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use bronze (#b08d57) for small labels and rule accents only
- **Do:** Set display headlines very large in DM Sans with tight leading
- **Do:** Keep the page ground in cream (#f7f1e8) and text in brown (#2b2118)
- **Don't:** Don't use bronze for large fills or button backgrounds
- **Don't:** Don't use pure black for text; the brown ink is the default
- **Don't:** Don't crowd numbered navigation; keep wide spacing between items

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
