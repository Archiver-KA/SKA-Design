# Design system — Expose The Record Social Justice Template

`SN-W03468` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A documentary-style page on near-black (#07090f) with white serif headlines set in Neuton, and the closing phrase of the hero set in deep red (#b91c1c). Red is the only colour, used for the primary button, the section tag and the emphasised words. A video panel with a dark frame and a large play button sits beside the copy, and small uppercase kickers give a sober, reportorial tone.

**Mood:** documentary, sober, urgent, dark, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#07090f` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |
| Second accent | `#172554` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b91c1c` · `#dc2626` · `#07090f` · `#7f1d1d` · `#000000` · `#d1d5db` · `#ef4444` · `#f87171` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Neuton
- **Body:** Neuton
- **Loaded families:** Cinzel Decorative, Neuton
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 12px
- **Weights in use:** semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-red-900/40`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-red-700 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-sm transition-colors pulse-red">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #07090f;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #b91c1c;
  --color-accent-2: #172554;
  --font-display: "Neuton", sans-serif;
  --font-body: "Neuton", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#07090f',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
    accent: '#b91c1c',
    accent2: '#172554',
  },
  fontFamily: { display: ['Neuton'], sans: ['Neuton'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of each headline in deep red (#b91c1c)
- **Do:** Use the red for the primary button and the play button only
- **Do:** Frame video panels in dark boxes with small uppercase captions
- **Don't:** Don't use red as a background fill for whole sections
- **Don't:** Don't set long body copy in pure white; use the soft grey
- **Don't:** Don't add playful icons or rounded illustrations

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
