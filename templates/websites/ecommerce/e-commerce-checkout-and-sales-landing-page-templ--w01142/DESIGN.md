# Design system — E-commerce Checkout & Sales Landing Page Template

`SN-W01142` · ecommerce · dark mode · Sinera Atlas theme `market` · language `pt-BR`

## Direction

A dark checkout page on near-black, with form fields on the left and a dark summary card on the right. Inputs are zinc with thin borders and clear labels, and section titles are small white headings. A red accent marks the selected payment option, and a green pill shows the secure-environment status. The page is functional and dense, built to keep attention on the payment step.

**Mood:** functional, focused, dark, dense

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#e11d48` · `#27272a` · `#ffffff` · `#71717a` · `#18181b` · `#52525b` · `#a1a1aa` · `#10b981` · `#09090b` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 18px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-rose-900/20`, `shadow-xl`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group w-full bg-rose-600 hover:bg-rose-700 text-white font-medium text-lg py-4 rounded-xl transition-all shadow-lg shadow-rose-900/20 flex items-center justify-center gap-3 active:scale-[0.99]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Alpine.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #e11d48;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#e11d48',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep form fields dark zinc with thin borders and clear labels above them
- **Do:** Use the red (#e11d48) to mark the selected payment option only
- **Do:** Show the order summary as a card on the right, with the total in bold
- **Don't:** Don't use the green (#10b981) for buttons; it is for the secure status pill
- **Don't:** Don't add decorative imagery to the checkout steps
- **Don't:** Don't lighten the page ground to white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
