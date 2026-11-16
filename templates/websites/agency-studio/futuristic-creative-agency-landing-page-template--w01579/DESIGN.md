# Design system — Futuristic Creative Agency Landing Page Template

`SN-W01579` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground with a centred wordmark, 'BIZNESS' in a silver gradient above a widely tracked grey 'WAREHOUSE'. Cyan (#22d3ee) marks the logo, the booking button and the phrase 'Deep strategy', while yellow (#facc15) highlights 'high design' in the intro copy. Two inline accents in body text make the palette read as labelled signals rather than one brand colour.

**Mood:** sleek, layered, strategic, futuristic, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#22d3ee` · `#a1a1aa` · `#52525b` · `#a3e635` · `#71717a` · `#facc15` · `#1e3a8a` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · body 16px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(34,211,238,0.3)]`, `shadow-[0_0_10px_rgba(34,211,238,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-cyan-400 text-black px-6 py-2.5 text-sm font-semibold rounded-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #52525b;
  --color-border: #27272a;
  --color-accent: #22d3ee;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#52525b',
    line: '#27272a',
    accent: '#22d3ee',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#22d3ee) for the logo, the primary button and one highlighted phrase
- **Do:** Set the wordmark in a heavy silver gradient, with the second line widely tracked grey
- **Do:** Highlight one short phrase in body copy in yellow (#facc15) or cyan, not both at once
- **Don't:** Don't use cyan for backgrounds or large fills
- **Don't:** Don't set body copy in pure white; keep it in grey
- **Don't:** Don't add a third highlight colour to the intro text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
