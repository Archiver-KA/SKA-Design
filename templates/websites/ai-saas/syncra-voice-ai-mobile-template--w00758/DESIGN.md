# Design system — Syncra Voice AI Mobile Template

`SN-W00758` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A phone-led hero on near-black (#0a0a0a) with three dark mobile screens shown side by side, the left one carrying a white Inter headline and a grey subtext. Cyan (#22d3ee) is the accent and shows as thin glowing edges on the phone frames and small highlights inside the app. The screens are the design, so the type around them stays small and plain.

**Mood:** futuristic, dark, glowing, app-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#60a5fa` · `#38bdf8` · `#171717` · `#3b82f6` · `#818cf8` · `#262626` · `#737373` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 38px · h3 14px · body 12px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]`, `shadow-lg`, `shadow-cyan-400/20`
- **Content width:** `max-w-[1400px]`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-1`

**Primary button**

```html
<a class="p-3 rounded-xl bg-gradient-to-b from-cyan-400/10 to-cyan-400/5 border border-cyan-400/20 flex flex-col items-center gap-1.5 hover:border-cyan-400/30 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #818cf8;
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
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show the product as dark phone mockups with thin cyan (#22d3ee) edge glows
- **Do:** Set the screen copy in Inter, with white titles and grey (#737373) subtext
- **Do:** Keep cards and quick-action tiles dark (#171717) with rounded corners
- **Don't:** Don't use light screens inside the mockups
- **Don't:** Don't add a second glow colour; the cyan is the only one
- **Don't:** Don't place body text over the glowing frame edges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
