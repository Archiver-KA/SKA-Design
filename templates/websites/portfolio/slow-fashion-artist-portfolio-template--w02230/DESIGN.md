# Design system — Slow Fashion Artist Portfolio Template

`SN-W02230` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A muted, dark sage-green hero with a large serif headline in warm off-white (#f3f0eb), where the second line is set in italic dusty pink (#d4a5a5). Small pill labels and a thin outlined nav button stay quiet, and body copy is a plain sans. The warm pink against the green is the one recognisable pairing, giving the brand a crafted, textile feel.

**Mood:** muted, crafted, organic, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2a332c` | Page ground |
| Surface | `#3a453c` | Cards, panels, raised areas |
| Text | `#f3f0eb` | Headings and primary copy |
| Border | `#f3f0eb` | Hairlines, dividers, outlines |
| Accent | `#d4a5a5` | Primary action and highlights |

Palette by frequency of use: `#f3f0eb` · `#d4a5a5` · `#2a332c` · `#3a453c` · `#8b5e5e` · `#ffffff` · `#354038` · `#2f3a32` · `#252c26`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 18px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="hover-trigger px-5 py-2 border border-[#F3F0EB]/20 rounded-full text-xs uppercase tracking-widest hover:bg-[#F3F0EB] hover:text-[#2A332C] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Product grid (`product-grid`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2a332c;
  --color-surface: #3a453c;
  --color-text: #f3f0eb;
  --color-border: #f3f0eb;
  --color-accent: #d4a5a5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2a332c',
    surface: '#3a453c',
    ink: '#f3f0eb',
    line: '#f3f0eb',
    accent: '#d4a5a5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif in warm off-white (#f3f0eb), with the second line in italic dusty pink (#d4a5a5)
- **Do:** Keep the ground dark sage (#2a332c) and lift cards one step to #3a453c
- **Do:** Use the pink only for the italic line and small highlights
- **Don't:** Don't use bright colours; the palette stays muted
- **Don't:** Don't set the italic line in the sans used for body text
- **Don't:** Don't add bright gradients over the green ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
