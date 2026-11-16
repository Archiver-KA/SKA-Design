# Design system — Horticultural & Landscaping Landing Page Template

`SN-W00445` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A green hero where a deep forest ground runs into a pale mint field, with a bold white sans headline that switches to italic serif on its last phrases. The closing phrase is set in bright green (#30c45a) against the mint, and a solid green button carries the call to action. The palette is nature-led and the italic serif adds warmth, so the page feels organic rather than corporate.

**Mood:** organic, warm, fresh, natural, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#073e1e` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#30c45a` | Primary action and highlights |

Palette by frequency of use: `#073e1e` · `#1f7152` · `#ffffff` · `#30c45a` · `#fafafa` · `#000000` · `#f0f9f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2.5 bg-[#073E1E] text-white rounded-full text-sm font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Bento grid (`bento-grid`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #073e1e;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #30c45a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#073e1e',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#30c45a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans, with the closing phrases in italic serif
- **Do:** Set the final phrase in bright green (#30c45a) on the deep green ground only
- **Do:** Use one solid bright green button for the call to action
- **Don't:** Don't put bright green text on the pale mint side; the contrast is weak there
- **Don't:** Don't use a second accent colour beside the greens
- **Don't:** Don't flatten the gradient to a single fill; the depth carries the mood

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
