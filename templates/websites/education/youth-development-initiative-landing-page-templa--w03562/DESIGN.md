# Design system — Youth Development Initiative Landing Page Template

`SN-W03562` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The youth development page uses a dark navy hero with a large white headline in bold sans-serif. The word purpose is set in orange (#f08b39), the only warm colour on screen, and the same orange fills the primary button. A ghosted outlined button sits beside it. The tone is confident and mission-driven.

**Mood:** confident, mission-driven, dark, bold, warm-accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2a3c50` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f08b39` | Primary action and highlights |
| Second accent | `#2a3c50` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#94a3b8` · `#cbd5e1` · `#f1f5f9` · `#475569` · `#f8fafc` · `#f08b39` · `#e2e8f0` · `#0a1c2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-hover transition-all shadow-lg shadow-accent/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Services (`services`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #2a3c50;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f08b39;
  --color-accent-2: #2a3c50;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2a3c50',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f08b39',
    accent2: '#2a3c50',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of each headline in orange (#f08b39)
- **Do:** Use orange for the primary button and one highlight per section
- **Do:** Keep the hero on deep navy with white headline text
- **Don't:** Don't use light backgrounds for the hero
- **Don't:** Don't add a second warm accent
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
