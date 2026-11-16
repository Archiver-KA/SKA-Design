# Design system — Pool Services Landing Page Template

`SN-W04055` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A photograph-led pool-builder hero: a long infinity pool under a dark gradient carries a large white serif headline in capitals, with one word in italic. Small blue tags sit beneath the headline, and a white quote box and link sit in a thin top bar. The layout is wide and calm, with the photograph giving the page its character.

**Mood:** photographic, calm, premium, wide

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#0f172a` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#2563eb` · `#0f172a` · `#1e3a8a` · `#1e293b` · `#cbd5e1` · `#64748b` · `#facc15` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 14px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-black`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-slate-800 text-white font-medium text-sm py-3 px-6 hover:bg-blue-900 transition flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Timeline (`timeline`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Testimonials (`testimonials`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #0f172a;
  --color-accent: #3b82f6;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#0f172a',
    accent: '#3b82f6',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white serif capitals over the photograph
- **Do:** Use blue (#3b82f6) for the status tags and the estimate link
- **Do:** Keep the hero photograph full width under a dark gradient
- **Don't:** Don't place white text over bright parts of the photograph
- **Don't:** Don't use more than two blue tags
- **Don't:** Don't add a second typeface to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
