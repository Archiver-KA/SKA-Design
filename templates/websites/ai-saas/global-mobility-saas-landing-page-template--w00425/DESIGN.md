# Design system — Global Mobility SaaS Landing Page Template

`SN-W00425` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, cool-white page with a heavy dark-navy headline, where the final word 'compliantly.' is set in indigo (#4f46e5) to carry the emphasis. Solid navy buttons take the primary action with outlined buttons beside them, and a pale indigo pill labels the new feature above the headline. The page is product-led: a browser-style dashboard mock-up sits below the hero as the proof.

**Mood:** clean, product-led, calm, trustworthy, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#4f46e5` · `#64748b` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#94a3b8` · `#475569` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
  --color-accent-2: #22c55e;
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
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#4f46e5',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing word of the headline in indigo (#4f46e5), at the same weight as the rest
- **Do:** Use a solid navy button for the primary action and an outlined one for the secondary
- **Do:** Label new features with a small pale indigo pill above the headline
- **Don't:** Don't set body copy in pure black; it uses slate grey (#475569)
- **Don't:** Don't add a second accent beside the indigo
- **Don't:** Don't drop the browser mock-up; it is the product proof under the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
