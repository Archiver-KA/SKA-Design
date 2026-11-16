# Design system — AI Powered SEO and AEO Intelligence

`SN-W01420` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero with a large sans headline in white over a grey second line, a small rounded eyebrow pill with a live dot, and two buttons: a solid white primary and a dark outlined secondary. On the right, a 3D scene area sits beside the copy. The look rests on the type and one blue logo orb.

**Mood:** stark, minimal, dark, unfinished-in-banner, type-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#030712` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fafafa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fafafa` · `#93c5fd` · `#22d3ee` · `#c084fc` · `#60a5fa` · `#000000` · `#3b82f6` · `#fdba74` · `#fde047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, SF Pro Display, ./index.html
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Unicorn Studio (WebGL scenes), Spline 3D, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #030712;
  --color-text: #ffffff;
  --color-muted: #fafafa;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #c084fc;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#030712',
    ink: '#ffffff',
    muted: '#fafafa',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the two-line headline in white, with the second line in grey.
- **Do:** Use a solid white primary button beside a dark outlined secondary.
- **Do:** Give the 3D scene area a plain panel or fallback image.
- **Don't:** Don't show an error card in the 3D scene area.
- **Don't:** Don't add a second accent beside the blue logo orb.
- **Don't:** Don't add bright colour to the headline; the type is white and grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
