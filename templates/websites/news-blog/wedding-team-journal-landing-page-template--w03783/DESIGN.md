# Design system — Wedding Team Journal Landing Page Template

`SN-W03783` · news-blog · light mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

An editorial wedding page on a warm off-white ground, with a large Playfair Display headline that sets an upright line beside an italic second word. Headlines and key labels are in deep green (#2f4f38), so the page reads as calm and printed. The hero splits text on one side from tall image blocks on the other, and wide gaps keep the layout airy.

**Mood:** elegant, airy, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#78716c` | Cards, panels, raised areas |
| Text | `#2f4f38` | Headings and primary copy |
| Muted text | `#d6d3cd` | Secondary copy, captions |
| Border | `#2f4f38` | Hairlines, dividers, outlines |
| Accent | `#2f4f38` | Primary action and highlights |

Palette by frequency of use: `#2f4f38` · `#ffffff` · `#78716c` · `#f0efec` · `#d6d3cd` · `#57534e` · `#fdfcf8` · `#e7e5e0` · `#a8a29e` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-12`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="absolute top-4 right-4 bg-white/80 p-2 rounded-full z-10 hover:bg-[#2F4F38] hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)
6. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #78716c;
  --color-text: #2f4f38;
  --color-muted: #d6d3cd;
  --color-border: #2f4f38;
  --color-accent: #2f4f38;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#78716c',
    ink: '#2f4f38',
    muted: '#d6d3cd',
    line: '#2f4f38',
    accent: '#2f4f38',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at a large size, with one italic word in each headline.
- **Do:** Use deep green (#2f4f38) for headlines and key labels, not for large fills.
- **Do:** Keep the page on the warm off-white ground (#fdfcf8).
- **Don't:** Don't set body copy in the serif face.
- **Don't:** Don't place saturated colours beside the green palette.
- **Don't:** Don't crowd the hero; keep wide gaps between text and image blocks.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
