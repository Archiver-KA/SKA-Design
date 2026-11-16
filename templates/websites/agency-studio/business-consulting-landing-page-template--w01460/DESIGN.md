# Design system — Business Consulting Landing Page Template

`SN-W01460` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light ground ([#fafafa]) with white cards holding a thin-stroke icon, a bold title and a short grey description, arranged in a three-column grid. The palette is neutral and no accent colour appears in the grid. Hierarchy comes from card titles, spacing and the hairline edges between cards.

**Mood:** neutral, orderly, plain, corporate, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#e4e4e7` · `#52525b` · `#a1a1aa` · `#fafafa` · `#d4d4d8` · `#3f3f46` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1300px]`, `max-w-[240px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="text-xs bg-white text-black px-3 py-1.5 rounded-full font-medium hover:bg-zinc-200 transition-colors hover:scale-105 transform">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #18181b;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #10b981;
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
    background: '#fafafa',
    surface: '#18181b',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#10b981',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep cards white on the light ground with hairline edges
- **Do:** Pair each card icon with a bold title and a grey description
- **Do:** Keep the grid to three columns on desktop
- **Don't:** Don't add a dark navy background to the grid sections
- **Don't:** Don't add a colour accent to the icons
- **Don't:** Don't round card corners beyond the soft radius

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
