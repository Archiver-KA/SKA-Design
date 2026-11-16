# Design system — Developer Portfolio Layout

`SN-W01965` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The hero is backed by a Three.js canvas and a Spline 3D scene, which sit behind the content rather than beside it. Headings are set in Bricolage Grotesque on a stylesheet-driven layout.

**Mood:** unverified, plain, 3d-backed, dark-intended

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#6b7280` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#d1d5db` · `#e5e7eb` · `#6b7280` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bricolage Grotesque
- **Body:** Bricolage Grotesque
- **Loaded families:** Bricolage Grotesque
- **Scale (largest breakpoint):** h3 20px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px)
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`, `gap-12`

**Primary button**

```html
<a class="bg-white text-black px-6 py-3 rounded-md btn-text hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Three.js, Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #6b7280;
  --font-display: "Bricolage Grotesque", sans-serif;
  --font-body: "Bricolage Grotesque", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#6b7280',
  },
  fontFamily: { display: ['Bricolage Grotesque'], sans: ['Bricolage Grotesque'] },
} }
```

## Do and don't

- **Do:** Load the stylesheet and the Spline and Three.js assets before the hero renders
- **Do:** Set headings in Bricolage Grotesque.
- **Do:** Keep the 3D background behind the content, not beside it
- **Don't:** Don't ship with a failed stylesheet or script load.
- **Don't:** Don't add a second typeface beside Bricolage Grotesque.
- **Don't:** Don't leave default unstyled links in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
