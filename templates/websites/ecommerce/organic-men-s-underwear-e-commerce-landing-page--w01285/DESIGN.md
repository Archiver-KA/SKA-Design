# Design system — Organic Men’s Underwear E-commerce Landing Page Template

`SN-W01285` · ecommerce · dark mode · Sinera Atlas theme `market` · language `es`

## Direction

A bold near-black hero: a large white headline with a grey second line, and a square product photograph in saturated blue on the right. A light pill button, a rating line and small badges sit above the title. The black ground with one saturated photo panel is the signature.

**Mood:** bold, masculine, high-contrast, direct, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#f5f5f4` | Primary action and highlights |

Palette by frequency of use: `#f5f5f4` · `#1c1917` · `#000000` · `#a8a29e` · `#292524` · `#e7e5e4` · `#57534e` · `#78716c` · `#0c0a09` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded transition-all duration-300 shadow-sm hover:shadow-md bg-stone-100 text-stone-950 hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f5f5f4;
  --color-text: #f5f5f4;
  --color-muted: #57534e;
  --color-border: #1c1917;
  --color-accent: #f5f5f4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f5f5f4',
    ink: '#f5f5f4',
    muted: '#57534e',
    line: '#1c1917',
    accent: '#f5f5f4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white on black, with the second line in grey (#a8a29e)
- **Do:** Frame the product photograph as one square panel, with one saturated colour per image
- **Do:** Make the primary button a light pill with dark text (#1c1917)
- **Don't:** Don't use a light page ground for the hero.
- **Don't:** Don't add accent colours to the UI; the blue comes from the photograph
- **Don't:** Don't add more than one photograph to the hero; the single panel is the focus

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
