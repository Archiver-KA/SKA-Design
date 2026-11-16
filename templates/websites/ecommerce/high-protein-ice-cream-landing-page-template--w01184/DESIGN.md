# Design system — High-Protein Ice Cream Landing Page Template

`SN-W01184` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A high-protein ice cream page on a pale slate ground with two soft blurred blobs, one purple and one orange, behind the product. The headline is heavy sans, and its second line is a gradient from deep purple (#581c87) to rose. The primary action is a near-black pill, the header order button is solid deep purple, and the orange (#f97316) appears only as a small label on the product.

**Mood:** playful, clean, fresh, fast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#581c87` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#581c87` · `#64748b` · `#475569` · `#e2e8f0` · `#f1f5f9` · `#f97316` · `#fb923c` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="bg-purple-900 hover:bg-purple-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-900/30 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Awards / press (`awards-press`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #581c87;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#581c87',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Apply the purple gradient only to the second line of the hero headline.
- **Do:** Use the near-black (#0f172a) pill for primary actions and the deep purple (#581c87) for the header order button.
- **Do:** Keep the orange (#f97316) to small labels such as the protein tag.
- **Don't:** Don't use the purple gradient on body copy or on buttons.
- **Don't:** Don't use the blurred blobs in sections below the hero.
- **Don't:** Don't mix the orange into the purple button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
