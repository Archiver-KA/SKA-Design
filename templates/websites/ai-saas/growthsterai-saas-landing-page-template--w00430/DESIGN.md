# Design system — GrowthsterAI SaaS Landing Page Template

`SN-W00430` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a large heavy white all-caps sans headline set over two lines, centred, and carrying a soft white glow. A small glass pill with a thin border labels the product, and the body copy is light grey beneath. The only solid control in the top bar is a white button at the right, so the page reads as high-contrast monochrome with the glow doing the decorative work.

**Mood:** high-contrast, monochrome, glowing, confident, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#171717` · `#262626` · `#030303` · `#e5e5e5` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 36px · body 16px
- **Weights in use:** light, medium, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_10px_rgba(59,130,246,0.5)]`, `shadow-[0_0_10px_rgba(168,85,247,0.5)]`, `shadow-[0_0_10px_rgba(34,197,94,0.5)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-4 py-1.5 text-sm font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Bento grid (`bento-grid`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a855f7;
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
    background: '#030303',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white all-caps sans with a soft glow
- **Do:** Use a glass pill with a thin border for the product label above the body copy
- **Do:** Keep the top bar's only solid control a white button at the right
- **Don't:** Don't add a second solid colour beside the white
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't use a light page ground; the page is black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
