# Design system — Orbital Global Intelligence Landing Page Template

`SN-W00615` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black infrastructure page with a large white headline whose second line fades into grey, and a solid red pill as the primary action beside a dark outlined button. A soft red bloom sits behind the hero, and small status cards with green dots show live operational state. Red is the one heat colour and green is reserved for healthy status.

**Mood:** direct, monitored, dark, bold, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#171717` · `#a3a3a3` · `#262626` · `#0a0a0a` · `#dc2626` · `#737373` · `#7f1d1d` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h3 14px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)]`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="px-8 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #171717;
  --color-accent: #dc2626;
  --color-accent-2: #4ade80;
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
    surface: '#262626',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#171717',
    accent: '#dc2626',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black (#0a0a0a) with white headlines (#ffffff) and a grey second line.
- **Do:** Use the red (#dc2626) for the primary button and the soft bloom behind the hero only.
- **Do:** Use green (#4ade80) only for status dots and operational labels.
- **Don't:** Don't use the red as a page background; the ground is black.
- **Don't:** Don't set body copy in red or green; supporting text is grey.
- **Don't:** Don't use the light red (#ef4444) for large areas; it is a button tint only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
