# Design system — Seltzer Rodados

`SN-W00701` · ai-saas · dark mode · Sinera Atlas theme `route` · language `es`

## Direction

A bold, direct dealership look: a near-black navy ground (#020617) with a heavy uppercase headline in a serif face, and its last line set in red (#dc2626). Red marks that one emphasis line and the primary button, while the secondary action is a thin outlined button. A thin announcement strip sits above the navigation in small type, giving the page a commercial, no-frills tone.

**Mood:** bold, commercial, direct, high contrast, industrial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#dc2626` · `#e2e8f0` · `#cbd5e1` · `#ef4444` · `#94a3b8` · `#fee2e2` · `#f1f5f9` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Roboto Condensed
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-slate-200/70`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:flex">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set only the final headline line in red (#dc2626); keep the rest white.
- **Do:** Use red (#dc2626) for the primary button and an outlined button beside it.
- **Do:** Keep hero headlines uppercase and bold.
- **Don't:** Don't use red for body text or large fills; it is an emphasis colour.
- **Don't:** Don't leave the logo image unloaded in the header.
- **Don't:** Don't switch the hero to a light ground; the design is dark throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
