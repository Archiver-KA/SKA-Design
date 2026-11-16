# Design system — Academic Coaching Landing Page Template

`SN-W03396` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark green-black coaching page with a light headline whose second line is set in italic mint (#6ee7b7). Mint pill buttons lead the actions, with a dark outlined button beside them, and the same mint carries into the results figures and the highlighted grade in the feature card. Panels sit slightly lighter than the ground, and the copy is soft white, which keeps the page calm and academic.

**Mood:** calm, academic, composed, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1b2320` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ecfdf5` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#6ee7b7` | Primary action and highlights |
| Second accent | `#f4eadf` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ecfdf5` · `#44403c` · `#064e3b` · `#d1fae5` · `#6ee7b7` · `#e7e5e4` · `#f4eadf` · `#a7f3d0` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 42px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-800/80 px-3.5 py-1.5 text-xs font-medium text-emerald-100 hover:border-emerald-500 hover:bg-emerald-900/30 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1b2320;
  --color-surface: #1c1917;
  --color-text: #ecfdf5;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #6ee7b7;
  --color-accent-2: #f4eadf;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1b2320',
    surface: '#1c1917',
    ink: '#ecfdf5',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#6ee7b7',
    accent2: '#f4eadf',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in soft white (#ecfdf5) with the second line in italic mint (#6ee7b7).
- **Do:** Use the mint pill for the primary button and the results figures; keep the secondary dark and outlined.
- **Do:** Keep feature panels slightly lighter than the green-black ground, with rounded corners.
- **Don't:** Don't set body copy in mint; body stays soft white or grey.
- **Don't:** Don't add a second accent colour beside the mint and cream.
- **Don't:** Don't use pure black for the ground; it stays green-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
