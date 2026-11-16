# Design system — Architectural Portfolio Landing Panel

`SN-W01799` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Confident and editorial, with a heavy grotesque hero: near-black capitals stacked tightly on a cream ground, the middle phrase set in burnt orange (#d97706) and a short orange rule under the headline. Dark filled and outlined pill buttons carry the calls to action. Floating round badges and a cream stat card add a layered, product-like depth, and orange is the only colour used for emphasis.

**Mood:** confident, editorial, warm, corporate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#57534e` · `#44403c` · `#f5f5f4` · `#292524` · `#b45309` · `#d97706` · `#e7e5e4` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Manrope
- **Scale (largest breakpoint):** h1 72px · h3 36px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-[1440px]`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 text-sm font-semibold bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-full transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #ffffff;
  --color-accent: #d97706;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#ffffff',
    accent: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted phrase of the headline in burnt orange (#d97706) only
- **Do:** Use dark filled and outlined pill buttons for calls to action
- **Do:** Keep headlines heavy, tightly stacked and in near-black capitals
- **Don't:** Don't use orange for body text or large background areas
- **Don't:** Don't use more than one accent colour in the hero
- **Don't:** Don't remove the floating badges and stat card; they are part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
