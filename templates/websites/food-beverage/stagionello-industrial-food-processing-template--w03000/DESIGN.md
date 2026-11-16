# Design system — Stagionello Industrial Food Processing Template

`SN-W03000` · food-beverage · light mode · Sinera Atlas theme `route` · language `it`

## Direction

A cream industrial-food page with a split hero: a bold serif headline on the left, where the first phrase is gold (#c4993a) and the rest is dark, and a white form card on the right with a black submit button. The green (#116432) fills the primary button, and gold marks only the first headline phrase. Form fields are thin grey with small labels.

**Mood:** professional, warm, structured, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f2ec` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0d0d0b` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#116432` | Primary action and highlights |
| Second accent | `#c4993a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#116432` · `#0d0d0b` · `#525252` · `#404040` · `#e5e5e5` · `#fafafa` · `#f5f5f5` · `#4ade80` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Syne
- **Loaded families:** Syne, Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 18px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-1.5 bg-[#116432] hover:bg-[#147a3b] text-white text-xs font-semibold tracking-widest uppercase py-2.5 px-5 rounded-full transition-all hover:shadow-[0_0_18px_rgba(17,100,50,0.25)] active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Modal / overlay (`modal-overlay`)
6. Integrations (`integrations`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f2ec;
  --color-surface: #ffffff;
  --color-text: #0d0d0b;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #116432;
  --color-accent-2: #c4993a;
  --font-display: "Syne", sans-serif;
  --font-body: "Syne", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f2ec',
    surface: '#ffffff',
    ink: '#0d0d0b',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#116432',
    accent2: '#c4993a',
  },
  fontFamily: { display: ['Syne'], sans: ['Syne'] },
} }
```

## Do and don't

- **Do:** Use the green (#116432) for the primary button only.
- **Do:** Set the first headline phrase in gold (#c4993a), and the rest in dark text.
- **Do:** Keep forms in a white card with thin grey fields and a black submit button.
- **Don't:** Don't use gold for body copy or buttons.
- **Don't:** Don't drop the form card from the hero; it is the conversion point.
- **Don't:** Don't set the form button in green; it is black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
