# Design system — Minimalist Chess Engine Template

`SN-W00538` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet dark interface for a chess game. A left control column uses small uppercase labels with wide tracking, a white button marks the single primary action (New Game), and a large dark board area sits on the right. The chrome stays neutral grey, and colour comes only from the board theme swatches and the piece set, so the user's choice of theme is what adds colour.

**Mood:** quiet, minimal, dark, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f472b6` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#ffffff` · `#3f3f46` · `#18181b` · `#f4f4f5` · `#d4d4d8` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** medium, semibold, extrabold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow`, `shadow-inner`
- **Content width:** `max-w-6xl`, `max-w-[640px]`
- **Common gaps:** `gap-0.5`, `gap-1.5`, `gap-3`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 w-full py-2 px-4 bg-zinc-100 text-zinc-950 hover:bg-white rounded border border-transparent transition-colors text-sm font-medium">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f472b6;
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
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f472b6',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the control panel in neutral grey; leave colour to the board and pieces
- **Do:** Set section labels in small uppercase with wide letter spacing
- **Do:** Use a white button for the one primary action, New Game
- **Don't:** Don't add an accent colour to the control panel
- **Don't:** Don't put decorative backgrounds behind the board
- **Don't:** Don't enlarge the board theme swatches beyond their current small size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
