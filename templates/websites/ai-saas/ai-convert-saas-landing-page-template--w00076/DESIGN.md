# Design system — AI Convert SaaS Landing Page Template

`SN-W00076` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

A white page with a large near-black sans headline, the second and third lines in grey, and a black pill primary button beside a light outline button. A small pill tag with a green dot sits above the headline. The palette is monochrome, black, white and greys, so the page is plain and functional. The copy is in Russian.

**Mood:** plain, functional, monochrome, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f3f4f6` · `#e5e7eb` · `#6b7280` · `#f9fafb` · `#4b5563` · `#d1d5db` · `#9ca3af` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Pricing (`pricing`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #22c55e;
  --color-accent-2: #2563eb;
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
    surface: '#f9fafb',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#22c55e',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in black with the second and third lines in grey
- **Do:** Use a black pill for the primary button
- **Do:** Keep the page white with grey borders for dividers
- **Don't:** Don't add colour to the headline
- **Don't:** Don't use a dark hero band
- **Don't:** Don't fill the buttons with a gradient

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
