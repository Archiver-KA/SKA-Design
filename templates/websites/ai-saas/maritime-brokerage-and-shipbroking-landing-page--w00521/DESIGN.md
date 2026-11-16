# Design system — Maritime Brokerage & Shipbroking Landing Page Template

`SN-W00521` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy maritime page on a #071b2c ground, with a large white sans-serif headline and a faint oversized wordmark behind it. Gold (#c9a227) marks the navigation button, the eyebrow and the key figures on a dark dashboard-style card. Navy and gold together give a formal, institutional tone suited to a shipbroking house.

**Mood:** formal, institutional, navy, gold, nautical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#071b2c` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#5f7488` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a227` | Primary action and highlights |
| Second accent | `#0e4a7b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0e4a7b` · `#c9a227` · `#071b2c` · `#e8d9a3` · `#d8e1ea` · `#5f7488` · `#102033` · `#9a7a16` · `#f7f9fb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_8px_24px_-12px_rgba(7,27,44,0.04)]`, `shadow-[0_20px_40px_-16px_rgba(14,74,123,0.12)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 rounded-lg bg-[#C9A227] px-4 py-2.5 text-sm font-medium text-[#071B2C] transition hover:bg-[#E8D9A3]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. Logo cloud (`logo-cloud`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #071b2c;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #5f7488;
  --color-border: #ffffff;
  --color-accent: #c9a227;
  --color-accent-2: #0e4a7b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#071b2c',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#5f7488',
    line: '#ffffff',
    accent: '#c9a227',
    accent2: '#0e4a7b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page on the deep navy ground (#071b2c) with white headlines.
- **Do:** Use gold (#c9a227) for the navigation button, eyebrows and key figures.
- **Do:** Present data in dark cards with thin gold progress bars.
- **Don't:** Don't set the page on a light grey ground; it stays dark navy.
- **Don't:** Don't use gold for body copy or long paragraphs.
- **Don't:** Don't use the light blue-grey (#d8e1ea) as a background for the dark sections.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
