# Design system — Health and Science SaaS Landing Page Template

`SN-W02391` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A white ground carries a cyan (#06b6d4) accent, dark slate text and a system sans-serif, with light grey borders and gradient fills. The overall tone is modest, clinical and clean, with a restrained layout.

**Mood:** clinical, clean, modest, light, unverified

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#5a6470` | Secondary copy, captions |
| Border | `#d1d9e0` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#111827` · `#d1d9e0` · `#5a6470` · `#94a3b0` · `#0e7490` · `#f8fafc` · `#edf1f5` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 64px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.05em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[1200px]`, `max-w-[1400px]`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden sm:block bg-[#06B6D4] hover:bg-[#0E7490] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all shadow-[0_4px_8px_rgba(0,0,0,0.12)] hover:shadow-lg">…</a>
```

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** AOS scroll reveal, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #111827;
  --color-muted: #5a6470;
  --color-border: #d1d9e0;
  --color-accent: #06b6d4;
  --color-accent-2: #f59e0b;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#111827',
    muted: '#5a6470',
    line: '#d1d9e0',
    accent: '#06b6d4',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set headings in the system sans-serif at a large size in dark slate (#111827).
- **Do:** Use the cyan (#06b6d4) for the primary button and small highlights.
- **Do:** Keep borders light grey (#d1d9e0) on the white ground.
- **Don't:** Don't use the cyan (#06b6d4) for large background surfaces.
- **Don't:** Don't add gradient fills to large surfaces.
- **Don't:** Don't set body copy in the cyan.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
