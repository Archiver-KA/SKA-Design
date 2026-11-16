# Design system — Coastaq Classifieds Marketplace Landing Page Template

`SN-W01124` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A neutral classifieds page on white, where the primary action is a near-black pill button and the category chips under the hero are small grey outlined pills with icons. The hero headline is Inter at a medium size, centred in dark grey, with a lighter subhead beneath it. Listing cards with photographs and thin grey borders follow, so the page reads as a functional utility rather than a brand statement.

**Mood:** neutral, functional, clean, utilitarian

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#1d4ed8` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#9ca3af` · `#e5e7eb` · `#4b5563` · `#6b7280` · `#f3f4f6` · `#d1d5db` · `#18181b` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Quicksand
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm font-quicksand">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #18181b;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #111827;
  --color-accent-2: #1d4ed8;
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
    surface: '#f3f4f6',
    ink: '#18181b',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#111827',
    accent2: '#1d4ed8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline centred in Inter at medium size, in near-black
- **Do:** Use the near-black (#111827) for the primary button and selected states only
- **Do:** Keep category chips as small outlined pills with icons
- **Don't:** Don't use the purple (#a855f7) as a large background; it does not show in the hero
- **Don't:** Don't add decorative gradients or large illustrations
- **Don't:** Don't put listing cards on a coloured background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
