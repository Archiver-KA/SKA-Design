# Design system — Creator Coaching SaaS Landing Page Template

`SN-W03437` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark SaaS workspace page on a deep blue-black [#0c0e12] with a bold sans-serif headline. The second line, creative potential, is set in a blue gradient [#3b82f6], and the primary button is solid blue. A cropped dashboard preview sits below the buttons, with grey panels and small coloured status dots.

**Mood:** modern, dark, focused, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0e12` | Page ground |
| Surface | `#0f1115` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#9ca3af` · `#151921` · `#6b7280` · `#3b82f6` · `#0f1115` · `#2563eb` · `#1a1d24` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(37,99,235,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0e12;
  --color-surface: #0f1115;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0e12',
    surface: '#0f1115',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the blue (#3b82f6) gradient
- **Do:** Use solid blue buttons for the primary action and dark outlined buttons for the secondary
- **Do:** Show the product dashboard as a cropped preview beneath the hero buttons
- **Don't:** Don't set body text in blue; keep copy in light grey (#9ca3af)
- **Don't:** Don't add bright colours beyond the blue accent and the status dots
- **Don't:** Don't use light surfaces in the hero section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
