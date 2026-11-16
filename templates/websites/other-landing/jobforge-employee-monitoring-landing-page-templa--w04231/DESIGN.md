# Design system — JobForge Employee Monitoring Landing Page Template

`SN-W04231` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean, light landing page on white (#ffffff) with near-black navy headings and a single dark navy button for the main call to action. Soft pastel cards in peach, mint and pale blue carry the statistics, which gives the page a friendly, rounded feel. Inter is set large for the hero headline and small and grey for supporting copy.

**Mood:** clean, friendly, rounded, pastel

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#d4efa8` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#94a3b8` · `#64748b` · `#e2e8f0` · `#f8fafc` · `#475569` · `#1e293b` · `#f1f5f9` · `#ffeed9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Sign-in form (`auth-form`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #d4efa8;
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
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#d4efa8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the main button in dark navy (#1e293b) and use no other button colour
- **Do:** Keep statistic cards in soft pastel fills with rounded corners
- **Do:** Set the hero headline large in Inter with tight, dark type
- **Don't:** Don't use the pastel fills for body text areas
- **Don't:** Don't add a second dark button in the same section
- **Don't:** Don't set supporting copy in dark navy; it is grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
