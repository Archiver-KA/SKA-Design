# Design system — RenovAlgarve 

`SN-W03378` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Bold, high-contrast landing page for a service business. The opening headline is set in all-caps dark navy at display size, with one phrase marked by a yellow highlight band. Primary buttons are solid dark navy, and the proof points sit in pale tiles with short labels, so the page reads as direct and practical rather than decorative.

**Mood:** bold, direct, practical, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#10b981` · `#e2e8f0` · `#475569` · `#f8fafc` · `#94a3b8` · `#64748b` · `#059669` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-slate-900/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white px-5 py-2 text-sm font-medium transition-all hover:shadow-xl hover:shadow-slate-900/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. Footer (`footer`)
6. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #0f172a;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#ffffff',
    accent: '#0f172a',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in all caps in dark navy (#0f172a) at display size.
- **Do:** Use the yellow highlight behind one phrase per headline only.
- **Do:** Keep the stat tiles on pale panels (#f8fafc) with short labels under the figures.
- **Don't:** Don't set the highlight in a second colour or on body text.
- **Don't:** Don't place a photo overlay behind the headline; keep the ground flat.
- **Don't:** Don't use the navy as a background fill for whole sections.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
