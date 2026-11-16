# Design system — Tech Ecosystem & SaaS Landing Page Template

`SN-W00768` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, functional layout on white with a green (#16af38) accent. The sidebar and a row of large statistics carry the structure. The green is kept for the primary action and the key figures, so the page reads as a data-led directory rather than a brand showcase.

**Mood:** functional, light, data-led, institutional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#252525` | Headings and primary copy |
| Muted text | `#777777` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#16af38` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#252525` · `#777777` · `#16af38` · `#e5e7eb` · `#9b9b9b` · `#f5f5f5` · `#ececec` · `#f3f3f3` · `#1c1c1c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Golos Text
- **Body:** Golos Text
- **Loaded families:** Golos Text
- **Scale (largest breakpoint):** h1 60px · h2 26px · h3 16px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[-1.9px]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[1392px]`, `max-w-[640px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="mx-auto block rounded-full border border-[#e5e7eb] bg-white px-6 py-2.5 text-sm font-medium text-[#252525] shadow-sm transition hover:bg-[#f5f5f5]">…</a>
```

## Motion, effects and stack

- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #252525;
  --color-muted: #777777;
  --color-border: #e5e7eb;
  --color-accent: #16af38;
  --font-display: "Golos Text", sans-serif;
  --font-body: "Golos Text", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#252525',
    muted: '#777777',
    line: '#e5e7eb',
    accent: '#16af38',
  },
  fontFamily: { display: ['Golos Text'], sans: ['Golos Text'] },
} }
```

## Do and don't

- **Do:** Use the green (#16af38) for the primary action and the key figures only
- **Do:** Set statistics as large bold figures with short grey captions beneath
- **Do:** Keep the sidebar as a light list with icons and a simple active state
- **Don't:** Don't put the green on large background areas
- **Don't:** Don't add a dark hero; the page stays light
- **Don't:** Don't leave nav items without icons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
