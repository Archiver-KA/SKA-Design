# Design system — Flora Botanical Artistry Landing Page Template

`SN-W02017` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white, sans-led page with 3D ambient animation sits on a near-white ground with soft gradient glows: a warm cream haze at the top left, a soft rose glow on the right, and pale yellow below. The rose (#fb7185) is the one accent hue, so it should be used sparingly.

**Mood:** soft, airy, gentle, pastel

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfcfc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |
| Second accent | `#fb7185` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#1e293b` · `#334155` · `#e2e8f0` · `#f1f5f9` · `#475569` · `#fb7185` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-orange-500/10`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 group border border-slate-800">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfcfc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #fb7185;
  --color-accent-2: #fb7185;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfcfc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#fb7185',
    accent2: '#fb7185',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the rose (#fb7185) as the one accent colour for highlights
- **Do:** Keep the background near-white with soft gradient glows
- **Do:** Set headings in Inter, with a clear size step between heading levels
- **Don't:** Don't fill large areas with the rose; it reads as a glow, not a surface
- **Don't:** Don't add hard-edged shapes behind the 3D canvas
- **Don't:** Don't set headings in a serif; the page is sans-led

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
