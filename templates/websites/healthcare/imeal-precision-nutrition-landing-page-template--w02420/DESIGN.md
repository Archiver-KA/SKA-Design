# Design system — iMeal Precision Nutrition Landing Page Template

`SN-W02420` · healthcare · light mode · Sinera Atlas theme `calm` · language `zh-CN`

## Direction

The nutrition page is calm and warm: a cream ground (#faf9f6), a serif headline in near-black, and the key phrase of the headline set in warm orange (#f58529). The primary button is deep green (#386641), so orange carries emphasis and green carries action. Short icon rows with a small label and one line of copy sit under the hero copy, and the product panel stays pale.

**Mood:** warm, scientific, calm, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2b2b2b` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f58529` | Primary action and highlights |
| Second accent | `#386641` | Supporting highlights |

Palette by frequency of use: `#f58529` · `#ffffff` · `#386641` · `#f5f5f5` · `#2b2b2b` · `#e5e5e5` · `#737373` · `#6a4c93` · `#525252` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="bg-dark hover:bg-black text-white text-sm font-medium px-5 py-2 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Menu list (`menu-list`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #2b2b2b;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #f58529;
  --color-accent-2: #386641;
  --font-display: "Playfair Display", serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#2b2b2b',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#f58529',
    accent2: '#386641',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in orange (#f58529) and the rest in near-black serif
- **Do:** Use deep green (#386641) for the primary button
- **Do:** Lay out short icon rows with a small label and a single line of copy
- **Don't:** Don't use orange for buttons; green is the action colour
- **Don't:** Don't set headlines in sans-serif; the serif is the voice
- **Don't:** Don't use bright fills behind the product panel; keep it pale

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
