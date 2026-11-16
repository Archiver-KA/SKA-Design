# Design system — Luxury Salon Landing Page Template

`SN-W02788` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, quiet salon hero on near-black (#09090b) with a small pill badge above. A large white serif headline sits in two lines, the second in italic with a warm gold gradient, over light grey body copy. The primary button is solid off-white and the secondary outlined, so gold stays on the headline.

**Mood:** dark, refined, warm, classic, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#71717a` · `#18181b` · `#09090b` · `#f59e0b` · `#a1a1aa` · `#d4d4d8` · `#3f3f46` · `#d4af37`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 24px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full md:w-auto px-8 py-4 md:py-3 bg-zinc-100 text-zinc-950 font-medium rounded-sm hover:bg-white hover:scale-105 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Map / location (`map-location`)
5. Footer (`footer`)
6. Sidebar (`sidebar`)
7. Dashboard preview (`dashboard-preview`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f59e0b;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic with a gold gradient from #f59e0b to a pale yellow.
- **Do:** Keep the primary button solid off-white and the secondary outlined on black.
- **Do:** Keep the page on near-black (#09090b) with grey body copy.
- **Don't:** Don't use gold on buttons or body copy.
- **Don't:** Don't add bright hues; the palette stays black, white and gold.
- **Don't:** Don't replace the serif headline with a sans; the serif is the signature.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
