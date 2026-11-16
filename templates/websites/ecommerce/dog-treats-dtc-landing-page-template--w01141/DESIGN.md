# Design system — Dog Treats DTC Landing Page Template

`SN-W01141` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A light, science-led waitlist page on a warm off-white ground, with a very large dark headline set in tight, stacked lines. The email field and a dark button sit in one row under the copy, and an image card on the right holds a small floating note. The palette is nearly monochrome, so the page reads as calm and credible rather than playful.

**Mood:** calm, credible, monochrome, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#78716c` · `#a8a29e` · `#f5f5f4` · `#44403c` · `#fff7ed` · `#fafaf9` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 16px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs font-medium text-stone-900 bg-white border border-stone-200 px-3 py-1.5 rounded-md shadow-sm hover:border-stone-300 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Comparison (`comparison`)
6. Testimonials (`testimonials`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large sans-serif, tightly leaded in near-black
- **Do:** Pair the email field and the dark button in one row
- **Do:** Keep the floating note card small, with a single coloured dot
- **Don't:** Don't use the peach (#fed7aa) for buttons; the button is dark
- **Don't:** Don't add playful illustration or bright colour
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
