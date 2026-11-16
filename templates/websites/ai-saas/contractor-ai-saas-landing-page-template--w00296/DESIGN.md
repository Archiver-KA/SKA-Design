# Design system — Contractor AI SaaS Landing Page Template

`SN-W00296` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean landing page on a very pale blue-white ground [#f8fafc], with a large heavy headline in near-black and the key phrase in strong blue [#2563eb]. The primary button is solid near-black navy, and blue is kept for the headline emphasis. Manrope sets the headings and Inter the body, with a small outlined badge above the hero.

**Mood:** clean, bright, direct, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#0f172a` | Secondary copy, captions |
| Border | `#0f172a` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#2563eb` · `#475569` · `#e2e8f0` · `#f8fafc` · `#16a34a` · `#ef4444` · `#000000` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:bg-surface transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #0f172a;
  --color-text: #f5f5f5;
  --color-muted: #0f172a;
  --color-border: #0f172a;
  --color-accent: #2563eb;
  --color-accent-2: #ef4444;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#0f172a',
    ink: '#f5f5f5',
    muted: '#0f172a',
    line: '#0f172a',
    accent: '#2563eb',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline phrase in blue (#2563eb) and keep the rest near-black
- **Do:** Use near-black (#0f172a) for the primary button
- **Do:** Keep the hero badge small, with a blue dot, above the headline
- **Don't:** Don't set blue text on blue backgrounds
- **Don't:** Don't use the red (#ef4444) anywhere in the hero
- **Don't:** Don't switch to a dark page ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
