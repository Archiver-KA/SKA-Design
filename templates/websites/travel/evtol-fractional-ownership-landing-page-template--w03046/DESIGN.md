# Design system — eVTOL Fractional Ownership Landing Page Template

`SN-W03046` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, near-black page (#09090b) with white display type set in a system sans, and indigo (#6366f1) reserved for the primary call to action pills and the eyebrow badge. Hierarchy comes from scale: a large two-line headline sits over a muted paragraph, and the layout stays spare with one clear action per block. The result reads as a polished tech product landing page rather than an editorial one.

**Mood:** dark, futuristic, minimal, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#71717a` · `#a1a1aa` · `#09090b` · `#818cf8` · `#18181b` · `#a5b4fc` · `#27272a` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 20px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-indigo-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-16`, `gap-8`

**Primary button**

```html
<a class="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Use indigo (#6366f1) only for primary buttons and the eyebrow badge
- **Do:** Set headlines in the system sans at large size on #09090b
- **Do:** Keep secondary copy in muted grey (#a1a1aa)
- **Don't:** Don't switch sections to light backgrounds; the page stays near-black
- **Don't:** Don't place two indigo buttons side by side in one view
- **Don't:** Don't use the green (#10b981) as a second accent in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
