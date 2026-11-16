# Design system — Web3 Account Abstraction Landing Page Template

`SN-W01067` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black developer-facing page with a large white sans headline in three lines, where the middle line is an arrow chain and the final word UserOps. is set in grey. A small indigo-tinted pill announces the new standard, and the primary button is white with a dark secondary beside it. Below, boxes and a code snippet show the product, so it reads as technical documentation.

**Mood:** technical, precise, dark, developer-facing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0c0c` | Page ground |
| Surface | `#0c0c0c` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#0c0c0c` · `#6366f1` · `#d4d4d4` · `#525252` · `#818cf8` · `#ef4444` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Comparison (`comparison`)
7. Code / terminal (`code-terminal`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0c0c;
  --color-surface: #0c0c0c;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #ef4444;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0c0c',
    surface: '#0c0c0c',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans with the final word in grey
- **Do:** Use the indigo (#818cf8) only for the small announcement pill and its dot
- **Do:** Show product logic as dark boxes with thin borders, not illustrations
- **Don't:** Don't use the indigo (#6366f1) as a page ground; it is a tint for small labels
- **Don't:** Don't set the primary button in indigo; it is white
- **Don't:** Don't add bright code colours beyond the indigo; the snippet stays greyscale

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
