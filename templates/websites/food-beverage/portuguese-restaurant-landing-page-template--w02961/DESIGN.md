# Design system — Portuguese Restaurant Landing Page Template

`SN-W02961` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `pt`

## Direction

A warm, traditional tasca page with a dark taupe photograph and a serif headline in white, the second line in a pale peach italic. Cream pill buttons sit on the photo and a deep brown button marks the nav reservation. The off-white ground below the hero keeps the page light, so the photo acts as a framed heritage image rather than the whole page.

**Mood:** traditional, warm, heritage, inviting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7c2d12` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#7c2d12` · `#78716c` · `#f5f5f4` · `#e7e5e4` · `#a8a29e` · `#431407` · `#57534e` · `#fed7aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-orange-900/10`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full md:w-auto bg-orange-100 text-orange-950 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white transition-all hover:-translate-y-1 shadow-xl shadow-black/20 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #7c2d12;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#7c2d12',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Playfair Display with the second line in peach italic
- **Do:** Use cream pills for the buttons on the photo and the deep brown (#7c2d12) for the nav reservation
- **Do:** Keep the hero photo framed and darkened, with the copy centred
- **Don't:** Don't set the italic line in a saturated orange; it reads as a soft peach
- **Don't:** Don't put the deep brown on the photo as a fill
- **Don't:** Don't add green; the page uses brown, cream and peach.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
