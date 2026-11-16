# Design system — Apollo Epoxy Luxury Flooring Template

`SN-W01792` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a large high-contrast serif headline, where the first word is solid white and the second is set in a thin outline. Italic serif supporting lines sit beneath, and a band of spaced italic keywords runs across the lower area. Pairing solid and outlined type gives a deliberate, refined feel.

**Mood:** refined, dark, contrasting, typographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#d4d4d4` · `#000000` · `#a3a3a3` · `#525252` · `#0a0a0a` · `#e5e5e5` · `#3a3a3a` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h2 60px · h3 48px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group flex items-center gap-2 bg-white text-black pl-6 pr-4 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline word solid white and the second in outline, both in Playfair Display.
- **Do:** Keep supporting lines in italic serif.
- **Do:** Use the white pill button as the only primary action.
- **Don't:** Don't add colour; the page is white and grey on black.
- **Don't:** Don't set body copy in the serif; Inter carries it.
- **Don't:** Don't use a light background; the page is dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
