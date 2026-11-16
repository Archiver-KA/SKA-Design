# Design system — Cafe & Dessert Landing Page Template

`SN-W02856` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `ja`

## Direction

Hushed and warm, a single brown field with almost nothing on it. The ground is a deep chocolate brown (#4a3b32), and a large lowercase serif wordmark in pale cream (#e3e1dd) sits at the centre above a small, widely tracked line. The navigation is small spaced caps, and the first screen is left mostly empty so the colour and type carry the mood.

**Mood:** hushed, minimal, warm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#4a3b32` | Page ground |
| Surface | `#2d241e` | Cards, panels, raised areas |
| Text | `#e3e1dd` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4a484` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c4a484` · `#4a3b32` · `#e3e1dd` · `#000000` · `#2d241e` · `#42352c` · `#dcd6ce` · `#5c4d42` · `#1e1814`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Noto Serif JP
- **Body:** Inter
- **Loaded families:** Noto Serif JP, Inter, Cormorant Garamond, Cormorant Garmond
- **Scale (largest breakpoint):** h1 24px · h2 30px · h3 48px · body 14px
- **Weights in use:** light
- **Letter spacing:** `tracking-[0.2em]`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2px]` (2px), `rounded-[1px]` (1px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/20`
- **Content width:** `max-w-[1400px]`, `max-w-7xl`
- **Section padding:** `py-40`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-10`

**Primary button**

```html
<a class="flex items-center gap-2 text-[10px] tracking-[0.2em] border border-white/20 px-5 py-2 rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. About (`about`)
3. Menu list (`menu-list`)
4. Call to action (`cta`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #4a3b32;
  --color-surface: #2d241e;
  --color-text: #e3e1dd;
  --color-border: #ffffff;
  --color-accent: #c4a484;
  --font-display: "Noto Serif JP", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#4a3b32',
    surface: '#2d241e',
    ink: '#e3e1dd',
    line: '#ffffff',
    accent: '#c4a484',
  },
  fontFamily: { display: ['Noto Serif JP'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a lowercase serif in cream (#e3e1dd) at large size
- **Do:** Use small, widely tracked uppercase for the tagline and navigation
- **Do:** Keep the opening screen on the brown ground (#4a3b32) with little else on it
- **Don't:** Don't add photography or busy graphics to the opening screen
- **Don't:** Don't use heavy weights in the navigation
- **Don't:** Don't set the wordmark in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
