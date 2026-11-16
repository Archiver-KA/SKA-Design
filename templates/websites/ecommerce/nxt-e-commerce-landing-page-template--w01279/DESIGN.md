# Design system — NXT E-Commerce Landing Page Template

`SN-W01279` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark e-commerce storefront on a near-black ground (#09090b) with off-white text (#f4f4f5). A single bright green (#34d399) marks status dots and prices, and the headline is large, bold Inter with a lighter second line. Product cards in a grid and rounded buttons keep the layout modern, with a thin announcement strip above the navigation.

**Mood:** dark, modern, crisp, techy, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#27272a` · `#fbbf24` · `#a1a1aa` · `#f4f4f5` · `#d4d4d8` · `#09090b` · `#e4e4e7` · `#3f3f46` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full bg-zinc-100 text-zinc-900 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Cart / checkout (`cart-checkout`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-border: #27272a;
  --color-accent: #34d399;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    line: '#27272a',
    accent: '#34d399',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#34d399) only for status dots, prices and small confirmations
- **Do:** Set headlines in bold Inter at large size in #f4f4f5 on near-black
- **Do:** Keep the top strip to one line of shipping or returns copy
- **Don't:** Don't use the amber (#fbbf24) accent.
- **Don't:** Don't set the page on light grey; keep it dark.
- **Don't:** Don't add more than one glow shape per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
