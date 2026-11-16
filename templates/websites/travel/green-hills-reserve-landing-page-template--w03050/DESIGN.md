# Design system — Green Hills Reserve Landing Page Template

`SN-W03050` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A calm nature page whose hero ground is a pale sky gradient fading to white, with dark slate headlines set in heavy Inter. The primary buttons and small pill badges use a near-black forest green (#022c22), and the sky carries most of the colour. Layout is open, with generous space above and below each block.

**Mood:** calm, airy, natural, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#022c22` | Primary action and highlights |
| Second accent | `#065f46` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#64748b` · `#475569` · `#022c22` · `#6ee7b7` · `#d1fae5` · `#064e3b` · `#065f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]`, `shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-emerald-950 hover:bg-emerald-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Timeline (`timeline`)
3. Feature grid (`features`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #022c22;
  --color-accent-2: #065f46;
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
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#022c22',
    accent2: '#065f46',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black green (#022c22) for the primary button and badges only
- **Do:** Set headlines in heavy Inter with tight line spacing
- **Do:** Keep the hero ground a pale sky gradient rather than a solid colour
- **Don't:** Don't use the mint (#a7f3d0) as a full page background
- **Don't:** Don't place more than one dark button per screen
- **Don't:** Don't crowd sections; keep generous vertical space

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
