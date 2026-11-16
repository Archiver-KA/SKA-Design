# Design system — Travel and Flight Booking Landing Page Template

`SN-W03140` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A flight-booking page built around a full-width solid blue hero (#1f5fe0) with large white bold sans type, a small pill above the headline, and a floating white search card with tabs and labelled fields below. The search button is a warm orange, the only contrasting colour, which makes it the clear action. The rest of the page sits on white with slate type.

**Mood:** confident, functional, bright, direct, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#94a3b8` | Hairlines, dividers, outlines |
| Accent | `#1f5fe0` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#94a3b8` · `#ffffff` · `#64748b` · `#e2e8f0` · `#334155` · `#475569` · `#1f5fe0` · `#f1f5f9` · `#0b2f7a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-slate-900/5`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="rounded-xl bg-white px-6 py-3 text-sm font-semibold whitespace-nowrap transition hover:opacity-90">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Bento grid (`bento-grid`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #94a3b8;
  --color-accent: #1f5fe0;
  --color-accent-2: #059669;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
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
    muted: '#64748b',
    line: '#94a3b8',
    accent: '#1f5fe0',
    accent2: '#059669',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero on the solid blue (#1f5fe0) with white bold sans type
- **Do:** Keep the booking search as a white card with tabs and labelled fields
- **Do:** Use the warm orange only for the search button
- **Don't:** Don't use the orange for anything except the primary search action
- **Don't:** Don't set small body copy on the blue without checking contrast
- **Don't:** Don't use light grey (#e2e8f0) as an accent; it is a border and surface tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
