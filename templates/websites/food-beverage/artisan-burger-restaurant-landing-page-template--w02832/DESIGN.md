# Design system — Artisan Burger Restaurant Landing Page Template

`SN-W02832` · food-beverage · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A loud burger page on warm cream (#f4ebe1), with a very large uppercase red (#f91814) headline and a yellow (#f9cd25) subline. Red is the accent for the headline and the navigation pill, and the page has room for a large food photograph in the hero. Flat colour and heavy type make it read as poster-like.

**Mood:** loud, poster-like, bold, warm

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
- **Loaded families:** Inter, Modak, Mouse Memoirs
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

- **Do:** Set the headline in uppercase red (#f91814) in a heavy sans
- **Do:** Use the yellow (#f9cd25) for sublines and highlights, not for body text
- **Do:** Keep the cream ground (#f4ebe1) behind the red and yellow type
- **Don't:** Don't put yellow text on cream; the contrast is too low
- **Don't:** Don't use grey panels; the page is cream, red and yellow
- **Don't:** Don't use red as a large background; it is the headline colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
