# Design system — Tallow Business Blueprint Landing Page Template

`SN-W04110` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, traditional page with a full-width green announcement bar (#00a434) above a centred serif headline. The key phrase in the headline is set in the same green, and the body copy is grey and centred. Green is the only strong colour, so it signals offers and actions while the rest of the page stays plain and readable.

**Mood:** traditional, clear, green-accented, centred, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9f9f9` | Cards, panels, raised areas |
| Text | `#2d2d2d` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00a434` | Primary action and highlights |
| Second accent | `#c5a669` | Supporting highlights |

Palette by frequency of use: `#2d2d2d` · `#ffffff` · `#00a434` · `#2d5448` · `#f9f9f9` · `#c5a669` · `#000000` · `#1e3b32` · `#e5e7eb` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Abhaya Libre
- **Body:** Abhaya Libre
- **Loaded families:** Abhaya Libre, Lato, Montserrat
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 16px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-[5px]` (5px), `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-sm`, `shadow-inner`
- **Content width:** `max-w-[720px]`, `max-w-[1170px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden md:flex bg-[#F9F9F9] text-[#2D2D2D] hover:bg-gray-100 px-6 py-2 rounded-full font-['Montserrat'] font-medium text-sm transition-colors items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)
7. Cart / checkout (`cart-checkout`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9f9f9;
  --color-text: #2d2d2d;
  --color-border: #ffffff;
  --color-accent: #00a434;
  --color-accent-2: #c5a669;
  --font-display: "Abhaya Libre", sans-serif;
  --font-body: "Abhaya Libre", sans-serif;
  --radius: 5px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9f9f9',
    ink: '#2d2d2d',
    line: '#ffffff',
    accent: '#00a434',
    accent2: '#c5a669',
  },
  fontFamily: { display: ['Abhaya Libre'], sans: ['Abhaya Libre'] },
} }
```

## Do and don't

- **Do:** Use the green (#00a434) for the announcement bar and the key headline phrase
- **Do:** Centre headlines in a serif face with grey body text beneath
- **Do:** Keep the main ground white and use green only for action and emphasis
- **Don't:** Don't use green for large text blocks
- **Don't:** Don't add a second strong colour to the headlines
- **Don't:** Don't set the announcement bar in a different colour from the primary button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
