# Design system — Insurance Brokerage

`SN-W00983` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A solid near-black page has a very large, bold white sans headline set in tight stacked lines, with a single blue button in the top right. A small green 'Est.' tag sits beside the wordmark, and the tone is direct and high-contrast. The page is dark throughout.

**Mood:** direct, high-contrast, bold, plain, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#a1a1aa` · `#10b981` · `#71717a` · `#27272a` · `#18181b` · `#d4d4d8` · `#000000` · `#ecfdf5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(16,185,129,0.2)]`, `shadow-[0_8px_25px_rgba(0,123,255,0.8)]`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Testimonials (`testimonials`)
8. Stats band (`stats`)
9. FAQ (`faq`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large, bold and white in tight stacked lines.
- **Do:** Use the blue button once in the header and once per section at most.
- **Do:** Keep the green (#34d399) to small tags and status marks.
- **Don't:** Don't style this as a light page.
- **Don't:** Don't set long headlines in lowercase or in a light weight.
- **Don't:** Don't use the green for button fills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
