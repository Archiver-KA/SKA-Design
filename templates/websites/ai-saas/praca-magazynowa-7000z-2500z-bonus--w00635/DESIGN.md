# Design system — Praca Magazynowa 7000zł+ 2500zł Bonus

`SN-W00635` · ai-saas · light mode · Sinera Atlas theme `route` · language `pl`

## Direction

A job-recruitment hero that puts the pay figure in amber (#f59e0b) as the second-strongest element after the headline. The page is white, with a heavy near-black sans headline and a small grey caveat line under the figure. The right half is a flat grey panel, and a single black pill button is the call to action.

**Mood:** direct, plain, bold-number, job-ad, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#f59e0b` · `#ffffff` · `#57534e` · `#78716c` · `#a8a29e` · `#292524` · `#fbbf24` · `#fdfbf7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 20px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-inner`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-3 bg-amber-500 text-stone-900 px-8 py-4 rounded-full text-sm font-medium transition-all hover:bg-stone-900 hover:text-white shadow-sm hover:shadow-[0_8px_30px_rgba(245,158,11,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Benefits (`benefits`)
5. Feature grid (`features`)
6. Services (`services`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e7e5e4;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #f59e0b;
  --color-accent-2: #dc2626;
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
    surface: '#e7e5e4',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#f59e0b',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#f59e0b) only for the pay figure and its currency sign
- **Do:** Set the headline in heavy Inter in near-black (#1c1917) on white
- **Do:** Make the call to action a black pill button with a short reassurance line under it
- **Don't:** Don't use amber for buttons; the black button is the action
- **Don't:** Don't set the pay in grey; it must read as the second element after the headline
- **Don't:** Don't use amber as a page background; the ground is white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
