# Design system — Digital Studio Landing Page

`SN-W01554` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The first screen is a dark slate hero with white type, a blue-to-purple gradient on the primary button, and a translucent stats bar in glass panels. Manrope carries both headline and body, with the headline set very large and tightly spaced. Depth comes from backdrop blur and gradient fills rather than hard edges, so the page reads as soft and digital.

**Mood:** soft, digital, gradient-led, rounded, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#111827` · `#3b82f6` · `#d1d5db` · `#f9fafb` · `#9333ea` · `#9ca3af` · `#6366f1` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg text-lg font-medium transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Feature grid (`features`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #ffffff;
  --color-text: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#ffffff',
    ink: '#4b5563',
    line: '#e5e7eb',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in Manrope at display size with tight spacing
- **Do:** Use the blue (#3b82f6) and purple (#a855f7) gradient on primary buttons only
- **Do:** Place stats in a translucent glass panel with backdrop blur
- **Don't:** Don't use flat solid fills where the gradient belongs on primary buttons
- **Don't:** Don't use square corners on buttons or stat panels; keep rounded-full and rounded-lg
- **Don't:** Don't add a second typeface beside Manrope

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
