# Design system — Coaching SaaS Landing Page Template

`SN-W03428` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bright SaaS page on white, with a dark navy [#0f172a] headline and a warm yellow [#fdb813] primary button. A soft yellow glow sits behind the hero, and a product dashboard is cropped at the bottom of the first screen, so the interface shows rather than an illustration. The hierarchy is simple: a large headline, a short support line and two buttons.

**Mood:** bright, modern, confident, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#fdb813` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#fdb813` · `#0f172a` · `#ffffff` · `#64748b` · `#475569` · `#f1f5f9` · `#94a3b8` · `#e2e8f0` · `#fef08a` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-3 py-1.5 bg-[#FDB813] text-slate-900 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-[#e5a000] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #fdb813;
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
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#fdb813',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#fdb813) for the primary button, with dark text on it
- **Do:** Set headlines large in dark navy (#0f172a), with a short yellow underline on one phrase
- **Do:** Show the product interface as a cropped screenshot below the buttons
- **Don't:** Don't use yellow for body text or links on white
- **Don't:** Don't use more than one bright colour per section
- **Don't:** Don't stack more than two buttons in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
