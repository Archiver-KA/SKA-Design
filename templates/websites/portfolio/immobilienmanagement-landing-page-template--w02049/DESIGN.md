# Design system — Immobilienmanagement Landing Page Template

`SN-W02049` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `de`

## Direction

A dark green-black hero (#111e16) with a white Inter headline in heavy weight, and a single lime (#d4f64d) used for the highlighted word and primary button. The contact form sits in a translucent dark card on the right, so the hero splits between headline and form. The lime is the only bright colour, which makes every call to action easy to spot.

**Mood:** sharp, modern, trustworthy, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111e16` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4f64d` | Primary action and highlights |

Palette by frequency of use: `#111e16` · `#ffffff` · `#d4f64d` · `#78716c` · `#57534e` · `#f5f5f4` · `#d6d3d1` · `#eff59b` · `#a8a29e` · `#6a7d28`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#d4f64d] text-[#111e16] px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#c3e63b] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,246,77,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111e16;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #d4f64d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111e16',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#d4f64d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#d4f64d) for the highlighted headline word and primary button only.
- **Do:** Keep the hero on the deep green-black (#111e16) with white text.
- **Do:** Place the contact form as a dark translucent card beside the headline.
- **Don't:** Don't use lime for body text on light backgrounds.
- **Don't:** Don't introduce a second accent colour.
- **Don't:** Don't set the headline in a light weight; it is set heavy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
