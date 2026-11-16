# Design system — Luxury Hotel Landing Page Template

`SN-W03090` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A full-bleed photographic hero with a dark overlay carries a centred, heavy sans-serif headline in white. The page ground is white (#ffffff) with near-black text, and the burnt orange (#b45309) appears only on the primary action button. The look is a plain modern hotel layout where the photograph and the bold headline do most of the work.

**Mood:** bold, photographic, modern, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#b45309` · `#e5e5e5` · `#525252` · `#f5f5f4` · `#fafafa` · `#a3a3a3` · `#f59e0b` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-amber-900/20`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Listings (`listings`)
6. Bento grid (`bento-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f4;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #b45309;
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
    surface: '#f5f5f4',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#b45309',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put a dark overlay over hero photographs so white headline text stays legible
- **Do:** Set hero headlines in Inter at heavy weight, centred
- **Do:** Use the burnt orange (#b45309) for the main button only, in a pill shape
- **Don't:** Don't use a serif for headlines; the template is all sans-serif
- **Don't:** Don't place text directly on the bright parts of the photograph
- **Don't:** Don't use the orange for more than one action per screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
