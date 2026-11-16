# Design system — Sovereign Care Home Template

`SN-W02530` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A traditional care-home brochure site: a mid-blue navigation bar and a blue-tinted photograph of the building carry the hero, with bold white sans headlines over the image. The mid-blue is the dominant colour. The calls to action are white pills, so the page relies on contrast and the photograph rather than a bright accent.

**Mood:** traditional, dependable, blue-toned, brochure-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#475569` · `#e2e8f0` · `#0f172a` · `#cbd5e1` · `#94a3b8` · `#f8fafc` · `#270914` · `#f1f5f9` · `#195186`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Logo cloud (`logo-cloud`)
5. Team (`team`)
6. Articles (`blog-articles`)
7. Map / location (`map-location`)
8. Call to action (`cta`)
9. Testimonials (`testimonials`)
10. Pricing (`pricing`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #cbd5e1;
  --color-accent: #e2e8f0;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#cbd5e1',
    accent: '#e2e8f0',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero over the building photograph with a blue tint and white headlines
- **Do:** Use the mid-blue navigation bar as the anchor colour across the page
- **Do:** Use white pill buttons for the hero actions
- **Don't:** Don't add yellow accents.
- **Don't:** Don't use a flat white hero without the photograph
- **Don't:** Don't switch the navigation to a dark navy; it stays mid-blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
