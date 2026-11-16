# Design system — Pastry Mania Bakery Template

`SN-W02954` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A soft bakery page on an off-white ground (#fafaf8) with a serif headline in two parts: dark brown upright text and an italic gold line below. A small pale green pill sits above the headline, and the primary pink (#d5abb3) nav button sets the one brand accent. A large photo of a chocolate cake sits in a rounded frame on the right, giving the page a warm, tactile feel.

**Mood:** soft, artisanal, romantic, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4a4238` | Headings and primary copy |
| Muted text | `#8b847a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d5abb3` | Primary action and highlights |
| Second accent | `#f0ebe1` | Supporting highlights |

Palette by frequency of use: `#d5abb3` · `#8b847a` · `#2d2823` · `#ffffff` · `#f0ebe1` · `#fafaf8` · `#4a4238` · `#fcf8f9` · `#e3c2c9` · `#c6a664`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]`, `shadow-[0_8px_30px_-12px_rgba(213,171,179,0.3)]`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 bg-[#D5ABB3] hover:bg-[#C99CA5] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(213,171,179,0.39)] hover:shadow-[0_6px_20px_rgba(213,171,179,0.23)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Menu list (`menu-list`)
5. Sign-in form (`auth-form`)
6. About (`about`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf8;
  --color-surface: #ffffff;
  --color-text: #4a4238;
  --color-muted: #8b847a;
  --color-border: #ffffff;
  --color-accent: #d5abb3;
  --color-accent-2: #f0ebe1;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf8',
    surface: '#ffffff',
    ink: '#4a4238',
    muted: '#8b847a',
    line: '#ffffff',
    accent: '#d5abb3',
    accent2: '#f0ebe1',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif, with the second line in italic gold
- **Do:** Frame the cake photography in a large rounded rectangle
- **Do:** Use the pink (#d5abb3) only for the nav button and small highlights
- **Don't:** Don't set body copy in the serif; body copy is sans.
- **Don't:** Don't use pink for large areas or backgrounds
- **Don't:** Don't put the gold italic in a body paragraph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
