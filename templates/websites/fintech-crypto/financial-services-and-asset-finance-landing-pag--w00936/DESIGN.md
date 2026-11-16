# Design system — Financial Services & Asset Finance Landing Page Template

`SN-W00936` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A navy-led hero on deep navy [#0a2342], with a large cropped portrait tinted toward the same blue so the photograph reads as part of the ground. Headlines are bold white sans, set tight and large. A gold [#d4a017] filled button leads the actions, next to an outlined secondary, and gold also carries the small uppercase eyebrow. The result is a confident, banking-style hero.

**Mood:** confident, navy, financial, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a2342` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#5a6478` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4a017` | Primary action and highlights |
| Second accent | `#d4a017` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0a2342` · `#d4a017` · `#e2e8f0` · `#5a6478` · `#f7f8fa` · `#1a1a2e` · `#f0f2f5` · `#9a740e` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.18rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_2px_8px_rgba(0,0,0,0.07)]`, `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`, `shadow-[0_2px_8px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="nav-link rounded-md px-3 py-2 text-sm font-medium text-[#1A1A2E] hover:bg-[#F0F2F5] hover:text-[#0A2342] focus:outline-none focus:ring-2 focus:ring-[#D4A017] bg-[#0A2342] text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Logo cloud (`logo-cloud`)
8. Articles (`blog-articles`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a2342;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #5a6478;
  --color-border: #ffffff;
  --color-accent: #d4a017;
  --color-accent-2: #d4a017;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a2342',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#5a6478',
    line: '#ffffff',
    accent: '#d4a017',
    accent2: '#d4a017',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use gold (#d4a017) for the primary button and the eyebrow only
- **Do:** Tint the hero photograph toward the navy ground
- **Do:** Set headlines in bold white sans with tight leading
- **Don't:** Don't use the light grey page ground for the hero; the hero is navy
- **Don't:** Don't set more than one gold element per block
- **Don't:** Don't set body text in gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
