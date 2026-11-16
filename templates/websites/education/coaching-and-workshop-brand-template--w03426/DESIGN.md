# Design system — Coaching & Workshop Brand Template

`SN-W03426` · education · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A light, direct coaching page on white, with a bold sans-serif headline in near-black where the second and third lines are set in violet [#6d28d9]. Buttons are near-black pills, and a large portrait photograph sits to the right with a pale yellow glow behind it. The layout is clean and personal, leaning on the portrait and the violet emphasis.

**Mood:** clean, personal, direct, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6d28d9` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#475569` · `#ede9fe` · `#ddd6fe` · `#e2e8f0` · `#6d28d9` · `#334155` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-slate-900/10`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="nav-link rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 bg-slate-100 text-slate-950">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Newsletter signup (`newsletter`)
6. Call to action (`cta`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6d28d9;
  --color-accent-2: #fef3c7;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f1f5f9',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6d28d9',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the second and third headline lines in violet (#6d28d9)
- **Do:** Use near-black pill buttons for the main actions
- **Do:** Place a large portrait photograph beside the hero text
- **Don't:** Don't use violet for body text; keep it to headline emphasis and small tags
- **Don't:** Don't use the pale yellow glow as a text or button colour
- **Don't:** Don't crop the portrait into a flat colour block

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
