# Design system — Automation Agency Landing Page Template

`SN-W01442` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A white ground ([#ffffff]) with near-black text ([#111827]) and a violet ([#6317c9]) primary button. The hero headline pairs a bold sans first line with a serif italic second line, above a small uppercase eyebrow. A rounded phone mockup sits to the right, showing rows and a status card in soft neutrals.

**Mood:** clean, editorial, confident, light, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#6317c9` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#f3f4f6` · `#6b7280` · `#000000` · `#e5e7eb` · `#6317c9` · `#f9fafb` · `#9ca3af` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 bg-make text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-makedark transition-all hover:pr-6 duration-300 group shadow-lg shadow-make/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #6317c9;
  --color-accent-2: #22c55e;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#6317c9',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use violet (#6317c9) for the primary button and status accents only
- **Do:** Set the hero headline with a bold sans first line and a serif italic second line
- **Do:** Show the product as a rounded phone mockup beside the copy
- **Don't:** Don't use violet as a background for whole sections
- **Don't:** Don't drop the serif italic second line from the headline
- **Don't:** Don't use dark cards on the white ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
