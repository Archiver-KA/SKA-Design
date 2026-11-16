# Design system — Silin Salon

`SN-W02817` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A soft, light salon page on a warm off-white ground (#f8f5f1), with blurred peach and pink glows at the edges. The wordmark is a small serif, and the one strong colour is a bright green pill (#06c755) for the booking action, which suits a messaging-app booking channel.

**Mood:** soft, light, airy, modest

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f5f1` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#06c755` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#f8f5f1` · `#292524` · `#e7e5e4` · `#a8a29e` · `#000000` · `#d6d3d1` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Great Vibes
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#05b34c] transition-all shadow-lg shadow-green-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8f5f1;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #06c755;
  --color-accent-2: #ffedd5;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f5f1',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#06c755',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on the warm off-white ground (#f8f5f1) with soft glows at the edges
- **Do:** Use the bright green (#06c755) only for the booking button
- **Do:** Set the wordmark in a small serif, as in the navigation
- **Don't:** Don't fill the page with the glow colours; they stay at the edges
- **Don't:** Don't use the green for links or headings
- **Don't:** Don't add a second strong colour; the green is the only one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
