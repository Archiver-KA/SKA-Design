# Design system — Design Agency Landing Page Template

`SN-W01514` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A restrained light layout on a neutral grey ground, with a white rounded panel holding the floating content on the right and a thin left navigation column. Colour is almost absent: greys do the work and the strongest shapes are the black headline and the grey pill button. The look is flat.

**Mood:** neutral, airy, understated, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d4d4d4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#171717` · `#e5e5e5` · `#ffffff` · `#737373` · `#f5f5f5` · `#a3a3a3` · `#fafafa` · `#18181b` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Geist, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_2px_8px_rgba(0,0,0,0.02)]`, `shadow-[0_4px_16px_rgba(0,0,0,0.04)]`
- **Content width:** `max-w-[640px]`, `max-w-[52ch]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #d4d4d4;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #059669;
  --color-accent-2: #9333ea;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d4d4d4',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#059669',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground neutral grey (#d4d4d4) with white panels (#ffffff)
- **Do:** Set headlines in Inter at large size with tight leading
- **Do:** Keep the navigation as a plain text column with no icons
- **Don't:** Don't show error text in the floating panel
- **Don't:** Don't introduce a saturated colour in the first screen
- **Don't:** Don't use shadows heavier than the hairline border (#e5e5e5)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
