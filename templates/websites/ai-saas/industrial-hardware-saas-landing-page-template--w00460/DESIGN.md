# Design system — Industrial Hardware SaaS Landing Page Template

`SN-W00460` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, cinematic hardware page: a muted, desaturated photograph sits behind a black ground, and the headline is set large and tight in a bold grotesk. A solid blue (#3b82f6) button is the only colour on the hero, beside a dark outlined secondary button. Small grey navigation text and a minimal logo keep the chrome out of the way. The look is precise and product-first.

**Mood:** precise, cinematic, product-first, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#000000` · `#050505` · `#d1d5db` · `#171717` · `#3b82f6` · `#2563eb` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="group flex items-center justify-between px-6 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded text-white transition-all w-full sm:w-1/2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product detail (`product-detail`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Services (`services`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a bold, tightly tracked sans at large size
- **Do:** Use the solid blue (#3b82f6) for the primary button only
- **Do:** Keep the hero photograph dark and desaturated behind the text
- **Don't:** Don't brighten the hero photo above the text contrast
- **Don't:** Don't add colour to the navigation
- **Don't:** Don't use fully rounded pill buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
