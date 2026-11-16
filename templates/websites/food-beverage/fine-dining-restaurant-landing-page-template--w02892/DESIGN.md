# Design system — Fine Dining Restaurant Landing Page Template

`SN-W02892` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black, cinematic page where the hero headline is set large in a sans with a single italic serif word in muted grey, creating two voices. The layout uses a rounded photograph of a terrace at dusk, with a frosted testimonial card overlapping its corner. Colour is nearly absent: white type, grey supporting text and a white primary button carry the page, so the photo sets the tone.

**Mood:** cinematic, monochrome, moody, minimal, contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#000000` · `#fb923c` · `#78716c` · `#1c1917` · `#a8a29e` · `#57534e` · `#d6d3d1` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.4)]`, `shadow-[0_0_15px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative overflow-hidden bg-white text-black text-xs font-semibold uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-stone-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Menu list (`menu-list`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a sans at display size, with one italic serif word in muted grey.
- **Do:** Use white for the primary button and headings; keep grey for supporting text.
- **Do:** Frame photographs in rounded corners and overlap a frosted card on one corner.
- **Don't:** Don't introduce orange or other accent colours; the page uses only white and grey.
- **Don't:** Don't use a light background; the page is near-black from top to bottom.
- **Don't:** Don't set the whole headline in italic; only one word is italic.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
