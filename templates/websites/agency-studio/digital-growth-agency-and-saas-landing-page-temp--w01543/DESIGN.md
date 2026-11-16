# Design system — Digital Growth Agency & SaaS Landing Page Template

`SN-W01543` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `tr`

## Direction

A white page with a centred black serif headline, and the final phrase set in a strong rose that carries the accent. A soft pink glow sits behind the headline and the top-right button is a deep red fill. The serif headline sets a formal tone while the rose keeps it warm.

**Mood:** warm, editorial, rose-accented, formal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fff1f2` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fda4af` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fff1f2` · `#fda4af` · `#fecdd3` · `#ffe4e6` · `#059669` · `#4c0519` · `#ecfdf5` · `#047857` · `#3b0764`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="group inline-flex min-h-12 items-center gap-3 rounded-2xl bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-secondary)] p-1 pl-5 text-sm font-semibold text-white shadow-lg shadow-rose-950/15 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:ring-offset-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Call to action (`cta`)
5. Marquee (`marquee`)
6. Feature grid (`features`)
7. Stats band (`stats`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fff1f2;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #fda4af;
  --color-accent-2: #059669;
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
    surface: '#fff1f2',
    ink: '#111111',
    line: '#ffffff',
    accent: '#fda4af',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in black, centred, with the final phrase in rose
- **Do:** Keep the soft rose glow behind the headline, not behind body text
- **Do:** Use the deep red fill for the navigation button only
- **Don't:** Don't use rose for body copy
- **Don't:** Don't use the serif for small labels
- **Don't:** Don't add a second accent beside the rose and red

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
