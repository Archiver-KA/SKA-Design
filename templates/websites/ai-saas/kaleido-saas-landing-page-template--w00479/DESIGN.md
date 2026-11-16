# Design system — Kaleido SaaS Landing Page Template

`SN-W00479` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A customisable SaaS template shown as a dark app-like page, with a left settings panel that picks appearance, design style, accent and structure. The landing hero is near-black with a large white bold headline and two buttons, a white primary and a dark outlined secondary. The indigo swatch (#6366f1) is the default accent. Inter keeps the page neutral.

**Mood:** customisable, neutral, dark, app-like, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#000000` · `#a3a3a3` · `#737373` · `#f43f5e` · `#171717` · `#10b981` · `#f59e0b` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h3 14px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-inner`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="w-full py-2.5 rounded bg-white text-black font-medium text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the default indigo (#6366f1) only as the accent swatch and highlight
- **Do:** Keep the hero headline white and bold on near-black
- **Do:** Set the primary button white and the secondary outlined
- **Don't:** Don't present the settings panel as part of the public page
- **Don't:** Don't add colour to the hero beyond the accent
- **Don't:** Don't round the sidebar cards beyond the small radius shown

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
