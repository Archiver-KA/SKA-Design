# Design system — Immigration Services Landing Page Template

`SN-W03942` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright, airy immigration page on a near-white ground (#ffffff) with soft blurred green glows behind the hero. The headline is set in heavy Inter at very large size and split into two colours, green for the first line and blue for the second, which is the page's signature. Buttons are pill-shaped, one solid dark and one white, so the calls to action are the clearest shapes on the screen.

**Mood:** airy, optimistic, modern, friendly, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#10b981` · `#059669` · `#a3a3a3` · `#e5e5e5` · `#f5f5f5` · `#737373` · `#525252` · `#ecfdf5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat, Geist, Plus Jakarta Sans, Roboto, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 30px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-4 py-3 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition font-medium font-geist flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. Awards / press (`awards-press`)
6. Listings (`listings`)
7. Team (`team`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #262626;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #059669;
  --color-accent-2: #3b82f6;
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
    surface: '#262626',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#059669',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at heavy weight and very large size
- **Do:** Split the hero headline into a green line and a blue line
- **Do:** Use pill-shaped buttons, with the dark primary button placed first
- **Don't:** Don't add more than two colours to the hero headline
- **Don't:** Don't place the blurred glow shapes behind body text
- **Don't:** Don't use square corners on buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
