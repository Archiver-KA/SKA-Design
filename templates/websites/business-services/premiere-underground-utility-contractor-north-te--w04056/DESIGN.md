# Design system — Premiere Underground Utility Contractor North Texas

`SN-W04056` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, bold contractor page on a near-black ground. An uppercase orange kicker line leads into a large cream serif headline in sentence case, and solid orange buttons with uppercase labels sit beside a thin outlined one. Photography is dark and warm-lit with an orange glow, so the page feels heavy and industrial.

**Mood:** bold, industrial, dark, heavy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111210` | Page ground |
| Surface | `#2c2c2a` | Cards, panels, raised areas |
| Text | `#ede9e0` | Headings and primary copy |
| Border | `#ede9e0` | Hairlines, dividers, outlines |
| Accent | `#e8622a` | Primary action and highlights |
| Second accent | `#ede9e0` | Supporting highlights |

Palette by frequency of use: `#e8622a` · `#ede9e0` · `#111210` · `#2c2c2a` · `#ffffff` · `#0a0a09` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Mono
- **Body:** IBM Plex Mono
- **Loaded families:** Abril Fatface, Barlow Condensed, Cormorant Garamond, IBM Plex Mono
- **Scale (largest breakpoint):** h1 144px · h2 48px · h3 30px · body 14px
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(232,98,42,0.3)]`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-2`

**Primary button**

```html
<a class="bg-safety text-forge px-6 py-2 rounded-full font-condensed font-bold tracking-widest text-sm uppercase relative overflow-hidden group active:scale-95 transition-transform duration-300 ease-ground btn-fill hover:text-safety border border-safety">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Marquee (`marquee`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111210;
  --color-surface: #2c2c2a;
  --color-text: #ede9e0;
  --color-border: #ede9e0;
  --color-accent: #e8622a;
  --color-accent-2: #ede9e0;
  --font-display: "IBM Plex Mono", sans-serif;
  --font-body: "IBM Plex Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111210',
    surface: '#2c2c2a',
    ink: '#ede9e0',
    line: '#ede9e0',
    accent: '#e8622a',
    accent2: '#ede9e0',
  },
  fontFamily: { display: ['IBM Plex Mono'], sans: ['IBM Plex Mono'] },
} }
```

## Do and don't

- **Do:** Set the kicker line in uppercase orange (#e8622a) above the headline
- **Do:** Set the headline in large cream serif (#ede9e0)
- **Do:** Use orange only for the primary button and the kicker
- **Don't:** Don't use green on any element
- **Don't:** Don't lighten the ground above near-black (#111210)
- **Don't:** Don't set the headline in all capitals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
