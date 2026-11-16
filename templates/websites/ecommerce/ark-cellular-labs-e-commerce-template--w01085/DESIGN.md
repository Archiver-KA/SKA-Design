# Design system — ARK Cellular Labs E-commerce Template

`SN-W01085` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A clinical, plain product page on white with a dark slate headline and a blue primary button. The one loud element is a full-width red strip at the top that carries the research-use disclaimer in capitals. Body text is grey, the hero is left-aligned, and a large image placeholder sits on the right.

**Mood:** clinical, plain, compliant, sober, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#2563eb` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#e2e8f0` · `#94a3b8` · `#dbeafe` · `#1d4ed8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-slate-200/50`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Process / steps (`how-it-works`)
6. Team (`team`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #f87171;
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
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the research-use notice in a full-width red strip at the top
- **Do:** Use blue (#2563eb) for the primary button and the active nav item
- **Do:** Set headlines in dark slate (#0f172a) with tight leading
- **Don't:** Don't use the red strip for anything other than compliance notices
- **Don't:** Don't add ornamental imagery to the lab sections
- **Don't:** Don't set body copy in pure black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
