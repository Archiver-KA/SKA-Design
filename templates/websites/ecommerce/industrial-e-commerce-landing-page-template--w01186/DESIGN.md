# Design system — Industrial E-commerce Landing Page Template

`SN-W01186` · ecommerce · light mode · Sinera Atlas theme `route` · language `nl`

## Direction

A sober furniture hero built as a large rounded panel with a diagonal grey gradient, a white headline and two pill buttons, one solid white and one translucent grey. The black announcement bar at the top is the only dark band, and the page below is white. The style is industrial and plain, with type doing the work and no imagery on the first screen.

**Mood:** sober, industrial, clean, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#0f172a` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#020617` · `#000000` · `#f1f5f9` · `#64748b` · `#e2e8f0` · `#ffedd5` · `#7c2d12` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-orange-50 transition-all text-sm tracking-tight shadow-xl">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #0f172a;
  --color-accent: #0f172a;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f1f5f9',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#0f172a',
    accent: '#0f172a',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in bold white sans on the grey gradient panel.
- **Do:** Use the solid white pill for the primary action and a translucent grey pill for the secondary.
- **Do:** Keep the black announcement bar (#0f172a) as the only dark band at the top.
- **Don't:** Don't use the peach (#ffedd5) as an accent; it is a tint, not an action colour.
- **Don't:** Don't remove the rounded corners of the hero panel.
- **Don't:** Don't set the headline in a serif; the style is one sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
