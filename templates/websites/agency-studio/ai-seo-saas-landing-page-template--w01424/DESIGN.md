# Design system — AI SEO SaaS Landing Page Template

`SN-W01424` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white hero over a faint blue grid, with a bold sans headline in near-black and the phrase '10x Faster' in saturated blue (#2563eb) carrying the emphasis. The primary button is a solid blue pill with white text, beside a white outlined Google sign-in button with a soft shadow. Below the headline, a small rating line and a trust note keep the tone plain and reassuring.

**Mood:** plain, reassuring, bright, bold, saas

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#e2e8f0` · `#475569` · `#ffffff` · `#2563eb` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#334155` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Process / steps (`how-it-works`)
5. About (`about`)
6. Feature grid (`features`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
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
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase in saturated blue (#2563eb) and keep the rest near-black.
- **Do:** Make the primary button a solid blue pill with white text.
- **Do:** Keep the faint blue grid behind the hero at low contrast.
- **Don't:** Don't add a second accent colour; blue carries the page.
- **Don't:** Don't remove the grid; it is part of the hero.
- **Don't:** Don't use a dark hero; the page is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
