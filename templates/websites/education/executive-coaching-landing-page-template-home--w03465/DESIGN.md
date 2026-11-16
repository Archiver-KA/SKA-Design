# Design system — Executive Coaching Landing Page Template - home

`SN-W03465` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The same dark, warm system as the coaching set: a near-black ground (#0c0b0f), cream headlines in Instrument Serif, and gold (#c9a46c) on the primary action. The hero leaves room for a large media panel to the right of the headline, framed by thin rules, so the copy and the visual share the first screen. The panel stays dark, and the overall tone is quiet and premium.

**Mood:** premium, dark, quiet, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0b0f` | Page ground |
| Surface | `#14131a` | Cards, panels, raised areas |
| Text | `#f2f0ed` | Headings and primary copy |
| Muted text | `#8c8a94` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a46c` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#c9a46c` · `#ffffff` · `#8c8a94` · `#0c0b0f` · `#f2f0ed` · `#14131a` · `#ef4444` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Outfit
- **Loaded families:** Instrument Serif, Outfit
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_10px_rgba(201,164,108,0.3)]`, `shadow-2xl`, `shadow-[0_0_30px_rgba(201,164,108,0.3)]`
- **Content width:** `max-w-[1200px]`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm font-medium text-page bg-gold px-5 py-2.5 hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Testimonials (`testimonials`)
6. Services (`services`)
7. Stats band (`stats`)
8. Timeline (`timeline`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0b0f;
  --color-surface: #14131a;
  --color-text: #f2f0ed;
  --color-muted: #8c8a94;
  --color-border: #ffffff;
  --color-accent: #c9a46c;
  --color-accent-2: #ef4444;
  --font-display: "Instrument Serif", serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0b0f',
    surface: '#14131a',
    ink: '#f2f0ed',
    muted: '#8c8a94',
    line: '#ffffff',
    accent: '#c9a46c',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Keep the hero media panel to the right of the headline on wide screens
- **Do:** Set headlines in Instrument Serif in cream
- **Do:** Use gold only for primary actions
- **Don't:** Don't fill the media panel with bright colour; keep it dark
- **Don't:** Don't round the corners of panels; they stay square
- **Don't:** Don't set body copy in the serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
