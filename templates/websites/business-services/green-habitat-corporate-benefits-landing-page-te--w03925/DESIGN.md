# Design system — Green Habitat Corporate Benefits Landing Page Template

`SN-W03925` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean white page with a green, corporate tone, where a large sans headline sets the message in three tones: near-black, grey, and a deep green (#2e7d32) for the key phrase. A thin green rule runs across the top edge, and a small pale-green tag sits above the headline. The solid green button is the main action, and the navigation stays simple and grey. Overall the look is measured and dependable.

**Mood:** measured, dependable, clean, corporate, fresh

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f0fdf4` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2e7d32` | Primary action and highlights |

Palette by frequency of use: `#2e7d32` · `#111827` · `#ffffff` · `#6b7280` · `#f3f4f6` · `#4b5563` · `#f0fdf4` · `#374151` · `#e5e7eb` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#2E7D32] hover:bg-[#256428] text-white text-base font-medium px-5 py-2.5 rounded-md shadow-sm border border-transparent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Pricing (`pricing`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. FAQ (`faq`)
8. Video / media (`video-media`)
9. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f0fdf4;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #2e7d32;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f0fdf4',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#2e7d32',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in deep green (#2e7d32) and keep the rest in dark slate or grey.
- **Do:** Use the solid green button for the demo action and keep navigation links grey.
- **Do:** Use a pale green tag above the headline for the category label.
- **Don't:** Don't use green for large background fills; keep it to type, rules and buttons.
- **Don't:** Don't add a second accent colour.
- **Don't:** Don't use drop shadows on the cards; keep the page flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
