# Design system — Coffee Shop Landing Page 

`SN-W01127` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A coffee shop page opens on a dark, shaded photograph of cups, with white text on the left side of the frame. The headline is a heavy sans-serif, and its second line is a light serif italic for the place name. A solid white button sits beside a thin outlined box, and the navigation is a small row of links, so the warm tones come only from the photograph.

**Mood:** warm, photographic, editorial, relaxed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#fafaf9` · `#78716c` · `#a8a29e` · `#44403c` · `#f5f5f4` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-black/20`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 text-xs font-medium text-stone-600 px-4 py-2 hover:bg-stone-100 rounded-full transition-colors border border-transparent hover:border-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Modal / overlay (`modal-overlay`)
4. Booking form (`booking`)
5. Services (`services`)
6. Menu list (`menu-list`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #1c1917;
  --color-accent: #fb923c;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#1c1917',
    accent: '#fb923c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Lead with a shaded photograph of the product and keep white text on its left side
- **Do:** Set the second headline line in a light serif italic.
- **Do:** Use a solid white primary button beside a thin outlined secondary button
- **Don't:** Don't set text over the bright foam of the photo without the shade
- **Don't:** Don't introduce orange accents.
- **Don't:** Don't frame the hero image with a heavy border

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
