# Design system — First Steps to Passive Income Course Template

`SN-W03470` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A promotional course page with a white ground and a full-width navy band for the offer notice. The headline is set large in Quattrocento, with the key phrase in mustard (#d8b209) and the rest in navy (#022550). A red (#d01237) tag marks the time-limited offer, and a photograph sits beside the copy in a rounded frame.

**Mood:** promotional, warm, urgent, classic, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#022550` | Headings and primary copy |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#d8b209` | Primary action and highlights |
| Second accent | `#d01237` | Supporting highlights |

Palette by frequency of use: `#022550` · `#d8b209` · `#ffffff` · `#f3f4f6` · `#e5e7eb` · `#d01237` · `#d1d5db` · `#f9fafb` · `#22c55e` · `#fefefe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Quattrocento
- **Body:** Quattrocento
- **Loaded families:** Quattrocento
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 18px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[#D8B209] text-[#022550] font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-out mb-4">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Product grid (`product-grid`)
5. Services (`services`)
6. Feature grid (`features`)
7. FAQ (`faq`)
8. Cart / checkout (`cart-checkout`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #022550;
  --color-border: #f3f4f6;
  --color-accent: #d8b209;
  --color-accent-2: #d01237;
  --font-display: "Quattrocento", sans-serif;
  --font-body: "Quattrocento", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#022550',
    line: '#f3f4f6',
    accent: '#d8b209',
    accent2: '#d01237',
  },
  fontFamily: { display: ['Quattrocento'], sans: ['Quattrocento'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in mustard (#d8b209)
- **Do:** Use red (#d01237) only for the offer tag and countdown labels
- **Do:** Keep the offer notice in a full-width navy band above the hero
- **Don't:** Don't use mustard for body text on white
- **Don't:** Don't set the offer tag in navy; keep it red
- **Don't:** Don't replace the serif headlines with a sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
