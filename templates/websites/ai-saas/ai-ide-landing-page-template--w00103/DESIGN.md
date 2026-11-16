# Design system — AI IDE Landing Page Template

`SN-W00103` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Cherry IDE is a dark developer-tool page on a near-black ground (#0a0a0a), with a large white sans headline whose second line fades to grey. The primary button is solid red (#ef4444), the only saturated colour above the fold, and below it a code editor mock-up shows syntax colours. The page reads as a product-first developer tool rather than a marketing site.

**Mood:** dark, developer-focused, sharp, product-first, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#737373` · `#a3a3a3` · `#d4d4d4` · `#0a0a0a` · `#525252` · `#0f0f0f` · `#050505` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(220,38,38,0.1)]`, `shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 hover:border-red-500/50 transition-all duration-200 shadow-[0_0_15px_rgba(220,38,38,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Comparison (`comparison`)
7. Code / terminal (`code-terminal`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans, with the second line in grey gradient
- **Do:** Use the red (#ef4444) for the primary button and the active file tab only
- **Do:** Show the editor as a code window with a file tree, using the syntax colours
- **Don't:** Don't use the dark red (#7f1d1d) as a page background; the ground is near-black
- **Don't:** Don't add a second saturated colour beside the red
- **Don't:** Don't use bright fills in the code window; it stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
