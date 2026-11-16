# Design system — DC Atlas Data Center SaaS Landing Page Template

`SN-W00333` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A sober data-centre page on a near-black ground (#0c0a09) with large white Roboto headlines set centred. The closing phrase is italic in warm grey, the one expressive move in an otherwise plain layout. Teal is the only accent, held for primary calls to action, and a faint vignette sits behind the hero.

**Mood:** sober, focused, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e7e5e4` · `#57534e` · `#292524` · `#f5f5f4` · `#14b8a6` · `#0d9488` · `#78716c` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Roboto
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 18px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-teal-500/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-sm font-medium px-4 py-2 rounded-full transition-colors bg-teal-600 dark:bg-teal-500 text-white dark:text-white hover:bg-teal-700 dark:hover:bg-teal-400 shadow-lg shadow-teal-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Map / location (`map-location`)
5. Articles (`blog-articles`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Comparison (`comparison`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #0d9488;
  --color-accent-2: #f59e0b;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#0d9488',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of the headline in italic warm grey
- **Do:** Use teal (#0d9488) for the primary button only
- **Do:** Keep the headline and intro copy centred with a wide measure in the hero
- **Don't:** Don't add a second bright accent beside the teal
- **Don't:** Don't use light backgrounds for hero sections
- **Don't:** Don't set the italic phrase in full white; it stays grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
