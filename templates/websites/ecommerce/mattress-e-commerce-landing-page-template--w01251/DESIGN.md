# Design system — Mattress E-commerce Landing Page Template

`SN-W01251` · ecommerce · light mode · Sinera Atlas theme `market` · language `ru`

## Direction

A clean light hero in one blue family: a white page with a dark navy headline whose second line steps down to a lighter blue. A navy solid button sits beside a pale outlined one, and a light blue card holds the mattress image and a small feature tag. Trust points sit under the buttons with small check icons.

**Mood:** clean, clinical, blue, reassuring

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eff6ff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#dbeafe` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#1e3a8a` · `#ffffff` · `#3b82f6` · `#0891b2` · `#60a5fa` · `#dbeafe` · `#eff6ff` · `#bfdbfe` · `#1d4ed8` · `#ecfeff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-blue-800 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eff6ff;
  --color-text: #0f172a;
  --color-border: #dbeafe;
  --color-accent: #1e3a8a;
  --color-accent-2: #06b6d4;
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
    surface: '#eff6ff',
    ink: '#0f172a',
    line: '#dbeafe',
    accent: '#1e3a8a',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines in navy (#1e3a8a) and the second line in light blue (#60a5fa)
- **Do:** Use navy solid for the primary button and a pale outlined button for the secondary
- **Do:** Put trust points under the buttons with small check icons
- **Don't:** Don't add warm colours; the page is blue on white
- **Don't:** Don't add a second dark colour to the hero; navy and light blue are enough
- **Don't:** Don't make the feature tag larger than the body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
