# Design system — Artisan Coffee Shop Landing Page Template

`SN-W01088` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, editorial coffee-shop page on off-white, with a near-black headline whose second line fades to warm grey. The primary action is a solid dark button, and the secondary is an outlined pill beside it. The hero photograph is a tall, square-cornered frame of coffee tools, and the seasonal tag is a small peach pill with dark text.

**Mood:** warm, editorial, understated, homely, tactile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#e7e5e4` · `#ffffff` · `#f5f5f4` · `#fafaf9` · `#292524` · `#a8a29e` · `#d6d3d1` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium text-stone-900 bg-transparent border border-stone-200 rounded-full hover:bg-stone-100 transition-all focus:ring-2 focus:ring-stone-200 focus:outline-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in warm grey (#78716c)
- **Do:** Use solid near-black for the primary button
- **Do:** Keep the seasonal tag as a small peach pill with dark text
- **Don't:** Don't use peach for buttons or links
- **Don't:** Don't set the headline in a serif; the sans is part of the voice
- **Don't:** Don't round the corners of the hero photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
