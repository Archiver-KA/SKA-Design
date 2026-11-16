# Design system — AI Receptionist and Lead Automation Landing Page Template

`SN-W00136` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Light, plain-spoken service-business page on white, with a heavy near-black Inter headline and a grey subhead. The hero is built around a phone mockup of a chat thread, with indigo bubbles (#4f46e5) and small floating event chips, so the product is shown rather than described. Ornament is minimal, and the indigo is the only colour that signals action.

**Mood:** plain, practical, clean, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#4f46e5` · `#ffffff` · `#e2e8f0` · `#475569` · `#f8fafc` · `#334155` · `#e0e7ff` · `#64748b` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 20px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
  --color-accent-2: #22c55e;
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
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#4f46e5',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter in near-black at large size with tight leading
- **Do:** Use the indigo (#4f46e5) for the primary button and the chat bubbles only
- **Do:** Show the product as a phone mockup with floating event chips in the hero
- **Don't:** Don't use decorative illustration; the phone mockup is the visual
- **Don't:** Don't introduce a second brand colour
- **Don't:** Don't set body copy in pure black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
