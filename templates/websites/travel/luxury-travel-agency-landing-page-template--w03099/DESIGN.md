# Design system — Luxury Travel Agency Landing Page Template

`SN-W03099` · travel · light mode · Sinera Atlas theme `dwell` · language `pt-br`

## Direction

A light, centred hero on white with a large heavy sans-serif headline in near-black, whose second line fades to grey. The eyebrow is small uppercase with a single small indigo dot, and the primary action is a near-black pill. The page is almost monochrome, so type weight and the grey shift carry the hierarchy. The copy is in Portuguese.

**Mood:** monochrome, airy, confident, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#a1a1aa` · `#f4f4f5` · `#e4e4e7` · `#27272a` · `#000000` · `#fafafa` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-zinc-900 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #18181b;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#18181b',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter, first line near-black and second line grey
- **Do:** Use the near-black (#18181b) pill for the primary button
- **Do:** Keep the eyebrow in small uppercase with one small indigo dot before it
- **Don't:** Don't add colour fills to the hero; it relies on type
- **Don't:** Don't set the second headline line in full black; it is grey
- **Don't:** Don't use the indigo (#6366f1) beyond the eyebrow dot

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
