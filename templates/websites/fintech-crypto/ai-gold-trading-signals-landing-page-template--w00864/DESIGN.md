# Design system — AI Gold Trading Signals Landing Page Template

`SN-W00864` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, quiet hero with a soft cyan (#06b6d4) glow behind the top-left corner and a large white sans headline. The centrepiece is a 3D field of grey-white points with small floating data tags, which makes the page feel like a live instrument. Cyan is the single accent, used for the status badge and the glow. The ground is near-black.

**Mood:** dark, data-driven, quiet, atmospheric, cyan-glow

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#34d399` · `#94a3b8` · `#eab308` · `#fb7185` · `#06b6d4` · `#e2e8f0` · `#22d3ee` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 20px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-cyan-500/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Stats band (`stats`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #eab308;
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
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#06b6d4) for the status badge and the background glow only
- **Do:** Place the 3D point-field visual centred below the headline
- **Do:** Keep the headline in white at one large size
- **Don't:** Don't use green or gold accents on the hero; cyan is the only accent
- **Don't:** Don't add photography or illustration beside the point field
- **Don't:** Don't crowd the data tags; keep them small and sparse

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
