# Design system — Holistic Energy Healing Landing Page Template

`SN-W02412` · healthcare · light mode · Sinera Atlas theme `route` · language `de`

## Direction

The energy-healing page is soft and ceremonial: a warm cream ground (#f5f3eb), a large serif headline in deep purple (#4b2c5e) with the middle line in italic, and a purple pill for the nav button. Body copy is set in muted grey-green, and the content sits in an arched, rounded frame. The purple is used sparingly, so the page reads as calm and devotional.

**Mood:** soft, ceremonial, calm, organic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f3eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4b2c5e` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#4b2c5e` · `#64748b` · `#f59e0b` · `#f5f3eb` · `#ffffff` · `#475569` · `#94a3b8` · `#a855f7` · `#f3e8ff` · `#fbf9f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Plus Jakarta Sans
- **Loaded families:** Cormorant Garamond, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-6 py-2.5 bg-[#4B2C5E] text-[#F5F3EB] text-xs uppercase tracking-widest rounded-full hover:bg-opacity-90 transition-all font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f3eb;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #4b2c5e;
  --color-accent-2: #f59e0b;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f3eb',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#4b2c5e',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in serif in deep purple (#4b2c5e), with the middle line in italic
- **Do:** Keep the ground warm cream (#f5f3eb) and body text muted
- **Do:** Frame key imagery in arched or large-radius shapes
- **Don't:** Don't use bright amber or gold as accents.
- **Don't:** Don't set headlines in sans-serif; the serif is the voice
- **Don't:** Don't use hard rectangular cards; keep corners soft

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
