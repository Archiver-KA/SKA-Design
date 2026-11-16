# Design system — Restaurant About Us Landing Page Template

`SN-W02970` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, editorial about page: a near-black ground with a large white serif heading centred over a darkened hero photograph. Red (#cf2e2e) is reserved for the active navigation item and small outlined eyebrow labels, so the page stays restrained. Body copy is Roboto in muted grey, and the serif display type carries the storytelling.

**Mood:** moody, editorial, restrained, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#0d0d0d` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#cf2e2e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#cf2e2e` · `#0d0d0d` · `#6b7280` · `#9ca3af` · `#171717` · `#000000` · `#1a1a1a` · `#e5e5e5` · `#161616`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Roboto
- **Loaded families:** Roboto, ZCOOL XiaoWei
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium tracking-wide shadow-lg shadow-primary/20 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Listings (`listings`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #0d0d0d;
  --color-text: #f5f5f5;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #cf2e2e;
  --font-display: "a serif face", serif;
  --font-body: "Roboto", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#0d0d0d',
    ink: '#f5f5f5',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#cf2e2e',
  },
  fontFamily: { display: ['a serif face'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Use the red (#cf2e2e) only for the active navigation link and eyebrow labels.
- **Do:** Set headings in a large serif, centred over the hero photograph.
- **Do:** Darken hero photography to near black so the white serif stays legible.
- **Don't:** Don't use red as a background behind body text.
- **Don't:** Don't set body copy in the serif; keep it in Roboto.
- **Don't:** Don't put bright colour fills on secondary buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
