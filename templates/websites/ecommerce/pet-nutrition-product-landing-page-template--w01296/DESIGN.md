# Design system — Pet Nutrition Product Landing Page Template

`SN-W01296` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A fresh, friendly nutrition page on a soft white-to-mint gradient, with a dark navy headline (#111827) and an emerald (#059669) stroke under its key phrase. Short copy sits in a rounded card, and the product bag is shown tall on the right against a mint glow. Emerald marks the highlight and status, so the page reads clean and reassuring.

**Mood:** fresh, reassuring, friendly, clean, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#059669` · `#111827` · `#f43f5e` · `#4b5563` · `#d1d5db` · `#34d399` · `#6b7280` · `#1f2937` · `#a7f3d0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 18px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-lg`, `shadow-inner`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-200/50 mt-4 flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. FAQ (`faq`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify, Phosphor

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #059669;
  --color-accent-2: #f43f5e;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#059669',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Underline the key headline phrase with a thick emerald (#059669) stroke
- **Do:** Set headlines in Plus Jakarta Sans at heavy weight in #111827
- **Do:** Place the product packshot tall on the right, against a soft mint glow
- **Don't:** Don't use rose (#f43f5e) for headings; it is for small highlights only
- **Don't:** Don't cover the packshot with text
- **Don't:** Don't add more than one glow shape behind the product

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
