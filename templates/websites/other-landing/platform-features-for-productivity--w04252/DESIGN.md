# Design system — Platform Features for Productivity

`SN-W04252` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark productivity features section on near-black (#030712), with a soft blue-indigo glow behind the centred headline. Three glass cards carry the features, each with a small coloured tag, and the middle card's green button (#4ade80) is the most prominent control. Body copy is pale grey on the dark cards, with bullet checks in green and small icon chips in the card headers.

**Mood:** dark, glassy, tidy, feature-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#a5b4fc` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#1f2937` · `#111827` · `#4ade80` · `#030712` · `#a5b4fc` · `#6366f1` · `#a855f7` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="w-full py-2.5 bg-green-700/20 text-green-300 font-medium rounded-lg transition-all flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #4ade80;
  --color-accent-2: #a5b4fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#4ade80',
    accent2: '#a5b4fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the cards as dark glass panels with a small coloured tag each
- **Do:** Use green (#4ade80) for the one primary button in the middle card
- **Do:** Set body copy in pale grey on the cards, with green check bullets
- **Don't:** Don't use green for more than one button per section
- **Don't:** Don't put light backgrounds behind the cards
- **Don't:** Don't drop the coloured tags; they label each feature's status

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
