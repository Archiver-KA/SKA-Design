# Design system — Italian Restaurant Landing Page Template

`SN-W02919` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A dark, photo-led hero with a large white serif headline in three lines, where the middle word is set in italic orange (#fb923c). The background is a darkened close-up of pasta, and the solid orange button sits beside a thin outlined one. The stance is warm and direct, with orange kept to the italic word and the primary button, while the photograph supplies all the colour.

**Mood:** warm, direct, dark, photo-led, appetising

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0c0a09` · `#fb923c` · `#78716c` · `#a8a29e` · `#f97316` · `#e7e5e4` · `#1c1917` · `#d6d3d1` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(194,65,12,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-stone-100 text-stone-900 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-stone-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #e7e5e4;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#e7e5e4',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#fb923c',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a white serif over a darkened food photo.
- **Do:** Use orange (#fb923c) for the one italic word and the primary button only.
- **Do:** Pair the solid orange primary button with a thin outlined secondary button.
- **Don't:** Don't brighten the photo behind the headline; the overlay keeps the white type readable.
- **Don't:** Don't set the whole headline in orange; one word takes the accent.
- **Don't:** Don't use blue or green accents; the page uses only orange and white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
