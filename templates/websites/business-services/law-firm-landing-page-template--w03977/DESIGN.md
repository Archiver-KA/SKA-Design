# Design system — Law Firm Landing Page Template

`SN-W03977` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A monochrome, dark law-firm page on near-black (#0a0a0a). The headline pairs a white serif roman line with an italic line in pale grey, which gives the page a literary voice. A solid white primary button sits beside an outlined secondary, and a thin rule marks the intro paragraph. Colour is absent, so the typography carries the whole design.

**Mood:** monochrome, literary, dark, formal, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#262626` · `#737373` · `#e5e5e5` · `#0a0a0a` · `#d4d4d4` · `#f5f5f5` · `#a3a3a3` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-card`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-subtle">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Booking form (`booking`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)
9. Sign-in form (`auth-form`)
10. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #f5f5f5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ffffff;
  --color-accent-2: #10b981;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#f5f5f5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#ffffff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines as a serif roman line followed by an italic line
- **Do:** Use the solid white button for the primary action and an outline for the secondary
- **Do:** Mark intro paragraphs with a thin vertical rule on the left
- **Don't:** Don't introduce colour accents to the monochrome palette
- **Don't:** Don't use bright colours anywhere in the hero
- **Don't:** Don't set the italic line in bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
