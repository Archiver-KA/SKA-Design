# Design system — Ahana Yoga Studio 

`SN-W02570` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, meditative studio page on a near-black ground (#1c1917) with warm off-white type. The headline pairs a light italic serif with a huge ghosted wordmark set low on the page, and a fine line-art leaf drawing adds texture. A muted sage (#8e9f92) marks the round accent and the booking button. The result is quiet, spacious and atmospheric.

**Mood:** meditative, dark, quiet, spacious, organic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#8e9f92` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#292524` · `#e7e5e4` · `#1c1917` · `#d6d3d1` · `#8e9f92` · `#78716c` · `#44403c` · `#4a5d4f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lato
- **Body:** Lato
- **Loaded families:** Cinzel, Cormorant Garamond, Lato
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** light, normal, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2.5 border border-stone-700 rounded-sm hover:bg-[#4A5D4F] hover:border-[#4A5D4F] hover:text-white transition-all duration-300 text-stone-300 text-sm tracking-wide group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Articles (`blog-articles`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #f5f5f4;
  --color-muted: #a8a29e;
  --color-border: #292524;
  --color-accent: #8e9f92;
  --font-display: "Lato", sans-serif;
  --font-body: "Lato", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#f5f5f4',
    muted: '#a8a29e',
    line: '#292524',
    accent: '#8e9f92',
  },
  fontFamily: { display: ['Lato'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Use the muted sage (#8e9f92) only for the booking button and small round accents
- **Do:** Set the oversized wordmark low in the hero at low contrast so it reads as texture
- **Do:** Pair a light italic serif headline with small, widely spaced sans-serif labels
- **Don't:** Don't use bright colours; the palette is near-black, cream and one sage tone
- **Don't:** Don't raise the ghosted wordmark to full contrast; it would compete with the headline
- **Don't:** Don't crowd the hero; the layout depends on empty space around the line art

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
