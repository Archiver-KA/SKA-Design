# Design system — Mortgage Agent Landing Page Template

`SN-W01001` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bright-blue mortgage hero with the same structure as its sibling template: a deep blue (#1e3a8a) field, a white bold sans-serif headline, and the key phrase in amber (#f59e0b). A solid amber primary button and a thin outline secondary sit beneath the copy, and a tall agent card on the right holds a face and a name. The feel is confident and approachable.

**Mood:** confident, bright, approachable, warm, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1e3a8a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#1e3a8a` · `#ffffff` · `#f59e0b` · `#64748b` · `#475569` · `#e2e8f0` · `#fbbf24` · `#94a3b8` · `#f1f5f9` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Services (`services`)
8. Process / steps (`how-it-works`)
9. About (`about`)
10. Testimonials (`testimonials`)
11. Articles (`blog-articles`)
12. FAQ (`faq`)
13. Contact form (`contact-form`)
14. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1e3a8a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f59e0b;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1e3a8a',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#f59e0b',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in amber (#f59e0b) and keep the rest white.
- **Do:** Use the solid amber button for the primary call to action and a thin outline button for the secondary.
- **Do:** Keep the agent photograph in a tall card on the right.
- **Don't:** Don't use amber for body copy.
- **Don't:** Don't add a second blue shade to the hero.
- **Don't:** Don't place the headline on a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
