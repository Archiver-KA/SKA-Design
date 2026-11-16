# Design system — Basket Investment Platform Landing Page Template

`SN-W00884` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark dashboard built in layers: a near-black sidebar and page with dark grey cards holding large white figures and small grey labels. Green (#22c55e) marks positive changes, and the performance line is set in white against a fine grid. Pill toggles and a white primary button give the controls a crisp, product-like finish. The look is calm and data-first.

**Mood:** dark, data-first, calm, crisp, green-positive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#737373` · `#22c55e` · `#171717` · `#404040` · `#525252` · `#a3a3a3` · `#000000` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h3 24px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`, `shadow-sm`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-neutral-900/50 rounded-md transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#22c55e) only for positive changes and percentage deltas
- **Do:** Build cards in dark grey (#171717) with thin borders (#262626)
- **Do:** Set key figures in large white type with small grey labels above
- **Don't:** Don't use green for negative values or neutral labels
- **Don't:** Don't add a bright chart fill; keep the line white on the grey panel
- **Don't:** Don't use the mid grey (#404040) as the page ground; the ground is near-black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
