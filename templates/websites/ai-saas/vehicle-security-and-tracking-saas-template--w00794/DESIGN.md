# Design system — Vehicle Security & Tracking SaaS Template

`SN-W00794` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A clean light page for vehicle tracking, with a two-column hero: a bold near-black headline on the left and a light map card on the right, showing a dashed blue route and a dot marker. Blue (#2b5ce6) is kept to the primary button and the route line. Buttons are outlined or solid with small corners, and the body copy stays in a plain sans.

**Mood:** clear, functional, light, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e9eef6` | Cards, panels, raised areas |
| Text | `#0e1726` | Headings and primary copy |
| Muted text | `#556070` | Secondary copy, captions |
| Border | `#d9dfe8` | Hairlines, dividers, outlines |
| Accent | `#2b5ce6` | Primary action and highlights |

Palette by frequency of use: `#d9dfe8` · `#556070` · `#ffffff` · `#0e1726` · `#2b5ce6` · `#c9d3e3` · `#1f49c0` · `#e9eef6` · `#f4f6fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-[6px]` (6px)
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-white focus:px-4 focus:py-3 focus:rounded-ctl">…</a>
```

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e9eef6;
  --color-text: #0e1726;
  --color-muted: #556070;
  --color-border: #d9dfe8;
  --color-accent: #2b5ce6;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e9eef6',
    ink: '#0e1726',
    muted: '#556070',
    line: '#d9dfe8',
    accent: '#2b5ce6',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Use the blue (#2b5ce6) for the primary button and the map route
- **Do:** Put the map preview in a light card with a small floating status label
- **Do:** Keep corners at 6px on buttons and cards
- **Don't:** Don't use blue for large section backgrounds
- **Don't:** Don't set the map on a dark ground
- **Don't:** Don't use a pill-shaped primary button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
