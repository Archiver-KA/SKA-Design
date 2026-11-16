# Design system — Digital Trust Journal Template

`SN-W03761` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white, blunt hero with an oversized heavy sans-serif headline in near-black, where the second word is set larger in orange [#ea580c]. Grey and orange squares and a small pixel grid are the only graphic motifs, and the body copy sits in a narrow grey column on the right. The overall look is graphic, high-contrast and confident.

**Mood:** blunt, graphic, high-contrast, confident, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#e5e5e5` · `#ffffff` · `#ea580c` · `#d4d4d4` · `#737373` · `#a3a3a3` · `#f97316` · `#fafafa` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 text-sm font-medium hover:bg-neutral-900 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Articles (`blog-articles`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #ea580c;
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
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black sans-serif, with one word in orange (#ea580c)
- **Do:** Use the grid of grey and orange squares as the only decorative motif
- **Do:** Keep the body copy in a narrow grey column aligned to the right
- **Don't:** Don't use orange for more than one headline word per section
- **Don't:** Don't add gradients or shadows to the squares
- **Don't:** Don't set headlines in a serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
