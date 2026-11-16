# Design system — ArtbyAnuvaa

`SN-W01810` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Gallery-first and serif: a mid-grey ground (#a3a3a3) holds a large white serif headline, Art designed to belong, with the second line in italic. A white filled button sits beside an underlined text link. Small uppercase labels frame the top and bottom edges. The palette is neutral and the serif carries the artistic voice, with no accent colour in the hero.

**Mood:** gallery, serif, soft, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#a3a3a3` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#f5f5f5` · `#000000` · `#e5e5e5` · `#d4d4d4` · `#737373` · `#a3a3a3` · `#525252` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Product grid (`product-grid`)
5. Marquee (`marquee`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #a3a3a3;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #1e3a8a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#a3a3a3',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#1e3a8a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the main headline in a large white serif with the second line in italic
- **Do:** Pair a white filled primary button with an underlined text link
- **Do:** Keep labels small, uppercase and widely spaced at the edges
- **Don't:** Don't add a saturated accent; the look is neutral
- **Don't:** Don't set the page on pure black; the ground is mid-grey
- **Don't:** Don't swap the serif headline for a sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
