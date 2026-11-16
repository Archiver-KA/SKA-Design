# Design system — Islamic Clothing & Perfume E-commerce Landing Page Template

`SN-W01192` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, luxurious stance: a deep green hero sits under a pale navigation bar, with a white serif headline and an italic second line. The contrast between the upright first line and the italic phrase is the signature. Pill-shaped buttons pair a solid white primary with an outlined secondary, and the palette stays within greens and off-white.

**Mood:** luxurious, dark, traditional, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#022c22` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#022c22` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#064e3b` · `#022c22` · `#fafaf9` · `#e7e5e4` · `#292524` · `#a8a29e` · `#78716c` · `#f5f5f4` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_2px_20px_rgba(0,0,0,0.02)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-stone-50 text-emerald-950 text-sm font-medium rounded-full hover:bg-stone-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Logo cloud (`logo-cloud`)
5. Product grid (`product-grid`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #022c22;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #022c22;
  --color-border: #e7e5e4;
  --color-accent: #064e3b;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#022c22',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#022c22',
    line: '#e7e5e4',
    accent: '#064e3b',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on the deep green (#022c22) and keep headlines white in a serif.
- **Do:** Use italic for the second line of the hero headline.
- **Do:** Make the primary button solid white and the secondary an outline on the green.
- **Don't:** Don't introduce bright accent colours; the page is green and off-white only.
- **Don't:** Don't set headlines in a sans-serif; the serif carries the brand.
- **Don't:** Don't use drop shadows; depth comes from the flat green fields.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
