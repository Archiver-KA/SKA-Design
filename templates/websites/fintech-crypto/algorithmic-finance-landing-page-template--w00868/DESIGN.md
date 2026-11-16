# Design system — Algorithmic Finance Landing Page Template

`SN-W00868` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, technical trading page: a near-black ground (#18181b) with a tall white headline over a grey second line, and a single emerald (#10b981) button as the one colour. Small spaced capital labels and a live-status dot give it an instrument-panel feel. Panels carry hairline grey borders and slider-based parameter cards, so the look is precise and quiet, with colour used only for action and status.

**Mood:** dark, precise, instrument-like, quiet, emerald-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#27272a` · `#18181b` · `#10b981` · `#a1a1aa` · `#34d399` · `#3f3f46` · `#09090b` · `#0c0c0e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 18px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.05)]`, `shadow-[0_0_8px_rgba(16,185,129,0.6)]`, `shadow-[0_0_30px_rgba(16,185,129,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="text-sm px-5 py-2 bg-white text-zinc-950 font-normal hover:bg-zinc-200 transition-colors rounded-full flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Newsletter signup (`newsletter`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #27272a;
  --color-accent: #10b981;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#27272a',
    accent: '#10b981',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use emerald (#10b981) only for the primary button and the live-status dot
- **Do:** Build panels with hairline grey borders instead of shadows
- **Do:** Set small status labels in spaced capitals beside the data panels
- **Don't:** Don't use the emerald as a background field; it is an accent only
- **Don't:** Don't add drop shadows to the parameter panels
- **Don't:** Don't use more than one bright colour inside a panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
