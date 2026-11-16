# Design system — Lawyer Landing Page Template

`SN-W03981` · business-services · dark mode · Sinera Atlas theme `route` · language `pl`

## Direction

A dark, photographic hero: a team portrait sits under a deep overlay, with a large bold sans-serif headline in white and one gold word (#d4af37) for emphasis. Gold is used only on that word and a small label, so the emphasis stays precise. A white contact card on the right gives a clear, form-first path, which makes the page feel direct and trustworthy.

**Mood:** trustworthy, direct, serious, warm, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#334155` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#f8fafc` · `#e2e8f0` · `#334155` · `#64748b` · `#f1f5f9` · `#d4af37` · `#475569` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-glow`, `shadow-[0_0_20px_rgba(255,255,255,0.15)]`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 bg-white text-navy-900 rounded font-medium text-center hover:bg-slate-100 transition shadow-[0_0_20px_rgba(255,255,255,0.15)]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Call to action (`cta`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #334155;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #d4af37;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#334155',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use gold (#d4af37) only on the key headline word and the small label above it
- **Do:** Place a white contact card beside the headline in the hero
- **Do:** Use people photography under a dark overlay so white text stays legible
- **Don't:** Don't put the gold on large areas or buttons
- **Don't:** Don't set the hero headline in a light weight
- **Don't:** Don't place the contact card on a dark background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
