# Design system — Alexander Matthews Fitness Coaching Template

`SN-W02573` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The page has a plain white header over a diagonal grey gradient. The type is set in DM Sans, with a warm amber (#f5a623) reserved for the Apply Now button, and rounded pill and card shapes. The look is a standard, clean coaching page with a simple header.

**Mood:** clean, plain, warm, coaching, modest

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e8e4de` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#f5a623` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#f5a623` · `#ffffff` · `#e8e4de` · `#e0961f` · `#e3ded7` · `#f7f4ee` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 16px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[16px]` (16px), `rounded-[12px]` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center bg-[#F5A623] text-[#1A1A1A] text-xs font-semibold uppercase tracking-widest rounded-full px-6 py-3 hover:bg-[#e0961f] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e8e4de;
  --color-text: #1a1a1a;
  --color-border: #1a1a1a;
  --color-accent: #f5a623;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e8e4de',
    ink: '#1a1a1a',
    line: '#1a1a1a',
    accent: '#f5a623',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the amber (#f5a623) only for the header Apply Now button and other primary actions
- **Do:** Keep the header simple: logo at left, short text links, one filled button at right
- **Do:** Set headings in DM Sans with bold weight.
- **Don't:** Don't treat the grey gradient as the final hero image.
- **Don't:** Don't add amber fills to large areas; the colour is for actions
- **Don't:** Don't add serif type; the type is sans-serif throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
