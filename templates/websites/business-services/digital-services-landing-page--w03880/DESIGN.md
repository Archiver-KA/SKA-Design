# Design system — Digital Services Landing Page

`SN-W03880` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark slate hero with a centred white bold sans-serif headline and short grey supporting copy beneath it. The primary button is teal (#14b8a6), set beside a dark translucent secondary button. A row of four statistics sits in a translucent panel below the buttons, and the teal is the only colour on the page.

**Mood:** corporate, steady, dark, clean, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#4b5563` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#14b8a6` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#d1d5db` · `#14b8a6` · `#0d9488` · `#f9fafb` · `#9ca3af` · `#4b5563` · `#e5e7eb` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Services (`services`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #4b5563;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #e5e7eb;
  --color-accent: #14b8a6;
  --color-accent-2: #9333ea;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#4b5563',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#e5e7eb',
    accent: '#14b8a6',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero on a dark slate ground and set headlines in white
- **Do:** Use the teal (#14b8a6) for the primary button and the active nav line only
- **Do:** Place the statistics row in a translucent panel with large figures and small labels
- **Don't:** Don't add a light background to the hero; the page stays dark
- **Don't:** Don't add a second accent colour beside the teal
- **Don't:** Don't set the statistics in grey; the figures stay white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
