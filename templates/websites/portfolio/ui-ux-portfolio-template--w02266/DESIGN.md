# Design system — UI/UX Portfolio Template

`SN-W02266` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark dark portfolio hero: a near-black ground (#0a0a0a) with a large white sans headline in which the second line is set in muted grey, which makes the statement feel quiet and deliberate. A pale pill button and a dark ghost button form the actions, and a small green dot marks availability. The grey-and-white two-tone headline on black is the recognisable device; the green is used only as a status dot.

**Mood:** minimal, precise, dark, quiet, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#000000` · `#050505` · `#0a0a0a` · `#18181b` · `#d4d4d8` · `#e4e4e7` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Montserrat, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 48px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center text-xs heading-font tracking-tight text-black bg-white px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Services (`services`)
5. Bento grid (`bento-grid`)
6. About (`about`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in muted grey at the same size as the first.
- **Do:** Use a pale pill for the primary button and a dark ghost button for the secondary.
- **Do:** Keep the green dot to availability status only.
- **Don't:** Don't use the green (#10b981) for buttons or headlines; it is a status dot.
- **Don't:** Don't set the page on white; this hero is black throughout.
- **Don't:** Don't add a second typeface for the hero; one sans carries it.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
