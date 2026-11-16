# Design system — Notium Notes App Landing Page Template

`SN-W00597` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A mobile-first notes app shown as three phone screens on a light ground: white cards with soft borders, a deep navy (#0f172a) selected tile and a dark pinned card, and a thin search bar at the top. Hero copy sits on a dark band in white at a modest size. The navy carries the selected and emphasis states, and the white cards keep the rest of the interface quiet.

**Mood:** clean, mobile-first, soft, orderly, app-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#f8fafc` · `#334155` · `#94a3b8` · `#475569` · `#f1f5f9` · `#cbd5e1` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 24px · h2 22px · h3 18px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)]`, `shadow-sm`, `shadow-lg`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-3 py-1.5 rounded-xl bg-white text-slate-900 text-[11px] font-medium flex items-center gap-1 hover:bg-white/90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #334155;
  --color-border: #cbd5e1;
  --color-accent: #0f172a;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#334155',
    line: '#cbd5e1',
    accent: '#0f172a',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the deep navy (#0f172a) for selected tiles, pinned cards and the primary chip.
- **Do:** Set cards white (#ffffff) on the light ground (#f8fafc) with thin borders (#cbd5e1).
- **Do:** Keep the small headline in the dark band in white at a modest size.
- **Don't:** Don't use the pale grey (#e2e8f0) as the accent; it only tints inactive surfaces.
- **Don't:** Don't use the yellow (#facc15) for badges.
- **Don't:** Don't add gradients or glows to the app screens; the flat navy is the style.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
