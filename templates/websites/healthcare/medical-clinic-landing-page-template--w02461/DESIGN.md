# Design system — Medical Clinic Landing Page Template

`SN-W02461` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A white, sans-led hero where a heavy near-black headline carries one teal-blue phrase on its middle line. The primary button is solid black with a white outline partner beside it, and a tall rounded portrait panel with a floating stat card sits on the right. Teal is kept for the highlighted phrase and small status marks, so the page reads as clean and modern.

**Mood:** clean, modern, confident, friendly, clinical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#0891b2` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0891b2` · `#64748b` · `#0f172a` · `#e2e8f0` · `#94a3b8` · `#f8fafc` · `#06b6d4` · `#cbd5e1` · `#cffafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-cyan-900/5`, `shadow-slate-200`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="w-full py-4 px-6 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Booking form (`booking`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #0891b2;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
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
    line: '#334155',
    accent: '#0891b2',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use teal (#0891b2) for the highlighted headline phrase and small status marks only
- **Do:** Keep the primary button solid near-black, with a white outline partner
- **Do:** Set the headline in heavy Inter, tightly leaded
- **Don't:** Don't colour whole buttons teal; they are black
- **Don't:** Don't set body copy in pure black; keep it slate grey
- **Don't:** Don't drop the rounded corners on the portrait panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
