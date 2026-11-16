# Design system — Lumio Botanical Landing Page Template

`SN-W02437` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

This sibling of the botanical template uses the same layout: a blush-cream ground (#f9efe4) in a thin pale-rose frame, and a large dark forest-green ring chart with a bright green data card and a small donut indicator. The chart carries the colour, and the display type sits behind it.

**Mood:** botanical, data-driven, soft, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9efe4` | Page ground |
| Surface | `#f8ede2` | Cards, panels, raised areas |
| Text | `#1e0c1f` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2b1621` | Primary action and highlights |
| Second accent | `#f6d6ff` | Supporting highlights |

Palette by frequency of use: `#2b1621` · `#1e0c1f` · `#f8ede2` · `#ffffff` · `#f9efe4` · `#f6d6ff` · `#5b223e` · `#d946ef` · `#022c22` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Inter
- **Scale (largest breakpoint):** h1 60px · h2 128px · h3 24px · body 14px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.24rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[50%]` (50%)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[#5B223E]/5`
- **Content width:** `max-w-[78rem]`, `max-w-[64%]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 border border-[#2B1621]/10 bg-[#F8EDE2] px-4 py-2 text-sm font-normal shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D946EF]/40 hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Feature grid (`features`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9efe4;
  --color-surface: #f8ede2;
  --color-text: #1e0c1f;
  --color-border: #ffffff;
  --color-accent: #2b1621;
  --color-accent-2: #f6d6ff;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9efe4',
    surface: '#f8ede2',
    ink: '#1e0c1f',
    line: '#ffffff',
    accent: '#2b1621',
    accent2: '#f6d6ff',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Keep the page ground blush cream (#f9efe4) inside the thin pale-rose frame
- **Do:** Build data graphics as large bold rings in dark green with a bright green highlight
- **Do:** Use dark plum (#2b1621) for the nav button
- **Don't:** Don't cover the chart with type; the rings are the hero
- **Don't:** Don't introduce lilac or magenta accents.
- **Don't:** Don't add more hues to the data graphics beyond the greens

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
