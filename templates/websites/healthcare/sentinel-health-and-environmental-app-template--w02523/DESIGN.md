# Design system — Sentinel Health & Environmental App Template

`SN-W02523` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, quiet instrument-panel style for a mobile monitoring app, shown as a single phone-width screen. The near-black ground (#0a0a0f) and slightly lighter cards carry cream text (#ede7d2), and a lavender (#b8a4ff) trace and marker supply the only colour, used for the data. The wordmark is a spaced serif capital, so the interface reads as a restrained instrument rather than a consumer tracker.

**Mood:** quiet, nocturnal, instrumental, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Surface | `#12121a` | Cards, panels, raised areas |
| Text | `#ede7d2` | Headings and primary copy |
| Muted text | `#d4c9a6` | Secondary copy, captions |
| Accent | `#b8a4ff` | Primary action and highlights |
| Second accent | `#b8a4ff` | Supporting highlights |

Palette by frequency of use: `#ede7d2` · `#b8a4ff` · `#0a0a0f` · `#d4c9a6` · `#12121a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 18px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-wide`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Common gaps:** `gap-1`, `gap-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. Footer (`footer`)
4. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-surface: #12121a;
  --color-text: #ede7d2;
  --color-muted: #d4c9a6;
  --color-accent: #b8a4ff;
  --color-accent-2: #b8a4ff;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    surface: '#12121a',
    ink: '#ede7d2',
    muted: '#d4c9a6',
    accent: '#b8a4ff',
    accent2: '#b8a4ff',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Use lavender (#b8a4ff) only for data traces and event markers
- **Do:** Set the wordmark and section labels in the spaced serif capitals
- **Do:** Keep the screen on the near-black ground (#0a0a0f) with cards one step lighter (#12121a)
- **Don't:** Don't add bright greens or reds; status is shown with text labels
- **Don't:** Don't use filled coloured buttons; actions are thin outlined controls
- **Don't:** Don't widen the layout beyond a phone column

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
