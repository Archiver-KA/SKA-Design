# Design system — Tennis Club Landing Page Template

`SN-W02689` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Sports club landing page built on a full-bleed court photograph under a light white haze, with a large white headline in Inter stacked on several lines. The surrounding palette is neutral and light, and the primary button is dark navy. The photograph and headline weight carry the page, not colour blocks.

**Mood:** sporty, photographic, bold, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#3b82f6` · `#475569` · `#bfdbfe` · `#e2e8f0` · `#64748b` · `#f8fafc` · `#94a3b8` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 18px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-md`
- **Content width:** `max-w-screen-xl`, `max-w-screen-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Services (`services`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #0f172a;
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
    muted: '#475569',
    line: '#ffffff',
    accent: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put the headline in large Inter over the court photograph.
- **Do:** Use the dark navy (#0f172a) for primary buttons.
- **Do:** Let the photograph carry the hero; add no solid colour block behind it.
- **Don't:** Don't use the bright blue (#3b82f6) for buttons; the primary button is navy.
- **Don't:** Don't place body text over the bright haze without a darker overlay.
- **Don't:** Don't add a gradient background to the hero; the photograph does that job.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
