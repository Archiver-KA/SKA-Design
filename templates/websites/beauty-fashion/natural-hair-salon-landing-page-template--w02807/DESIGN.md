# Design system — Natural Hair Salon Landing Page Template

`SN-W02807` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm salon page where a dark brown photographic hero carries the look, with a white Playfair Display headline whose second line is in italic. The navigation sits on a pale warm grey, and the primary action is a solid white pill beside a muted outline pill. Colour stays earthy and low-key, so the hero reads as one calm image panel rather than a graphic statement.

**Mood:** warm, editorial, earthy, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9f8f6` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#a48979` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a48979` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f9f8f6` · `#d1c2b8` · `#a48979` · `#25d366` · `#20bd5a` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 48px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-cotton-900/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="mt-12 inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9f8f6;
  --color-text: #111111;
  --color-muted: #a48979;
  --color-border: #ffffff;
  --color-accent: #a48979;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9f8f6',
    ink: '#111111',
    muted: '#a48979',
    line: '#ffffff',
    accent: '#a48979',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Playfair Display with the second line in italic
- **Do:** Use white pill buttons on dark imagery and keep the secondary button a muted fill
- **Do:** Keep the taupe (#a48979) for small details rather than large fills
- **Don't:** Don't let green (#25d366) lead the design; the page has none of it
- **Don't:** Don't set body copy directly on the hero gradient without the dark overlay
- **Don't:** Don't add saturated colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
