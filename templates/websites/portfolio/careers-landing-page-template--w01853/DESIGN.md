# Design system — Careers Landing Page Template

`SN-W01853` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A centred, light careers page where a large bold Inter headline sits over a grey subtitle, with the final word set in a slate gradient. The main call to action is a solid navy pill beside an outlined pill, so navy carries all the emphasis.

**Mood:** clean, corporate, friendly, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#94a3b8` · `#64748b` · `#e2e8f0` · `#cbd5e1` · `#f1f5f9` · `#f8fafc` · `#475569` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_0_20px_rgba(59,130,246,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="h-12 px-8 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Schedule (`schedule-agenda`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #a855f7;
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
    accent: '#0f172a',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold Inter in navy (#0f172a), centred
- **Do:** Use a solid navy pill as the primary button and an outlined pill beside it
- **Do:** Keep the grey subtitle (#64748b) short, under three lines
- **Don't:** Don't use the lilac accent (#a855f7) on the first screen
- **Don't:** Don't leave photo slots without images
- **Don't:** Don't use square buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
