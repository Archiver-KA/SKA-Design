# Design system — Web3 Infrastructure Landing Page Template

`SN-W00826` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero on a near-black ground with a large Inter headline whose second line is highlighted in a pale blue gradient. Beneath it sit a small status badge, one line of grey copy and two buttons, one outlined for the wallet action. A dark code card on the right shows a simple contract. The highlight is the only colour, so the look is restrained.

**Mood:** dark, developer-oriented, restrained, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#a78bfa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#262626` · `#171717` · `#8b5cf6` · `#737373` · `#525252` · `#a78bfa` · `#a3a3a3` · `#e5e5e5` · `#d4d4d4` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 36px · h3 20px · body 14px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-[200px]`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="btn-beam group relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-200 shadow-lg hover:bg-neutral-800 transition-all overflow-hidden w-full max-w-[180px] hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #d4d4d4;
  --color-border: #262626;
  --color-accent: #a78bfa;
  --color-accent-2: #22c55e;
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
    ink: '#f5f5f5',
    muted: '#d4d4d4',
    line: '#262626',
    accent: '#a78bfa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline highlight on a single phrase in the second line
- **Do:** Use an outlined pill for wallet or connect actions and a solid pill for the main action
- **Do:** Frame code samples in a dark card with a thin border and a small title row
- **Don't:** Don't add a second highlight phrase on the same screen
- **Don't:** Don't switch the hero to a light background
- **Don't:** Don't add decorative blobs behind the code card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
