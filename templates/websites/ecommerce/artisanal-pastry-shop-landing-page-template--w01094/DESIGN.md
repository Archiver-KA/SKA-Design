# Design system — Artisanal Pastry Shop Landing Page Template

`SN-W01094` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A warm artisan pastry page on white, with dark brown headings and a yellow (#eab308) primary button. The product name is set in heavy uppercase brown sans beside a yellow script word, which creates a playful contrast with the firm headline. Body copy sits in a cream rounded card, and the cake photograph is shown as a tilted dark panel.

**Mood:** warm, playful, artisanal, sunny, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fff8e7` | Cards, panels, raised areas |
| Text | `#4a3219` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |

Palette by frequency of use: `#4a3219` · `#eab308` · `#ffffff` · `#fff8e7` · `#d9a006` · `#362615`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playball
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-md`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[320px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-1.5`, `gap-1`

**Primary button**

```html
<a class="rounded-full bg-[#4A3219] px-6 py-3 text-base font-medium text-[#EAB308] w-fit hover:bg-[#362615] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fff8e7;
  --color-text: #4a3219;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fff8e7',
    ink: '#4a3219',
    line: '#ffffff',
    accent: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#eab308) for primary buttons and the script accent word
- **Do:** Set product names in heavy uppercase brown (#4a3219)
- **Do:** Keep body copy inside a cream rounded card
- **Don't:** Don't set body text in yellow
- **Don't:** Don't use outlined yellow buttons for primary actions
- **Don't:** Don't straighten the product photograph into a flat frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
