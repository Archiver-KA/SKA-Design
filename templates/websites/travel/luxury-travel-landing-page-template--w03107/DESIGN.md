# Design system — Luxury Travel Landing Page Template

`SN-W03107` · travel · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A near-white hero with a faint blue wash in the top-left corner carries a large light sans-serif headline in near-black, L'art de, with s'évader. in pale grey beneath. Controls are a near-black primary button and a thin outlined secondary, and a white card with thin borders lists destinations with prices. The design is airy and refined, with colour kept to small markers.

**Mood:** airy, refined, clean, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#0ea5e9` · `#0f172a` · `#ffffff` · `#64748b` · `#f8fafc` · `#1e293b` · `#0284c7` · `#e2e8f0` · `#475569` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · body 16px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="h-10 px-5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all hover:translate-y-[-1px] shadow-xl shadow-slate-900/10 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #f43f5e;
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
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large sans-serif, with the second line in pale grey
- **Do:** Use the near-black (#0f172a) for the primary button and headings
- **Do:** Build lists as white cards with thin borders and small coloured markers
- **Don't:** Don't use the pale blue (#e0f2fe) as the page ground; the page is near-white
- **Don't:** Don't rely on a 3D globe for the hero
- **Don't:** Don't use the coral (#f43f5e) for buttons; it appears only as a small marker

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
