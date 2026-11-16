# Design system — Modak-Cafe n Restaurant in Sanawad

`SN-W02949` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bright cafe page with a heavy sans headline over a dark photograph of a cafe interior, the hero copy in white and the first word of the headline in a pale peach tint. The white pill buttons and the small rating badge keep the hero light against the dark photo. The page ground is off-white (#f5f5f5), so the hero reads as a large framed image rather than a dark page.

**Mood:** friendly, bright, urban, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f5f5f5` · `#262626` · `#000000` · `#a3a3a3` · `#171717` · `#fafafa` · `#737373` · `#ea580c` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-all font-geist group shadow-lg shadow-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Bento grid (`bento-grid`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ea580c',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place the cafe photo as a framed hero and darken it so the white headline reads
- **Do:** Set the headline in a heavy sans and tint the first word in a pale warm colour
- **Do:** Use white pill buttons with dark text over the photo
- **Don't:** Don't place dark text over the photo; the copy is white
- **Don't:** Don't add more than one pale highlight word per headline
- **Don't:** Don't use an orange fill for buttons in this layout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
