# Design system — Architect Archetype Sales Landing Page Template

`SN-W03175` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A clean, light sales page for a diagnostic product, with white and pale grey panels, a deep navy card for the result, and a serif headline. The navy card is the strongest block on the page and frames the result as the main event. Accents are muted: pale grey borders and a small teal tint rather than a hot colour.

**Mood:** professional, clear, measured, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f7fafc` | Cards, panels, raised areas |
| Text | `#141414` | Headings and primary copy |
| Muted text | `#718096` | Secondary copy, captions |
| Border | `#1a202c` | Hairlines, dividers, outlines |
| Accent | `#1a202c` | Primary action and highlights |
| Second accent | `#81e6d9` | Supporting highlights |

Palette by frequency of use: `#1a202c` · `#a0aec0` · `#e2e8f0` · `#ffffff` · `#141414` · `#718096` · `#4299e1` · `#81e6d9` · `#f7fafc` · `#e6e8eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 18px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[3px]` (3px), `rounded-[4px]` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[680px]`, `max-w-[240px]`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="w-full bg-[#4299E1] text-white py-4 px-6 rounded-[3px] font-[Montserrat] font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors hover:bg-[#3182CE] focus:ring-4 focus:ring-[#81E6D9] outline-none group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f7fafc;
  --color-text: #141414;
  --color-muted: #718096;
  --color-border: #1a202c;
  --color-accent: #1a202c;
  --color-accent-2: #81e6d9;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 3px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f7fafc',
    ink: '#141414',
    muted: '#718096',
    line: '#1a202c',
    accent: '#1a202c',
    accent2: '#81e6d9',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use the deep navy (#1a202c) for the result card and its headings
- **Do:** Keep page sections on #ffffff and #f7fafc with thin grey dividers
- **Do:** Use the teal (#81e6d9) only as a small highlight
- **Don't:** Don't use the teal as a large fill
- **Don't:** Don't set body copy on the navy card in mid grey; keep it white
- **Don't:** Don't add a second dark block that competes with the result card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
