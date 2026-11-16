# Design system — Askvalor

`SN-W00215` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet, editorial light page with a deep green serif headline set large and tight. The first clause is in green and the second is in grey regular, so the emphasis sits in the phrasing and the colour shift. Green is also the primary button and nav CTA, and a tall white image card on the right keeps the layout calm and trustworthy.

**Mood:** editorial, calm, trustworthy, composed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0b0f19` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2e6b4f` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#2e6b4f` · `#ffffff` · `#6b7280` · `#0b0f19` · `#1e2521` · `#e5e7eb` · `#f3f4f6` · `#e2e8e4` · `#5a6b61` · `#f0f4f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Fraunces
- **Loaded families:** Fraunces, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-[#2E6B4F] hover:bg-[#1f4734] text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded font-medium transition-colors duration-300 shadow-sm text-xs md:text-base whitespace-nowrap inline-flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. Services (`services`)
8. Articles (`blog-articles`)
9. Testimonials (`testimonials`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f8f8;
  --color-surface: #ffffff;
  --color-text: #0b0f19;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #2e6b4f;
  --color-accent-2: #f87171;
  --font-display: "Fraunces", serif;
  --font-body: "Fraunces", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f8',
    surface: '#ffffff',
    ink: '#0b0f19',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#2e6b4f',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Fraunces'] },
} }
```

## Do and don't

- **Do:** Set headlines in Fraunces, with the first clause in deep green (#2e6b4f) and the second in grey
- **Do:** Use green (#2e6b4f) for the primary button and the nav CTA only
- **Do:** Keep the image area as a tall white card with a soft border
- **Don't:** Don't set headlines in a sans-serif
- **Don't:** Don't add a bright accent beside the green; green is the one accent
- **Don't:** Don't use more than one green tone in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
