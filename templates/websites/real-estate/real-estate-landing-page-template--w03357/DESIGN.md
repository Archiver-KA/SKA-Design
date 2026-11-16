# Design system — Real Estate Landing Page Template

`SN-W03357` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cinematic intro on a near-black ground (#18181b). The first screen is almost empty: a small spaced wordmark at top centre and a dark, door-like framed panel in the middle, lit only at its edge. The page copy is white sans-serif, and the yellow accent (#eab308) appears only in the small wordmark. The design is a dark, minimal stage for a 3D sequence.

**Mood:** cinematic, minimal, dark, theatrical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#e2e8f0` · `#27272a` · `#f1f5f9` · `#18181b` · `#eab308` · `#09090b` · `#ca8a04`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h3 14px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #eab308;
  --color-accent-2: #e2e8f0;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#eab308',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#18181b) so the 3D scene reads as the focus
- **Do:** Use yellow (#eab308) only for the small wordmark and single highlights
- **Do:** Keep the intro to one centred element with generous empty space around it
- **Don't:** Don't add text or buttons over the 3D scene during the intro
- **Don't:** Don't use the yellow for buttons or large fills
- **Don't:** Don't put light backgrounds behind the scene

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
