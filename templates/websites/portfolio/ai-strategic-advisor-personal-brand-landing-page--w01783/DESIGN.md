# Design system — AI Strategic Advisor Personal Brand Landing Page Template

`SN-W01783` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An off-white page with a large dark navy headline in DM Sans, centred and set in two short lines. The italic subline is in Source Serif 4 and grey, the one place the serif appears. A navy filled button sits beside an outlined secondary, so the layout is quiet and centred with generous space.

**Mood:** quiet, centred, considered, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c9a227` · `#475569` · `#e2e8f0` · `#64748b` · `#cbd5e1` · `#f1f5f9` · `#94a3b8` · `#f8f7f4` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** Source Serif 4
- **Loaded families:** DM Sans, Source Serif 4
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-navy text-paper font-sans text-sm font-medium tracking-wide hover:bg-gold hover:text-white transition-colors duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Stats band (`stats`)
6. Logo cloud (`logo-cloud`)
7. About (`about`)
8. Articles (`blog-articles`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #e2e8f0;
  --font-display: "DM Sans", sans-serif;
  --font-body: "Source Serif 4", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    muted: '#475569',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['DM Sans'], sans: ['Source Serif 4'] },
} }
```

## Do and don't

- **Do:** Set the headline in DM Sans, centred, in dark navy.
- **Do:** Set the italic subline in Source Serif 4 in grey.
- **Do:** Keep navy for the primary button and headline, with an outline for the secondary.
- **Don't:** Don't add gold or other warm accents.
- **Don't:** Don't set the headline in the serif; it is DM Sans.
- **Don't:** Don't fill the secondary button; it stays outlined.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
