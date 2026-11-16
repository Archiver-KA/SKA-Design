# Design system — UCORE Solutions

`SN-W00784` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A corporate energy-consulting page built around a full-bleed landscape photo, with white headline text laid over the darkened sky. The top-level green (#059669) marks the primary button and links, and the stats sit in white panels over the image. Below the fold the page switches to white sections with a pale green tint, so the photo is the only dense visual.

**Mood:** corporate, photographic, clean, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ecfdf5` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#059669` · `#0f172a` · `#64748b` · `#94a3b8` · `#ecfdf5` · `#f1f5f9` · `#6ee7b7` · `#10b981` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Geist, Quicksand
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Feature grid (`features`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ecfdf5;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #059669;
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
    surface: '#ecfdf5',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#059669',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put white headlines over the darkened photo at the top of the page
- **Do:** Use the green (#059669) for the primary button and links only
- **Do:** Set stats as white panels with large numerals over the image
- **Don't:** Don't place dark text directly on the photo
- **Don't:** Don't use green for large fills
- **Don't:** Don't add decorative icons beside each stat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
