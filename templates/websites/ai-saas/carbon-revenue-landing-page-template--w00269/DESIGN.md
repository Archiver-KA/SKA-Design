# Design system — Carbon Revenue Landing Page Template

`SN-W00269` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy operations-tech hero, visually the same as its sibling template SN-W00268: a deep navy ground (#0f172a) with a heavy sans wordmark, CARBON, in white and the final N in mint (#34d399). Mint is kept to that letter, the live status pill and chart highlights, and the grey subline stays quiet. A framed dark dashboard panel with a thin border and small monospaced labels sits below the hero.

**Mood:** dark, technical, live, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#10b981` · `#64748b` · `#34d399` · `#f97316` · `#0b1120` · `#0f172a` · `#020617` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. About (`about`)
7. 3D / canvas scene (`3d-canvas`)
8. Code / terminal (`code-terminal`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #0f172a and the wordmark in white heavy sans
- **Do:** Use mint (#34d399) only for the highlighted letter, the live pill and chart highlights
- **Do:** Frame the dashboard panel with a thin border and small monospaced labels
- **Don't:** Don't use the mint for large fills or body copy
- **Don't:** Don't add the orange (#f97316) to this hero; it does not appear
- **Don't:** Don't set the subline in full white; use the muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
