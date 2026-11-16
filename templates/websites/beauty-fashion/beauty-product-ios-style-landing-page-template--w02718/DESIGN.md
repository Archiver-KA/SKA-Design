# Design system — Beauty Product iOS Style Landing Page Template

`SN-W02718` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Beauty shop mockup shown as three phone screens side by side on a light grey backdrop (#e5e7eb). Each screen uses white cards, a black selected filter pill, and bold sans headings, while pink (#ec4899) marks prices, quantity controls and the add button. The page is a product showcase, so the colour sits on the price and action, and the screens carry the look.

**Mood:** clean, app-like, light, product

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e5e7eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f9fafb` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f9fafb` · `#6b7280` · `#ec4899` · `#9ca3af` · `#4b5563` · `#fb923c` · `#e5e7eb` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 34px · h2 22px · h3 17px · body 13px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[48px]` (48px)
- **Shadows:** `shadow-[0_2px_16px_rgba(0,0,0,0.06)]`, `shadow-sm`, `shadow-[0_40px_80px_rgba(0,0,0,0.4)]`
- **Common gaps:** `gap-1`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="segment-btn active flex-shrink-0 px-6 py-3 rounded-2xl bg-black text-white font-semibold text-[15px] transition-all duration-200 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e5e7eb;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f9fafb;
  --color-accent: #ec4899;
  --color-accent-2: #fb923c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e5e7eb',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f9fafb',
    accent: '#ec4899',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show product screens as phone mockups on a light grey backdrop (#e5e7eb).
- **Do:** Use pink (#ec4899) for prices, quantity controls and add-to-cart only.
- **Do:** Set selected filter chips as black pills with white text.
- **Don't:** Don't use pink for headings or large areas; it is for prices and actions.
- **Don't:** Don't put the phone screens on a dark background; the page is light.
- **Don't:** Don't add shadows to every card; the cards sit flat on white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
