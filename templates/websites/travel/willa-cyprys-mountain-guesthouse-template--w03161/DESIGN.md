# Design system — Willa Cyprys - Mountain Guesthouse Template

`SN-W03161` · travel · light mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A guesthouse hero where a snowy alpine photograph sits under a pale frosted veil, so the image reads light and washed out. The centred headline is dark grey in a large sans, with two translucent pill buttons below for a phone number and an address.

**Mood:** calm, alpine, soft, hospitable, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e2e8f0` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#000000` · `#262626` · `#334155` · `#6366f1` · `#e2e8f0` · `#ffedd5` · `#818cf8` · `#eab308` · `#ffffff` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Nunito
- **Scale (largest breakpoint):** h1 72px · h2 36px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border text-sm font-medium transition-colors bg-black/5 hover:bg-black/10 border-black/10 text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e2e8f0;
  --color-surface: #000000;
  --color-text: #262626;
  --color-muted: #262626;
  --color-border: #000000;
  --color-accent: #e2e8f0;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e2e8f0',
    surface: '#000000',
    ink: '#262626',
    muted: '#262626',
    line: '#000000',
    accent: '#e2e8f0',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place the headline over a pale frosted veil on the photograph, in dark grey (#262626)
- **Do:** Use translucent white pill buttons for the phone and address actions
- **Do:** Keep the photograph full-bleed behind the hero
- **Don't:** Don't use the orange (#f97316) as the page ground; the page is pale
- **Don't:** Don't set the headline in white over the pale veil
- **Don't:** Don't use solid black fills for the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
