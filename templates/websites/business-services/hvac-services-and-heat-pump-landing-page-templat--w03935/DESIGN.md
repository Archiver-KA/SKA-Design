# Design system — HVAC Services and Heat Pump Landing Page Template

`SN-W03935` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy top section introduces the page, with the headline in white and one highlight word in amber (#f59e0b). The hero sits over a blurred grey photograph darkened by a navy wash, which keeps the type legible without a hard edge. Below, a large white rounded panel holds the about text in slate, with three short feature blocks. Amber is kept to the highlight word, small tags and the floating action dot.

**Mood:** practical, ordered, dependable, clear, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#f59e0b` · `#ffffff` · `#94a3b8` · `#64748b` · `#e2e8f0` · `#f8fafc` · `#d97706` · `#475569` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 14px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-6xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full group bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Contact form (`contact-form`)
5. FAQ (`faq`)
6. Services (`services`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f59e0b;
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
    background: '#0f172a',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#f59e0b',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one highlight word in each headline in amber (#f59e0b) and keep the rest in white.
- **Do:** Keep the hero over the darkened photograph and the body copy in the white rounded panel.
- **Do:** Use amber for small tags and the floating action only, not for long copy.
- **Don't:** Don't set long copy directly on the photograph; keep it to headlines and short lines.
- **Don't:** Don't use amber for panel backgrounds.
- **Don't:** Don't remove the rounded corners on the content panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
