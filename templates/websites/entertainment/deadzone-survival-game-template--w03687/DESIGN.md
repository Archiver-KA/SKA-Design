# Design system — DeadZone Survival Game Template

`SN-W03687` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark monospace interface built for a game screen, with a green (#34d399) second word in the title and a green-outlined start button at the centre. Instructions sit in small grey lines beneath the title, and a status bar along the bottom carries the version and state. Green on near-black makes every element read as part of one terminal.

**Mood:** retro, tactical, focused, terminal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#060807` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#34d399` · `#10b981` · `#71717a` · `#52525b` · `#060807` · `#f4f4f5` · `#000000` · `#f87171` · `#d4d4d8` · `#fcd34d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** ui-monospace
- **Body:** ui-monospace
- **Scale (largest breakpoint):** h1 18px · h2 48px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_60px_-15px_rgba(16,185,129,0.25)]`, `shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]`
- **Content width:** `max-w-[960px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-8`

**Primary button**

```html
<a class="mt-7 inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-emerald-500 text-emerald-950 text-sm font-semibold tracking-widest hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #060807;
  --color-surface: #000000;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #f87171;
  --font-display: "ui-monospace", sans-serif;
  --font-body: "ui-monospace", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#060807',
    surface: '#000000',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#f87171',
  },
  fontFamily: { display: ['ui-monospace'], sans: ['ui-monospace'] },
} }
```

## Do and don't

- **Do:** Use green (#34d399) for the title's second word, the start button and the status text
- **Do:** Set all text in the monospace face, with labels in small grey
- **Do:** Frame the play area with a thin border on the near-black ground
- **Don't:** Don't add other bright colours to the interface
- **Don't:** Don't round the corners of the frame
- **Don't:** Don't use proportional sans-serif type

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
