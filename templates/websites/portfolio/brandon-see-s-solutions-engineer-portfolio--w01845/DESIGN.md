# Design system — Brandon See's Solutions Engineer Portfolio 

`SN-W01845` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white ground with a soft pastel gradient (pink, lavender, pale blue) washes the right side behind dark Inter text. The headline is large, bold and tightly set, with a grey subtitle and body. Small uppercase grey labels mark sections without any colour.

**Mood:** light, soft, technical, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#f9a8d4` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#52525b` · `#e4e4e7` · `#71717a` · `#3f3f46` · `#a1a1aa` · `#fafafa` · `#27272a` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 20px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-[1200px]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-zinc-900 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-zinc-800 transition-colors shadow-sm gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Timeline (`timeline`)
6. Case studies (`case-studies`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #27272a;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #60a5fa;
  --color-accent-2: #f9a8d4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#27272a',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#60a5fa',
    accent2: '#f9a8d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold Inter at large size, in near-black (#18181b)
- **Do:** Keep pastel gradients behind the hero, never behind body copy
- **Do:** Use small uppercase grey labels to mark sections such as Core focus
- **Don't:** Don't use the dark theme roles; the page is light.
- **Don't:** Don't let the gradient sit behind body copy
- **Don't:** Don't leave a logo slot without its image.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
