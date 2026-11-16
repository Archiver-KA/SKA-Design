# Design system — Elite Fitness & Rehabilitation Landing Page Template

`SN-W02588` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A stark dark gym and clinic page on pure black with a large white sans-serif headline set in short centred lines. A small outlined pill badge sits above and a single outlined button below, so the layout relies on type and space. The amber (#f59e0b) appears only as a round floating button in the corner.

**Mood:** clinical, dark, stark, restrained, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#000000` · `#262626` · `#a3a3a3` · `#171717` · `#737373` · `#d4d4d4` · `#0a0a0a` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_30px_rgba(245,158,11,0.1)]`, `shadow-2xl`, `shadow-amber-500/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 text-base font-medium border rounded-full transition-colors flex items-center justify-center gap-2 text-white bg-black/50 backdrop-blur-sm border-neutral-700 hover:bg-neutral-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Bento grid (`bento-grid`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the amber (#f59e0b) for the floating action button and one accent per section
- **Do:** Keep the headline centred in large white sans-serif with short lines
- **Do:** Use outlined pill badges and outlined buttons instead of filled ones
- **Don't:** Don't use a light background; the ground is pure black
- **Don't:** Don't fill the hero buttons; they are outlined
- **Don't:** Don't add imagery to the hero; it is type only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
