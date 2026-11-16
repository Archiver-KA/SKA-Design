# Design system — Bali Spa & Wellness Landing Page Template

`SN-W02323` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A quiet spa page on an off-white ground (#fcfbf9) with a blush panel (#f4ecec) and deep green-black text (#2d3b2f). The headline is a large serif, and its second line is set in italic mauve (#9d8189), which is the one colour move on the page. Photography is cropped large and softly toned, with no shadows or heavy borders, so the page reads as airy and natural.

**Mood:** serene, natural, editorial, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#f4ecec` | Cards, panels, raised areas |
| Text | `#2d3b2f` | Headings and primary copy |
| Muted text | `#9d8189` | Secondary copy, captions |
| Border | `#e8e4dc` | Hairlines, dividers, outlines |
| Accent | `#9d8189` | Primary action and highlights |

Palette by frequency of use: `#9d8189` · `#2d3b2f` · `#6c7c70` · `#fcfbf9` · `#e8e4dc` · `#f4ecec` · `#d1d5db` · `#dcd3d3` · `#ffffff` · `#4a5d4e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Cormorant Garamond, Outfit
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[#9d8189]/5`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-3 bg-[#2d3b2f] text-[#fcfbf9] rounded-full overflow-hidden transition-all hover:bg-[#3d4f40]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #f4ecec;
  --color-text: #2d3b2f;
  --color-muted: #9d8189;
  --color-border: #e8e4dc;
  --color-accent: #9d8189;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#f4ecec',
    ink: '#2d3b2f',
    muted: '#9d8189',
    line: '#e8e4dc',
    accent: '#9d8189',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in italic mauve (#9d8189) and leave the rest in dark green-black.
- **Do:** Keep section grounds on the off-white (#fcfbf9) and use the blush (#f4ecec) only for panels.
- **Do:** Put small uppercase, letter-spaced labels above headlines, such as BALI INSPIRED WELLNESS.
- **Don't:** Don't use bright colours; the palette stays in neutrals and mauve.
- **Don't:** Don't add heavy borders or drop shadows.
- **Don't:** Don't set headlines in Outfit; they are serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
