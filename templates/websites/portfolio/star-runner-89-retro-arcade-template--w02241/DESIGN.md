# Design system — Star Runner '89 Retro Arcade Template

`SN-W02241` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A retro arcade game screen framed as a dark cabinet: a near-black navy ground (#090b10), phosphor green (#b8ff72) for the title and HUD values, and a faint green grid floor that gives depth. The type is a monospace face in uppercase with wide letterspacing, so the game HUD reads as the interface. The one recognisable thing is the glowing CRT screen inside a rounded device frame.

**Mood:** retro, dark, pixel, technical, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#090b10` | Page ground |
| Surface | `#1d2a1d` | Cards, panels, raised areas |
| Text | `#d8f6c9` | Headings and primary copy |
| Muted text | `#73816e` | Secondary copy, captions |
| Border | `#71856c` | Hairlines, dividers, outlines |
| Accent | `#b8ff72` | Primary action and highlights |
| Second accent | `#d34b3e` | Supporting highlights |

Palette by frequency of use: `#b8ff72` · `#e4c277` · `#d8f6c9` · `#73816e` · `#84957b` · `#000000` · `#d34b3e` · `#071019` · `#4b5d49` · `#172018`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px · body 12px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-wider`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_0_0.6rem_#b8ff72]`, `shadow-[inset_0_-0.25rem_0_#0b100b]`, `shadow-none`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-5`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #090b10;
  --color-surface: #1d2a1d;
  --color-text: #d8f6c9;
  --color-muted: #73816e;
  --color-border: #71856c;
  --color-accent: #b8ff72;
  --color-accent-2: #d34b3e;
  --font-display: "a monospace face", sans-serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#090b10',
    surface: '#1d2a1d',
    ink: '#d8f6c9',
    muted: '#73816e',
    line: '#71856c',
    accent: '#b8ff72',
    accent2: '#d34b3e',
  },
  fontFamily: { display: ['a monospace face'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the title and HUD labels in the monospace face, uppercase, with wide letterspacing.
- **Do:** Use the phosphor green (#b8ff72) for the primary action and the score values only.
- **Do:** Keep the game inside a rounded frame with the grid floor behind it.
- **Don't:** Don't set body copy in the pixel monospace; use the system sans-serif.
- **Don't:** Don't use the gold (#e4c277) as a second accent; red (#d34b3e) is reserved for the ship lives.
- **Don't:** Don't add light surfaces; the panels stay near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
