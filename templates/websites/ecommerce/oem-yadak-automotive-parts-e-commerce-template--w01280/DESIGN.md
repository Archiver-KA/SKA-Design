# Design system — OEM Yadak Automotive Parts E-commerce Template

`SN-W01280` · ecommerce · light mode · Sinera Atlas theme `market` · language `fa`

## Direction

A right-to-left Persian B2B parts page on a near-white ground (#f9fafb) with dark slate text. The headline is set in Vazirmatn, with its key phrase in orange (#f97316), and a stacked search form does the work a product photo would do. Orange marks the main action and dark navy (#1e293b) carries secondary emphasis, so the page reads as functional and catalogue-led.

**Mood:** functional, utilitarian, trade-focused, clean, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#334155` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#f97316` · `#e5e7eb` · `#94a3b8` · `#475569` · `#64748b` · `#f3f4f6` · `#334155` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Vazirmatn
- **Body:** Vazirmatn
- **Loaded families:** Vazirmatn
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 14px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_4px_12px_rgba(0,0,0,0.03)]`, `shadow-[0_8px_24px_rgba(0,0,0,0.04)]`, `shadow-[0_4px_20px_rgba(0,0,0,0.03)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 text-sm font-normal transition-colors flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #334155;
  --color-muted: #64748b;
  --color-border: #e5e7eb;
  --color-accent: #f97316;
  --color-accent-2: #1e293b;
  --font-display: "Vazirmatn", sans-serif;
  --font-body: "Vazirmatn", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#334155',
    muted: '#64748b',
    line: '#e5e7eb',
    accent: '#f97316',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Vazirmatn'], sans: ['Vazirmatn'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline phrase in orange (#f97316) and the rest in dark slate
- **Do:** Use the orange button for the main search action and dark navy for supporting actions
- **Do:** Lay out all text and form fields right-to-left, with Vazirmatn throughout
- **Don't:** Don't mirror the layout into left-to-right order; the text direction is RTL
- **Don't:** Don't use orange on large backgrounds; it is for emphasis and actions
- **Don't:** Don't use a serif face; the type is Vazirmatn sans throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
