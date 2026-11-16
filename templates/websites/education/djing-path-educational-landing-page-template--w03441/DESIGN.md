# Design system — DJing Path Educational Landing Page Template

`SN-W03441` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark shop page on near-black [#000000], with a product image on the left and a product panel on the right. The title is set in uppercase sans-serif, and two stacked full-width buttons, pink [#ea4cff] and cyan [#67e8f9], carry the purchase choice. Small tags and green price notes are used sparingly.

**Mood:** dark, commercial, vivid, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea4cff` | Primary action and highlights |
| Second accent | `#67e8f9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#71717a` · `#d4d4d8` · `#18181b` · `#27272a` · `#a1a1aa` · `#52525b` · `#3f3f46` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_20px_rgba(234,76,255,0.3)]`, `shadow-[0_0_20px_rgba(79,250,246,0.3)]`
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-0.5`

**Primary button**

```html
<a class="w-full py-3 bg-seedj-magenta hover:bg-fuchsia-400 text-black font-medium text-sm uppercase tracking-wide rounded transition-all hover:shadow-[0_0_20px_rgba(234,76,255,0.3)] hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Articles (`blog-articles`)
6. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #ea4cff;
  --color-accent-2: #67e8f9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#ea4cff',
    accent2: '#67e8f9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use pink (#ea4cff) for the one-off purchase button and cyan (#67e8f9) for the subscription button
- **Do:** Set product titles in uppercase sans-serif
- **Do:** Keep product panels as dark cards on the near-black (#000000) page
- **Don't:** Don't set body text in pink or cyan
- **Don't:** Don't use light backgrounds for the product panels
- **Don't:** Don't use more than one bright button per purchase option

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
