# Design system — CRAV | Artisan Smashed Burger Template

`SN-W02879` · food-beverage · light mode · Sinera Atlas theme `route` · language `en`

## Direction

Loud, bright and simple. A cream ground (#f4ebe1) carries a huge uppercase red headline (#f91814), with a yellow subline (#f9cd25) under it, in a pop-poster arrangement and a faint oversize wordmark behind. Red fills the logo and the nav action, while the yellow stays on the subhead. The body copy is short and set in narrow blocks beneath the photograph.

**Mood:** loud, bright, poster, fast-food

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4ebe1` | Page ground |
| Surface | `#2c1608` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#f91814` | Primary action and highlights |
| Second accent | `#f9cd25` | Supporting highlights |

Palette by frequency of use: `#f91814` · `#ffffff` · `#71717a` · `#a1a1aa` · `#f4f4f5` · `#f4ebe1` · `#18181b` · `#b91c1c` · `#d4d4d8` · `#40220d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Modak, Mouse Memoirs, &quot
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-red-500/20`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center text-xs uppercase tracking-tight font-medium text-white bg-[#f91814] hover:bg-red-700 px-5 py-2 rounded-full transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Map / location (`map-location`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4ebe1;
  --color-surface: #2c1608;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #f4f4f5;
  --color-accent: #f91814;
  --color-accent-2: #f9cd25;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4ebe1',
    surface: '#2c1608',
    ink: '#111111',
    muted: '#ffffff',
    line: '#f4f4f5',
    accent: '#f91814',
    accent2: '#f9cd25',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in uppercase red (#f91814) at display size
- **Do:** Use the yellow (#f9cd25) for the subhead only, never for buttons
- **Do:** Keep the ground in cream (#f4ebe1) and let the red carry the emphasis
- **Don't:** Don't set body text in red or yellow
- **Don't:** Don't set small text in yellow on the cream ground; contrast is too low
- **Don't:** Don't add a dark hero band; the page is cream from top to bottom

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
