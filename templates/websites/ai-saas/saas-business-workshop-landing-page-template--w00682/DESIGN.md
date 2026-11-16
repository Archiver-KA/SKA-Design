# Design system — SaaS Business Workshop Landing Page Template

`SN-W00682` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `es`

## Direction

A light workshop-event hero with a centred, heavy sans headline in dark navy, where the letters 'ME' in 'PyME' are set in bright blue (#0047ff) as the only accent. A pale blue wash sits behind the headline, and a row of small outlined chips lists the date, time, format and price. The primary button is a solid blue pill with a short note below, giving a clear, event-style tone.

**Mood:** clear, event-style, bright, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f7fa` | Cards, panels, raised areas |
| Text | `#072146` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0047ff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0047ff` · `#e2e8f0` · `#072146` · `#334155` · `#64748b` · `#94a3b8` · `#0f172a` · `#f5f7fa` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_8px_24px_rgba(0,71,255,0.25)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 bg-[#0047FF] hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-[0_8px_24px_rgba(0,71,255,0.25)] hover:shadow-[0_12px_32px_rgba(0,71,255,0.35)] hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. Schedule (`schedule-agenda`)
4. Feature grid (`features`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f7fa;
  --color-text: #072146;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0047ff;
  --color-accent-2: #ef4444;
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
    surface: '#f5f7fa',
    ink: '#072146',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0047ff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark navy (#072146) and the highlight letters in blue (#0047ff)
- **Do:** Use one solid blue pill button as the primary action, with a short note below it
- **Do:** Put event facts (date, time, format, price) in a row of small outlined chips
- **Don't:** Don't use the red (#ef4444) accent in the hero
- **Don't:** Don't set the subline in navy; it is the grey slate used for supporting copy
- **Don't:** Don't place a second button of equal weight beside the primary one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
