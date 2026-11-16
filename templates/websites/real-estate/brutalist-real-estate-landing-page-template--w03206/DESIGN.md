# Design system — Brutalist Real Estate Landing Page Template

`SN-W03206` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome, brutalist real-estate page where a heavy black uppercase headline overlaps a grayscale interior photograph. The type runs across the image with a stroked, layered effect, and the layout is divided by hairline vertical rules. The page is black, white and grey, and the photograph carries the detail.

**Mood:** brutal, monochrome, bold, raw

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#000000` · `#a3a3a3` · `#fafafa` · `#f5f5f5` · `#e5e5e5` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-xl`, `shadow-neutral-200`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="text-xs uppercase tracking-widest font-bold border border-neutral-900 px-4 py-1 hover:bg-neutral-900 hover:text-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #171717;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#171717',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase black, overlapping the photograph
- **Do:** Keep the photograph in grayscale and let it carry the detail
- **Do:** Divide the layout with hairline vertical rules
- **Don't:** Don't add colour to the photographs or the UI
- **Don't:** Don't set headlines in a light weight
- **Don't:** Don't round the corners of the photograph frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
