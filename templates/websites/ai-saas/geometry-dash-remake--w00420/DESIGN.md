# Design system — Geometry Dash Remake

`SN-W00420` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A game start screen on a deep violet-to-black ground, with a centred title, a play control, an avatar selector and two small bordered tiles for best score and attempts. Cyan (#67e8f9) marks the best score and the numeric readouts, and the control hints are set in small spaced grey capitals along the foot.

**Mood:** arcade, neon, dark, playful, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05030f` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#67e8f9` | Primary action and highlights |
| Second accent | `#fcd34d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#67e8f9` · `#fcd34d` · `#6ee7b7` · `#34d399` · `#06b6d4` · `#d946ef` · `#22d3ee` · `#05030f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Pusab
- **Body:** Pusab
- **Loaded families:** Pusab
- **Scale (largest breakpoint):** h2 30px
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,0,0,0.5)]`, `shadow-2xl`, `shadow-[0_0_30px_rgba(52,211,153,0.3)]`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/20 backdrop-blur-sm border-2 border-white/10 hover:border-white/40 hover:bg-white/10 transition hover:scale-110 active:scale-95 flex items-center justify-center p-3 group shadow-[0_0_20px_rgba(0,0,0,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Menu list (`menu-list`)
2. Call to action (`cta`)
3. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #05030f;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #67e8f9;
  --color-accent-2: #fcd34d;
  --font-display: "Pusab", sans-serif;
  --font-body: "Pusab", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05030f',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#67e8f9',
    accent2: '#fcd34d',
  },
  fontFamily: { display: ['Pusab'], sans: ['Pusab'] },
} }
```

## Do and don't

- **Do:** Set numeric readouts in cyan (#67e8f9) inside small bordered tiles
- **Do:** Keep the control hints small, spaced, uppercase and muted at the foot of the screen
- **Do:** Centre the title and play control on the violet ground
- **Don't:** Don't add a second accent beside the cyan readouts
- **Don't:** Don't ship the start screen with broken image references
- **Don't:** Don't set the hints in bright colours; they stay quiet

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
