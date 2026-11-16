# Design system — Design Symposium Landing Page Template

`SN-W03586` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The symposium page is Swiss in style, with a full-bleed red-orange field (#f03823) and very large bold grotesk capitals in white. Thin white rules divide the hero into a grid of cells, and small uppercase labels sit in the corners. Colour is used as one flat field and the grid lines, not illustrations, supply the structure. The type is loud and set tight, so the hero reads like a poster.

**Mood:** swiss, bold, graphic, loud, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f03823` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#f03823` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#f03823` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Scale (largest breakpoint):** h2 72px · h3 14px · body 24px
- **Weights in use:** bold, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-0`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full bg-black text-white p-6 text-xl font-bold uppercase tracking-widest hover:bg-[#F03823] transition-colors border-[4px] border-black hover:border-black flex justify-between items-center group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Map / location (`map-location`)
3. Team (`team`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f03823;
  --color-text: #ffffff;
  --color-border: #000000;
  --color-accent: #f03823;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f03823',
    ink: '#ffffff',
    line: '#000000',
    accent: '#f03823',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Set the hero as a flat red-orange (#f03823) field with white grotesk capitals
- **Do:** Divide the layout with thin white hairline rules that show the grid
- **Do:** Put small uppercase labels in the corners of each grid cell
- **Don't:** Don't add gradients or shadows to the red field
- **Don't:** Don't introduce a second accent colour beside the red-orange
- **Don't:** Don't round the corners of rules or panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
