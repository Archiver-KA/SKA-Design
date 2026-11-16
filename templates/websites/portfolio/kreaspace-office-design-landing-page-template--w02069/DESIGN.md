# Design system — Kreaspace Office Design Landing Page Template

`SN-W02069` · portfolio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A business landing page on white with a heavy sans headline in deep navy-black (#0f172a), and one orange (#ea580c) word picked out in the middle of it. Orange also appears on the logo tile, the top-right button and a large rounded shape behind the hero image, making it the single warm accent, while the hero buttons are navy and outlined. The orange highlight word is the recognisable element.

**Mood:** bold, corporate, direct, clean, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#ea580c` · `#f97316` · `#475569` · `#fb923c` · `#ffedd5` · `#94a3b8` · `#f1f5f9` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Marquee (`marquee`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #ea580c;
  --color-accent-2: #e2e8f0;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
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
    accent: '#ea580c',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use orange (#ea580c) for one highlighted word per headline and for the top-right button.
- **Do:** Set headlines in a heavy sans in deep navy-black (#0f172a).
- **Do:** Use a large rounded orange shape behind the hero image as the only decorative block.
- **Don't:** Don't use orange for body text; it is kept for highlights and buttons.
- **Don't:** Don't set the primary hero button in orange; it is dark navy.
- **Don't:** Don't add gradients; the fills are flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
