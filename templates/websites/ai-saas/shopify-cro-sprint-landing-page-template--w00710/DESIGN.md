# Design system — Shopify CRO Sprint Landing Page Template

`SN-W00710` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, sober conversion-agency hero: a near-black ground (#09090b) with a large white headline whose final phrase drops to mid-grey. The primary button is white with dark text beside a dark outlined secondary, and three small grey reassurance lines sit beneath them. With no imagery, the headline and the offer do all the persuading.

**Mood:** sober, direct, dark, analytical, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#18181b` · `#52525b` · `#09090b` · `#000000` · `#e4e4e7` · `#27272a` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex text-xs font-medium bg-white text-black px-4 py-2 rounded hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Comparison (`comparison`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white Inter and drop the final phrase to mid-grey.
- **Do:** Make the primary button white with dark text and the secondary an outline.
- **Do:** Put short grey reassurance lines directly under the buttons.
- **Don't:** Don't add a coloured accent to the hero; the palette is monochrome.
- **Don't:** Don't use imagery in the first screen; the type carries it.
- **Don't:** Don't use a light section directly under this dark hero without a divider.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
