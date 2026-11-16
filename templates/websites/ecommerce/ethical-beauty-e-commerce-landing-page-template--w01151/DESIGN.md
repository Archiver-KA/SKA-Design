# Design system — Ethical Beauty E-commerce Landing Page Template

`SN-W01151` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, editorial skincare page on a cream ground (#fefae0) with dark brown-black text (#292524). The hero pairs a large sans headline with a tan italic second line in the accent (#d4a373), and uses pill-shaped buttons in the same tan. A large framed portrait sits beside the copy, so warmth comes from the cream and tan rather than from decoration.

**Mood:** warm, natural, editorial, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fefae0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#fefae0` | Hairlines, dividers, outlines |
| Accent | `#d4a373` | Primary action and highlights |

Palette by frequency of use: `#d4a373` · `#ffffff` · `#fefae0` · `#1c1917` · `#78716c` · `#292524` · `#57534e` · `#d6d3d1` · `#e7e5e4` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_10px_30px_-10px_rgba(212,163,115,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex justify-center items-center px-8 py-4 bg-[#d4a373] text-white rounded-full text-sm font-medium hover:bg-[#c29263] transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(212,163,115,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fefae0;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #fefae0;
  --color-accent: #d4a373;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fefae0',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#fefae0',
    accent: '#d4a373',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the second line of each hero headline in italic, coloured #d4a373.
- **Do:** Use a pill-shaped button filled with tan (#d4a373) for the primary action.
- **Do:** Keep sections on the cream ground (#fefae0) and use white only for raised cards.
- **Don't:** Don't use saturated or cool colours; the palette stays warm neutral.
- **Don't:** Don't set body copy in the tan accent; it is for headline emphasis and buttons.
- **Don't:** Don't shrink the hero portrait; the large framed image carries the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
