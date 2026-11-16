# Design system — dear nail

`SN-W02737` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Soft cream page with a centred serif headline in charcoal, where the brand name is set in italic in a pink highlight. The header is a thin bar with a dark pill booking button, and the hero action is a pale pink pill with pink text. Arched photo frames below the hero give the layout a gentle, boutique tone.

**Mood:** soft, boutique, feminine, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdf6f3` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ead2bb` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fdf6f3` · `#ead2bb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-brand-500/5`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-dark-800 hover:bg-brand-500 text-white text-xs font-medium uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-500/10">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. About (`about`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdf6f3;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #ead2bb;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdf6f3',
    surface: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#ead2bb',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, with the brand name in italic and in the pink highlight
- **Do:** Keep the page ground cream (#fdf6f3) and use white for cards
- **Do:** Frame salon and nail photos in arches or rounded shapes
- **Don't:** Don't make the hero action a dark filled button; the hero action is a pale pink pill
- **Don't:** Don't set the headline in bold; the headline uses a regular serif weight
- **Don't:** Don't use sharp rectangular photo frames; the layout uses arches

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
