# Design system — Renewable Energy Project Landing Page Template

`SN-W04074` · business-services · light mode · Sinera Atlas theme `route` · language `pt`

## Direction

A full-bleed photographic hero of wind turbines at sunset, under a dark veil that keeps the white bold sans headline legible. The lime green (#8cc63f) is used for the primary button, and a translucent stat card holds the one key figure. Copy is short and direct, so the landscape and the number carry the message.

**Mood:** photographic, optimistic, clean, direct, hopeful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f0f5f4` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8cc63f` | Primary action and highlights |
| Second accent | `#0b3b42` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#8cc63f` · `#0b3b42` · `#334155` · `#64748b` · `#000000` · `#0f172a` · `#e2e8f0` · `#cbd5e1` · `#65a30d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-16`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-primary hover:bg-lime-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Stats band (`stats`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f0f5f4;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #8cc63f;
  --color-accent-2: #0b3b42;
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
    surface: '#f0f5f4',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#8cc63f',
    accent2: '#0b3b42',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold white sans over the photograph
- **Do:** Use the lime green (#8cc63f) only for the primary button and key figures
- **Do:** Hold the key figure in a translucent card with an icon above it
- **Don't:** Don't set lime text over the bright sky areas
- **Don't:** Don't place a second photograph behind the hero
- **Don't:** Don't let the translucent stat card cover the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
