# Design system — Semiconductor AI Services Landing Page Template

`SN-W00702` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A corporate tech hero built on a photograph of a circuit board with a deep blue tint, carrying white bold Inter headlines and white buttons. The image is cropped to the top of the page and gives way to a plain white section below, where a centred logo line sits. Blue works as both image tint and link colour, so the page reads as high-tech and institutional.

**Mood:** corporate, technical, bold, photographic, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#d1d5db` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#111827` · `#9ca3af` · `#2563eb` · `#6b7280` · `#e5e7eb` · `#d1d5db` · `#f3f4f6` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-blue-500/5`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Map / location (`map-location`)
7. About (`about`)
8. Team (`team`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #d1d5db;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#d1d5db',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Tint hero photography with a deep blue overlay so the white text stays legible.
- **Do:** Set the headline in white bold Inter with tight line height.
- **Do:** Keep the section below the hero plain white with a centred logo line.
- **Don't:** Don't carry the blue image tint onto the white sections.
- **Don't:** Don't set hero text in a dark colour over the photograph.
- **Don't:** Don't use a photograph without a dark overlay behind the text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
