# Design system — Restaurant Landing Page Template

`SN-W02982` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photo-led hero on a dark food photograph, with a large white serif headline in which one word, Heart, is set in italic amber (#f59e0b). Two buttons sit under the copy: a white filled primary and a dark translucent outlined secondary. A translucent grey navigation bar floats over the image, which gives a classic, warm restaurant feel.

**Mood:** photo-led, classic, warm, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e7e5e4` · `#fafaf9` · `#57534e` · `#78716c` · `#f59e0b` · `#f5f5f4` · `#a8a29e` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-white/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-6 py-3 text-sm font-medium text-stone-900 bg-amber-500 rounded-xl hover:bg-amber-400 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Call to action (`cta`)
5. Menu list (`menu-list`)
6. Bento grid (`bento-grid`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #f59e0b;
  --font-display: "Playfair Display", serif;
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
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one word per headline in italic amber (#f59e0b), as the hero does.
- **Do:** Keep the headline in a large serif, centred over the photograph.
- **Do:** Use a white filled button for the primary action beside a dark outlined secondary.
- **Don't:** Don't set body copy in the serif; keep it in the sans.
- **Don't:** Don't use amber for large fills.
- **Don't:** Don't place the headline over a light area of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
